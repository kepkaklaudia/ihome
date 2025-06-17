import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const GET_ORDER_SHIPMENTS = gql(/* GraphQL */ `
  query GetOrderShipments($orderNumber: String) {
    customer {
      orders(filter: { number: { eq: $orderNumber } }, scope: GLOBAL) {
        items {
          shipments {
            tracking {
              carrier
              number
              title
            }
          }
          shipping_method
        }
      }
    }
  }
`);

export const useGetOrderShipments = ({
  orderNumber
}: {
  orderNumber: string;
}) => {
  const { data, loading, error } = useQuery(GET_ORDER_SHIPMENTS, {
    variables: {
      orderNumber: orderNumber
    }
  });

  const shippingData =
    data?.customer?.orders?.items
      .flatMap((order) => order ?? [])
      .map((order) => ({
        shipments: order.shipments,
        shippingMethod: order.shipping_method ?? "-"
      }))[0] ?? null;

  const tracking = shippingData?.shipments?.[0]?.tracking?.[0];
  const shippingMethod = shippingData?.shippingMethod;

  return {
    loading,
    error,
    tracking,
    shippingMethod
  };
};
