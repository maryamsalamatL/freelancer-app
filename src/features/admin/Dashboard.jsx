import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";

export default function Dashboard() {
  const { isLoading: isProjectLoading, projects } = useProjects();
  const { isLoading: isProposalsLoading, proposals } = useProposals();
  const { isLoading: isUsersLoading, users } = useUsers();

  if (isProjectLoading || isProposalsLoading || isUsersLoading)
    return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} proposals={proposals} users={users} />
    </div>
  );
}
