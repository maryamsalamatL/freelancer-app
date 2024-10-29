import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

export default function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const handleCompleteProfile = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({
        email,
        name,
        role,
      });
      toast.success(message);

      if (user.status !== 2) {
        toast("پروفایل شما در انتظار تایید است.");
        return navigate("/");
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full sm:max-w-screen-sm">
      <form className="space-y-8" onSubmit={handleCompleteProfile}>
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="ایمیل"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-center gap-x-6">
          <RadioInput
            name="role"
            value="OWNER"
            label="کارفرما"
            id="OWNER"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "OWNER"}
          />
          <RadioInput
            name="role"
            value="FREELANCER"
            label="فریلنسر"
            id="FREELANCER"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "FREELANCER"}
          />
        </div>
        {isPending ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}
