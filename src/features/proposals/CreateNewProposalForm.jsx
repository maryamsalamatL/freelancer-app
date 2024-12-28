import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import useCreateProposal from "./useCreateProposal";
import Loading from "../../ui/Loading";

export default function CreateNewProposalForm({ projectId, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name={"description"}
        label={"توضیحات"}
        register={register}
        validationSchema={{
          required: "توضیحات الزامی است",
          minLength: {
            value: 10,
            message: "حداقل 10 کراکتر وارد کنید",
          },
        }}
        errors={errors}
        required
      />
      <TextField
        name={"duration"}
        label={"مدت زمان"}
        register={register}
        validationSchema={{ required: "مدت زمان الزامی است" }}
        errors={errors}
        type="number"
        required
      />
      <TextField
        name={"price"}
        label={"قیمت"}
        register={register}
        validationSchema={{ required: "قیمت الزامی است" }}
        errors={errors}
        type="number"
        required
      />
      {isCreating ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full mt-6">
          تایید
        </button>
      )}
    </form>
  );
}
