import { gql } from "@/__generated__";
import { ProductAttributeSortInput, SortEnum } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { useTranslations } from "next-intl";

const MessagesKeysArray = [
  "price_ASC",
  "price_DESC",
  "name_ASC",
  "name_DESC"
] as const;
type MessagesKeys = (typeof MessagesKeysArray)[number];

function isKeyInMessages(label: string): label is MessagesKeys {
  return MessagesKeysArray.includes(label as MessagesKeys);
}

const PRODUCT_FILTERS = gql(/* GraphQL */ `
  query ProductFilters(
    $search: String
    $filter: ProductAttributeFilterInput
    $sort: ProductAttributeSortInput
  ) {
    products(search: $search, filter: $filter, sort: $sort) {
      sort_fields {
        options {
          label
          value
        }
      }
      aggregations {
        label
        attribute_code
        count
        options {
          label
          value
          count
        }
      }
    }
  }
`);

const PRODUCT_FILTER_TYPES = gql(/* GraphQL */ `
  query ProductFilterTypes {
    __type(name: "ProductAttributeFilterInput") {
      inputFields {
        name
        type {
          name
        }
      }
    }
  }
`);

export const useProductFilters = (
  query: string,
  category?: string,
  sort?: ProductAttributeSortInput
) => {
  const { data: filterTypesData } = useQuery(PRODUCT_FILTER_TYPES);

  const { data, loading } = useQuery(PRODUCT_FILTERS, {
    variables: {
      search: query,
      filter: { category_uid: { eq: category } },
      sort: sort
    }
  });
  const t = useTranslations("products");

  const sortOptions =
    data?.products?.sort_fields && data?.products?.sort_fields.options;

  const extendedSortOptions =
    sortOptions?.flatMap((option) => {
      const ascLabel = `${option?.value}_${SortEnum.Asc}`;
      const descLabel = `${option?.value}_${SortEnum.Desc}`;

      const ascLabelKey = isKeyInMessages(ascLabel)
        ? t(ascLabel)
        : option?.label || "";
      const descLabelKey = isKeyInMessages(descLabel)
        ? t(descLabel)
        : option?.label || "";

      return [
        { ...option, sortEnum: SortEnum.Asc, label: ascLabelKey },
        { ...option, sortEnum: SortEnum.Desc, label: descLabelKey }
      ];
    }) ?? [];

  const filterTypesEntries =
    filterTypesData?.__type?.inputFields?.flatMap((field) =>
      field.type.name ? ([[field.name, field.type.name]] as const) : []
    ) ?? [];

  const filterTypes: Record<string, string | undefined> =
    Object.fromEntries(filterTypesEntries);

  const filters = data?.products?.aggregations?.flatMap((filter) => {
    if (!filter) {
      return [];
    }

    const { label, count, options, attribute_code } = filter;

    if (attribute_code === "category_uid") {
      return [];
    }

    if (!label || !count || !options) {
      return [];
    }

    const type = filterTypes[attribute_code];

    if (!type) {
      return [];
    }

    const filteredOptions = options.flatMap((option) => {
      if (!option) {
        return [];
      }

      const { label, count, value } = option;

      if (!label || typeof count !== "number") {
        return [];
      }

      return {
        label,
        count,
        value
      };
    });

    const checkbox = filteredOptions.every(
      ({ value }) => value === "0" || value === "1"
    );

    return {
      attribute_code,
      type: checkbox ? "Checkbox" : type,
      label,
      count,
      options: filteredOptions
    };
  });

  return {
    filters,
    filterTypes,
    loading,
    sortOptions: extendedSortOptions
  };
};
