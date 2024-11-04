import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CompleteProfileForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const handleCompleteProfile = async (data) => {
    // data => { email, name, role }
    try {
      const { user, message } = await mutateAsync(data);
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
      <form
        className="space-y-8"
        onSubmit={handleSubmit(handleCompleteProfile)}
      >
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          validationSchema={{ required: "نام ضروری است" }}
          errors={errors}
          required
        />
        <TextField
          label="ایمیل"
          name="email"
          register={register}
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است",
            },
          }}
          errors={errors}
          required
        />
        <div>
          <div className="flex justify-center gap-x-6">
            <RadioInput
              name="role"
              value="OWNER"
              label="کارفرما"
              id="OWNER"
              watch={watch}
              register={register}
              validationSchema={{ required: "انتخاب نقش ضروری است" }}
            />
            <RadioInput
              name="role"
              value="FREELANCER"
              label="فریلنسر"
              id="FREELANCER"
              watch={watch}
              register={register}
              validationSchema={{ required: "انتخاب نقش ضروری است" }}
            />
          </div>
          {errors && errors["role"] && (
            <span className="text-error text-xs block mt-2">
              {errors["role"]?.message}
            </span>
          )}
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
