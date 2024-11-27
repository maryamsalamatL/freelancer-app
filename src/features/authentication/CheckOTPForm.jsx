import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { BiSolidEditAlt } from "react-icons/bi";
import Loading from "../../ui/Loading";

const RESEND_OTP_TIME = 90;

export default function CheckOTPForm({
  phoneNumber,
  onBack,
  onResendOtp,
  otpResponse,
}) {
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

      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        toast("پروفایل شما در انتظار تایید است.");
        return navigate("/");
      }
      if (user.role) return navigate(`/${user.role.toLowerCase()}`);
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
      {otpResponse && (
        <p className="flex items-center gap-x-2 mb-4">
          <span>{otpResponse?.message}</span>
          <button onClick={onBack}>
            <BiSolidEditAlt className="w-5 h-5 text-primary-900" />
          </button>
        </p>
      )}
      <form className="space-y-6" onSubmit={handleCheckOtp}>
        <p className="font-bold text-secondary-800 md:text-base">
          کد تایید را وارد کنید
        </p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="text-secondary-800">-</span>}
          renderInput={(props, index) => (
            <input type="number" autoFocus={index === 0} {...props} />
          )}
          containerStyle="flex flex-row-reverse justify-center"
          inputStyle="block !w-8 h-10 border border-primary-400 rounded-lg mx-1 sm:mx-2 text-secondary-800 bg-secondary-0 focus:shadow focus:shadow-primary-500"
        />
        {isPending ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}
