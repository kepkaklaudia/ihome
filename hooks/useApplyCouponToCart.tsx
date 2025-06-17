import { useTranslations } from "next-intl";
import { FieldValues, UseFormReset } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { handleErrors } from "@/lib/utils/handleErrors";
import { toast } from "sonner";
import { gql } from "@/__generated__";

export interface useApplyCouponToCartProps {
  cart_id: string | undefined;
  reset: UseFormReset<FieldValues>;
  refetch: () => void;
}

const APPLY_COUPON_TO_CART = gql(/* GraphQL */ `
  mutation ApplyCouponToCart($input: ApplyCouponToCartInput) {
    applyCouponToCart(input: $input) {
      cart {
        id
      }
    }
  }
`);

export const useApplyCouponToCart = ({
  cart_id,
  reset,
  refetch,
}: useApplyCouponToCartProps) => {
  const t = useTranslations("hooks");

  const errorMessages = {
    ALREADY_APPLIED: {
      condition: "A coupon is already applied",
      message: t("The discount code is already applied"),
    },
    EMPTY_CART: {
      condition: "Cart does not contain products",
      message: t("Cart does not contain products"),
    },
    CART_ID_INVALID: {
      condition: "Could not find a cart with ID",
      message: t("Failed to add the code"),
    },
    CODE_ERROR: {
      condition: "Required parameter",
      message: t("The code is invalid"),
    },
    CODE_INVALID: {
      condition: "Verify the code",
      message: t("The code is invalid"),
    },
    USER_ERROR: {
      condition: "The current user cannot perform operations",
      message: t("You do not have permission"),
    },
    default: {
      condition: "default",
      message: t("Failed to add the code"),
    },
  };

  const [mutate, { loading }] = useMutation(APPLY_COUPON_TO_CART, {
    onError: (error) => {
      handleErrors(error, errorMessages);
      reset();
    },
    onCompleted: () => {
      toast(t("The code has been added"));
      reset();
      refetch();
    },
  });

  const mutateApplyCouponToCart = (data: FieldValues) => {
    if (cart_id) {
      mutate({
        variables: {
          input: {
            coupon_code: data.discount,
            cart_id: cart_id,
          },
        },
      });
    } else {
      toast.error(errorMessages.default.message);
      reset();
    }
  };

  return { mutateApplyCouponToCart, loading };
};
