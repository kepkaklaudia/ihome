/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment AvailableRegionsBasicData on Region {\n  id\n  name\n}": typeof types.AvailableRegionsBasicDataFragmentDoc,
    "fragment BasicProductDataFragment on ProductInterface {\n  __typename\n  id\n  name\n  sku\n  url_key\n  small_image {\n    url\n  }\n  price_range {\n    minimum_price {\n      final_price {\n        currency\n        value\n      }\n      regular_price {\n        currency\n        value\n      }\n    }\n  }\n  special_price\n}": typeof types.BasicProductDataFragmentFragmentDoc,
    "fragment CartCustomerBillingAddressFragment on BillingCartAddress {\n  uid\n  postcode\n  city\n  street\n  telephone\n  country {\n    code\n  }\n  firstname\n  lastname\n}": typeof types.CartCustomerBillingAddressFragmentFragmentDoc,
    "fragment CartCustomerShippingAddressFragment on ShippingCartAddress {\n  uid\n  postcode\n  city\n  street\n  telephone\n  country {\n    code\n  }\n  region {\n    region_id\n  }\n  firstname\n  lastname\n}": typeof types.CartCustomerShippingAddressFragmentFragmentDoc,
    "fragment CartProductFragment on ProductInterface {\n  name\n  sku\n  url_key\n  stock_status\n  image {\n    url\n  }\n  description {\n    html\n  }\n  price_range {\n    minimum_price {\n      regular_price {\n        value\n      }\n    }\n  }\n}": typeof types.CartProductFragmentFragmentDoc,
    "fragment AddressFragment on CustomerAddress {\n  id\n  city\n  postcode\n  country_code\n  street\n  default_billing\n  default_shipping\n  firstname\n  lastname\n  middlename\n  telephone\n}": typeof types.AddressFragmentFragmentDoc,
    "fragment CustomerAddressField on CustomerAddress {\n  id\n  firstname\n  lastname\n  street\n  city\n  postcode\n  country_code\n  telephone\n  default_billing\n  default_shipping\n  region {\n    region\n    region_id\n  }\n}": typeof types.CustomerAddressFieldFragmentDoc,
    "fragment NavigationItem on CategoryTree {\n  uid\n  include_in_menu\n  name\n  url_path\n  url_key\n  breadcrumbs {\n    category_name\n  }\n  level\n}": typeof types.NavigationItemFragmentDoc,
    "fragment OrderAddressField on OrderAddress {\n  city\n  company\n  country_code\n  firstname\n  lastname\n  postcode\n  region\n  region_id\n  street\n  suffix\n  telephone\n  vat_id\n}": typeof types.OrderAddressFieldFragmentDoc,
    "fragment PageInfoField on SearchResultPageInfo {\n  current_page\n  page_size\n  total_pages\n}": typeof types.PageInfoFieldFragmentDoc,
    "fragment ProductFeatures on ProductInterface {\n  name\n  sku\n  image {\n    url\n  }\n  description {\n    html\n  }\n  media_gallery {\n    label\n    url\n  }\n  special_price\n  categories {\n    url_path\n    url_key\n    level\n    name\n    breadcrumbs {\n      category_url_path\n      category_url_key\n      category_level\n      category_name\n    }\n  }\n  price_range {\n    minimum_price {\n      regular_price {\n        value\n        currency\n      }\n      final_price {\n        value\n        currency\n      }\n    }\n  }\n  ... on ConfigurableProduct {\n    variants {\n      product {\n        name\n        sku\n        media_gallery {\n          url\n          label\n        }\n      }\n      attributes {\n        code\n        uid\n      }\n    }\n    configurable_options {\n      ...ProductConfiguration\n    }\n    configurable_product_options_selection(\n      configurableOptionValueUids: $selectedIds\n    ) {\n      options_available_for_selection {\n        attribute_code\n        option_value_uids\n      }\n    }\n  }\n}": typeof types.ProductFeaturesFragmentDoc,
    "fragment WishlistItemsField on WishlistItems {\n  items {\n    id\n    quantity\n    product {\n      special_price\n      image {\n        url\n      }\n      name\n      description {\n        html\n      }\n      price_range {\n        minimum_price {\n          regular_price {\n            value\n          }\n          final_price {\n            value\n          }\n        }\n      }\n      url_key\n      sku\n    }\n  }\n}": typeof types.WishlistItemsFieldFragmentDoc,
    "fragment ProductConfiguration on ConfigurableProductOptions {\n  uid\n  attribute_code\n  label\n  values {\n    uid\n    label\n    swatch_data {\n      ... on ImageSwatchData {\n        thumbnail\n      }\n      value\n    }\n  }\n}": typeof types.ProductConfigurationFragmentDoc,
};
const documents: Documents = {
    "fragment AvailableRegionsBasicData on Region {\n  id\n  name\n}": types.AvailableRegionsBasicDataFragmentDoc,
    "fragment BasicProductDataFragment on ProductInterface {\n  __typename\n  id\n  name\n  sku\n  url_key\n  small_image {\n    url\n  }\n  price_range {\n    minimum_price {\n      final_price {\n        currency\n        value\n      }\n      regular_price {\n        currency\n        value\n      }\n    }\n  }\n  special_price\n}": types.BasicProductDataFragmentFragmentDoc,
    "fragment CartCustomerBillingAddressFragment on BillingCartAddress {\n  uid\n  postcode\n  city\n  street\n  telephone\n  country {\n    code\n  }\n  firstname\n  lastname\n}": types.CartCustomerBillingAddressFragmentFragmentDoc,
    "fragment CartCustomerShippingAddressFragment on ShippingCartAddress {\n  uid\n  postcode\n  city\n  street\n  telephone\n  country {\n    code\n  }\n  region {\n    region_id\n  }\n  firstname\n  lastname\n}": types.CartCustomerShippingAddressFragmentFragmentDoc,
    "fragment CartProductFragment on ProductInterface {\n  name\n  sku\n  url_key\n  stock_status\n  image {\n    url\n  }\n  description {\n    html\n  }\n  price_range {\n    minimum_price {\n      regular_price {\n        value\n      }\n    }\n  }\n}": types.CartProductFragmentFragmentDoc,
    "fragment AddressFragment on CustomerAddress {\n  id\n  city\n  postcode\n  country_code\n  street\n  default_billing\n  default_shipping\n  firstname\n  lastname\n  middlename\n  telephone\n}": types.AddressFragmentFragmentDoc,
    "fragment CustomerAddressField on CustomerAddress {\n  id\n  firstname\n  lastname\n  street\n  city\n  postcode\n  country_code\n  telephone\n  default_billing\n  default_shipping\n  region {\n    region\n    region_id\n  }\n}": types.CustomerAddressFieldFragmentDoc,
    "fragment NavigationItem on CategoryTree {\n  uid\n  include_in_menu\n  name\n  url_path\n  url_key\n  breadcrumbs {\n    category_name\n  }\n  level\n}": types.NavigationItemFragmentDoc,
    "fragment OrderAddressField on OrderAddress {\n  city\n  company\n  country_code\n  firstname\n  lastname\n  postcode\n  region\n  region_id\n  street\n  suffix\n  telephone\n  vat_id\n}": types.OrderAddressFieldFragmentDoc,
    "fragment PageInfoField on SearchResultPageInfo {\n  current_page\n  page_size\n  total_pages\n}": types.PageInfoFieldFragmentDoc,
    "fragment ProductFeatures on ProductInterface {\n  name\n  sku\n  image {\n    url\n  }\n  description {\n    html\n  }\n  media_gallery {\n    label\n    url\n  }\n  special_price\n  categories {\n    url_path\n    url_key\n    level\n    name\n    breadcrumbs {\n      category_url_path\n      category_url_key\n      category_level\n      category_name\n    }\n  }\n  price_range {\n    minimum_price {\n      regular_price {\n        value\n        currency\n      }\n      final_price {\n        value\n        currency\n      }\n    }\n  }\n  ... on ConfigurableProduct {\n    variants {\n      product {\n        name\n        sku\n        media_gallery {\n          url\n          label\n        }\n      }\n      attributes {\n        code\n        uid\n      }\n    }\n    configurable_options {\n      ...ProductConfiguration\n    }\n    configurable_product_options_selection(\n      configurableOptionValueUids: $selectedIds\n    ) {\n      options_available_for_selection {\n        attribute_code\n        option_value_uids\n      }\n    }\n  }\n}": types.ProductFeaturesFragmentDoc,
    "fragment WishlistItemsField on WishlistItems {\n  items {\n    id\n    quantity\n    product {\n      special_price\n      image {\n        url\n      }\n      name\n      description {\n        html\n      }\n      price_range {\n        minimum_price {\n          regular_price {\n            value\n          }\n          final_price {\n            value\n          }\n        }\n      }\n      url_key\n      sku\n    }\n  }\n}": types.WishlistItemsFieldFragmentDoc,
    "fragment ProductConfiguration on ConfigurableProductOptions {\n  uid\n  attribute_code\n  label\n  values {\n    uid\n    label\n    swatch_data {\n      ... on ImageSwatchData {\n        thumbnail\n      }\n      value\n    }\n  }\n}": types.ProductConfigurationFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AvailableRegionsBasicData on Region {\n  id\n  name\n}"): (typeof documents)["fragment AvailableRegionsBasicData on Region {\n  id\n  name\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment BasicProductDataFragment on ProductInterface {\n  __typename\n  id\n  name\n  sku\n  url_key\n  small_image {\n    url\n  }\n  price_range {\n    minimum_price {\n      final_price {\n        currency\n        value\n      }\n      regular_price {\n        currency\n        value\n      }\n    }\n  }\n  special_price\n}"): (typeof documents)["fragment BasicProductDataFragment on ProductInterface {\n  __typename\n  id\n  name\n  sku\n  url_key\n  small_image {\n    url\n  }\n  price_range {\n    minimum_price {\n      final_price {\n        currency\n        value\n      }\n      regular_price {\n        currency\n        value\n      }\n    }\n  }\n  special_price\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartCustomerBillingAddressFragment on BillingCartAddress {\n  uid\n  postcode\n  city\n  street\n  telephone\n  country {\n    code\n  }\n  firstname\n  lastname\n}"): (typeof documents)["fragment CartCustomerBillingAddressFragment on BillingCartAddress {\n  uid\n  postcode\n  city\n  street\n  telephone\n  country {\n    code\n  }\n  firstname\n  lastname\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartCustomerShippingAddressFragment on ShippingCartAddress {\n  uid\n  postcode\n  city\n  street\n  telephone\n  country {\n    code\n  }\n  region {\n    region_id\n  }\n  firstname\n  lastname\n}"): (typeof documents)["fragment CartCustomerShippingAddressFragment on ShippingCartAddress {\n  uid\n  postcode\n  city\n  street\n  telephone\n  country {\n    code\n  }\n  region {\n    region_id\n  }\n  firstname\n  lastname\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartProductFragment on ProductInterface {\n  name\n  sku\n  url_key\n  stock_status\n  image {\n    url\n  }\n  description {\n    html\n  }\n  price_range {\n    minimum_price {\n      regular_price {\n        value\n      }\n    }\n  }\n}"): (typeof documents)["fragment CartProductFragment on ProductInterface {\n  name\n  sku\n  url_key\n  stock_status\n  image {\n    url\n  }\n  description {\n    html\n  }\n  price_range {\n    minimum_price {\n      regular_price {\n        value\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AddressFragment on CustomerAddress {\n  id\n  city\n  postcode\n  country_code\n  street\n  default_billing\n  default_shipping\n  firstname\n  lastname\n  middlename\n  telephone\n}"): (typeof documents)["fragment AddressFragment on CustomerAddress {\n  id\n  city\n  postcode\n  country_code\n  street\n  default_billing\n  default_shipping\n  firstname\n  lastname\n  middlename\n  telephone\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CustomerAddressField on CustomerAddress {\n  id\n  firstname\n  lastname\n  street\n  city\n  postcode\n  country_code\n  telephone\n  default_billing\n  default_shipping\n  region {\n    region\n    region_id\n  }\n}"): (typeof documents)["fragment CustomerAddressField on CustomerAddress {\n  id\n  firstname\n  lastname\n  street\n  city\n  postcode\n  country_code\n  telephone\n  default_billing\n  default_shipping\n  region {\n    region\n    region_id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment NavigationItem on CategoryTree {\n  uid\n  include_in_menu\n  name\n  url_path\n  url_key\n  breadcrumbs {\n    category_name\n  }\n  level\n}"): (typeof documents)["fragment NavigationItem on CategoryTree {\n  uid\n  include_in_menu\n  name\n  url_path\n  url_key\n  breadcrumbs {\n    category_name\n  }\n  level\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderAddressField on OrderAddress {\n  city\n  company\n  country_code\n  firstname\n  lastname\n  postcode\n  region\n  region_id\n  street\n  suffix\n  telephone\n  vat_id\n}"): (typeof documents)["fragment OrderAddressField on OrderAddress {\n  city\n  company\n  country_code\n  firstname\n  lastname\n  postcode\n  region\n  region_id\n  street\n  suffix\n  telephone\n  vat_id\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PageInfoField on SearchResultPageInfo {\n  current_page\n  page_size\n  total_pages\n}"): (typeof documents)["fragment PageInfoField on SearchResultPageInfo {\n  current_page\n  page_size\n  total_pages\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductFeatures on ProductInterface {\n  name\n  sku\n  image {\n    url\n  }\n  description {\n    html\n  }\n  media_gallery {\n    label\n    url\n  }\n  special_price\n  categories {\n    url_path\n    url_key\n    level\n    name\n    breadcrumbs {\n      category_url_path\n      category_url_key\n      category_level\n      category_name\n    }\n  }\n  price_range {\n    minimum_price {\n      regular_price {\n        value\n        currency\n      }\n      final_price {\n        value\n        currency\n      }\n    }\n  }\n  ... on ConfigurableProduct {\n    variants {\n      product {\n        name\n        sku\n        media_gallery {\n          url\n          label\n        }\n      }\n      attributes {\n        code\n        uid\n      }\n    }\n    configurable_options {\n      ...ProductConfiguration\n    }\n    configurable_product_options_selection(\n      configurableOptionValueUids: $selectedIds\n    ) {\n      options_available_for_selection {\n        attribute_code\n        option_value_uids\n      }\n    }\n  }\n}"): (typeof documents)["fragment ProductFeatures on ProductInterface {\n  name\n  sku\n  image {\n    url\n  }\n  description {\n    html\n  }\n  media_gallery {\n    label\n    url\n  }\n  special_price\n  categories {\n    url_path\n    url_key\n    level\n    name\n    breadcrumbs {\n      category_url_path\n      category_url_key\n      category_level\n      category_name\n    }\n  }\n  price_range {\n    minimum_price {\n      regular_price {\n        value\n        currency\n      }\n      final_price {\n        value\n        currency\n      }\n    }\n  }\n  ... on ConfigurableProduct {\n    variants {\n      product {\n        name\n        sku\n        media_gallery {\n          url\n          label\n        }\n      }\n      attributes {\n        code\n        uid\n      }\n    }\n    configurable_options {\n      ...ProductConfiguration\n    }\n    configurable_product_options_selection(\n      configurableOptionValueUids: $selectedIds\n    ) {\n      options_available_for_selection {\n        attribute_code\n        option_value_uids\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment WishlistItemsField on WishlistItems {\n  items {\n    id\n    quantity\n    product {\n      special_price\n      image {\n        url\n      }\n      name\n      description {\n        html\n      }\n      price_range {\n        minimum_price {\n          regular_price {\n            value\n          }\n          final_price {\n            value\n          }\n        }\n      }\n      url_key\n      sku\n    }\n  }\n}"): (typeof documents)["fragment WishlistItemsField on WishlistItems {\n  items {\n    id\n    quantity\n    product {\n      special_price\n      image {\n        url\n      }\n      name\n      description {\n        html\n      }\n      price_range {\n        minimum_price {\n          regular_price {\n            value\n          }\n          final_price {\n            value\n          }\n        }\n      }\n      url_key\n      sku\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductConfiguration on ConfigurableProductOptions {\n  uid\n  attribute_code\n  label\n  values {\n    uid\n    label\n    swatch_data {\n      ... on ImageSwatchData {\n        thumbnail\n      }\n      value\n    }\n  }\n}"): (typeof documents)["fragment ProductConfiguration on ConfigurableProductOptions {\n  uid\n  attribute_code\n  label\n  values {\n    uid\n    label\n    swatch_data {\n      ... on ImageSwatchData {\n        thumbnail\n      }\n      value\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;