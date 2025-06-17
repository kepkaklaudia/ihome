import { gql } from "@/__generated__";
import { useCartStore } from "@/store/cart-store";
import { useTokenStore } from "@/store/tokenStore";
import { useQuery } from "@apollo/client";
import { useProvideGuestCart } from "@/hooks/useProvideGuestCart";

export const GET_CART_SUMMARY = gql(/* GraphQL */ `
  query GetCartSummary($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      items {
        quantity
        uid
        prices {
          price {
            currency
            value
          }
        }
        product {
          __typename
          image {
            url
          }
          name
          sku
          url_key
          stock_status
        }
        ... on ConfigurableCartItem {
          configured_variant {
            name
            image {
              url
            }
          }
        }
      }
      total_quantity
    }
  }
`);

export const useGetCartSummary = () => {
  const { cartId: userCartId } = useCartStore();
  const { token } = useTokenStore();

  const { guestCartId } = useProvideGuestCart();

  const activeCartId = (token && userCartId) || guestCartId;

  const cartData = useQuery(GET_CART_SUMMARY, {
    fetchPolicy: "cache-first",
    skip: !activeCartId,
    variables: {
      cartId: activeCartId!
    }
  });

  const { data, ...rest } = cartData;

  return {
    cartId: activeCartId,
    items: data?.cart?.items,
    total_quantity: data?.cart?.total_quantity,
    ...rest
  };
};
