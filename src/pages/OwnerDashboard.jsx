import { Outlet } from "react-router-dom";

export default function OwnerDashboard() {
  return (
    <div>
      Owner Dashboard
      <div>
        <Outlet />
      </div>
    </div>
  );
}
