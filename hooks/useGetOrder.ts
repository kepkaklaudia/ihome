import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const GET_ORDER_BY_ORDER_NUMBER = gql(/* GraphQL */ `
  query GetOrderByOrderNumber($orderNumber: String!) {
    getOrder(order_number: $orderNumber) {
      number
      status
      created_at
      shipping_method
      payment_method
      total {
        base_grand_total {
          currency
          value
        }
        discounts {
          currency
          value
        }
        grand_total {
          currency
          value
        }
        subtotal {
          currency
          value
        }
        total_shipping {
          currency
          value
        }
        total_tax {
          currency
          value
        }
      }
      consumer {
        firstName
        lastName
      }
      shipping_address {
        city
        country_code
        postcode
        region
        region_id
        street
      }
      billing_address {
        city
        country_code
        postcode
        region
        region_id
        street
      }
      items {
        uid
        availability
        image_url
        name
        price {
          currency
          value
        }
        product_type
        qty
        sku
        url_key
      }
    }
  }
`);

export const useGetOrder = (orderNumber: string) => {
  const { data, ...rest } = useQuery(GET_ORDER_BY_ORDER_NUMBER, {
    variables: {
      orderNumber
    }
  });

  return { order: data?.getOrder, ...rest };
};
