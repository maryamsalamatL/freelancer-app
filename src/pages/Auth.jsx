import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";

export default function Auth() {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-screen-sm">
        <SendOTPForm />
        <CheckOTPForm />
      </div>
    </div>
  );
}
