import { useTranslations } from "next-intl";
import { UseFormReset } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";
import { ChangeQuantity } from "@/components/common/formFields/Quantity/content";
import { gql } from "@/__generated__";
import { GET_CART_SUMMARY } from "./useGetCartSummary";
import { GET_CART_DETAILS } from "./useGetCartDetails";
import { GET_CUSTOMER_CART } from "./useGetCart";

interface useUpdateCartItemsProps {
  cartId: string | undefined;
  uid?: string;
  reset: UseFormReset<ChangeQuantity>;
}

const UPDATE_CART_ITEMS = gql(/* GraphQL */ `
  mutation UpdateCartItems($input: UpdateCartItemsInput) {
    updateCartItems(input: $input) {
      cart {
        id
      }
    }
  }
`);

export const useUpdateCartItems = ({
  cartId,
  uid,
  reset,
}: useUpdateCartItemsProps) => {
  const t = useTranslations("hooks");
  const errorMessages = {
    ITEM_NOT_FOUND: {
      condition: "Could not find cart item",
      message: t("Failed to update cart"),
    },
    CART_NOT_FOUND: {
      condition: "Could not find a cart",
      message: t("Failed to update cart"),
    },
    EMPTY_FIELDS: {
      condition: "Required parameter",
      message: t("Failed to update cart"),
    },
    PERMISSION_ERROR: {
      condition: "The current user cannot perform operations on cart",
      message: t("You do not have permission"),
    },
    QUANTITY_ERROR: {
      condition: "The requested qty is not available",
      message: t("The requested quantity is unavailable"),
    },
    MAX_QUANTITY_ERROR: {
      condition:
        "The requested qty exceeds the maximum qty allowed in shopping cart",
      message: t("Maximum allowed quantity exceeded"),
    },
    default: {
      condition: "default",
      message: t("Failed to update cart"),
    },
  };

  const [mutate, { loading }] = useMutation(UPDATE_CART_ITEMS, {
    onError: (error) => {
      console.error(error);
      handleErrors(error, errorMessages);
      reset();
    },
    onCompleted: async () => {
      toast(t("The cart has been updated"));
    },
    refetchQueries: [
      {
        query: GET_CART_SUMMARY,
        variables: { cartId },
      },
      {
        query: GET_CART_DETAILS,
        variables: { cartId },
      },
      {
        query: GET_CUSTOMER_CART,
        variables: { cartId },
      },
    ],
    awaitRefetchQueries: true,
  });

  const mutateUpdateCartItems = (quantity: number | string) => {
    if (cartId) {
      mutate({
        variables: {
          input: {
            cart_id: cartId,
            cart_items: [
              {
                cart_item_uid: uid,
                quantity:
                  typeof quantity === "number"
                    ? quantity
                    : Number.parseInt(quantity, 10),
              },
            ],
          },
        },
      });
    } else {
      toast.error(t("Failed to update cart"));
    }
  };

  return { mutateUpdateCartItems, loading };
};
