import { gql } from "@/__generated__";
import {
  ProductAttributeFilterInput,
  ProductAttributeSortInput
} from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";

interface useGetProductsProps {
  currentPage?: number;
  pageSize?: number;
  search?: string;
  filter?: ProductAttributeFilterInput;
  sort?: ProductAttributeSortInput;
  category?: string;
}

const GET_PRODUCTS = gql(/* GraphQL */ `
  query GetProducts(
    $filter: ProductAttributeFilterInput
    $sort: ProductAttributeSortInput
    $pageSize: Int
    $currentPage: Int
    $search: String
  ) {
    products(
      filter: $filter
      pageSize: $pageSize
      currentPage: $currentPage
      search: $search
      sort: $sort
    ) {
      items {
        ...BasicProductDataFragment
      }
      total_count
      page_info {
        current_page
        total_pages
      }
    }
  }
`);

export const useGetProducts = ({
  currentPage,
  pageSize,
  search,
  filter,
  sort,
  category
}: useGetProductsProps) => {
  const {
    data: currentData,
    loading,
    error,
    previousData
  } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-first",
    variables: {
      currentPage: currentPage,
      pageSize: pageSize,
      search: search,
      filter: { ...filter, category_uid: { eq: category } },
      sort: sort
    }
  });

  const data = currentData ?? previousData;

  const products =
    data?.products?.items?.flatMap((product) => {
      if (
        !product ||
        !product.__typename ||
        !product.sku ||
        !product.name ||
        !product.url_key ||
        !product.price_range.minimum_price.regular_price.value ||
        !product.price_range.minimum_price.regular_price.currency
      ) {
        return [];
      }

      return [
        {
          typename: product.__typename,
          sku: product.sku,
          name: product.name,
          urlKey: product.url_key,
          thumbnail: product?.small_image?.url ?? null,
          price: {
            regular:
              product.price_range.minimum_price.regular_price.value ?? null,
            discount: product.special_price ?? null,
            currency:
              product.price_range.minimum_price.regular_price.currency ?? null
          }
        }
      ];
    }) ?? [];

  const itemsCount = data && data?.products?.total_count;

  const pagination = {
    currentPage: data?.products?.page_info?.current_page ?? null,
    totalPages: data?.products?.page_info?.total_pages ?? null
  };

  return { data, loading, error, products, pagination, itemsCount };
};
