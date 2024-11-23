import { HiCollection, HiHome, HiUser } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { PiReadCvLogo } from "react-icons/pi";

export default function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to={"dashboard"}>
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to={"users"}>
          <HiUser />
          <span>کاربران</span>
        </CustomNavLink>
        <CustomNavLink to={"proposals"}>
          <PiReadCvLogo />
          <span>درخواست ها</span>
        </CustomNavLink>
        <CustomNavLink to={"projects"}>
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}
