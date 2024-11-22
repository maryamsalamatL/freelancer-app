import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;
  if (pathname.includes(user?.role.toLowerCase())) isAuthorized = true;

  return { isAuthenticated, isAuthorized, isLoading };
}
