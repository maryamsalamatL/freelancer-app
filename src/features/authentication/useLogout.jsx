import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      navigate("/auth", { replace: true });
      queryClient.removeQueries();
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { logout, isPending };
}
