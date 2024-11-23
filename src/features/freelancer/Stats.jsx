import {
  HiCheckCircle,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";

export default function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="stats__layout gap-4">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title={"درخواست ها"}
        value={numOfProposals}
        color={"primary"}
      />
      <Stat
        icon={<HiCheckCircle className="w-20 h-20" />}
        title={"درخواست های تایید شده"}
        value={acceptedProposals.length}
        color={"green"}
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title={"کیف پول"}
        value={toPersianNumbersWithComma(balance)}
        color={"purple"}
      />
    </div>
  );
}
