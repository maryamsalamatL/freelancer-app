import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="py-8 px-4 row-start-1 row-span-2 col-start-1 col-span-1">
      <ul className="space-y-2">
        <li>
          <CustomNavLink to="dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

function CustomNavLink({ children, to }) {
  const navClass =
    "flex items-center gap-x-2 p-2 rounded-xl hover:bg-primary-100/50 hover:text-primary-900 transition-all duration-300";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navClass} bg-primary-100/50 text-primary-900`
          : `${navClass} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
