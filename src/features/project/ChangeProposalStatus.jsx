import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loading from "../../ui/Loading";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

export default function ChangeProposalStatus({ proposalId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();

  const onSubmit = (data) => {
    changeProposalStatus(
      { id: proposalId, data },
      { onSuccess: () => onClose() }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        name="status"
        register={register}
        label="وضعیت درخواست"
        options={options}
        required
      />
      {isUpdating ? (
        <Loading />
      ) : (
        <button className="btn btn--primary w-full mt-8" type="submit">
          تایید
        </button>
      )}
    </form>
  );
}
