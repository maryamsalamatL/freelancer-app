export default function TextField({ name, label, value, onChange }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        className="textField__input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
