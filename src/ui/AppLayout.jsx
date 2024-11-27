import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout({ children }) {
  return (
    <div className="md:grid md:grid-cols-[15rem_1fr] md:grid-rows-[auto_1fr]">
      <Header />
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto min-h-screen">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
