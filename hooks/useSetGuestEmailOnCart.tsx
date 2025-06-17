import { useTranslations } from "next-intl";
import { FieldValues } from "react-hook-form";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";

const SET_GUEST_EMAIL_ON_CART = gql(/* GraphQL */ `
  mutation SetGuestEmailOnCart($input: SetGuestEmailOnCartInput) {
    setGuestEmailOnCart(input: $input) {
      cart {
        id
        email
      }
    }
  }
`);

export const useSetGuestEmailOnCart = (cartId: string | undefined) => {
  const t = useTranslations("hooks");

  const errorMessages = {
    CART_NOT_FOUND: {
      condition: "Could not find a cart with ID",
      message: t("Failed to find a cart"),
    },
    MAGENTO_MAIL_ERROR: {
      condition: "Invalid email format",
      message: t("Invalid email"),
    },
    MAGENTO_EMAIL_MISSING_ERROR: {
      condition: `Required parameter "email"`,
      message: t("E-mail is required"),
    },
    MAGENTO_CART_MISSING_ERROR: {
      condition: `Required parameter "cart_id"`,
      message: t("Failed to find a cart"),
    },
    MAGENTO_AUTH_ERROR: {
      condition: "The current user cannot perform operations on cart",
      message: t("You do not have permission"),
    },
    MAGENTO_LOGGED_ERROR: {
      condition: "The request is not allowed for logged in customers",
      message: t("You do not have permission"),
    },
    default: {
      condition: "default",
      message: t("Failed to set email on cart"),
    },
  };

  const [mutate] = useMutation(SET_GUEST_EMAIL_ON_CART, {
    onError: (error) => handleErrors(error, errorMessages),
  });

  const mutateGuestEmail = async (
    data: FieldValues,
    onCompleted: (data: FieldValues) => void
  ) => {
    if (cartId) {
      mutate({
        variables: { input: { cart_id: cartId, email: data.email } },
        onCompleted: () => onCompleted(data),
      });
    } else {
      toast.error(t("Failed to find a cart"));
    }
  };
  return { mutateGuestEmail };
};
