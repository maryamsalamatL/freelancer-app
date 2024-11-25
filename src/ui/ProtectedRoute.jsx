import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthorized, isLoading, isVerified, isRejected } =
    useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (isRejected && !isLoading) {
      toast("پروفایل شما توسط ادمین رد شده.");
      return navigate("/");
    }
    if (!isVerified && !isLoading) {
      toast("پروفایل شما در انتظار تایید است");
      return navigate("/");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [
    isAuthenticated,
    isAuthorized,
    isLoading,
    navigate,
    isVerified,
    isRejected,
  ]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-secondary-100">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}
