import useCategories from "../../../hooks/useCategories";
import FilterBtnGroup from "../../../ui/FilterBtnGroup";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  { label: "قدیمی ترین", value: "earliest" },
  { label: "جدیدترین", value: "latest" },
];

const statusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];

export default function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 text-secondary-700">
      <h1 className="font-bold mb-3 lg:mb-0 title__fontSize">لیست پروژه ها</h1>
      <div className="flex flex-col gap-y-4  md:flex-row md:gap-x-8 md:items-center">
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
