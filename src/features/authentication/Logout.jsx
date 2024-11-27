import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

export default function Logout() {
  const { isPending, logout } = useLogout();

  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <HiArrowRightOnRectangle className="icon text-secondary-500 hover:text-error" />
    </button>
  );
}
