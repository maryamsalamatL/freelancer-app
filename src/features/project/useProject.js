import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProjectApi } from "../../services/projectService";

export default function useProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
  });

  const { project } = data || {};

  return { isLoading, project };
}
