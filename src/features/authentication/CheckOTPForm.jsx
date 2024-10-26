import { useState } from "react";
import OtpInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function CheckOTPForm({ phoneNumber, onBack }) {
  const [otp, setOtp] = useState("");
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

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="h-5 w-5 text-secondary-500" />
      </button>
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
