import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";

export default function useCategories() {
  const { isLoading, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((c) => ({
    label: c.title,
    value: c._id,
  }));

  return { categories, isLoading };
}
