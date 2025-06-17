import { useTranslations } from "next-intl";
import { useMutation } from "@apollo/client";
import { handleErrors } from "@/lib/utils/handleErrors";
import { gql } from "@/__generated__";

const CREATE_EMPTY_CART = gql(/* GraphQL */ `
  mutation CreateEmptyCart {
    createEmptyCart
  }
`);

export const useCreateEmptyCart = () => {
  
  const t = useTranslations("hooks");

  const errorMessages = {
    CART_ID: {
      condition: "Cart with ID",
      message: t("The cart ID has already been used")
    },
    CART_LENGTH: {
      condition: "Cart ID length",
      message: t("The cart ID has an incorrect length")
    },
    default: {
      condition: "default",
      message: t("Failed to create cart")
    }
  };

  const [mutate, { loading }] = useMutation(CREATE_EMPTY_CART, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    }
  });

  return { mutateCreateCart: mutate, loading };
};
