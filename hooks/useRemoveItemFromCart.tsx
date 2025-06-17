import { useTranslations } from "next-intl";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";
import { gql } from "@/__generated__";
import { GET_CART_DETAILS } from "./useGetCartDetails";
import { GET_CART_SUMMARY } from "./useGetCartSummary";

const REMOVE_PRODUCT_FROM_CART = gql(/* GraphQL */ `
  mutation RemoveProductFromCart($input: RemoveItemFromCartInput) {
    removeItemFromCart(input: $input) {
      cart {
        id
      }
    }
  }
`);

interface UseRemoveItemFromCartType {
  cartId: string | undefined;
  refetch?: () => void;
}

export const useRemoveItemFromCart = ({
  cartId,
  refetch,
}: UseRemoveItemFromCartType) => {
  const t = useTranslations("hooks");

  const errorMessages = {
    EMPTY_CART: {
      condition: "Cart doesn't contain",
      message: t("The cart does not contain a product with this ID"),
    },
    CART_NOT_FOUND: {
      condition: "Could not find a cart",
      message: t("Failed to remove item"),
    },
    ID_MISSING: {
      condition: "Required parameter",
      message: t("Failed to remove item"),
    },
    PERMISSION_ERROR: {
      condition: "The current user cannot perform operations on cart",
      message: t("You do not have permission"),
    },
    default: {
      condition: "default",
      message: t("Failed to remove item"),
    },
  };

  const [mutate, { loading }] = useMutation(REMOVE_PRODUCT_FROM_CART, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },
    onCompleted: () => {
      toast(t("The product has been removed"));
      if (refetch) refetch();
    },
    refetchQueries: [
      { query: GET_CART_DETAILS, variables: { cartId } },
      { query: GET_CART_SUMMARY, variables: { cartId } },
    ],
  });

  const mutateRemoveItemFromCart = (id: string | undefined) => {
    if (cartId) {
      mutate({
        variables: {
          input: {
            cart_id: cartId,
            cart_item_uid: id,
          },
        },
      });
    } else {
      toast.error(t("Failed to remove item"));
    }
  };

  return { mutateRemoveItemFromCart, loading };
};
