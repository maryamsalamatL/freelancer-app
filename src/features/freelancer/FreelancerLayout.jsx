import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { PiReadCvLogo } from "react-icons/pi";

export default function FreeLancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to={"dashboard"}>
          <HiHome />
          <span>خانه</span>
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
