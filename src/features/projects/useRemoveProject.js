import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isRemoving } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: ({ message }) => {
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      toast.success(message);
    },
    onError: (error) =>
      toast.error(error?.response?.data?.message || error?.message),
  });

  return { removeProject, isRemoving };
}
