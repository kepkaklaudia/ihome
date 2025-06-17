import { gql } from "@/__generated__";
import { useCartStore } from "@/store/cart-store";
import { useTokenStore } from "@/store/tokenStore";
import { useQuery } from "@apollo/client";
import { useProvideGuestCart } from "@/hooks/useProvideGuestCart";

export const GET_CART_DETAILS = gql(/* GraphQL */ `
  query GetCartDetails($cartId: String!) {
    cart(cart_id: $cartId) {
      applied_coupons {
        code
      }
      prices {
        grand_total {
          currency
          value
        }
        discounts {
          amount {
            currency
            value
          }
          label
        }
        subtotal_with_discount_excluding_tax {
          currency
          value
        }
        subtotal_excluding_tax {
          currency
          value
        }
      }
      items {
        uid
        product {
          uid
          name
          meta_description
          sku
          stock_status
          url_key
          image {
            url
          }
          description {
            html
          }
          special_price
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
              final_price {
                currency
                value
              }
            }
          }
        }
        prices {
          price {
            currency
            value
          }
        }
        quantity
        ... on ConfigurableCartItem {
          configured_variant {
            name
            image {
              url
            }
          }
        }
      }
      shipping_addresses {
        selected_shipping_method {
          amount {
            currency
            value
          }
        }
      }
    }
  }
`);

export const useGetCartDetails = () => {
  const { cartId: userCartId } = useCartStore();
  const { token } = useTokenStore();

  const { guestCartId } = useProvideGuestCart();

  const activeCartId = (token && userCartId) || guestCartId;

  const cartData = useQuery(GET_CART_DETAILS, {
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
    prices: data?.cart?.prices,
    appliedCoupons: data?.cart?.applied_coupons,
    shippingAddress: data?.cart?.shipping_addresses,
    ...rest
  };
};
