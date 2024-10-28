export default function RadioInput({
  name,
  value,
  label,
  onChange,
  id,
  checked,
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="form-radio text-primary-900 focus:ring-primary-900 cursor-pointer"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
