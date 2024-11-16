import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

export default function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title={"پروژه ها"}
        value={numOfProjects}
        color={"primary"}
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title={"پروژه های واگذار شده"}
        value={numOfAcceptedProjects}
        color={"green"}
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title={"درخواست ها"}
        value={numOfProposals}
        color={"yellow"}
      />
    </div>
  );
}
