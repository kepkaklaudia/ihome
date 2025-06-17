import { useTranslations } from "next-intl";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";
import { FieldValues, UseFormReset } from "react-hook-form";

const ADD_PRODUCT_TO_WISHLIST = gql(/* GraphQL */ `
  mutation AddProductsToWishlist(
    $wishlistId: ID!
    $wishlistItems: [WishlistItemInput!]!
  ) {
    addProductsToWishlist(
      wishlistId: $wishlistId
      wishlistItems: $wishlistItems
    ) {
      user_errors {
        code
        message
      }
    }
  }
`);

export const useAddProductToWishlist = (
  wishlistId?: string,
  reset?: UseFormReset<FieldValues>
) => {
  const t = useTranslations("hooks");

  const errorMessages = {
    CART_ID_INVALID: {
      condition: "The current user cannot perform",
      message: t("You do not have permission"),
    },
    default: {
      condition: "default",
      message: t("Failed to add the product to favourites"),
    },
  };

  const resetForm = (reset?: UseFormReset<FieldValues>) => {
    if (reset) {
      reset();
    }
  };

  const [mutate, { loading }] = useMutation(ADD_PRODUCT_TO_WISHLIST, {
    onError: (error) => {
      handleErrors(error, errorMessages);
      resetForm(reset);
    },
    onCompleted: () => {
      toast(t("The product has been added to favourites"));
    },
  });

  const mutateAddProductToWishlist = (
    sku: string,
    data: { quantity: number; options?: string[] }
  ) => {
    if (data && data.quantity > 10_000) {
      toast.error(t("Cannot add more than"));
      resetForm(reset);
    } else if (sku && wishlistId) {
      mutate({
        variables: {
          wishlistId,
          wishlistItems: [
            {
              sku,
              quantity: data.quantity,
              selected_options: undefined,
            },
          ],
        },
      });
    } else {
      toast.error(t("Failed to add the product to favourites"));
      resetForm(reset);
    }
  };

  return {
    mutateAddProductToWishlist,
    loading,
  };
};
