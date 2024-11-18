import Table from "../../../ui/Table";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumber";
import truncateText from "../../../utils/truncateText";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { MdAssignmentAdd } from "react-icons/md";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

export default function ProjectRow({ project, i }) {
  const { title, budget, deadline, status } = project;
  return (
    <Table.Row>
      <td>{i + 1}</td>
      <td>{truncateText(title, 20)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <button>
          <MdAssignmentAdd className="icon text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}
