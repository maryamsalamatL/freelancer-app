import { useSearchParams } from "react-router-dom";

export default function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <select
      className="textField__input text-xs py-2"
      name={filterField}
      value={value}
      onChange={handleChange}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
