import { gql } from "@/__generated__";
import { GetCustomerCartQuery } from "@/__generated__/graphql";
import { useCartStore } from "@/store/cart-store";
import { useQuery } from "@apollo/client";
import { useProvideGuestCart } from "@/hooks/useProvideGuestCart";
import { useTokenStore } from "@/store/tokenStore";

export type CustomerCartType = NonNullable<GetCustomerCartQuery["cart"]>;
type CustomerCartShippingAddressType = NonNullable<
  CustomerCartType["shipping_addresses"][number]
>;
export type CustomerCartSelectedShippedMethodType =
  CustomerCartShippingAddressType["selected_shipping_method"];
export type CustomerCartAvailableShippingMethodsType =
  CustomerCartShippingAddressType["available_shipping_methods"];

export const GET_CUSTOMER_CART = gql(/* GraphQL */ `
  query GetCustomerCart($cartId: String!) {
    cart(cart_id: $cartId) {
      billing_address {
        city
        company
        country {
          code
          label
        }
        firstname
        lastname
        postcode
        region {
          region_id
          code
          label
        }
        street
        telephone
        vat_id
      }
      shipping_addresses {
        ...CartCustomerShippingAddressFragment
        available_shipping_methods {
          amount {
            currency
            value
          }
          method_title
          method_code
          carrier_code
        }
        selected_shipping_method {
          carrier_code
          method_code
        }
      }
      applied_coupons {
        code
      }
      available_payment_methods {
        code
        title
        mollie_meta {
          image
        }
      }
      selected_payment_method {
        code
      }
      prices {
        grand_total {
          currency
          value
        }
        applied_taxes {
          amount {
            currency
            value
          }
          label
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
      email
    }
  }
`);

export const useGetCart = () => {
  const { cartId: userCartId } = useCartStore();
  const { token } = useTokenStore();

  const { guestCartId } = useProvideGuestCart();

  const activeCartId = (token && userCartId) || guestCartId;

  const { data, refetch, loading, error } = useQuery(GET_CUSTOMER_CART, {
    // skip query if cartId are not found
    skip: !activeCartId,
    variables: {
      // assertion because it must exist otherwise query'll not be executed
      cartId: activeCartId!
    }
  });

  const isGuestCart = activeCartId === guestCartId;

  const cartData = data?.cart
    ? {
        cartId: activeCartId,
        appliedCoupons: data.cart.applied_coupons,
        availablePaymentMethods: data.cart.available_payment_methods,
        prices: data.cart.prices,
        selectedPaymentMethod: data.cart.selected_payment_method,
        shippingAddress: data.cart.shipping_addresses[0],
        billingAddress: data.cart.billing_address,
        email: data.cart.email
      }
    : null;

  return {
    cartData,
    refetch,
    loading,
    error,
    isGuestCart
  };
};
