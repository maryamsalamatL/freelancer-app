export default function RHFSelect({
  name,
  label,
  register,
  validationSchema,
  errors,
  options,
  required,
}) {
  return (
    <div>
      <label htmlFor="category" className="label">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        id={name}
        className="textField__input"
        {...register(name, validationSchema)}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value} label={label}>
            {label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-error text-xs block mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
