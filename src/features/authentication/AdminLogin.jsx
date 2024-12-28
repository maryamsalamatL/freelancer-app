/**
 *  This is a temporary feature and added for testing the app by resume viewers,
 *  so they don't have to wait account approval from me.
 */

import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import useLogout from "./useLogout";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const { isPending, logout } = useLogout();
  const { mutateAsync } = useMutation({ mutationFn: checkOtp });
  const navigate = useNavigate();

  const handleClick = async () => {
    logout();
    if (!isPending) {
      const { user } = await mutateAsync({
        phoneNumber: import.meta.env.VITE_ADMIN_PHONE_NUMBER,
        otp: import.meta.env.VITE_ADMIN_OTP,
      });

      if (user) navigate("/admin");
    }
  };

  return (
    <button className="btn btn--primary my-4" onClick={handleClick}>
      ورود به عنوان ادمین
    </button>
  );
}
