import { HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";
import { PiReadCvLogo } from "react-icons/pi";

export default function Stats({ projects, proposals, users }) {
  return (
    <div className="stats__layout">
      <Stat
        icon={<HiUser className="w-20 h-20" />}
        title={"کاربران"}
        value={users.length}
        color={"primary"}
      />
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title={"پروژه ها"}
        value={projects.length}
        color={"purple"}
      />
      <Stat
        icon={<PiReadCvLogo className="w-20 h-20" />}
        title={"درخواست ها"}
        value={proposals.length}
        color={"yellow"}
      />
    </div>
  );
}
