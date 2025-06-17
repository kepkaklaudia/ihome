import { useTranslations } from "next-intl";
import { UseFormReset } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";
import { ChangeQuantity } from "@/components/common/formFields/Quantity/content";
import { gql } from "@/__generated__";

interface useUpdateProductsIsWishlistProps {
  wishlistId: string | null | undefined;
  id: string | undefined;
  reset: UseFormReset<ChangeQuantity>;
}

const UPDATE_PRODUCTS_IN_WISHLIST = gql(/* GraphQL */ `
  mutation UpdateWishlistProducts(
    $wishlistId: ID!
    $wishlistItems: [WishlistItemUpdateInput!]!
  ) {
    updateProductsInWishlist(
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

export const useUpdateProductsInWishlist = ({
  wishlistId,
  id,
  reset,
}: useUpdateProductsIsWishlistProps) => {
  const t = useTranslations("hooks");

  const errorMessages = {
    PERMISSION_ERROR: {
      condition: "The current user cannot perform",
      message: t("You do not have permission"),
    },
    NO_WHISHLIST: {
      condition: "The wishlist was not found",
      message: t("Wishlist not found"),
    },
    default: {
      condition: "default",
      message: t("Failed to update wishlist"),
    },
  };

  const [mutate, { loading }] = useMutation(UPDATE_PRODUCTS_IN_WISHLIST, {
    onError: (error) => {
      handleErrors(error, errorMessages);
      reset();
    },
    onCompleted: () => {
      toast(t("Wishlist has been updated"));
    },
  });

  const mutateUpdateProductsInWishlist = (data: ChangeQuantity) => {
    const quantity =
      typeof data?.quantity === "number"
        ? data.quantity
        : Number.parseInt(data.quantity, 10);

    if (quantity > 10_000) {
      toast.error(t("Cannot add more than"));
      reset();
    } else if (wishlistId && id) {
      mutate({
        variables: {
          wishlistId: wishlistId,
          wishlistItems: [{ wishlist_item_id: id, quantity: quantity }],
        },
      });
    } else {
      toast.error(t("Failed to update wishlist"));
    }
  };

  return { mutateUpdateProductsInWishlist, loading };
};
