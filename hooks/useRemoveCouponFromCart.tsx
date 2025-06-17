import { useTranslations } from "next-intl";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";
import { gql } from "@/__generated__";

export interface useRemoveCouponFromCartProps {
  cart_id: string | undefined;
  refetch: () => void;
}

const REMOVE_COUPON_FROM_CART = gql(/* GraphQL */ `
  mutation RemoveCouponFromCart($input: RemoveCouponFromCartInput) {
    removeCouponFromCart(input: $input) {
      cart {
        id
      }
    }
  }
`);

export const useRemoveCouponFromCart = ({
  cart_id,
  refetch,
}: useRemoveCouponFromCartProps) => {
  const t = useTranslations("hooks");

  const errorMessages = {
    EMPTY_CART: {
      condition: "Cart does not contain products",
      message: t("Failed to remove code - the cart is empty"),
    },
    CART_NOT_FOUND: {
      condition: "Could not find a cart",
      message: t("Failed to remove code"),
    },
    CART_NOT_ACTIVE: {
      condition: "Current user does not have an active cart",
      message: t("The cart isn't active"),
    },
    ID_MISSING: {
      condition: "Required parameter",
      message: t("Failed to remove code"),
    },
    CODE_ERROR: {
      condition: "Verify the coupon code",
      message: t("Failed to remove code"),
    },
    PERMISSION_ERROR: {
      condition: "The current user cannot perform operations on cart",
      message: t("You do not have permission"),
    },
    ID_ERROR: {
      condition: "Wrong store code specified for cart",
      message: t("Failed to remove code - incorrect cart ID"),
    },
    default: {
      condition: "default",
      message: t("Failed to remove code"),
    },
  };

  const [mutate, { loading }] = useMutation(REMOVE_COUPON_FROM_CART, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },
    onCompleted: () => {
      toast(t("The code has been removed"));
      refetch();
    },
  });

  const mutateRemoveCouponFromCart = () => {
    if (cart_id) {
      mutate({
        variables: {
          input: {
            cart_id: cart_id,
          },
        },
      });
    } else {
      toast.error(errorMessages.default.message);
    }
  };

  return { mutateRemoveCouponFromCart, loading };
};
