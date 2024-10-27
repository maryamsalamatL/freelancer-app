import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const RESEND_OTP_TIME = 90;

export default function CheckOTPForm({ phoneNumber, onBack, onResendOtp }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_OTP_TIME);
  const { isPending, mutateAsync } = useMutation({ mutationFn: checkOtp });
  const navigate = useNavigate();

  const handleCheckOtp = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({
        phoneNumber,
        otp,
      });
      toast.success(message);

      if (user.isActive) {
        // TODO: push to panel based on Role
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);

    return () => timer && clearTimeout(timer);
  }, [time]);

  const min = String(parseInt(time / 60));
  const sec = String(time % 60);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="h-5 w-5 text-secondary-500" />
      </button>
      <div className="mb-4 text-secondary-500">
        {time ? (
          <p>
            {sec.padStart(2, 0)} : {min.padStart(2, 0)} تا ارسال مجدد کد
          </p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>
        )}
      </div>
      <form className="space-y-6" onSubmit={handleCheckOtp}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props, index) => (
            <input type="number" autoFocus={index === 0} {...props} />
          )}
          containerStyle="flex flex-row-reverse justify-center"
          inputStyle="block !w-8 h-10 border border-primary-400 rounded-lg mx-1 sm:mx-2 text-secondary-800 focus:shadow focus:shadow-primary-500"
        />
        <button className="btn btn--primary w-full" type="submit">
          تایید
        </button>
      </form>
    </div>
  );
}
