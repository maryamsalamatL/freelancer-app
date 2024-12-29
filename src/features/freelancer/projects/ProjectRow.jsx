import Table from "../../../ui/Table";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumber";
import truncateText from "../../../utils/truncateText";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateNewProposalForm from "../../proposals/CreateNewProposalForm";
import toast from "react-hot-toast";

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
  const { title, budget, deadline, status, _id } = project;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (status === "CLOSED") {
      toast.error("نمی توانید برای پروژه های بسته درخواست بفرستید.");
    } else {
      setOpen(true);
    }
  };

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
        <button onClick={handleClick}>
          <MdAssignmentAdd className="icon text-primary-900" />
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${title}`}
        >
          <CreateNewProposalForm
            onClose={() => setOpen(false)}
            projectId={_id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}
