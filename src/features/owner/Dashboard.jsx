import Stats from "./Stats";
import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";

export default function Dashboard() {
  const { isLoading, projects } = useOwnerProjects();

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <Stats projects={projects} />
    </div>
  );
}

function Header() {
  return (
    <div className=" mb-8">
      <h1 className="font-bold text-2xl text-secondary-900 mb-2">آمار کلی</h1>
      <p className="text-secondary-600">
        در یک نما خلاصه ای از آمار خود را ببینید
      </p>
    </div>
  );
}
