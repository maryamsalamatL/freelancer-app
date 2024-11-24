import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

export default function UserRow({ user, i }) {
  const { name, email, phoneNumber, role, status, _id } = user;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{i + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={"تغییر وضعیت کاربر"}
        >
          <ChangeUserStatus
            userId={_id}
            onClose={() => setOpen(false)}
            status={status}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}
