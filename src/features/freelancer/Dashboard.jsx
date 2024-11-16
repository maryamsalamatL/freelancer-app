import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import DashboardHeader from "../../ui/DashboardHeader";

export default function Dashboard() {
  const { proposals, isLoading } = useProposals();

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}
