import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import useCategories from "../../hooks/useCategories.js";
import useCreateProject from "./useCreateProject.js";
import Loading from "../../ui/Loading.jsx";
import useEditProject from "./useEditProject.js";

export default function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const {
    _id: editId,
    title,
    category,
    budget,
    deadline,
    description,
    tags: prevTags,
  } = projectToEdit;
  const isEditSession = !!editId;
  let editValues = {};
  if (isEditSession) {
    editValues = { title, description, category: category?._id, budget };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: editValues,
  });
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <TextField
        name="title"
        label="عنوان"
        register={register}
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان نا معتبر است",
          },
        }}
        errors={errors}
        required
      />
      <TextField
        name="description"
        label="توضیحات"
        register={register}
        validationSchema={{
          required: "توضیحات ضروری است",
        }}
        errors={errors}
        required
      />
      <TextField
        name="budget"
        label="بودجه"
        register={register}
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        type="number"
        errors={errors}
        required
      />
      <RHFSelect
        name="category"
        label="دسته بندی"
        register={register}
        validationSchema={{ required: "دسته بندی ضروری است" }}
        errors={errors}
        options={categories}
        required
      />
      <div>
        <label htmlFor="tags" className="label">
          تگ
        </label>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="enter tags"
        />
      </div>
      <div>
        <label htmlFor="deadline" className="label">
          ددلاین
        </label>
        <DatePicker
          value={date}
          onChange={(date) => setDate(date)}
          format="YYYY/MM/DD"
          containerClassName="w-full"
          inputClass="textField__input"
          calendarPosition="bottom-center"
          calendar={persian}
          locale={persian_fa}
        />
      </div>

      {isCreating || isEditing ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}
