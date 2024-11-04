export default function RadioInput({
  name,
  value,
  label,
  id,
  register,
  validationSchema,
  watch,
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="form-radio text-primary-900 focus:ring-primary-900 cursor-pointer"
        type="radio"
        value={value}
        id={id}
        checked={watch(name) === value}
        {...register(name, validationSchema)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
