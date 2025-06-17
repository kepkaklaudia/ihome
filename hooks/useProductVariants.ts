import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const GET_PRODUCT_VARIANTS = gql(/* GraphQL */ `
  query GetProductVariants($urlKey: String, $selectedOptions: [ID!]) {
    products(filter: { url_key: { eq: $urlKey } }) {
      items {
        url_key
        ... on ConfigurableProduct {
          configurable_options {
            attribute_code
            label
            values {
              label
              uid
              swatch_data {
                ... on ImageSwatchData {
                  thumbnail
                }
                value
              }
            }
          }
          variants {
            attributes {
              code
              label
            }
          }
          configurable_product_options_selection(
            configurableOptionValueUids: $selectedOptions
          ) {
            media_gallery {
              url
              label
            }
            options_available_for_selection {
              attribute_code
              option_value_uids
            }
          }
        }
      }
    }
  }
`);

export const useProductVariants = (
  urlKey: string,
  selectedOptions: Record<
    string,
    { uid: string; code: string; label: string | undefined }
  >
) => {
  const validSelectedOptionsUid = Object.values(selectedOptions)
    .map((option) => option.uid)
    .filter((uid) => uid !== undefined && uid !== null);

  const {
    data: newData,
    previousData,
    loading
  } = useQuery(GET_PRODUCT_VARIANTS, {
    variables: { urlKey, selectedOptions: validSelectedOptionsUid }
  });

  const data = newData ?? previousData;

  const product = data?.products?.items?.find(
    (item) => item?.url_key === urlKey
  );

  const variants =
    product?.__typename === "ConfigurableProduct"
      ? product.configurable_options?.flatMap((variant) => {
          const code = variant?.attribute_code;

          if (!code) return [];

          const label = variant.label;

          const options =
            variant.values?.flatMap((option) => {
              const uid = option?.uid;
              const value = option?.swatch_data?.value;
              const type = option?.swatch_data?.__typename;

              if (!uid || !value || !type) return [];

              const label = option.label ?? undefined;
              const isSelected = validSelectedOptionsUid.includes(uid);

              const isAvailable = product.variants?.some((variant) => {
                return variant?.attributes?.every((attribute) => {
                  if (attribute?.code === code) {
                    return attribute.label === label;
                  } else if (
                    attribute?.code &&
                    selectedOptions[attribute.code]
                  ) {
                    return (
                      selectedOptions[attribute.code].label === attribute?.label
                    );
                  }
                  return true;
                });
              });

              return {
                uid,
                value,
                type,
                label,
                selected: isSelected,
                available: isAvailable
              };
            }) ?? [];

          return {
            code,
            label,
            options
          };
        }) ?? []
      : [];

  const media =
    product?.__typename === "ConfigurableProduct"
      ? product.configurable_product_options_selection?.media_gallery?.flatMap(
          (image) => {
            const url = image?.url;

            if (!url) return [];

            const label = image.label ?? undefined;

            return {
              url,
              label
            };
          }
        ) ?? []
      : [];

  return { variants, media, loading };
};
