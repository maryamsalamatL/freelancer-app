import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  let isRejected = false;
  if (user && Number(user.status === 0)) isRejected = true;

  let isAuthorized = false;
  if (pathname.includes(user?.role.toLowerCase())) isAuthorized = true;

  return { isAuthenticated, isAuthorized, isLoading, isVerified, isRejected };
}
