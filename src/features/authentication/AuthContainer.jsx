import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";

export default function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { mutateAsync, isPending: isSendingOtp } = useMutation({
    mutationFn: getOtp,
  });

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            onSendOtp={handleSendOtp}
            isSendingOtp={isSendingOtp}
            phoneNumber={phoneNumber}
            setPhoneNumber={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={handleSendOtp}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-screen-sm">{renderStep()}</div>;
}
