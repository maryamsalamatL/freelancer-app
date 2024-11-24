import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import useChangeUserStatus from "./useChangeUserStatus";
import Loading from "../../../ui/Loading";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

export default function ChangeUserStatus({ userId, onClose, status }) {
  const { register, handleSubmit } = useForm({ defaultValues: { status } });
  const { isUpdating, changeUserStatus } = useChangeUserStatus();

  const onSubmit = (data) =>
    changeUserStatus({ userId, data }, { onSuccess: () => onClose() });

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        name={"status"}
        register={register}
        label={"تغییر وضعیت"}
        options={options}
        required
      />
      {isUpdating ? (
        <Loading />
      ) : (
        <button className="btn btn--primary w-full">تایید</button>
      )}
    </form>
  );
}
