import { gql } from "@/__generated__";
import {
  CustomerOrdersFilterInput,
  CustomerOrderSortInput,
  ScopeTypeEnum
} from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";

const GET_ORDERS = gql(/* GraphQL */ `
  query GetOrders(
    $filter: CustomerOrdersFilterInput
    $currentPage: Int
    $pageSize: Int
    $sort: CustomerOrderSortInput
    $scope: ScopeTypeEnum
  ) {
    customer {
      orders(
        filter: $filter
        currentPage: $currentPage
        pageSize: $pageSize
        sort: $sort
        scope: $scope
      ) {
        page_info {
          current_page
          page_size
          total_pages
        }
        items {
          number
          status
          total {
            grand_total {
              value
            }
          }
          order_date
          items {
            id
            product_name
            product_sale_price {
              value
            }
            product_sku
            product_url_key
            quantity_ordered
          }
        }
      }
    }
  }
`);

export const useGetOrders = ({
  filter,
  currentPage,
  pageSize,
  scope,
  sort
}: {
  filter?: CustomerOrdersFilterInput;
  currentPage?: number;
  pageSize?: number;
  scope?: ScopeTypeEnum;
  sort?: CustomerOrderSortInput;
}) => {
  const { data, loading, error } = useQuery(GET_ORDERS, {
    variables: {
      filter: filter,
      currentPage: currentPage,
      pageSize: pageSize,
      scope: scope,
      sort: sort
    }
  });

  const pageInfo = data?.customer?.orders?.page_info;

  const orders =
    data?.customer?.orders?.items
      .flatMap((order) => order ?? [])
      .map((order) => ({
        id: order.number,
        statusOrder: order.status,
        price: order.total?.grand_total.value ?? null,
        number: order.number,
        createdAt: order.order_date,
        quantity: order.items?.flatMap((item) => item ?? []).length ?? 0,
        orderItems: order.items
          ?.flatMap((item) => item ?? [])
          .map((item) => ({
            title: item.product_name ?? null,
            description: item.product_sku,
            quantity: item.quantity_ordered ?? 0,
            price: item.product_sale_price.value ?? null,
            src: null,
            id: item.id ?? null,
            urlKey: item.product_url_key ?? null
          }))
      })) ?? [];

  return {
    loading,
    error,
    orders,
    pageInfo
  };
};
