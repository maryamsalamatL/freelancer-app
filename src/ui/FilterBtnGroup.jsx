import { useSearchParams } from "react-router-dom";

export default function FilterBtnGroup({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 bg-secondary-0 rounded-lg border border-secondary-100">
        {options.map((o) => {
          const isActive = o.value === currentFilter;
          return (
            <button
              key={o.value}
              className={`whitespace-nowrap py-2 px-4 rounded-md transition-all duration-300 font-bold ${
                isActive
                  ? "bg-primary-900 text-white"
                  : "bg-secondary-0 text-secondary-800"
              }`}
              onClick={() => handleClick(o.value)}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
