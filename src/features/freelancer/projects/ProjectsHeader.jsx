import useCategories from "../../../hooks/useCategories";
import FilterBtnGroup from "../../../ui/FilterBtnGroup";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  { label: "جدیدترین", value: "latest" },
  { label: "قدیمی ترین", value: "earliest" },
];

const statusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];

export default function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between mb-8 text-secondary-700">
      <h1 className="font-bold text-lg">لیست پروژه ها</h1>
      <div className="flex gap-x-8 items-center">
        <FilterBtnGroup filterField="status" options={statusOptions} />
        <FilterDropDown
          filterField={"category"}
          options={[{ value: "ALL", label: "همه" }, ...transformedCategories]}
        />
        <FilterDropDown filterField={"sort"} options={sortOptions} />
      </div>
    </div>
  );
}
