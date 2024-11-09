import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalService";
import { useParams } from "react-router-dom";

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { mutate: changeProposalStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);

      queryClient.invalidateQueries({ queryKey: ["project", id] });
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { isUpdating, changeProposalStatus };
}
