import { useTranslations } from "next-intl";
import { useQuery } from "@apollo/client";
import { ConfigurableCartItem, GetCustomerCartDocument } from "@/gql/graphql";

export type CartAvailablePaymentsType = {
  label: string;
  id: string;
  image: string | null | undefined;
}[];

export const useGetCustomerCart = () => {
  const { data, loading, refetch, error } = useQuery(GetCustomerCartDocument);
  const t = useTranslations("hooks");

  const cartId = data?.customerCart.id;
  const cartBillingAddress = data?.customerCart.billing_address;
  const cartShippingAddress = data?.customerCart.shipping_addresses[0];
  const cartPaymentMethod = data?.customerCart.selected_payment_method?.code;
  const cartItemsQuantity = data?.customerCart?.total_quantity;

  const cartAvailableShipping =
    data?.customerCart?.shipping_addresses[0]?.available_shipping_methods?.flatMap(
      (item) => {
        if (!item || !item.carrier_code || !item?.carrier_title) {
          return [];
        }

        const cartAvailableShipping = {
          label: `${item?.carrier_title} - ${item.amount.value} ${item.amount.currency}`,
          id: item?.method_title,
          price: item?.amount.value,
          methodCode: item.method_code,
          carrierCode: item.carrier_code
        };

        return [cartAvailableShipping];
      }
    ) ?? [];

  const cartAvailablePayments =
    data?.customerCart?.available_payment_methods?.flatMap((item) => {
      if (!item || !item.code || !item?.title) {
        return [];
      }

      const cartAvailablePayment = {
        label: item?.title === "Credit Cards" ? t("Credit card") : item?.title,
        id: item?.code,
        methodCode: item?.code,
        image: item?.mollie_meta?.image
      };
      return [cartAvailablePayment];
    }) ?? [];

  const cartItems =
    data?.customerCart?.items?.flatMap((item) => {
      if (
        !item ||
        !item.id ||
        !item?.product?.name ||
        !item?.product?.sku ||
        !item?.__typename
      ) {
        return [];
      }

      const cartItem = {
        typename: item?.__typename,
        id: item?.id,
        uid: item?.uid,
        imageUrl: item.product?.image?.url || "",
        name: item?.product?.name,
        description: item?.product?.description?.html || "",
        price: {
          discount: item?.product?.special_price || undefined,
          regular:
            item?.product?.price_range.minimum_price.regular_price.value ||
            undefined,
          final:
            item?.product?.price_range.minimum_price.final_price?.value ||
            undefined
        },
        urlKey: item?.product?.url_key || "",
        sku: item?.product?.sku,
        quantity: item?.quantity || 1,
        stock_status: item?.product.stock_status || ""
      };

      if (item.__typename === "ConfigurableCartItem") {
        const configuredCartItem = item as ConfigurableCartItem;
        const mediaGallery =
          configuredCartItem?.configured_variant?.media_gallery;

        cartItem.imageUrl =
          mediaGallery && mediaGallery?.length > 0 && mediaGallery[0]?.url
            ? mediaGallery[0]?.url
            : item?.product?.image?.url || "";

        cartItem.name = item?.configured_variant.name ?? item?.product?.name;
      }

      return [cartItem];
    }) ?? [];

  const cartPrices = {
    discounts: data?.customerCart.prices?.discounts?.[0]?.amount
      ? {
          value: data?.customerCart.prices.discounts[0].amount.value,
          currency: data?.customerCart.prices.discounts[0].amount.currency,
          label: data?.customerCart.prices.discounts[0].label
        }
      : null,

    priceWithDiscount:
      data?.customerCart.prices?.subtotal_with_discount_excluding_tax?.value,
    total: data?.customerCart.prices?.grand_total?.value || "-",
    netSubtotal: data?.customerCart.prices?.subtotal_excluding_tax?.value || "-"
  };

  const cartAppliedCoupon =
    (data?.customerCart?.applied_coupons &&
      data?.customerCart?.applied_coupons[0]?.code) ||
    undefined;

  return {
    cartId,
    cartItems,
    cartPrices,
    loading,
    error,
    refetch,
    cartBillingAddress,
    cartShippingAddress,
    cartPaymentMethod,
    cartItemsQuantity,
    cartAvailableShipping,
    cartAvailablePayments,
    cartAppliedCoupon
  };
};
