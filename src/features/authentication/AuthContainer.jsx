import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

export default function AuthContainer() {
  const [step, setStep] = useState(1);
  const { user } = useUser();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const {
    mutateAsync,
    isPending: isSendingOtp,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user]);

  const handleSendOtp = async ({ phoneNumber }) => {
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
            onSendOtp={handleSubmit(handleSendOtp)}
            isSendingOtp={isSendingOtp}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={handleSubmit(handleSendOtp)}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-screen-sm">{renderStep()}</div>;
}
