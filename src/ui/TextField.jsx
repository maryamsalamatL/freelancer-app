export default function TextField({
  name,
  label,
  register,
  validationSchema,
  errors,
  required,
  type = "text",
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        type={type}
        id={name}
        className="textField__input"
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-error text-xs block mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
