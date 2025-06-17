import { useTranslations } from "next-intl";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";

const REMOVE_PRODUCTS_FROM_WISHLIST = gql(/* GraphQL */ `
  mutation removeProductsFromWishlist(
    $wishlistId: ID!
    $wishlistItemsIds: [ID!]!
  ) {
    removeProductsFromWishlist(
      wishlistId: $wishlistId
      wishlistItemsIds: $wishlistItemsIds
    ) {
      __typename
    }
  }
`);

export const useRemoveProductsFromWishlist = (
  wishlist_id: string | null | undefined
) => {
  const t = useTranslations("hooks");

  const errorMessages = {
    WISHLIST_NOT_FOUND: {
      condition: "The wishlist was not found",
      message: t("Failed to remove item"),
    },
    PERMISSION_ERROR: {
      condition: "The current user cannot perform operations",
      message: t("You do not have permission"),
    },
    default: {
      condition: "default",
      message: t("Failed to remove item"),
    },
  };
  const [mutate, { loading }] = useMutation(REMOVE_PRODUCTS_FROM_WISHLIST, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },
    onCompleted: () => {
      toast(t("The product has been removed"));
    },
  });

  const mutateRemoveProductsFromWishlist = (id: string | undefined) => {
    if (wishlist_id && id) {
      mutate({
        variables: {
          wishlistId: wishlist_id,
          wishlistItemsIds: [id],
        },
      });
    } else {
      toast.error(t("Failed to remove item"));
    }
  };

  return { mutateRemoveProductsFromWishlist, loading };
};
