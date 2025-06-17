import { gql } from "@/__generated__";
import {
  ProductConfigurationFragment,
  ProductFeaturesFragment
} from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";

const GET_PRODUCT = gql(/* GraphQL */ `
  query GetProduct($urlKey: String!, $selectedIds: [ID!]) {
    products(filter: { url_key: { eq: $urlKey } }) {
      items {
        url_key
        stock_status
        ...ProductFeatures
      }
    }
  }
`);

const formatOptions = (product: ProductFeaturesFragment) => {
  if (product.__typename !== "ConfigurableProduct") return null;

  return (
    product.configurable_product_options_selection?.options_available_for_selection?.flatMap(
      (option) =>
        option?.attribute_code
          ? {
              code: option.attribute_code,
              available: option.option_value_uids.flatMap((uid) => uid ?? [])
            }
          : []
    ) ?? null
  );
};

const formatProductConfiguration = (option: ProductConfigurationFragment) => {
  const code = option.attribute_code;

  if (!code) return null;

  const id = option.uid;
  const label = option.label ?? undefined;
  const options =
    option.values?.flatMap((value) => {
      const uid = value?.uid;
      const label = value?.label ?? undefined;
      const swatchType = value?.swatch_data?.__typename;
      const swatch = value?.swatch_data?.value;

      if (!swatchType || !swatch || !uid) return [];

      return {
        uid,
        label,
        type: swatchType,
        value: swatch
      };
    }) ?? [];

  return {
    id,
    code,
    label,
    options
  };
};

const formatProduct = (product: ProductFeaturesFragment) => {
  const type = product.__typename;
  const name = product.name;
  const sku = product.sku;

  if (!type || !name || !sku) {
    return null;
  }

  const description = product.description?.html;
  const image = product.image?.url ?? undefined;
  const media =
    product.media_gallery?.flatMap((imageItem) => {
      if (!imageItem?.url) return [];

      return { url: imageItem.url, label: imageItem.label ?? undefined };
    }) ?? [];

  const price = {
    regular: product.price_range.minimum_price.regular_price.value ?? undefined,
    final: product.price_range.minimum_price.final_price.value ?? undefined,
    currency:
      product.price_range.minimum_price.final_price.currency ?? undefined,
    discount: product.special_price ?? undefined
  };

  const configuration =
    product.__typename === "ConfigurableProduct"
      ? product.configurable_options?.flatMap((option) =>
          option ? (formatProductConfiguration(option) ?? []) : []
        )
      : undefined;

  return {
    type,
    name,
    sku,
    description,
    image,
    media,
    price,
    configuration
  };
};

const getBreadcrumbs = (product: ProductFeaturesFragment) => {
  const deepestCategory = product.categories
    ?.flatMap((category) => (category ? [category] : []))
    .sort(
      (a, b) =>
        (b?.url_path?.split("/") ?? []).length -
        (a?.url_path?.split("/") ?? []).length
    )[0];

  const parent = {
    category_level: deepestCategory?.level,
    category_url_key: deepestCategory?.url_key,
    category_name: deepestCategory?.name,
    category_url_path: deepestCategory?.url_path
  };
  const merged =
    [...(deepestCategory?.breadcrumbs ?? []), parent].flatMap((category) => {
      const level = category?.category_level;
      const key = category?.category_url_key;
      const name = category?.category_name;
      const path = category?.category_url_path?.split("/");

      if (!level || !key || !name || !path) return [];

      return {
        level,
        key,
        name,
        path
      };
    }) ?? [];

  const breadcrumbs = merged.sort((a, b) => a.level - b.level);

  return breadcrumbs;
};

export const useProduct = (urlKey: string, selectedOptionsUids?: string[]) => {
  const { data, loading } = useQuery(GET_PRODUCT, {
    variables: {
      urlKey,
      selectedIds: selectedOptionsUids
    }
  });

  const product = data?.products?.items?.find(
    (item) => item?.url_key === urlKey
  );

  return {
    product: product ? formatProduct(product) : null,
    stock_status: product?.stock_status ?? null,
    availableOptions: product ? formatOptions(product) : null,
    breadcrumbs: product ? getBreadcrumbs(product) : [],
    loading
  };
};
