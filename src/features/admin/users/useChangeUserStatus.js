import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../services/authService";
import toast from "react-hot-toast";

export default function useChangeUserStatus() {
  const queryClient = useQueryClient();

  const { mutate: changeUserStatus, isPending:isUpdating } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);

      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { changeUserStatus, isUpdating };
}
