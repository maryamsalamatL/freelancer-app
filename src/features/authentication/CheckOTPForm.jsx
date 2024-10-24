import { useState } from "react";
import OtpInput from "react-otp-input";

export default function CheckOTPForm() {
  const [otp, setOtp] = useState("");

  return (
    <div>
      <form className="space-y-6">
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse justify-center"
          inputStyle="block !w-8 h-10 border border-primary-400 rounded-lg mx-1 sm:mx-2 text-secondary-800 focus:shadow focus:shadow-primary-500"
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}
