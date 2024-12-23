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
    <div>
      <label htmlFor={name} className="label">
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
