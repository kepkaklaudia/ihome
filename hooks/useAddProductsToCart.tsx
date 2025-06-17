import { useTranslations } from "next-intl";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";
import { useCartStore } from "@/store/cart-store";
import { useProvideGuestCart } from "@/hooks/useProvideGuestCart";
import { gql } from "@/__generated__";
import { GET_CART_SUMMARY } from "@/hooks/useGetCartSummary";
import { useTokenStore } from "@/store/tokenStore";

const ADD_PRODUCTS_TO_CART = gql(/* GraphQL */ `
  mutation addProductsToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
    addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
      cart {
        items {
          errors {
            code
            message
          }
          uid
        }
        total_quantity
      }
      user_errors {
        code
        message
      }
    }
  }
`);

export const useAddProductToCart = () => {
  const t = useTranslations("hooks");

  const { cartId: userCartId } = useCartStore();

  const { token } = useTokenStore();
  const {
    provideGuestCart,
    loading: guestCartLoading,
    guestCartId,
  } = useProvideGuestCart();

  const activeCartId = (token && userCartId) || guestCartId;

  const errorMessages = {
    CART_ID_INVALID: {
      condition: "Could not find a cart",
      message: t("Failed to add"),
    },
    PRODUCT_NOT_FOUND: {
      condition: "Could not find a product",
      message: t("Error - could not find the product"),
    },
    NOT_SALABLE: {
      condition: "Product that you are trying",
      message: t("Error - the product is unavailable"),
    },
    INSUFFICIENT_STOCK: {
      condition: "This product is out",
      message: t("Error - the product is unavailable"),
    },
    default: { condition: "default", message: t("Failed to add") },
  };

  const [mutate, { loading }] = useMutation(ADD_PRODUCTS_TO_CART, {
    refetchQueries: [
      { query: GET_CART_SUMMARY, variables: { cartId: activeCartId } },
    ],
    onError: (error) => {
      console.log(error);
      handleErrors(error, errorMessages);
    },
    onCompleted: (data) => {
      if (
        data.addProductsToCart?.user_errors[0]?.message.includes(
          "qty exceeds the maximum qty allowed"
        )
      ) {
        toast.error(t("Maximum quantity"));
      } else if (
        data.addProductsToCart?.user_errors[0]?.message.includes(
          "The requested qty is not available"
        )
      ) {
        toast.error(t("Requested quantity"));
      } else if (
        data.addProductsToCart?.user_errors[0]?.message.includes(
          "You need to choose options"
        )
      ) {
        toast.error(t("Select variants"));
      } else {
        toast(t("The product has been added to the cart"));
      }
    },
  });

  const mutateAddProductToCart = async (
    sku: string | null | undefined,
    data: { quantity: number; options?: string[] }
  ) => {
    if (!sku) {
      toast.error(t("Product not found"));
      return;
    }

    if (data.quantity > 10_000) {
      toast.error(t("Cannot add more than"));
      return;
    }

    try {
      const activeCartId = (token && userCartId) || (await provideGuestCart());

      mutate({
        variables: {
          cartId: activeCartId,
          cartItems: [
            {
              sku,
              quantity: data.quantity,
              selected_options: data.options ?? undefined,
            },
          ],
        },
      });
    } catch (error) {
      console.error("Error ensuring cart:", error);
      toast.error(t("Failed to add"));
    }
  };

  return {
    mutateAddProductToCart,
    loading: loading || guestCartLoading,
    cartId: activeCartId,
  };
};
