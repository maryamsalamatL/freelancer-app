import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

export default function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-4">
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li>
        <Link to={"/"}>
          <HiHome className="icon text-primary-900" />
        </Link>
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}
