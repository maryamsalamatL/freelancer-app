import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

export default function SendOTPForm({
  onSendOtp,
  isSendingOtp,
  phoneNumber,
  onChange,
}) {
  return (
    <div>
      <form className="space-y-6" onSubmit={onSendOtp}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
