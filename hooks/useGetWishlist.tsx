import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

interface useGetWishlistProps {
  currentPage?: number;
  pageSize?: number;
}

const GET_WISHLIST = gql(/* GraphQL */ `
  query GetWishlist($currentPage: Int, $pageSize: Int) {
    customer {
      wishlists {
        id
        items_count
        items_v2(currentPage: $currentPage, pageSize: $pageSize) {
          ...WishlistItemsField
          page_info {
            ...PageInfoField
          }
        }
        sharing_code
        updated_at
      }
    }
  }
`);

export const useGetWishlist = ({
  currentPage,
  pageSize
}: useGetWishlistProps) => {
  const { data, loading, error } = useQuery(GET_WISHLIST, {
    variables: { currentPage: currentPage || 1, pageSize: pageSize || 20 },
    fetchPolicy: "cache-first"
  });

  const wishlistData = data?.customer?.wishlists[0];
  const wishlistId = data?.customer?.wishlists[0]?.id ?? undefined;
  const totalPages = wishlistData?.items_v2?.page_info?.total_pages ?? null;

  const wishlist =
    wishlistData?.items_v2?.items?.flatMap((item) => {
      if (!item || !item.id || !item?.product?.name || !item?.product?.sku) {
        return [];
      }

      return [
        {
          id: item?.id,
          quantity: item?.quantity || 1,
          imageUrl: item.product?.image?.url || "",
          name: item?.product?.name,
          description: item?.product?.description?.html || "",
          price: {
            regular:
              item?.product?.price_range.minimum_price.regular_price.value ??
              undefined,
            discount: item?.product?.special_price ?? undefined,
            final:
              item?.product?.price_range.minimum_price.final_price.value ??
              undefined
          },
          urlKey: item?.product?.url_key || "",
          sku: item?.product?.sku
        }
      ];
    }) ?? [];

  return { loading, error, wishlist, wishlistId, totalPages };
};
