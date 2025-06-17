import { useEffect, useMemo, useRef } from "react";
import { useSearchQuery } from "./useSearchQuery";
import { useProductFilters } from "./useProductFilters";

export const useActiveProductFilters = () => {
  const { search, update } = useSearchQuery();

  const query = search.get("q") ?? "";
  const page = parseInt(search.get("p") ?? "1", 10) || 1;

  const { filters } = useProductFilters(query);

  const sort = search.get("sort") ?? undefined;

  const parsedSort = sort ? sort.split("_") : [null, null];

  const activeFilterEntries = useMemo(() => {
    if (!filters) return [];

    return filters.flatMap(({ attribute_code, type, options }) => {
      let filter = null;

      const selectedOptions = search.getAll(attribute_code);
      const validOptions = selectedOptions.flatMap((selectedOption) => {
        /**
         * Restrict filters to available options
         */
        const valid = options.some(
          ({ value: optionValue }) => selectedOption === optionValue
        );

        if (!valid) return [];

        return [selectedOption];
      });

      if (validOptions.length === 0) return [];

      if (type === "Checkbox") {
        const [option] = validOptions;
        filter = { eq: option };
      }

      if (type === "FilterEqualTypeInput") {
        filter = { in: validOptions };
      }

      if (!filter) return [];

      return [[attribute_code, filter]] as const;
    });
  }, [filters, search]);

  const activeFilters = useMemo(
    () => Object.fromEntries(activeFilterEntries),
    [activeFilterEntries]
  );

  const filtersDependency = JSON.stringify(activeFilters);
  const previousFiltersRef = useRef(filtersDependency);

  useEffect(() => {
    /**
     * Reset the page number only when filters are changed.
     * Ref prevents resetting the page when navigating back from the product details page.
     **/
    if (previousFiltersRef.current !== filtersDependency) {
      update("p", null);
    }
    previousFiltersRef.current = filtersDependency;
  }, [filtersDependency]);

  return { activeFilters, query, page, sort: parsedSort };
};
