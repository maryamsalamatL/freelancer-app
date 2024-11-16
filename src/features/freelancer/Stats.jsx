import { HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";
import { FaCheckCircle } from "react-icons/fa";

export default function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title={"درخواست ها"}
        value={numOfProposals}
        color={"primary"}
      />
      <Stat
        icon={<FaCheckCircle className="w-20 h-20" />}
        title={"درخواست های تایید شده"}
        value={acceptedProposals.length}
        color={"yellow"}
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title={"کیف پول"}
        value={toPersianNumbersWithComma(balance)}
        color={"green"}
      />
    </div>
  );
}
