import { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

export default function ProposalRow({ proposal, i }) {
  const { user, description, duration, price, status, _id } = proposal;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{i + 1}</td>
      <td>{user.name}</td>
      <td>{truncateText(description, 20)}</td>
      <td>{duration} روز</td>
      <td>{price}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
        <Modal
          title="تغییر وضعیت درخواست"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={_id}
            onClose={() => setOpen(false)}
            status={status}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}
