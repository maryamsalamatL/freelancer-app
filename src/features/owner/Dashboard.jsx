import Stats from "./Stats";
import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardHeader from "../../ui/DashboardHeader";

export default function Dashboard() {
  const { isLoading, projects } = useOwnerProjects();

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}
