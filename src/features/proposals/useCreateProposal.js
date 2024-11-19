import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProposalApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProposal } = useMutation({
    mutationFn: addNewProposalApi,
    onSuccess: ({ message }) => {
      toast.success(message);

      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { isCreating, createProposal };
}
