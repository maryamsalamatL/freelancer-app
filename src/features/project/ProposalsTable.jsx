import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

export default function ProposalsTable({ proposals }) {
  if (!proposals.length)
    return <Empty resourceName={"درخواستی برای این پروژه"} />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, i) => (
          <ProposalRow key={proposal._id} proposal={proposal} i={i} />
        ))}
      </Table.Body>
    </Table>
  );
}
