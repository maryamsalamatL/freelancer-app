import { NavLink } from "react-router-dom";

export default function CustomNavLink({ children, to }) {
  const navClass =
    "flex items-center gap-x-2 p-2 rounded-xl hover:bg-primary-100/50 hover:text-primary-900 transition-all duration-300";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navClass} bg-primary-100/80 text-primary-900`
            : `${navClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
