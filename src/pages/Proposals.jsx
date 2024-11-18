import ProposalsTable from "../features/proposals/ProposalsTable";

export default function Proposals() {
  return (
    <div>
      <h1 className="font-bold text-secondary-700 text-xl mb-8">
        پروپوزال های شما
      </h1>
      <ProposalsTable />
    </div>
  );
}
