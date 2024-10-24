import { useState } from "react";
import TextField from "../../ui/TextField";

export default function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <form className="space-y-6">
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}
