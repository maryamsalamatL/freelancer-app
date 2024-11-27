import ProposalsTable from "../features/proposals/ProposalsTable";

export default function Proposals() {
  return (
    <div>
      <h1 className="font-bold text-secondary-700 title__fontSize mb-8">
        لیست پروپوزال ها
      </h1>
      <ProposalsTable />
    </div>
  );
}
