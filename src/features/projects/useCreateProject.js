import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addNewProjectApi } from "../../services/projectService";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { mutate: createProject, isPending: isCreating } = useMutation({
    mutationFn: addNewProjectApi,
    onSuccess: ({ message }) => {
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });

      toast.success(message);
    },
    onError: (error) =>
      toast.error(error?.response?.data?.message || error?.message),
  });

  return { isCreating, createProject };
}
