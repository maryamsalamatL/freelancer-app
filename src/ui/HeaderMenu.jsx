import { HiOutlineUser, HiSun } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

export default function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-4">
      <li>
        <Link to={"dashboard"}>
          <HiOutlineUser className="icon text-primary-900" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}
