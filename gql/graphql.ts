/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Defines the bundle products to add to the cart. */
export type AddBundleProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of bundle products to add. */
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

/** Contains details about the cart after adding bundle products. */
export type AddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Defines the configurable products to add to the cart. */
export type AddConfigurableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of configurable products to add. */
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

/** Contains details about the cart after adding configurable products. */
export type AddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

export type AddDownloadableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of downloadable products to add. */
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

/** Contains details about the cart after adding downloadable products. */
export type AddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains details about the cart after adding products to it. */
export type AddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput';
  /** The cart after products have been added. */
  cart: Cart;
  /** Contains errors encountered while adding an item to the cart. */
  user_errors: Array<Maybe<CartUserInputError>>;
};

/** Contains products to add to an existing compare list. */
export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input'];
};

/** Contains the customer's wish list and any errors encountered. */
export type AddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput';
  /** An array of errors encountered while adding products to a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

/** Defines the simple and group products to add to the cart. */
export type AddSimpleProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of simple and group items to add. */
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

/** Contains details about the cart after adding simple or group products. */
export type AddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Defines the virtual products to add to the cart. */
export type AddVirtualProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of virtual products to add. */
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

/** Contains details about the cart after adding virtual products. */
export type AddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains the resultant wish list and any error information. */
export type AddWishlistItemsToCartOutput = {
  __typename?: 'AddWishlistItemsToCartOutput';
  /** An array of errors encountered while adding products to the customer's cart. */
  add_wishlist_items_to_cart_user_errors: Array<Maybe<WishlistCartUserInputError>>;
  /** Indicates whether the attempt to add items to the customer's cart was successful. */
  status: Scalars['Boolean']['output'];
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

/** Contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type Aggregation = {
  __typename?: 'Aggregation';
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String']['output'];
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']['output']>;
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<AggregationOption>>>;
  /** The relative position of the attribute in a layered navigation block. */
  position?: Maybe<Scalars['Int']['output']>;
};

/** An implementation of `AggregationOptionInterface`. */
export type AggregationOption = AggregationOptionInterface & {
  __typename?: 'AggregationOption';
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output'];
};

/** Defines aggregation option fields. */
export type AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output'];
};

/** Filter category aggregations in layered navigation. */
export type AggregationsCategoryFilterInput = {
  /** Indicates whether to include only direct subcategories or all children categories at all levels. */
  includeDirectChildrenOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An input object that specifies the filters used in product aggregations. */
export type AggregationsFilterInput = {
  /** Filter category aggregations in layered navigation. */
  category?: InputMaybe<AggregationsCategoryFilterInput>;
};

export enum AktywnoscTowaru {
  /** @deprecated  */
  Aktywny = 'Aktywny',
  /** @deprecated  */
  DoUruchomienia = 'DoUruchomienia',
  /** @deprecated  */
  Nieaktywny = 'Nieaktywny',
  /** @deprecated  */
  Nieznana = 'Nieznana'
}

export type ApiChodliwoscModel = {
  __typename?: 'ApiChodliwoscModel';
  Chodliwosc1?: Maybe<Scalars['Int']['output']>;
  Chodliwosc2?: Maybe<Scalars['Int']['output']>;
  ChodliwoscZlozona?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
};

/** Contains the applied coupon code. */
export type AppliedCoupon = {
  __typename?: 'AppliedCoupon';
  /** The coupon code the shopper applied to the card. */
  code: Scalars['String']['output'];
};

/** Specifies the coupon code to apply to the cart. */
export type ApplyCouponToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** A valid coupon code. */
  coupon_code: Scalars['String']['input'];
};

/** Contains details about the cart after applying a coupon. */
export type ApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput';
  /** The cart after applying a coupon. */
  cart: Cart;
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars['Int']['input'];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String']['input'];
};

/** Contains the results of the request to assign a compare list. */
export type AssignCompareListToCustomerOutput = {
  __typename?: 'AssignCompareListToCustomerOutput';
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<CompareList>;
  /** Indicates whether the compare list was successfully assigned to the customer. */
  result: Scalars['Boolean']['output'];
};

export enum AtrybutFiltrWarunek {
  /** @deprecated  */
  MniejszyLubRowny = 'MniejszyLubRowny',
  /** @deprecated  */
  MniejszyNiz = 'MniejszyNiz',
  /** @deprecated  */
  Rowny = 'Rowny',
  /** @deprecated  */
  Rozny = 'Rozny',
  /** @deprecated  */
  WiekszyLubRowny = 'WiekszyLubRowny',
  /** @deprecated  */
  WiekszyNiz = 'WiekszyNiz'
}

export type AtrybutFiltrZapytanieModel = {
  DefinicjaAtrybutuSzukana?: InputMaybe<SzukanyRekordModel>;
  Wartosc?: InputMaybe<Scalars['String']['input']>;
  Warunek?: InputMaybe<AtrybutFiltrWarunek>;
};

export type AtrybutyFiltryZapytanieModel = {
  Filtry?: InputMaybe<Array<InputMaybe<AtrybutFiltrZapytanieModel>>>;
};

/** Contains details about the attribute, including the code and type. */
export type Attribute = {
  __typename?: 'Attribute';
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
  /** The data type of the attribute. */
  attribute_type?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  input_type?: Maybe<Scalars['String']['output']>;
  /** Details about the storefront properties configured for the attribute. */
  storefront_properties?: Maybe<StorefrontProperties>;
};

/** Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search. */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars['String']['input']>;
  /** The type of entity that defines the attribute. */
  entity_type?: InputMaybe<Scalars['String']['input']>;
};

/** Defines an attribute option. */
export type AttributeOption = {
  __typename?: 'AttributeOption';
  /** The label assigned to the attribute option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The attribute option value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Describes a payment method that the shopper can use to pay for the order. */
export type AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod';
  /** The payment method code. */
  code: Scalars['String']['output'];
  /** If the payment method is an online integration */
  is_deferred: Scalars['Boolean']['output'];
  /** Available issuers for this payment method */
  mollie_available_issuers?: Maybe<Array<Maybe<MollieIssuer>>>;
  /** Available terminals for this payment method */
  mollie_available_terminals?: Maybe<Array<Maybe<MollieTerminalOutput>>>;
  /** Retrieve meta information for this payment method (image) */
  mollie_meta: MolliePaymentMethodMeta;
  /** The payment method title. */
  title: Scalars['String']['output'];
};

/** Contains details about the possible shipping methods and carriers. */
export type AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod';
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** Indicates whether this shipping method can be applied to the cart. */
  available: Scalars['Boolean']['output'];
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output'];
  /** Describes an error condition. */
  error_message?: Maybe<Scalars['String']['output']>;
  /** A shipping method code associated with a carrier. The value could be null if no method is available. */
  method_code?: Maybe<Scalars['String']['output']>;
  /** The label for the shipping method code. The value could be null if no method is available. */
  method_title?: Maybe<Scalars['String']['output']>;
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

export enum BatchMutationStatus {
  /** @deprecated  */
  Failure = 'FAILURE',
  /** @deprecated  */
  MixedResults = 'MIXED_RESULTS',
  /** @deprecated  */
  Success = 'SUCCESS'
}

export enum BezStanowZerowychWzgledem {
  /** @deprecated  */
  StanHandlowy = 'StanHandlowy',
  /** @deprecated  */
  StanRzeczywisty = 'StanRzeczywisty'
}

/** Defines the billing address. */
export type BillingAddressInput = {
  /** Defines a billing address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for billing. */
  customer_address_id?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
  same_as_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates whether to set the shipping address to be the same as this billing address. */
  use_for_shipping?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains details about the billing address. */
export type BillingCartAddress = CartAddressInterface & {
  __typename?: 'BillingCartAddress';
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** @deprecated The field is used only in shipping address. */
  customer_notes?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

export type BraintreeCcVaultInput = {
  device_data?: InputMaybe<Scalars['String']['input']>;
  public_hash: Scalars['String']['input'];
};

export type BraintreeInput = {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. */
  device_data?: InputMaybe<Scalars['String']['input']>;
  /** States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. */
  is_active_payment_token_enabler: Scalars['Boolean']['input'];
  /** The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. */
  payment_method_nonce: Scalars['String']['input'];
};

/** Contains details about an individual category that comprises a breadcrumb. */
export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /**
   * The ID of the category.
   * @deprecated Use `category_uid` instead.
   */
  category_id?: Maybe<Scalars['Int']['output']>;
  /** The category level. */
  category_level?: Maybe<Scalars['Int']['output']>;
  /** The display name of the category. */
  category_name?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID']['output'];
  /** The URL key of the category. */
  category_url_key?: Maybe<Scalars['String']['output']>;
  /** The URL path of the category. */
  category_url_path?: Maybe<Scalars['String']['output']>;
};

/** An implementation for bundle product cart items. */
export type BundleCartItem = CartItemInterface & {
  __typename?: 'BundleCartItem';
  /** An array containing the bundle options the shopper selected. */
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines bundle product options for `CreditMemoItemInterface`. */
export type BundleCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem';
  /** A list of bundle options that are assigned to a bundle product that is part of a credit memo. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** Defines bundle product options for `InvoiceItemInterface`. */
export type BundleInvoiceItem = InvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem';
  /** A list of bundle options that are assigned to an invoiced bundle product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Defines an individual item within a bundle product. */
export type BundleItem = {
  __typename?: 'BundleItem';
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<BundleItemOption>>>;
  /** A number indicating the sequence order of this item compared to the other bundle items. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** Indicates whether the item must be included in the bundle. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The SKU of the bundle product. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The display name of the item. */
  title?: Maybe<Scalars['String']['output']>;
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `BundleItem` object. */
  uid?: Maybe<Scalars['ID']['output']>;
};

/** Defines the characteristics that comprise a specific bundle item and its options. */
export type BundleItemOption = {
  __typename?: 'BundleItemOption';
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether this option is the default option. */
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /** The text that identifies the bundled item option. */
  label?: Maybe<Scalars['String']['output']>;
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The price of the selected option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** Contains details about this product option. */
  product?: Maybe<ProductInterface>;
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated Use `quantity` instead.
   */
  qty?: Maybe<Scalars['Float']['output']>;
  /** The quantity of this specific bundle item. */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID']['output'];
};

/** Defines the input for a bundle option. */
export type BundleOptionInput = {
  /** The ID of the option. */
  id: Scalars['Int']['input'];
  /** The number of the selected item to add to the cart. */
  quantity: Scalars['Float']['input'];
  /** An array with the chosen value of the option. */
  value: Array<InputMaybe<Scalars['String']['input']>>;
};

/** Defines bundle product options for `OrderItemInterface`. */
export type BundleOrderItem = OrderItemInterface & {
  __typename?: 'BundleOrderItem';
  /** A list of bundle options that are assigned to the bundle product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'BundleProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the bundle product has a dynamic SKU. */
  dynamic_sku?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing information about individual bundle items. */
  items?: Maybe<Array<Maybe<BundleItem>>>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view?: Maybe<PriceViewEnum>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single bundle product. */
export type BundleProductCartItemInput = {
  /** A mandatory array of options for the bundle product, including each chosen option and specified quantity. */
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the bundle product. */
  data: CartItemInput;
};

/** Defines bundle product options for `ShipmentItemInterface`. */
export type BundleShipmentItem = ShipmentItemInterface & {
  __typename?: 'BundleShipmentItem';
  /** A list of bundle options that are assigned to a shipped product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Defines bundle product options for `WishlistItemInterface`. */
export type BundleWishlistItem = WishlistItemInterface & {
  __typename?: 'BundleWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** An array containing information about the selected bundle items. */
  bundle_options?: Maybe<Array<Maybe<SelectedBundleOption>>>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains the contents and other details about a guest or customer cart. */
export type Cart = {
  __typename?: 'Cart';
  /** @deprecated Use `applied_coupons` instead. */
  applied_coupon?: Maybe<AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code. */
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** An array of available payment methods. */
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  /** The billing address assigned to the cart. */
  billing_address?: Maybe<BillingCartAddress>;
  /** The email address of the guest or customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** The entered gift message for the cart */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for a `Cart` object. */
  id: Scalars['ID']['output'];
  /** Selected Inpost locker Id */
  inpost_locker_id?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the cart contains only virtual products. */
  is_virtual: Scalars['Boolean']['output'];
  /** An array of products that have been added to the cart. */
  items?: Maybe<Array<Maybe<CartItemInterface>>>;
  /** Available issuers for the selected payment method */
  mollie_available_issuers?: Maybe<Array<Maybe<MollieIssuer>>>;
  /** Pricing details for the quote. */
  prices?: Maybe<CartPrices>;
  /** Indicates which payment method was applied to the cart. */
  selected_payment_method?: Maybe<SelectedPaymentMethod>;
  /** An array of shipping addresses assigned to the cart. */
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  /** The total number of items in the cart. */
  total_quantity: Scalars['Float']['output'];
};

/** Contains details the country in a billing or shipping address. */
export type CartAddressCountry = {
  __typename?: 'CartAddressCountry';
  /** The country code. */
  code: Scalars['String']['output'];
  /** The display label for the country. */
  label: Scalars['String']['output'];
};

/** Defines the billing or shipping address to be applied to the cart. */
export type CartAddressInput = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['input'];
  /** The company specified for the billing or shipping address. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The country code and label for the billing or shipping address. */
  country_code: Scalars['String']['input'];
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['input'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['input'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** A string that defines the state or province of the billing or shipping address. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** An integer that defines the state or province of the billing or shipping address. */
  region_id?: InputMaybe<Scalars['Int']['input']>;
  /** Determines whether to save the address in the customer's address book. The default value is true. */
  save_in_address_book?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<InputMaybe<Scalars['String']['input']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** The VAT company number for billing or shipping address. */
  vat_id?: InputMaybe<Scalars['String']['input']>;
};

export type CartAddressInterface = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Contains details about the region in a billing or shipping address. */
export type CartAddressRegion = {
  __typename?: 'CartAddressRegion';
  /** The state or province code. */
  code?: Maybe<Scalars['String']['output']>;
  /** The display label for the region. */
  label?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
};

/** Contains information about discounts applied to the cart. */
export type CartDiscount = {
  __typename?: 'CartDiscount';
  /** The amount of the discount applied to the item. */
  amount: Money;
  /** The description of the discount. */
  label: Array<Maybe<Scalars['String']['output']>>;
};

export type CartItemError = {
  __typename?: 'CartItemError';
  /** An error code that describes the error encountered */
  code: CartItemErrorType;
  /** A localized error message */
  message: Scalars['String']['output'];
};

export enum CartItemErrorType {
  /** @deprecated  */
  ItemIncrements = 'ITEM_INCREMENTS',
  /** @deprecated  */
  ItemQty = 'ITEM_QTY',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Defines an item to be added to the cart. */
export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For a child product, the SKU of its parent product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** The amount or number of an item to add. */
  quantity: Scalars['Float']['input'];
  /** The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The SKU of the product. */
  sku: Scalars['String']['input'];
};

/** An interface for products in a cart. */
export type CartItemInterface = {
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Contains details about the price of the item, including taxes and discounts. */
export type CartItemPrices = {
  __typename?: 'CartItemPrices';
  /** An array of discounts to be applied to the cart item. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** An array of FPTs applied to the cart item. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price: Money;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price_including_tax: Money;
  /** The value of the price multiplied by the quantity of the item. */
  row_total: Money;
  /** The value of `row_total` plus the tax applied to the item. */
  row_total_including_tax: Money;
  /** The total of all discounts applied to the item. */
  total_item_discount?: Maybe<Money>;
};

/** Deprecated: The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
export type CartItemQuantity = {
  __typename?: 'CartItemQuantity';
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  cart_item_id: Scalars['Int']['output'];
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  quantity: Scalars['Float']['output'];
};

/** Contains details about the price of a selected customizable value. */
export type CartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice';
  /** Indicates whether the price type is fixed, percent, or dynamic. */
  type: PriceTypeEnum;
  /** A string that describes the unit of the value. */
  units: Scalars['String']['output'];
  /** A price value. */
  value: Scalars['Float']['output'];
};

/** A single item to be updated. */
export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** The new quantity of the item. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

/** Contains details about the final price of items in the cart, including discount and tax information. */
export type CartPrices = {
  __typename?: 'CartPrices';
  /** An array containing the names and amounts of taxes applied to each item in the cart. */
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
  /** @deprecated Use discounts instead. */
  discount?: Maybe<CartDiscount>;
  /** An array containing cart rule discounts, store credit and gift cards applied to the cart. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The total, including discounts, taxes, shipping, and other fees. */
  grand_total?: Maybe<Money>;
  mollie_payment_fee?: Maybe<MolliePaymentFee>;
  /** The subtotal without any applied taxes. */
  subtotal_excluding_tax?: Maybe<Money>;
  /** The subtotal including any applied taxes. */
  subtotal_including_tax?: Maybe<Money>;
  /** The subtotal with any discounts applied, but not taxes. */
  subtotal_with_discount_excluding_tax?: Maybe<Money>;
};

/** Contains tax information about an item in the cart. */
export type CartTaxItem = {
  __typename?: 'CartTaxItem';
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The description of the tax. */
  label: Scalars['String']['output'];
};

/** An error encountered while adding an item to the the cart. */
export type CartUserInputError = {
  __typename?: 'CartUserInputError';
  /** A cart-specific error code. */
  code: CartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

export enum CartUserInputErrorType {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An array of breadcrumb items. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  children_count?: Maybe<Scalars['String']['output']>;
  /** Contains a category CMS block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  custom_layout_update_file?: Maybe<Scalars['String']['output']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']['output']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']['output']>;
  display_mode?: Maybe<Scalars['String']['output']>;
  filter_price_range?: Maybe<Scalars['Float']['output']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  include_in_menu?: Maybe<Scalars['Int']['output']>;
  is_anchor?: Maybe<Scalars['Int']['output']>;
  landing_page?: Maybe<Scalars['Int']['output']>;
  /** The depth of the category within the tree. */
  level?: Maybe<Scalars['Int']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']['output']>;
  /** The full category path. */
  path?: Maybe<Scalars['String']['output']>;
  /** The category path within the store. */
  path_in_store?: Maybe<Scalars['String']['output']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']['output']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** The URL key assigned to the category. */
  url_key?: Maybe<Scalars['String']['output']>;
  /** The URL path assigned to the category. */
  url_path?: Maybe<Scalars['String']['output']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  vendo_group_id?: Maybe<Scalars['Int']['output']>;
  vendo_status_id?: Maybe<Scalars['Int']['output']>;
};


/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterfaceProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** Contains details about the products assigned to a category. */
export type CategoryProducts = {
  __typename?: 'CategoryProducts';
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Contains a collection of `CategoryTree` objects and pagination information. */
export type CategoryResult = {
  __typename?: 'CategoryResult';
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<CategoryTree>>>;
  /** An object that includes the `page_info` and `currentPage` values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Contains the hierarchy of categories. */
export type CategoryTree = CategoryInterface & RoutableInterface & {
  __typename?: 'CategoryTree';
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An array of breadcrumb items. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** A tree of child categories. */
  children?: Maybe<Array<Maybe<CategoryTree>>>;
  children_count?: Maybe<Scalars['String']['output']>;
  /** Contains a category CMS block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  custom_layout_update_file?: Maybe<Scalars['String']['output']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']['output']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']['output']>;
  display_mode?: Maybe<Scalars['String']['output']>;
  filter_price_range?: Maybe<Scalars['Float']['output']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  include_in_menu?: Maybe<Scalars['Int']['output']>;
  is_anchor?: Maybe<Scalars['Int']['output']>;
  landing_page?: Maybe<Scalars['Int']['output']>;
  /** The depth of the category within the tree. */
  level?: Maybe<Scalars['Int']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']['output']>;
  /** The full category path. */
  path?: Maybe<Scalars['String']['output']>;
  /** The category path within the store. */
  path_in_store?: Maybe<Scalars['String']['output']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']['output']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** The URL key assigned to the category. */
  url_key?: Maybe<Scalars['String']['output']>;
  /** The URL path assigned to the category. */
  url_path?: Maybe<Scalars['String']['output']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  vendo_group_id?: Maybe<Scalars['Int']['output']>;
  vendo_status_id?: Maybe<Scalars['Int']['output']>;
};


/** Contains the hierarchy of categories. */
export type CategoryTreeProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

export type CechaTowaruModel = {
  __typename?: 'CechaTowaruModel';
  Nazwa?: Maybe<Scalars['String']['output']>;
  Wartosc?: Maybe<Scalars['String']['output']>;
};

export type CenaDlaKlientaModel = {
  __typename?: 'CenaDlaKlientaModel';
  CennikPoRabacie?: Maybe<CennikModel>;
  CennikPrzedRabatem?: Maybe<CennikModel>;
  Jednostka?: Maybe<RekordModel>;
  ProcentRabatu?: Maybe<Scalars['Float']['output']>;
};

export enum CenaIndywidualnaDataTyp {
  /** @deprecated  */
  Rozpoczecia = 'Rozpoczecia',
  /** @deprecated  */
  Utworzenia = 'Utworzenia',
  /** @deprecated  */
  Zakonczenia = 'Zakonczenia'
}

export type CenaIndywidualnaMModel = {
  __typename?: 'CenaIndywidualnaMModel';
  DataDo?: Maybe<Scalars['String']['output']>;
  DataOd?: Maybe<Scalars['String']['output']>;
  Grupy1Id?: Maybe<Scalars['Int']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  KlientId?: Maybe<Scalars['Int']['output']>;
  OdIlosci?: Maybe<Scalars['Float']['output']>;
  TowarId?: Maybe<Scalars['Int']['output']>;
  TowarKod?: Maybe<Scalars['String']['output']>;
  Upust?: Maybe<Scalars['Float']['output']>;
  UpustKwota?: Maybe<Scalars['Float']['output']>;
  UpustProcent?: Maybe<Scalars['Float']['output']>;
  WalutaId?: Maybe<Scalars['Int']['output']>;
  WalutaKod?: Maybe<Scalars['String']['output']>;
};

export type CenaIndywidualnaModel = {
  __typename?: 'CenaIndywidualnaModel';
  AkcjaID?: Maybe<Scalars['Int']['output']>;
  CzasDo?: Maybe<Scalars['String']['output']>;
  CzasOd?: Maybe<Scalars['String']['output']>;
  CzyPromocja?: Maybe<Scalars['Boolean']['output']>;
  CzyTylkoDlaKlientowAkcjiMarketingowej?: Maybe<Scalars['Boolean']['output']>;
  DataUtworzenia?: Maybe<Scalars['String']['output']>;
  DlaSprzedazy?: Maybe<Scalars['Boolean']['output']>;
  FormaPlatnosciID?: Maybe<Scalars['Int']['output']>;
  FormaPlatnosciNazwa?: Maybe<Scalars['String']['output']>;
  Grupa1?: Maybe<Scalars['Int']['output']>;
  Grupa1Nazwa?: Maybe<Scalars['String']['output']>;
  GrupaCenID?: Maybe<Scalars['Int']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  JednostkaAlternatywnaOpakowaniaID?: Maybe<Scalars['Int']['output']>;
  JednostkaID?: Maybe<Scalars['Int']['output']>;
  KlientID?: Maybe<Scalars['Int']['output']>;
  KlientKod?: Maybe<Scalars['String']['output']>;
  KlientNazwa?: Maybe<Scalars['String']['output']>;
  OdIlosci?: Maybe<Scalars['Float']['output']>;
  Poziom?: Maybe<Scalars['Int']['output']>;
  ProcesSprzedazyID?: Maybe<Scalars['Int']['output']>;
  Rodzaj?: Maybe<CenaIndywidualnaRodzaj>;
  RodzajKlientaID?: Maybe<Scalars['Int']['output']>;
  RodzajKlientaNazwa?: Maybe<Scalars['String']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  TowarKod?: Maybe<Scalars['String']['output']>;
  TowarNazwa?: Maybe<Scalars['String']['output']>;
  Tworca?: Maybe<RekordModel>;
  Typ?: Maybe<CenaIndywidualnaTyp>;
  TypAplikacji?: Maybe<Scalars['Int']['output']>;
  TypSprzedazyZakupu?: Maybe<Scalars['Int']['output']>;
  Upust?: Maybe<Scalars['Float']['output']>;
  UpustBrutto?: Maybe<Scalars['Float']['output']>;
  Waluta?: Maybe<RekordModel>;
};

export enum CenaIndywidualnaRodzaj {
  /** @deprecated  */
  Obnizenie = 'Obnizenie',
  /** @deprecated  */
  UpustProcentowy = 'UpustProcentowy',
  /** @deprecated  */
  UstalonaCena = 'UstalonaCena'
}

export enum CenaIndywidualnaTyp {
  /** @deprecated  */
  CenyReferencyjne = 'CenyReferencyjne',
  /** @deprecated  */
  Sprzedaz = 'Sprzedaz',
  /** @deprecated  */
  TransakcjeOdwrotne = 'TransakcjeOdwrotne',
  /** @deprecated  */
  Zakup = 'Zakup'
}

export type CenaIndywidualnaZapytanieModel = {
  AkcjaMarketingowaID?: InputMaybe<Scalars['Int']['input']>;
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  CzySynchronizacja?: InputMaybe<Scalars['Boolean']['input']>;
  DataCzasModyfikacji?: InputMaybe<Scalars['String']['input']>;
  DataDo?: InputMaybe<Scalars['String']['input']>;
  DataOd?: InputMaybe<Scalars['String']['input']>;
  DataTyp?: InputMaybe<CenaIndywidualnaDataTyp>;
  DlaSprzedazy?: InputMaybe<Scalars['Boolean']['input']>;
  FiltrUniwersalny?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalnyPola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Grupy1ID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  KlienciID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  OstatniaSynchronizacjaDataCzas?: InputMaybe<Scalars['String']['input']>;
  RodzajeKlientaID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  TowaryID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TylkoPodsumowanie?: InputMaybe<Scalars['Boolean']['input']>;
  Typ?: InputMaybe<CenaIndywidualnaTyp>;
  ZsynchronizawaneID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ZwracanePola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaParametry?: InputMaybe<Array<InputMaybe<ZwracanePoleParametrModel>>>;
};

export type CenaMModel = {
  __typename?: 'CenaMModel';
  CenaBrutto?: Maybe<Scalars['Float']['output']>;
  CenaNetto?: Maybe<Scalars['Float']['output']>;
  CzyDomyslna?: Maybe<Scalars['Boolean']['output']>;
  DataModyfikacji?: Maybe<Scalars['String']['output']>;
  GrupyCenId?: Maybe<Scalars['Int']['output']>;
  GrupyCenKod?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  TowarEAN?: Maybe<Scalars['String']['output']>;
  TowarId?: Maybe<Scalars['Int']['output']>;
  TowarKod?: Maybe<Scalars['String']['output']>;
  WalutaId?: Maybe<Scalars['Int']['output']>;
  WalutaKod?: Maybe<Scalars['String']['output']>;
};

export type CenaTowaruModel = {
  __typename?: 'CenaTowaruModel';
  Ceny?: Maybe<Array<Maybe<CennikModel>>>;
  TowarID?: Maybe<Scalars['Int']['output']>;
};

export type CenaTowaruZapytanieModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  DataCzasModyfikacji?: InputMaybe<Scalars['String']['input']>;
  GrupyCen?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  Towary?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  WalutaCen?: InputMaybe<SzukanyRekordModel>;
};

export type CennikModel = {
  __typename?: 'CennikModel';
  CenaBrutto?: Maybe<Scalars['Float']['output']>;
  CenaNetto?: Maybe<Scalars['Float']['output']>;
  Domyslny?: Maybe<Scalars['Boolean']['output']>;
  GrupaCen?: Maybe<RekordModel>;
  ID?: Maybe<Scalars['Int']['output']>;
  Waluta?: Maybe<RekordModel>;
};

export type CenyApiCenyHandloweWyjscieModel = {
  __typename?: 'CenyApiCenyHandloweWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaCenaMModel>;
};

export type CenyApiCenyIndywidualneWyjscieModel = {
  __typename?: 'CenyApiCenyIndywidualneWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaCenaIndywidualnaMModel>;
};

export type CenyHandloweModelInModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  DataModyfikacji?: InputMaybe<Scalars['String']['input']>;
  Filtry?: InputMaybe<FiltryChModel>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type CenyIndiwidualneModelInModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  DataDo?: InputMaybe<Scalars['String']['input']>;
  DataOd?: InputMaybe<Scalars['String']['input']>;
  Filtry?: InputMaybe<FiltryCiModel>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type CenyIndywidualneResult = {
  __typename?: 'CenyIndywidualneResult';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaRekordowCenaIndywidualnaModel>;
};

export type CenyResult = {
  __typename?: 'CenyResult';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaRekordowTowarCenaModel>;
};

export type CenyWynikoweModel = {
  __typename?: 'CenyWynikoweModel';
  CenaBrutto?: Maybe<Scalars['Float']['output']>;
  CenaBrutto0?: Maybe<Scalars['Float']['output']>;
  CenaNetto?: Maybe<Scalars['Float']['output']>;
  CenaNetto0?: Maybe<Scalars['Float']['output']>;
  Ilosc?: Maybe<Scalars['Float']['output']>;
  KlientID?: Maybe<Scalars['Int']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  Upust?: Maybe<Scalars['Float']['output']>;
  WalutaID?: Maybe<Scalars['Int']['output']>;
};

export type CenyWynikoweZapytanieModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  DlaSprzedazy?: InputMaybe<Scalars['Boolean']['input']>;
  DokumentID?: InputMaybe<Scalars['Int']['input']>;
  KlienciID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Klient?: InputMaybe<SzukanyRekordModel>;
  NaDzien?: InputMaybe<Scalars['String']['input']>;
  Oddzial?: InputMaybe<SzukanyRekordModel>;
  ProcesSprzedazy?: InputMaybe<SzukanyRekordModel>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  Towary?: InputMaybe<Array<InputMaybe<SzukanaCenaWynikowaModel>>>;
  WalutaCen?: InputMaybe<SzukanyRekordModel>;
  ZrodloDokumentu?: InputMaybe<ZrodloDokumentu>;
};

/** Defines details about an individual checkout agreement. */
export type CheckoutAgreement = {
  __typename?: 'CheckoutAgreement';
  /** The ID for a checkout agreement. */
  agreement_id: Scalars['Int']['output'];
  /** The checkbox text for the checkout agreement. */
  checkbox_text: Scalars['String']['output'];
  /** Required. The text of the agreement. */
  content: Scalars['String']['output'];
  /** The height of the text box where the Terms and Conditions statement appears during checkout. */
  content_height?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the `content` text is in HTML format. */
  is_html: Scalars['Boolean']['output'];
  /** Indicates whether agreements are accepted automatically or manually. */
  mode: CheckoutAgreementMode;
  /** The name given to the condition. */
  name: Scalars['String']['output'];
};

/** Indicates how agreements are accepted. */
export enum CheckoutAgreementMode {
  /**
   * Conditions are automatically accepted upon checkout.
   * @deprecated
   */
  Auto = 'AUTO',
  /**
   * Shoppers must manually accept the conditions to place an order.
   * @deprecated
   */
  Manual = 'MANUAL'
}

/** An error encountered while adding an item to the cart. */
export type CheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError';
  /** An error code that is specific to Checkout. */
  code: CheckoutUserInputErrorCodes;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']['output']>>;
};

export enum CheckoutUserInputErrorCodes {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  ReorderNotAvailable = 'REORDER_NOT_AVAILABLE',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

export enum Chodliwosc {
  /** @deprecated  */
  ChodliwoscA = 'ChodliwoscA',
  /** @deprecated  */
  ChodliwoscB = 'ChodliwoscB',
  /** @deprecated  */
  ChodliwoscC = 'ChodliwoscC',
  /** @deprecated  */
  ChodliwoscD = 'ChodliwoscD'
}

export enum ChodliwoscIi {
  /** @deprecated  */
  ChodliwoscX = 'ChodliwoscX',
  /** @deprecated  */
  ChodliwoscY = 'ChodliwoscY',
  /** @deprecated  */
  ChodliwoscZ = 'ChodliwoscZ'
}

/** Contains details about a specific CMS block. */
export type CmsBlock = {
  __typename?: 'CmsBlock';
  /** The content of the CMS block in raw HTML. */
  content?: Maybe<Scalars['String']['output']>;
  /** The CMS block identifier. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** The title assigned to the CMS block. */
  title?: Maybe<Scalars['String']['output']>;
};

/** Contains an array CMS block items. */
export type CmsBlocks = {
  __typename?: 'CmsBlocks';
  /** An array of CMS blocks. */
  items?: Maybe<Array<Maybe<CmsBlock>>>;
};

/** Contains details about a CMS page. */
export type CmsPage = RoutableInterface & {
  __typename?: 'CmsPage';
  /** The content of the CMS page in raw HTML. */
  content?: Maybe<Scalars['String']['output']>;
  /** The heading that displays at the top of the CMS page. */
  content_heading?: Maybe<Scalars['String']['output']>;
  /** The ID of a CMS page. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** A brief description of the page for search results listings. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A brief description of the page for search results listings. */
  meta_keywords?: Maybe<Scalars['String']['output']>;
  /** A page title that is indexed by search engines and appears in search results listings. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The design layout of the page, indicating the number of columns and navigation features used on the page. */
  page_layout?: Maybe<Scalars['String']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The name that appears in the breadcrumb trail navigation and in the browser title bar and tab. */
  title?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The URL key of the CMS page, which is often based on the `content_heading`. */
  url_key?: Maybe<Scalars['String']['output']>;
};

export type ColorSwatchData = SwatchDataInterface & {
  __typename?: 'ColorSwatchData';
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Contains an attribute code that is used for product comparisons. */
export type ComparableAttribute = {
  __typename?: 'ComparableAttribute';
  /** An attribute code that is enabled for product comparisons. */
  code: Scalars['String']['output'];
  /** The label of the attribute code. */
  label: Scalars['String']['output'];
};

/** Defines an object used to iterate through items for product comparisons. */
export type ComparableItem = {
  __typename?: 'ComparableItem';
  /** An array of product attributes that can be used to compare products. */
  attributes: Array<Maybe<ProductAttribute>>;
  /** Details about a product in a compare list. */
  product: ProductInterface;
  /** The unique ID of an item in a compare list. */
  uid: Scalars['ID']['output'];
};

/** Contains iterable information such as the array of items, the count, and attributes that represent the compare list. */
export type CompareList = {
  __typename?: 'CompareList';
  /** An array of attributes that can be used for comparing products. */
  attributes?: Maybe<Array<Maybe<ComparableAttribute>>>;
  /** The number of items in the compare list. */
  item_count: Scalars['Int']['output'];
  /** An array of products to compare. */
  items?: Maybe<Array<Maybe<ComparableItem>>>;
  /** The unique ID assigned to the compare list. */
  uid: Scalars['ID']['output'];
};

export type ComplexTextValue = {
  __typename?: 'ComplexTextValue';
  /** Text that can contain HTML tags. */
  html: Scalars['String']['output'];
};

/** Contains details about a configurable product attribute option. */
export type ConfigurableAttributeOption = {
  __typename?: 'ConfigurableAttributeOption';
  /** The ID assigned to the attribute. */
  code?: Maybe<Scalars['String']['output']>;
  /** A string that describes the configurable attribute option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ConfigurableAttributeOption` object. */
  uid: Scalars['ID']['output'];
  /** A unique index number assigned to the configurable product option. */
  value_index?: Maybe<Scalars['Int']['output']>;
};

/** An implementation for configurable product cart items. */
export type ConfigurableCartItem = CartItemInterface & {
  __typename?: 'ConfigurableCartItem';
  /** An array containing the configuranle options the shopper selected. */
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  /** Product details of the cart item. */
  configured_variant: ProductInterface;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Describes configurable options that have been selected and can be selected as a result of the previous selections. */
export type ConfigurableOptionAvailableForSelection = {
  __typename?: 'ConfigurableOptionAvailableForSelection';
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output'];
  /** An array of selectable option value IDs. */
  option_value_uids: Array<Maybe<Scalars['ID']['output']>>;
};

/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'ConfigurableProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** An array of options for the configurable product. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  /** An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options. */
  configurable_product_options_selection?: Maybe<ConfigurableProductOptionsSelection>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** An array of simple product variants. */
  variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductConfigurable_Product_Options_SelectionArgs = {
  configurableOptionValueUids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type ConfigurableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the configurable product. */
  data: CartItemInput;
  /** The SKU of the parent configurable product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated. Use `CartItemInput.sku` instead. */
  variant_sku?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about configurable product options. */
export type ConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption';
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output'];
  /** The display name of the option. */
  label: Scalars['String']['output'];
  /** The unique ID of the configurable option. */
  uid: Scalars['ID']['output'];
  /** An array of values that are applicable for this option. */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>;
};

/** Defines a value for a configurable product option. */
export type ConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue';
  /** Indicates whether the product is available with this selected option. */
  is_available: Scalars['Boolean']['output'];
  /** Indicates whether the value is the default. */
  is_use_default: Scalars['Boolean']['output'];
  /** The display name of the value. */
  label: Scalars['String']['output'];
  /** The URL assigned to the thumbnail of the swatch image. */
  swatch?: Maybe<SwatchDataInterface>;
  /** The unique ID of the value. */
  uid: Scalars['ID']['output'];
};

/** Defines configurable attributes for the specified product. */
export type ConfigurableProductOptions = {
  __typename?: 'ConfigurableProductOptions';
  /** A string that identifies the attribute. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id?: Maybe<Scalars['String']['output']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id_v2?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for an `Attribute` object. */
  attribute_uid: Scalars['ID']['output'];
  /**
   * The configurable option ID number assigned by the system.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** A displayed string that describes the configurable product option. */
  label?: Maybe<Scalars['String']['output']>;
  /** A number that indicates the order in which the attribute is displayed. */
  position?: Maybe<Scalars['Int']['output']>;
  /**
   * This is the same as a product's `id` field.
   * @deprecated `product_id` is not needed and can be obtained from its parent.
   */
  product_id?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `ConfigurableProductOptions` object. */
  uid: Scalars['ID']['output'];
  /** Indicates whether the option is the default. */
  use_default?: Maybe<Scalars['Boolean']['output']>;
  /** An array that defines the `value_index` codes assigned to the configurable product. */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

/** Contains metadata corresponding to the selected configurable options. */
export type ConfigurableProductOptionsSelection = {
  __typename?: 'ConfigurableProductOptionsSelection';
  /** An array of all possible configurable options. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOption>>>;
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /** The configurable options available for further selection based on the current selection. */
  options_available_for_selection?: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>;
  /** A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option. */
  variant?: Maybe<SimpleProduct>;
};

/** Contains the index number assigned to a configurable product option. */
export type ConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues';
  /** The label of the product on the default store. */
  default_label?: Maybe<Scalars['String']['output']>;
  /** The label of the product. */
  label?: Maybe<Scalars['String']['output']>;
  /** The label of the product on the current store. */
  store_label?: Maybe<Scalars['String']['output']>;
  /** Swatch data for a configurable product option. */
  swatch_data?: Maybe<SwatchDataInterface>;
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  uid?: Maybe<Scalars['ID']['output']>;
  /** Indicates whether to use the default_label. */
  use_default_value?: Maybe<Scalars['Boolean']['output']>;
  /**
   * A unique index number assigned to the configurable product option.
   * @deprecated Use `uid` instead.
   */
  value_index?: Maybe<Scalars['Int']['output']>;
};

/** Contains all the simple product variants of a configurable product. */
export type ConfigurableVariant = {
  __typename?: 'ConfigurableVariant';
  /** An array of configurable attribute options. */
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  /** An array of linked simple products. */
  product?: Maybe<SimpleProduct>;
};

/** A configurable product wish list item. */
export type ConfigurableWishlistItem = WishlistItemInterface & {
  __typename?: 'ConfigurableWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /**
   * The SKU of the simple product corresponding to a set of selected configurable options.
   * @deprecated Use `ConfigurableWishlistItem.configured_variant.sku` instead.
   */
  child_sku: Scalars['String']['output'];
  /** An array of selected configurable options. */
  configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
  /** Product details of the selected variant. The value is null if some options are not configured. */
  configured_variant?: Maybe<ProductInterface>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

export type Country = {
  __typename?: 'Country';
  /** An array of regions within a particular country. */
  available_regions?: Maybe<Array<Maybe<Region>>>;
  /** The name of the country in English. */
  full_name_english?: Maybe<Scalars['String']['output']>;
  /** The name of the country in the current locale. */
  full_name_locale?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Country` object. */
  id?: Maybe<Scalars['String']['output']>;
  /** The three-letter abbreviation of the country, such as USA. */
  three_letter_abbreviation?: Maybe<Scalars['String']['output']>;
  /** The two-letter abbreviation of the country, such as US. */
  two_letter_abbreviation?: Maybe<Scalars['String']['output']>;
};

/** The list of country codes. */
export enum CountryCodeEnum {
  /**
   * Andorra
   * @deprecated
   */
  Ad = 'AD',
  /**
   * United Arab Emirates
   * @deprecated
   */
  Ae = 'AE',
  /**
   * Afghanistan
   * @deprecated
   */
  Af = 'AF',
  /**
   * Antigua & Barbuda
   * @deprecated
   */
  Ag = 'AG',
  /**
   * Anguilla
   * @deprecated
   */
  Ai = 'AI',
  /**
   * Albania
   * @deprecated
   */
  Al = 'AL',
  /**
   * Armenia
   * @deprecated
   */
  Am = 'AM',
  /**
   * Netherlands Antilles
   * @deprecated
   */
  An = 'AN',
  /**
   * Angola
   * @deprecated
   */
  Ao = 'AO',
  /**
   * Antarctica
   * @deprecated
   */
  Aq = 'AQ',
  /**
   * Argentina
   * @deprecated
   */
  Ar = 'AR',
  /**
   * American Samoa
   * @deprecated
   */
  As = 'AS',
  /**
   * Austria
   * @deprecated
   */
  At = 'AT',
  /**
   * Australia
   * @deprecated
   */
  Au = 'AU',
  /**
   * Aruba
   * @deprecated
   */
  Aw = 'AW',
  /**
   * Åland Islands
   * @deprecated
   */
  Ax = 'AX',
  /**
   * Azerbaijan
   * @deprecated
   */
  Az = 'AZ',
  /**
   * Bosnia & Herzegovina
   * @deprecated
   */
  Ba = 'BA',
  /**
   * Barbados
   * @deprecated
   */
  Bb = 'BB',
  /**
   * Bangladesh
   * @deprecated
   */
  Bd = 'BD',
  /**
   * Belgium
   * @deprecated
   */
  Be = 'BE',
  /**
   * Burkina Faso
   * @deprecated
   */
  Bf = 'BF',
  /**
   * Bulgaria
   * @deprecated
   */
  Bg = 'BG',
  /**
   * Bahrain
   * @deprecated
   */
  Bh = 'BH',
  /**
   * Burundi
   * @deprecated
   */
  Bi = 'BI',
  /**
   * Benin
   * @deprecated
   */
  Bj = 'BJ',
  /**
   * St. Barthélemy
   * @deprecated
   */
  Bl = 'BL',
  /**
   * Bermuda
   * @deprecated
   */
  Bm = 'BM',
  /**
   * Brunei
   * @deprecated
   */
  Bn = 'BN',
  /**
   * Bolivia
   * @deprecated
   */
  Bo = 'BO',
  /**
   * Brazil
   * @deprecated
   */
  Br = 'BR',
  /**
   * Bahamas
   * @deprecated
   */
  Bs = 'BS',
  /**
   * Bhutan
   * @deprecated
   */
  Bt = 'BT',
  /**
   * Bouvet Island
   * @deprecated
   */
  Bv = 'BV',
  /**
   * Botswana
   * @deprecated
   */
  Bw = 'BW',
  /**
   * Belarus
   * @deprecated
   */
  By = 'BY',
  /**
   * Belize
   * @deprecated
   */
  Bz = 'BZ',
  /**
   * Canada
   * @deprecated
   */
  Ca = 'CA',
  /**
   * Cocos (Keeling) Islands
   * @deprecated
   */
  Cc = 'CC',
  /**
   * Congo-Kinshasa
   * @deprecated
   */
  Cd = 'CD',
  /**
   * Central African Republic
   * @deprecated
   */
  Cf = 'CF',
  /**
   * Congo-Brazzaville
   * @deprecated
   */
  Cg = 'CG',
  /**
   * Switzerland
   * @deprecated
   */
  Ch = 'CH',
  /**
   * Côte d’Ivoire
   * @deprecated
   */
  Ci = 'CI',
  /**
   * Cook Islands
   * @deprecated
   */
  Ck = 'CK',
  /**
   * Chile
   * @deprecated
   */
  Cl = 'CL',
  /**
   * Cameroon
   * @deprecated
   */
  Cm = 'CM',
  /**
   * China
   * @deprecated
   */
  Cn = 'CN',
  /**
   * Colombia
   * @deprecated
   */
  Co = 'CO',
  /**
   * Costa Rica
   * @deprecated
   */
  Cr = 'CR',
  /**
   * Cuba
   * @deprecated
   */
  Cu = 'CU',
  /**
   * Cape Verde
   * @deprecated
   */
  Cv = 'CV',
  /**
   * Christmas Island
   * @deprecated
   */
  Cx = 'CX',
  /**
   * Cyprus
   * @deprecated
   */
  Cy = 'CY',
  /**
   * Czech Republic
   * @deprecated
   */
  Cz = 'CZ',
  /**
   * Germany
   * @deprecated
   */
  De = 'DE',
  /**
   * Djibouti
   * @deprecated
   */
  Dj = 'DJ',
  /**
   * Denmark
   * @deprecated
   */
  Dk = 'DK',
  /**
   * Dominica
   * @deprecated
   */
  Dm = 'DM',
  /**
   * Dominican Republic
   * @deprecated
   */
  Do = 'DO',
  /**
   * Algeria
   * @deprecated
   */
  Dz = 'DZ',
  /**
   * Ecuador
   * @deprecated
   */
  Ec = 'EC',
  /**
   * Estonia
   * @deprecated
   */
  Ee = 'EE',
  /**
   * Egypt
   * @deprecated
   */
  Eg = 'EG',
  /**
   * Western Sahara
   * @deprecated
   */
  Eh = 'EH',
  /**
   * Eritrea
   * @deprecated
   */
  Er = 'ER',
  /**
   * Spain
   * @deprecated
   */
  Es = 'ES',
  /**
   * Ethiopia
   * @deprecated
   */
  Et = 'ET',
  /**
   * Finland
   * @deprecated
   */
  Fi = 'FI',
  /**
   * Fiji
   * @deprecated
   */
  Fj = 'FJ',
  /**
   * Falkland Islands
   * @deprecated
   */
  Fk = 'FK',
  /**
   * Micronesia
   * @deprecated
   */
  Fm = 'FM',
  /**
   * Faroe Islands
   * @deprecated
   */
  Fo = 'FO',
  /**
   * France
   * @deprecated
   */
  Fr = 'FR',
  /**
   * Gabon
   * @deprecated
   */
  Ga = 'GA',
  /**
   * United Kingdom
   * @deprecated
   */
  Gb = 'GB',
  /**
   * Grenada
   * @deprecated
   */
  Gd = 'GD',
  /**
   * Georgia
   * @deprecated
   */
  Ge = 'GE',
  /**
   * French Guiana
   * @deprecated
   */
  Gf = 'GF',
  /**
   * Guernsey
   * @deprecated
   */
  Gg = 'GG',
  /**
   * Ghana
   * @deprecated
   */
  Gh = 'GH',
  /**
   * Gibraltar
   * @deprecated
   */
  Gi = 'GI',
  /**
   * Greenland
   * @deprecated
   */
  Gl = 'GL',
  /**
   * Gambia
   * @deprecated
   */
  Gm = 'GM',
  /**
   * Guinea
   * @deprecated
   */
  Gn = 'GN',
  /**
   * Guadeloupe
   * @deprecated
   */
  Gp = 'GP',
  /**
   * Equatorial Guinea
   * @deprecated
   */
  Gq = 'GQ',
  /**
   * Greece
   * @deprecated
   */
  Gr = 'GR',
  /**
   * South Georgia & South Sandwich Islands
   * @deprecated
   */
  Gs = 'GS',
  /**
   * Guatemala
   * @deprecated
   */
  Gt = 'GT',
  /**
   * Guam
   * @deprecated
   */
  Gu = 'GU',
  /**
   * Guinea-Bissau
   * @deprecated
   */
  Gw = 'GW',
  /**
   * Guyana
   * @deprecated
   */
  Gy = 'GY',
  /**
   * Hong Kong SAR China
   * @deprecated
   */
  Hk = 'HK',
  /**
   * Heard &amp; McDonald Islands
   * @deprecated
   */
  Hm = 'HM',
  /**
   * Honduras
   * @deprecated
   */
  Hn = 'HN',
  /**
   * Croatia
   * @deprecated
   */
  Hr = 'HR',
  /**
   * Haiti
   * @deprecated
   */
  Ht = 'HT',
  /**
   * Hungary
   * @deprecated
   */
  Hu = 'HU',
  /**
   * Indonesia
   * @deprecated
   */
  Id = 'ID',
  /**
   * Ireland
   * @deprecated
   */
  Ie = 'IE',
  /**
   * Israel
   * @deprecated
   */
  Il = 'IL',
  /**
   * Isle of Man
   * @deprecated
   */
  Im = 'IM',
  /**
   * India
   * @deprecated
   */
  In = 'IN',
  /**
   * British Indian Ocean Territory
   * @deprecated
   */
  Io = 'IO',
  /**
   * Iraq
   * @deprecated
   */
  Iq = 'IQ',
  /**
   * Iran
   * @deprecated
   */
  Ir = 'IR',
  /**
   * Iceland
   * @deprecated
   */
  Is = 'IS',
  /**
   * Italy
   * @deprecated
   */
  It = 'IT',
  /**
   * Jersey
   * @deprecated
   */
  Je = 'JE',
  /**
   * Jamaica
   * @deprecated
   */
  Jm = 'JM',
  /**
   * Jordan
   * @deprecated
   */
  Jo = 'JO',
  /**
   * Japan
   * @deprecated
   */
  Jp = 'JP',
  /**
   * Kenya
   * @deprecated
   */
  Ke = 'KE',
  /**
   * Kyrgyzstan
   * @deprecated
   */
  Kg = 'KG',
  /**
   * Cambodia
   * @deprecated
   */
  Kh = 'KH',
  /**
   * Kiribati
   * @deprecated
   */
  Ki = 'KI',
  /**
   * Comoros
   * @deprecated
   */
  Km = 'KM',
  /**
   * St. Kitts & Nevis
   * @deprecated
   */
  Kn = 'KN',
  /**
   * North Korea
   * @deprecated
   */
  Kp = 'KP',
  /**
   * South Korea
   * @deprecated
   */
  Kr = 'KR',
  /**
   * Kuwait
   * @deprecated
   */
  Kw = 'KW',
  /**
   * Cayman Islands
   * @deprecated
   */
  Ky = 'KY',
  /**
   * Kazakhstan
   * @deprecated
   */
  Kz = 'KZ',
  /**
   * Laos
   * @deprecated
   */
  La = 'LA',
  /**
   * Lebanon
   * @deprecated
   */
  Lb = 'LB',
  /**
   * St. Lucia
   * @deprecated
   */
  Lc = 'LC',
  /**
   * Liechtenstein
   * @deprecated
   */
  Li = 'LI',
  /**
   * Sri Lanka
   * @deprecated
   */
  Lk = 'LK',
  /**
   * Liberia
   * @deprecated
   */
  Lr = 'LR',
  /**
   * Lesotho
   * @deprecated
   */
  Ls = 'LS',
  /**
   * Lithuania
   * @deprecated
   */
  Lt = 'LT',
  /**
   * Luxembourg
   * @deprecated
   */
  Lu = 'LU',
  /**
   * Latvia
   * @deprecated
   */
  Lv = 'LV',
  /**
   * Libya
   * @deprecated
   */
  Ly = 'LY',
  /**
   * Morocco
   * @deprecated
   */
  Ma = 'MA',
  /**
   * Monaco
   * @deprecated
   */
  Mc = 'MC',
  /**
   * Moldova
   * @deprecated
   */
  Md = 'MD',
  /**
   * Montenegro
   * @deprecated
   */
  Me = 'ME',
  /**
   * St. Martin
   * @deprecated
   */
  Mf = 'MF',
  /**
   * Madagascar
   * @deprecated
   */
  Mg = 'MG',
  /**
   * Marshall Islands
   * @deprecated
   */
  Mh = 'MH',
  /**
   * Macedonia
   * @deprecated
   */
  Mk = 'MK',
  /**
   * Mali
   * @deprecated
   */
  Ml = 'ML',
  /**
   * Myanmar (Burma)
   * @deprecated
   */
  Mm = 'MM',
  /**
   * Mongolia
   * @deprecated
   */
  Mn = 'MN',
  /**
   * Macau SAR China
   * @deprecated
   */
  Mo = 'MO',
  /**
   * Northern Mariana Islands
   * @deprecated
   */
  Mp = 'MP',
  /**
   * Martinique
   * @deprecated
   */
  Mq = 'MQ',
  /**
   * Mauritania
   * @deprecated
   */
  Mr = 'MR',
  /**
   * Montserrat
   * @deprecated
   */
  Ms = 'MS',
  /**
   * Malta
   * @deprecated
   */
  Mt = 'MT',
  /**
   * Mauritius
   * @deprecated
   */
  Mu = 'MU',
  /**
   * Maldives
   * @deprecated
   */
  Mv = 'MV',
  /**
   * Malawi
   * @deprecated
   */
  Mw = 'MW',
  /**
   * Mexico
   * @deprecated
   */
  Mx = 'MX',
  /**
   * Malaysia
   * @deprecated
   */
  My = 'MY',
  /**
   * Mozambique
   * @deprecated
   */
  Mz = 'MZ',
  /**
   * Namibia
   * @deprecated
   */
  Na = 'NA',
  /**
   * New Caledonia
   * @deprecated
   */
  Nc = 'NC',
  /**
   * Niger
   * @deprecated
   */
  Ne = 'NE',
  /**
   * Norfolk Island
   * @deprecated
   */
  Nf = 'NF',
  /**
   * Nigeria
   * @deprecated
   */
  Ng = 'NG',
  /**
   * Nicaragua
   * @deprecated
   */
  Ni = 'NI',
  /**
   * Netherlands
   * @deprecated
   */
  Nl = 'NL',
  /**
   * Norway
   * @deprecated
   */
  No = 'NO',
  /**
   * Nepal
   * @deprecated
   */
  Np = 'NP',
  /**
   * Nauru
   * @deprecated
   */
  Nr = 'NR',
  /**
   * Niue
   * @deprecated
   */
  Nu = 'NU',
  /**
   * New Zealand
   * @deprecated
   */
  Nz = 'NZ',
  /**
   * Oman
   * @deprecated
   */
  Om = 'OM',
  /**
   * Panama
   * @deprecated
   */
  Pa = 'PA',
  /**
   * Peru
   * @deprecated
   */
  Pe = 'PE',
  /**
   * French Polynesia
   * @deprecated
   */
  Pf = 'PF',
  /**
   * Papua New Guinea
   * @deprecated
   */
  Pg = 'PG',
  /**
   * Philippines
   * @deprecated
   */
  Ph = 'PH',
  /**
   * Pakistan
   * @deprecated
   */
  Pk = 'PK',
  /**
   * Poland
   * @deprecated
   */
  Pl = 'PL',
  /**
   * St. Pierre & Miquelon
   * @deprecated
   */
  Pm = 'PM',
  /**
   * Pitcairn Islands
   * @deprecated
   */
  Pn = 'PN',
  /**
   * Palestinian Territories
   * @deprecated
   */
  Ps = 'PS',
  /**
   * Portugal
   * @deprecated
   */
  Pt = 'PT',
  /**
   * Palau
   * @deprecated
   */
  Pw = 'PW',
  /**
   * Paraguay
   * @deprecated
   */
  Py = 'PY',
  /**
   * Qatar
   * @deprecated
   */
  Qa = 'QA',
  /**
   * Réunion
   * @deprecated
   */
  Re = 'RE',
  /**
   * Romania
   * @deprecated
   */
  Ro = 'RO',
  /**
   * Serbia
   * @deprecated
   */
  Rs = 'RS',
  /**
   * Russia
   * @deprecated
   */
  Ru = 'RU',
  /**
   * Rwanda
   * @deprecated
   */
  Rw = 'RW',
  /**
   * Saudi Arabia
   * @deprecated
   */
  Sa = 'SA',
  /**
   * Solomon Islands
   * @deprecated
   */
  Sb = 'SB',
  /**
   * Seychelles
   * @deprecated
   */
  Sc = 'SC',
  /**
   * Sudan
   * @deprecated
   */
  Sd = 'SD',
  /**
   * Sweden
   * @deprecated
   */
  Se = 'SE',
  /**
   * Singapore
   * @deprecated
   */
  Sg = 'SG',
  /**
   * St. Helena
   * @deprecated
   */
  Sh = 'SH',
  /**
   * Slovenia
   * @deprecated
   */
  Si = 'SI',
  /**
   * Svalbard & Jan Mayen
   * @deprecated
   */
  Sj = 'SJ',
  /**
   * Slovakia
   * @deprecated
   */
  Sk = 'SK',
  /**
   * Sierra Leone
   * @deprecated
   */
  Sl = 'SL',
  /**
   * San Marino
   * @deprecated
   */
  Sm = 'SM',
  /**
   * Senegal
   * @deprecated
   */
  Sn = 'SN',
  /**
   * Somalia
   * @deprecated
   */
  So = 'SO',
  /**
   * Suriname
   * @deprecated
   */
  Sr = 'SR',
  /**
   * São Tomé & Príncipe
   * @deprecated
   */
  St = 'ST',
  /**
   * El Salvador
   * @deprecated
   */
  Sv = 'SV',
  /**
   * Syria
   * @deprecated
   */
  Sy = 'SY',
  /**
   * Swaziland
   * @deprecated
   */
  Sz = 'SZ',
  /**
   * Turks & Caicos Islands
   * @deprecated
   */
  Tc = 'TC',
  /**
   * Chad
   * @deprecated
   */
  Td = 'TD',
  /**
   * French Southern Territories
   * @deprecated
   */
  Tf = 'TF',
  /**
   * Togo
   * @deprecated
   */
  Tg = 'TG',
  /**
   * Thailand
   * @deprecated
   */
  Th = 'TH',
  /**
   * Tajikistan
   * @deprecated
   */
  Tj = 'TJ',
  /**
   * Tokelau
   * @deprecated
   */
  Tk = 'TK',
  /**
   * Timor-Leste
   * @deprecated
   */
  Tl = 'TL',
  /**
   * Turkmenistan
   * @deprecated
   */
  Tm = 'TM',
  /**
   * Tunisia
   * @deprecated
   */
  Tn = 'TN',
  /**
   * Tonga
   * @deprecated
   */
  To = 'TO',
  /**
   * Turkey
   * @deprecated
   */
  Tr = 'TR',
  /**
   * Trinidad & Tobago
   * @deprecated
   */
  Tt = 'TT',
  /**
   * Tuvalu
   * @deprecated
   */
  Tv = 'TV',
  /**
   * Taiwan
   * @deprecated
   */
  Tw = 'TW',
  /**
   * Tanzania
   * @deprecated
   */
  Tz = 'TZ',
  /**
   * Ukraine
   * @deprecated
   */
  Ua = 'UA',
  /**
   * Uganda
   * @deprecated
   */
  Ug = 'UG',
  /**
   * U.S. Outlying Islands
   * @deprecated
   */
  Um = 'UM',
  /**
   * United States
   * @deprecated
   */
  Us = 'US',
  /**
   * Uruguay
   * @deprecated
   */
  Uy = 'UY',
  /**
   * Uzbekistan
   * @deprecated
   */
  Uz = 'UZ',
  /**
   * Vatican City
   * @deprecated
   */
  Va = 'VA',
  /**
   * St. Vincent & Grenadines
   * @deprecated
   */
  Vc = 'VC',
  /**
   * Venezuela
   * @deprecated
   */
  Ve = 'VE',
  /**
   * British Virgin Islands
   * @deprecated
   */
  Vg = 'VG',
  /**
   * U.S. Virgin Islands
   * @deprecated
   */
  Vi = 'VI',
  /**
   * Vietnam
   * @deprecated
   */
  Vn = 'VN',
  /**
   * Vanuatu
   * @deprecated
   */
  Vu = 'VU',
  /**
   * Wallis & Futuna
   * @deprecated
   */
  Wf = 'WF',
  /**
   * Samoa
   * @deprecated
   */
  Ws = 'WS',
  /**
   * Yemen
   * @deprecated
   */
  Ye = 'YE',
  /**
   * Mayotte
   * @deprecated
   */
  Yt = 'YT',
  /**
   * South Africa
   * @deprecated
   */
  Za = 'ZA',
  /**
   * Zambia
   * @deprecated
   */
  Zm = 'ZM',
  /**
   * Zimbabwe
   * @deprecated
   */
  Zw = 'ZW'
}

/** Contains an array of product IDs to use for creating a compare list. */
export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput';
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output'];
};

/** Defines a new product review. */
export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['input'];
  /** The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product. */
  sku: Scalars['String']['input'];
  /** The summary (title) of the review. */
  summary: Scalars['String']['input'];
  /** The review text. */
  text: Scalars['String']['input'];
};

/** Contains the completed product review. */
export type CreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput';
  /** Product review details. */
  review: ProductReview;
};

/** Required fields for Payflow Pro and Payments Pro credit card payments. */
export type CreditCardDetailsInput = {
  /** The credit card expiration month. */
  cc_exp_month: Scalars['Int']['input'];
  /** The credit card expiration year. */
  cc_exp_year: Scalars['Int']['input'];
  /** The last 4 digits of the credit card. */
  cc_last_4: Scalars['Int']['input'];
  /** The credit card type. */
  cc_type: Scalars['String']['input'];
};

/** Contains credit memo details. */
export type CreditMemo = {
  __typename?: 'CreditMemo';
  /** Comments on the credit memo. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `CreditMemo` object. */
  id: Scalars['ID']['output'];
  /** An array containing details about refunded items. */
  items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
  /** The sequential credit memo number. */
  number: Scalars['String']['output'];
  /** Details about the total refunded amount. */
  total?: Maybe<CreditMemoTotal>;
};

export type CreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'CreditMemoItem';
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** Credit memo item details. */
export type CreditMemoItemInterface = {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** Contains credit memo price details. */
export type CreditMemoTotal = {
  __typename?: 'CreditMemoTotal';
  /** An adjustment manually applied to the order. */
  adjustment: Money;
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the credit memo. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the credit memo. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The credit memo tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the credit memo. */
  total_shipping: Money;
  /** The amount of tax applied to the credit memo. */
  total_tax: Money;
};

export type Currency = {
  __typename?: 'Currency';
  /** An array of three-letter currency codes accepted by the store, such as USD and EUR. */
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The base currency set for the store, such as USD. */
  base_currency_code?: Maybe<Scalars['String']['output']>;
  /** The symbol for the specified base currency, such as $. */
  base_currency_symbol?: Maybe<Scalars['String']['output']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']['output']>;
  /** The currency that is displayed by default, such as USD. */
  default_display_currency_code?: Maybe<Scalars['String']['output']>;
  /** The currency symbol that is displayed by default, such as $. */
  default_display_currency_symbol?: Maybe<Scalars['String']['output']>;
  /** An array of exchange rates for currencies defined in the store. */
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

/** The list of available currency codes. */
export enum CurrencyEnum {
  /** @deprecated  */
  Aed = 'AED',
  /** @deprecated  */
  Afn = 'AFN',
  /** @deprecated  */
  All = 'ALL',
  /** @deprecated  */
  Amd = 'AMD',
  /** @deprecated  */
  Ang = 'ANG',
  /** @deprecated  */
  Aoa = 'AOA',
  /** @deprecated  */
  Ars = 'ARS',
  /** @deprecated  */
  Aud = 'AUD',
  /** @deprecated  */
  Awg = 'AWG',
  /** @deprecated  */
  Azm = 'AZM',
  /** @deprecated  */
  Azn = 'AZN',
  /** @deprecated  */
  Bam = 'BAM',
  /** @deprecated  */
  Bbd = 'BBD',
  /** @deprecated  */
  Bdt = 'BDT',
  /** @deprecated  */
  Bgn = 'BGN',
  /** @deprecated  */
  Bhd = 'BHD',
  /** @deprecated  */
  Bif = 'BIF',
  /** @deprecated  */
  Bmd = 'BMD',
  /** @deprecated  */
  Bnd = 'BND',
  /** @deprecated  */
  Bob = 'BOB',
  /** @deprecated  */
  Brl = 'BRL',
  /** @deprecated  */
  Bsd = 'BSD',
  /** @deprecated  */
  Btn = 'BTN',
  /** @deprecated  */
  Buk = 'BUK',
  /** @deprecated  */
  Bwp = 'BWP',
  /** @deprecated  */
  Byn = 'BYN',
  /** @deprecated  */
  Bzd = 'BZD',
  /** @deprecated  */
  Cad = 'CAD',
  /** @deprecated  */
  Cdf = 'CDF',
  /** @deprecated  */
  Che = 'CHE',
  /** @deprecated  */
  Chf = 'CHF',
  /** @deprecated  */
  Chw = 'CHW',
  /** @deprecated  */
  Clp = 'CLP',
  /** @deprecated  */
  Cny = 'CNY',
  /** @deprecated  */
  Cop = 'COP',
  /** @deprecated  */
  Crc = 'CRC',
  /** @deprecated  */
  Cup = 'CUP',
  /** @deprecated  */
  Cve = 'CVE',
  /** @deprecated  */
  Czk = 'CZK',
  /** @deprecated  */
  Djf = 'DJF',
  /** @deprecated  */
  Dkk = 'DKK',
  /** @deprecated  */
  Dop = 'DOP',
  /** @deprecated  */
  Dzd = 'DZD',
  /** @deprecated  */
  Eek = 'EEK',
  /** @deprecated  */
  Egp = 'EGP',
  /** @deprecated  */
  Ern = 'ERN',
  /** @deprecated  */
  Etb = 'ETB',
  /** @deprecated  */
  Eur = 'EUR',
  /** @deprecated  */
  Fjd = 'FJD',
  /** @deprecated  */
  Fkp = 'FKP',
  /** @deprecated  */
  Gbp = 'GBP',
  /** @deprecated  */
  Gek = 'GEK',
  /** @deprecated  */
  Gel = 'GEL',
  /** @deprecated  */
  Ghs = 'GHS',
  /** @deprecated  */
  Gip = 'GIP',
  /** @deprecated  */
  Gmd = 'GMD',
  /** @deprecated  */
  Gnf = 'GNF',
  /** @deprecated  */
  Gqe = 'GQE',
  /** @deprecated  */
  Gtq = 'GTQ',
  /** @deprecated  */
  Gyd = 'GYD',
  /** @deprecated  */
  Hkd = 'HKD',
  /** @deprecated  */
  Hnl = 'HNL',
  /** @deprecated  */
  Hrk = 'HRK',
  /** @deprecated  */
  Htg = 'HTG',
  /** @deprecated  */
  Huf = 'HUF',
  /** @deprecated  */
  Idr = 'IDR',
  /** @deprecated  */
  Ils = 'ILS',
  /** @deprecated  */
  Inr = 'INR',
  /** @deprecated  */
  Iqd = 'IQD',
  /** @deprecated  */
  Irr = 'IRR',
  /** @deprecated  */
  Isk = 'ISK',
  /** @deprecated  */
  Jmd = 'JMD',
  /** @deprecated  */
  Jod = 'JOD',
  /** @deprecated  */
  Jpy = 'JPY',
  /** @deprecated  */
  Kes = 'KES',
  /** @deprecated  */
  Kgs = 'KGS',
  /** @deprecated  */
  Khr = 'KHR',
  /** @deprecated  */
  Kmf = 'KMF',
  /** @deprecated  */
  Kpw = 'KPW',
  /** @deprecated  */
  Krw = 'KRW',
  /** @deprecated  */
  Kwd = 'KWD',
  /** @deprecated  */
  Kyd = 'KYD',
  /** @deprecated  */
  Kzt = 'KZT',
  /** @deprecated  */
  Lak = 'LAK',
  /** @deprecated  */
  Lbp = 'LBP',
  /** @deprecated  */
  Lkr = 'LKR',
  /** @deprecated  */
  Lrd = 'LRD',
  /** @deprecated  */
  Lsl = 'LSL',
  /** @deprecated  */
  Lsm = 'LSM',
  /** @deprecated  */
  Ltl = 'LTL',
  /** @deprecated  */
  Lvl = 'LVL',
  /** @deprecated  */
  Lyd = 'LYD',
  /** @deprecated  */
  Mad = 'MAD',
  /** @deprecated  */
  Mdl = 'MDL',
  /** @deprecated  */
  Mga = 'MGA',
  /** @deprecated  */
  Mkd = 'MKD',
  /** @deprecated  */
  Mmk = 'MMK',
  /** @deprecated  */
  Mnt = 'MNT',
  /** @deprecated  */
  Mop = 'MOP',
  /** @deprecated  */
  Mro = 'MRO',
  /** @deprecated  */
  Mur = 'MUR',
  /** @deprecated  */
  Mvr = 'MVR',
  /** @deprecated  */
  Mwk = 'MWK',
  /** @deprecated  */
  Mxn = 'MXN',
  /** @deprecated  */
  Myr = 'MYR',
  /** @deprecated  */
  Mzn = 'MZN',
  /** @deprecated  */
  Nad = 'NAD',
  /** @deprecated  */
  Ngn = 'NGN',
  /** @deprecated  */
  Nic = 'NIC',
  /** @deprecated  */
  Nok = 'NOK',
  /** @deprecated  */
  Npr = 'NPR',
  /** @deprecated  */
  Nzd = 'NZD',
  /** @deprecated  */
  Omr = 'OMR',
  /** @deprecated  */
  Pab = 'PAB',
  /** @deprecated  */
  Pen = 'PEN',
  /** @deprecated  */
  Pgk = 'PGK',
  /** @deprecated  */
  Php = 'PHP',
  /** @deprecated  */
  Pkr = 'PKR',
  /** @deprecated  */
  Pln = 'PLN',
  /** @deprecated  */
  Pyg = 'PYG',
  /** @deprecated  */
  Qar = 'QAR',
  /** @deprecated  */
  Rhd = 'RHD',
  /** @deprecated  */
  Rol = 'ROL',
  /** @deprecated  */
  Ron = 'RON',
  /** @deprecated  */
  Rsd = 'RSD',
  /** @deprecated  */
  Rub = 'RUB',
  /** @deprecated  */
  Rwf = 'RWF',
  /** @deprecated  */
  Sar = 'SAR',
  /** @deprecated  */
  Sbd = 'SBD',
  /** @deprecated  */
  Scr = 'SCR',
  /** @deprecated  */
  Sdg = 'SDG',
  /** @deprecated  */
  Sek = 'SEK',
  /** @deprecated  */
  Sgd = 'SGD',
  /** @deprecated  */
  Shp = 'SHP',
  /** @deprecated  */
  Skk = 'SKK',
  /** @deprecated  */
  Sll = 'SLL',
  /** @deprecated  */
  Sos = 'SOS',
  /** @deprecated  */
  Srd = 'SRD',
  /** @deprecated  */
  Std = 'STD',
  /** @deprecated  */
  Svc = 'SVC',
  /** @deprecated  */
  Syp = 'SYP',
  /** @deprecated  */
  Szl = 'SZL',
  /** @deprecated  */
  Thb = 'THB',
  /** @deprecated  */
  Tjs = 'TJS',
  /** @deprecated  */
  Tmm = 'TMM',
  /** @deprecated  */
  Tnd = 'TND',
  /** @deprecated  */
  Top = 'TOP',
  /** @deprecated  */
  Trl = 'TRL',
  /** @deprecated  */
  Try = 'TRY',
  /** @deprecated  */
  Ttd = 'TTD',
  /** @deprecated  */
  Twd = 'TWD',
  /** @deprecated  */
  Tzs = 'TZS',
  /** @deprecated  */
  Uah = 'UAH',
  /** @deprecated  */
  Ugx = 'UGX',
  /** @deprecated  */
  Usd = 'USD',
  /** @deprecated  */
  Uyu = 'UYU',
  /** @deprecated  */
  Uzs = 'UZS',
  /** @deprecated  */
  Veb = 'VEB',
  /** @deprecated  */
  Vef = 'VEF',
  /** @deprecated  */
  Vnd = 'VND',
  /** @deprecated  */
  Vuv = 'VUV',
  /** @deprecated  */
  Wst = 'WST',
  /** @deprecated  */
  Xcd = 'XCD',
  /** @deprecated  */
  Xof = 'XOF',
  /** @deprecated  */
  Xpf = 'XPF',
  /** @deprecated  */
  Yer = 'YER',
  /** @deprecated  */
  Ytl = 'YTL',
  /** @deprecated  */
  Zar = 'ZAR',
  /** @deprecated  */
  Zmk = 'ZMK',
  /** @deprecated  */
  Zwd = 'ZWD'
}

export type CursorModel = {
  __typename?: 'CursorModel';
  DataCzasWaznosci?: Maybe<Scalars['String']['output']>;
  LiczbaWszystkichRekordow?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
};

/** Defines an array of custom attributes. */
export type CustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata';
  /** An array of attributes. */
  items?: Maybe<Array<Maybe<Attribute>>>;
};

/** Defines the customer name, addresses, and other details. */
export type Customer = {
  __typename?: 'Customer';
  /** An array containing the customer's shipping and billing addresses. */
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance: Scalars['Boolean']['output'];
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<CompareList>;
  /** Timestamp indicating when the account was created. */
  created_at?: Maybe<Scalars['String']['output']>;
  /** The customer's date of birth. */
  date_of_birth?: Maybe<Scalars['String']['output']>;
  /** The ID assigned to the billing address. */
  default_billing?: Maybe<Scalars['String']['output']>;
  /** The ID assigned to the shipping address. */
  default_shipping?: Maybe<Scalars['String']['output']>;
  /**
   * The customer's date of birth.
   * @deprecated Use `date_of_birth` instead.
   */
  dob?: Maybe<Scalars['String']['output']>;
  /** The customer's email address. Required. */
  email?: Maybe<Scalars['String']['output']>;
  /** The customer's first name. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Customer group should not be exposed in the storefront scenarios. */
  group_id?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID assigned to the customer.
   * @deprecated `id` is not needed as part of `Customer`, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The customer's family name. */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The customer's middle name. */
  middlename?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<CustomerOrders>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** Contains the customer's product reviews. */
  reviews: ProductReviews;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  taxvat?: Maybe<Scalars['String']['output']>;
  /**
   * Return a customer's wish lists.
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2` instead.
   */
  wishlist: Wishlist;
  /** Retrieve the wish list identified by the unique ID for a `Wishlist` object. */
  wishlist_v2?: Maybe<Wishlist>;
  /** An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. */
  wishlists: Array<Maybe<Wishlist>>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerOrdersArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<CustomerOrdersFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  scope?: InputMaybe<ScopeTypeEnum>;
  sort?: InputMaybe<CustomerOrderSortInput>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerWishlist_V2Args = {
  id: Scalars['ID']['input'];
};


/** Defines the customer name, addresses, and other details. */
export type CustomerWishlistsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains detailed information about a customer's billing or shipping address. */
export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  /** The customer's city or town. */
  city?: Maybe<Scalars['String']['output']>;
  /** The customer's company. */
  company?: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country_code?: Maybe<CountryCodeEnum>;
  /**
   * The customer's country.
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']['output']>;
  /** @deprecated Custom attributes should not be put into a container. */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /**
   * The customer ID
   * @deprecated `customer_id` is not needed as part of `CustomerAddress`. The `id` is a unique identifier for the addresses.
   */
  customer_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the address is the customer's default billing address. */
  default_billing?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the address is the customer's default shipping address. */
  default_shipping?: Maybe<Scalars['Boolean']['output']>;
  /** Contains any extension attributes for the address. */
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** The customer's fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The ID of a `CustomerAddress` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** The family name of the person associated with the shipping/billing address. */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** An object containing the region name, region code, and region ID. */
  region?: Maybe<CustomerAddressRegion>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
  /** An array of strings that define the street number and name. */
  street?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The customer's telephone number. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Specifies the attribute code and value of a customer address attribute. */
export type CustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute';
  /** The name assigned to the customer address attribute. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /** The valuue assigned to the customer address attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Specifies the attribute code and value of a customer attribute. */
export type CustomerAddressAttributeInput = {
  /** The name assigned to the attribute. */
  attribute_code: Scalars['String']['input'];
  /** The value assigned to the attribute. */
  value: Scalars['String']['input'];
};

/** Contains details about a billing or shipping address. */
export type CustomerAddressInput = {
  /** The customer's city or town. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The customer's company. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The two-letter code representing the customer's country. */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: InputMaybe<Array<InputMaybe<CustomerAddressAttributeInput>>>;
  /** Indicates whether the address is the default billing address. */
  default_billing?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates whether the address is the default shipping address. */
  default_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's fax number. */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the person associated with the billing/shipping address. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The family name of the person associated with the billing/shipping address. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's ZIP or postal code. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** An object containing the region name, region code, and region ID. */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name. */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's telephone number. */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  vat_id?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion';
  /** The state or province name. */
  region?: Maybe<Scalars['String']['output']>;
  /** The address region code. */
  region_code?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegionInput = {
  /** The state or province name. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The address region code. */
  region_code?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID for a pre-defined region. */
  region_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerBasicData = {
  __typename?: 'CustomerBasicData';
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

/** An input object for creating a customer. */
export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. */
  email: Scalars['String']['input'];
  /** The customer's first name. */
  firstname: Scalars['String']['input'];
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname: Scalars['String']['input'];
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about a single downloadable product. */
export type CustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct';
  /** The date and time the purchase was made. */
  date?: Maybe<Scalars['String']['output']>;
  /** The fully qualified URL to the download file. */
  download_url?: Maybe<Scalars['String']['output']>;
  /** The unique ID assigned to the item. */
  order_increment_id?: Maybe<Scalars['String']['output']>;
  /** The remaining number of times the customer can download the product. */
  remaining_downloads?: Maybe<Scalars['String']['output']>;
  /** Indicates when the product becomes available for download. Options are `Pending` and `Invoiced`. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Contains a list of downloadable products. */
export type CustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts';
  /** An array of purchased downloadable items. */
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

/** An input object that assigns or updates customer attributes. */
export type CustomerInput = {
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. Required when creating a customer. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about each of the customer's orders. */
export type CustomerOrder = {
  __typename?: 'CustomerOrder';
  /** The billing address for the order. */
  billing_address?: Maybe<OrderAddress>;
  /** The shipping carrier for the order delivery. */
  carrier?: Maybe<Scalars['String']['output']>;
  /** Comments about the order. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** @deprecated Use the `order_date` field instead. */
  created_at?: Maybe<Scalars['String']['output']>;
  /** A list of credit memos. */
  credit_memos?: Maybe<Array<Maybe<CreditMemo>>>;
  /** The entered gift message for the order */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use the `totals.grand_total` field instead. */
  grand_total?: Maybe<Scalars['Float']['output']>;
  /** The unique ID for a `CustomerOrder` object. */
  id: Scalars['ID']['output'];
  /** @deprecated Use the `id` field instead. */
  increment_id?: Maybe<Scalars['String']['output']>;
  /** A list of invoices for the order. */
  invoices: Array<Maybe<Invoice>>;
  /** An array containing the items purchased in this order. */
  items?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** The order number. */
  number: Scalars['String']['output'];
  /** The date the order was placed. */
  order_date: Scalars['String']['output'];
  /** @deprecated Use the `number` field instead. */
  order_number: Scalars['String']['output'];
  /** Payment details for the order. */
  payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>;
  /** A list of shipments for the order. */
  shipments?: Maybe<Array<Maybe<OrderShipment>>>;
  /** The shipping address for the order. */
  shipping_address?: Maybe<OrderAddress>;
  /** The delivery method for the order. */
  shipping_method?: Maybe<Scalars['String']['output']>;
  /** The current status of the order. */
  status: Scalars['String']['output'];
  /** Details about the calculated totals for this order. */
  total?: Maybe<OrderTotal>;
};

/** CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type CustomerOrderSortInput = {
  /** This enumeration indicates whether to return results in ascending or descending order */
  sort_direction: SortEnum;
  /** Specifies the field to use for sorting */
  sort_field: CustomerOrderSortableField;
};

/** Specifies the field to use for sorting */
export enum CustomerOrderSortableField {
  /**
   * Sorts customer orders by created_at field
   * @deprecated
   */
  CreatedAt = 'CREATED_AT',
  /**
   * Sorts customer orders by number
   * @deprecated
   */
  Number = 'NUMBER'
}

/** The collection of orders that match the conditions defined in the filter. */
export type CustomerOrders = {
  __typename?: 'CustomerOrders';
  /** An array of customer orders. */
  items: Array<Maybe<CustomerOrder>>;
  /** Contains pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total count of customer orders. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
};

/** Contains details about a newly-created or updated customer. */
export type CustomerOutput = {
  __typename?: 'CustomerOutput';
  /** Customer details after creating or updating a customer. */
  customer: Customer;
};

/** Contains payment tokens stored in the customer's vault. */
export type CustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens';
  /** An array of payment tokens. */
  items: Array<Maybe<PaymentToken>>;
};

/** Contains a customer authorization token. */
export type CustomerToken = {
  __typename?: 'CustomerToken';
  /** The customer authorization token. */
  token?: Maybe<Scalars['String']['output']>;
};

/** An input object for updating a customer. */
export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** Contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableAreaOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a text area. */
  value?: Maybe<CustomizableAreaValue>;
};

/** Defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a set of checkbox values that are defined as part of a customizable option. */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableCheckboxOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines a set of checkbox values. */
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the checkbox value is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDateOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a date field in a customizable option. */
  value?: Maybe<CustomizableDateValue>;
};

/** Defines the customizable date type. */
export enum CustomizableDateTypeEnum {
  /** @deprecated  */
  Date = 'DATE',
  /** @deprecated  */
  DateTime = 'DATE_TIME',
  /** @deprecated  */
  Time = 'TIME'
}

/** Defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
  __typename?: 'CustomizableDateValue';
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** DATE, DATE_TIME or TIME */
  type?: Maybe<CustomizableDateTypeEnum>;
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDropDownOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines the set of options for a drop down menu. */
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFieldOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a text field. */
  value?: Maybe<CustomizableFieldValue>;
};

/** Defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']['output']>;
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFileOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a file value. */
  value?: Maybe<CustomizableFileValue>;
};

/** Defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
  __typename?: 'CustomizableFileValue';
  /** The file extension to accept. */
  file_extension?: Maybe<Scalars['String']['output']>;
  /** The maximum width of an image. */
  image_size_x?: Maybe<Scalars['Int']['output']>;
  /** The maximum height of an image. */
  image_size_y?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableMultipleOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines the set of options for a multiselect. */
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a customizable option. */
export type CustomizableOptionInput = {
  /** The customizable option ID of the product. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The string value of the option. */
  value_string: Scalars['String']['input'];
};

/** Contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type CustomizableOptionInterface = {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about customizable product options. */
export type CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

/** Contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableRadioOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines a set of radio buttons. */
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID']['output'];
};

export type CzescZamiennaModel = {
  __typename?: 'CzescZamiennaModel';
  CzescZamiennaID?: Maybe<Scalars['Int']['output']>;
  CzescZamiennaKod?: Maybe<Scalars['String']['output']>;
  CzescZamiennaNazwa?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  Ilosc?: Maybe<Scalars['Float']['output']>;
  TowarZrodlowyID?: Maybe<Scalars['Int']['output']>;
  TowarZrodlowyKod?: Maybe<Scalars['String']['output']>;
  TowarZrodlowyNazwa?: Maybe<Scalars['String']['output']>;
  Zywotnosc?: Maybe<Scalars['Float']['output']>;
};

export type CzescZamiennaZapytanieModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  TowaryID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** Contains the results of the request to delete a compare list. */
export type DeleteCompareListOutput = {
  __typename?: 'DeleteCompareListOutput';
  /** Indicates whether the compare list was successfully deleted. */
  result: Scalars['Boolean']['output'];
};

/** Indicates whether the request succeeded and returns the remaining customer payment tokens. */
export type DeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput';
  /** A container for the customer's remaining payment tokens. */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Indicates whether the request succeeded. */
  result: Scalars['Boolean']['output'];
};

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type Discount = {
  __typename?: 'Discount';
  /** The amount of the discount. */
  amount: Money;
  /** A description of the discount. */
  label: Scalars['String']['output'];
};

export type DokumentMModel = {
  __typename?: 'DokumentMModel';
  CzyZamkniety?: Maybe<Scalars['Boolean']['output']>;
  Data1?: Maybe<Scalars['String']['output']>;
  Data2?: Maybe<Scalars['String']['output']>;
  Data3?: Maybe<Scalars['String']['output']>;
  DataModyfikacji?: Maybe<Scalars['String']['output']>;
  DataPlatnosci?: Maybe<Scalars['String']['output']>;
  DataRealizacji?: Maybe<Scalars['String']['output']>;
  DataRealizacjiUKlienta?: Maybe<Scalars['String']['output']>;
  DoZaplaty?: Maybe<Scalars['Float']['output']>;
  FormaPlatnosciID?: Maybe<Scalars['Int']['output']>;
  FormaPlatnosciKod?: Maybe<Scalars['String']['output']>;
  HandlowiecID?: Maybe<Scalars['Int']['output']>;
  HandlowiecNazwa?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Klient1Adres?: Maybe<Scalars['String']['output']>;
  Klient1Id?: Maybe<Scalars['Int']['output']>;
  Klient1KodPocztowy?: Maybe<Scalars['String']['output']>;
  Klient1KrajID?: Maybe<Scalars['Int']['output']>;
  Klient1Miasto?: Maybe<Scalars['String']['output']>;
  Klient1Nazwa?: Maybe<Scalars['String']['output']>;
  Klient1Nip?: Maybe<Scalars['String']['output']>;
  Klient2Adres?: Maybe<Scalars['String']['output']>;
  Klient2Id?: Maybe<Scalars['Int']['output']>;
  Klient2KodPocztowy?: Maybe<Scalars['String']['output']>;
  Klient2KrajID?: Maybe<Scalars['Int']['output']>;
  Klient2Miasto?: Maybe<Scalars['String']['output']>;
  Klient2Nazwa?: Maybe<Scalars['String']['output']>;
  Klient2Nip?: Maybe<Scalars['String']['output']>;
  Kompletnosc?: Maybe<Scalars['Boolean']['output']>;
  LogistykaID?: Maybe<Scalars['Int']['output']>;
  MagazynId?: Maybe<Scalars['Int']['output']>;
  NrListuPrzewozowego?: Maybe<Scalars['String']['output']>;
  Numer?: Maybe<Scalars['String']['output']>;
  NumerObcy?: Maybe<Scalars['String']['output']>;
  NumerZamowienia?: Maybe<Scalars['String']['output']>;
  OddzialID?: Maybe<Scalars['Int']['output']>;
  Opis?: Maybe<Scalars['String']['output']>;
  PelnyNumer?: Maybe<Scalars['String']['output']>;
  PolaUzytkownika?: Maybe<Array<Maybe<PoleUzytkownikaWartoscModel>>>;
  Pozycje?: Maybe<Array<Maybe<DokumentPozycjaMModel>>>;
  Przynaleznosc?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  RodzajId?: Maybe<Scalars['Int']['output']>;
  Rok?: Maybe<Scalars['Int']['output']>;
  SpedycjaId?: Maybe<Scalars['Int']['output']>;
  SpedytorNazwa?: Maybe<Scalars['String']['output']>;
  StatusId?: Maybe<Scalars['Int']['output']>;
  Ukryta?: Maybe<Scalars['Boolean']['output']>;
  WalutaID?: Maybe<Scalars['Int']['output']>;
  WalutaKod?: Maybe<Scalars['String']['output']>;
  WalutaKurs?: Maybe<Scalars['Float']['output']>;
  WartoscBrutto?: Maybe<Scalars['Float']['output']>;
  WartoscBruttoWZlotych?: Maybe<Scalars['Float']['output']>;
  WartoscNetto?: Maybe<Scalars['Float']['output']>;
  WartoscNettoWZlotych?: Maybe<Scalars['Float']['output']>;
  WartoscVat?: Maybe<Scalars['Float']['output']>;
  WartoscVatWZlotych?: Maybe<Scalars['Float']['output']>;
  WystawionyOdBrutto?: Maybe<Scalars['Boolean']['output']>;
  ZamowienieId?: Maybe<Scalars['Int']['output']>;
  ZrodloId?: Maybe<Scalars['Int']['output']>;
  ZrodloNazwa?: Maybe<Scalars['String']['output']>;
};

export type DokumentPozycjaMModel = {
  __typename?: 'DokumentPozycjaMModel';
  Cecha?: Maybe<Scalars['String']['output']>;
  CenaBruttoWalutaDok?: Maybe<Scalars['Float']['output']>;
  CenaBruttoWalutaPoz?: Maybe<Scalars['Float']['output']>;
  CenaNettoWalutaDok?: Maybe<Scalars['Float']['output']>;
  CenaNettoWalutaPoz?: Maybe<Scalars['Float']['output']>;
  CenaWyjsciowa?: Maybe<Scalars['Float']['output']>;
  DataRealizacji?: Maybe<Scalars['String']['output']>;
  DataRealizacjiUKlienta?: Maybe<Scalars['String']['output']>;
  DokumentId?: Maybe<Scalars['Int']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Ilosc?: Maybe<Scalars['Float']['output']>;
  IloscAnulowana?: Maybe<Scalars['Float']['output']>;
  IloscMagazynowa?: Maybe<Scalars['Int']['output']>;
  IloscZrealizowana?: Maybe<Scalars['Float']['output']>;
  Jednostka?: Maybe<JednMiaryModel>;
  Kompletnosc?: Maybe<Scalars['Int']['output']>;
  PolaUzytkownika?: Maybe<Array<Maybe<PoleUzytkownikaWartoscModel>>>;
  SkladnikKompletu?: Maybe<Scalars['Int']['output']>;
  StawkaVat?: Maybe<StawkaVatObjModel>;
  Towar?: Maybe<PozycjaTowarModel>;
  Ukryta?: Maybe<Scalars['Boolean']['output']>;
  Upust?: Maybe<Scalars['Float']['output']>;
  WalutaID?: Maybe<Scalars['Int']['output']>;
  WalutaKurs?: Maybe<Scalars['Float']['output']>;
};

export type DokumentStatusModel = {
  __typename?: 'DokumentStatusModel';
  CzyAktywny?: Maybe<Scalars['Boolean']['output']>;
  Data?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
};

export type DokumentStatusyModel = {
  __typename?: 'DokumentStatusyModel';
  Id?: Maybe<Scalars['Int']['output']>;
  Numer?: Maybe<Scalars['String']['output']>;
  NumerObcy?: Maybe<Scalars['String']['output']>;
  PelnyNumer?: Maybe<Scalars['String']['output']>;
  RodzajeId?: Maybe<Scalars['Int']['output']>;
  Status?: Maybe<DokumentStatusModel>;
};

export type DokumentyApiListaWyjscieModel = {
  __typename?: 'DokumentyApiListaWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaDokumentMModel>;
};

export type DokumentyListaModelInModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  CzyStanPierwotny?: InputMaybe<Scalars['Boolean']['input']>;
  DataModyfikacji?: InputMaybe<Scalars['String']['input']>;
  DataWprowadzeniaDo?: InputMaybe<Scalars['String']['input']>;
  DataWprowadzeniaOd?: InputMaybe<Scalars['String']['input']>;
  Filtry?: InputMaybe<FiltryDokListaModel>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type DokumentyStatusyApiListaWyjscieModel = {
  __typename?: 'DokumentyStatusyApiListaWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaDokumentStatusyModel>;
};

export type DokumentyStatusyModelInModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  DataStatusu: Scalars['String']['input'];
  Filtry: FiltryStatusyListaModel;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
};

export enum DopasowanieSzukania {
  /** @deprecated  */
  Dokladne = 'Dokladne',
  /** @deprecated  */
  Podciag = 'Podciag',
  /** @deprecated  */
  WszystkieFragmenty = 'WszystkieFragmenty'
}

/** An implementation for downloadable product cart items. */
export type DownloadableCartItem = CartItemInterface & {
  __typename?: 'DownloadableCartItem';
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** An array containing information about the links for the downloadable product added to the cart. */
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** An array containing information about samples of the selected downloadable product. */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines downloadable product options for `CreditMemoItemInterface`. */
export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem';
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

export enum DownloadableFileTypeEnum {
  /** @deprecated `sample_url` serves to get the downloadable sample */
  File = 'FILE',
  /** @deprecated `sample_url` serves to get the downloadable sample */
  Url = 'URL'
}

/** Defines downloadable product options for `InvoiceItemInterface`. */
export type DownloadableInvoiceItem = InvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem';
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Defines characteristics of the links for downloadable product. */
export type DownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks';
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID']['output'];
};

/** Defines downloadable product options for `OrderItemInterface`. */
export type DownloadableOrderItem = OrderItemInterface & {
  __typename?: 'DownloadableOrderItem';
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Defines a product that the shopper downloads. */
export type DownloadableProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'DownloadableProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** An array containing information about the links for this downloadable product. */
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A value of 1 indicates that each link in the array must be purchased separately. */
  links_purchased_separately?: Maybe<Scalars['Int']['output']>;
  /** The heading above the list of downloadable products. */
  links_title?: Maybe<Scalars['String']['output']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** Defines a product that the shopper downloads. */
export type DownloadableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single downloadable product. */
export type DownloadableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the downloadable product. */
  data: CartItemInput;
  /** An array of objects containing the link_id of the downloadable product link. */
  downloadable_product_links?: InputMaybe<Array<InputMaybe<DownloadableProductLinksInput>>>;
};

/** Defines characteristics of a downloadable product. */
export type DownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks';
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated This information should not be exposed on frontend. */
  is_shareable?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend. */
  number_of_downloads?: Maybe<Scalars['Int']['output']>;
  /** The price of the downloadable product. */
  price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']['output']>;
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID']['output'];
};

/** Contains the link ID for the downloadable product. */
export type DownloadableProductLinksInput = {
  /** The unique ID of the downloadable product link. */
  link_id: Scalars['Int']['input'];
};

/** Defines characteristics of a downloadable product. */
export type DownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples';
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']['output']>;
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the sample. */
  title?: Maybe<Scalars['String']['output']>;
};

/** A downloadable product wish list item. */
export type DownloadableWishlistItem = WishlistItemInterface & {
  __typename?: 'DownloadableWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** An array containing information about the selected links. */
  links_v2?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
  /** An array containing information about the selected samples. */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

export type DrzewoKategoriiPrzynaleznoscModel = {
  __typename?: 'DrzewoKategoriiPrzynaleznoscModel';
  DrzewoLeweElementID?: Maybe<Scalars['Int']['output']>;
  DrzewoPraweElementID?: Maybe<Scalars['Int']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
};

/** Defines a customer-entered option. */
export type EnteredOptionInput = {
  /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  uid: Scalars['ID']['input'];
  /** Text the customer entered. */
  value: Scalars['String']['input'];
};

/** Contains the `uid`, `relative_url`, and `type` attributes. */
export type EntityUrl = {
  __typename?: 'EntityUrl';
  /** @deprecated Use `relative_url` instead. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, or similar object associated with the specified URL. This could be a product, category, or CMS page UID. */
  entity_uid?: Maybe<Scalars['ID']['output']>;
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirectCode?: Maybe<Scalars['Int']['output']>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

export type ErrorInterface = {
  /** The returned error message. */
  message: Scalars['String']['output'];
};

/** Lists the exchange rate. */
export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  /** Specifies the store’s default currency to exchange to. */
  currency_to?: Maybe<Scalars['String']['output']>;
  /** The exchange rate for the store’s default currency. */
  rate?: Maybe<Scalars['Float']['output']>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. */
  match?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** Use this attribute to specify the lowest possible value in the range. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Use this attribute to specify the highest possible value in the range. */
  to?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the comparison operators that can be used in a filter. */
export type FilterTypeInput = {
  /** Equals. */
  eq?: InputMaybe<Scalars['String']['input']>;
  finset?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** From. Must be used with the `to` field. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Greater than. */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to. */
  gteq?: InputMaybe<Scalars['String']['input']>;
  /** In. The value can contain a set of comma-separated values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Less than. */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to. */
  lteq?: InputMaybe<Scalars['String']['input']>;
  /** More than or equal to. */
  moreq?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not in. The value can contain a set of comma-separated values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not null. */
  notnull?: InputMaybe<Scalars['String']['input']>;
  /** Is null. */
  null?: InputMaybe<Scalars['String']['input']>;
  /** To. Must be used with the `from` field. */
  to?: InputMaybe<Scalars['String']['input']>;
};

export type FiltrWartosciDowolnejModel = {
  __typename?: 'FiltrWartosciDowolnejModel';
  TypDanych?: Maybe<TypDanychRekordu>;
  Wartosc?: Maybe<Scalars['String']['output']>;
};

export type FiltryChModel = {
  GrupyCen?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TowarId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TowarKod?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Waluta?: InputMaybe<Scalars['Int']['input']>;
};

export type FiltryCiModel = {
  Grupy1Id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  KlientId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TowarId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TowarKod?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FiltryDokListaModel = {
  Id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Klient1Id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Numer?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  NumerObcy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  PelnyNumer?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  RodzajeId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ZrodlaId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type FiltryStanyModel = {
  TowarId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TowarKod?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FiltryStatusyListaModel = {
  DokumentId: Array<InputMaybe<Scalars['Int']['input']>>;
  DokumentNumer: Array<InputMaybe<Scalars['String']['input']>>;
  DokumentNumerObcy: Array<InputMaybe<Scalars['String']['input']>>;
  DokumentRodzajId: Array<InputMaybe<Scalars['Int']['input']>>;
  StatusyWszystkie?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FiltryTowarListaModel = {
  EAN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Grupa1Id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Grupa2Id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  GrupaWWW?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Kod?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FiltryZdjecieModel = {
  NazwyDodatkoweIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TowarId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TowarKod?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
  __typename?: 'FixedProductTax';
  /** The amount of the Fixed Product Tax. */
  amount?: Maybe<Money>;
  /** The display label assigned to the Fixed Product Tax. */
  label?: Maybe<Scalars['String']['output']>;
};

/** Lists display settings for the Fixed Product Tax. */
export enum FixedProductTaxDisplaySettings {
  /**
   * The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.'
   * @deprecated
   */
  ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
  /**
   * The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'.
   * @deprecated
   */
  ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query.
   * @deprecated
   */
  FptDisabled = 'FPT_DISABLED',
  /**
   * The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'.
   * @deprecated
   */
  IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'.
   * @deprecated
   */
  IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS'
}

/** Identifies which customer requires remote shopping assistance. */
export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance. */
  customer_email: Scalars['String']['input'];
};

/** Contains the generated customer token. */
export type GenerateCustomerTokenAsAdminOutput = {
  __typename?: 'GenerateCustomerTokenAsAdminOutput';
  /** The generated customer token. */
  customer_token: Scalars['String']['output'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessage = {
  __typename?: 'GiftMessage';
  /** Sender name */
  from: Scalars['String']['output'];
  /** Gift message text */
  message: Scalars['String']['output'];
  /** Recipient name */
  to: Scalars['String']['output'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessageInput = {
  /** Sender name */
  from: Scalars['String']['input'];
  /** Gift message text */
  message: Scalars['String']['input'];
  /** Recipient name */
  to: Scalars['String']['input'];
};

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProduct = PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'GroupedProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing grouped product items. */
  items?: Maybe<Array<Maybe<GroupedProductItem>>>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};


/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains information about an individual grouped product item. */
export type GroupedProductItem = {
  __typename?: 'GroupedProductItem';
  /** The relative position of this item compared to the other group items. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Details about this product option. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this grouped product item. */
  qty?: Maybe<Scalars['Float']['output']>;
};

/** A grouped product wish list item. */
export type GroupedProductWishlistItem = WishlistItemInterface & {
  __typename?: 'GroupedProductWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

export type GrupaCenModel = {
  __typename?: 'GrupaCenModel';
  Aktywna?: Maybe<Scalars['Boolean']['output']>;
  Bazowa?: Maybe<Scalars['Boolean']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  Podstawowa?: Maybe<Scalars['Boolean']['output']>;
};

export type GrupaCenModelResult = {
  __typename?: 'GrupaCenModelResult';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<Array<Maybe<GrupaCenModel>>>;
};

export type GrupaCenZapytanieModel = {
  Aktywna?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GrupaTowarowModel = {
  __typename?: 'GrupaTowarowModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  NazwyDodatkowe?: Maybe<Array<Maybe<GrupaTowaruNazwyDodatkoweModel>>>;
  RodzicID?: Maybe<Scalars['Int']['output']>;
  UwzgledniaPrzynaleznosc?: Maybe<Scalars['Boolean']['output']>;
};

export enum GrupaTowarowRodzaj {
  /** @deprecated  */
  GrupaI = 'GrupaI',
  /** @deprecated  */
  GrupaIi = 'GrupaII',
  /** @deprecated  */
  GrupaWww = 'GrupaWWW'
}

export type GrupaTowarowZapytanieModel = {
  BezPustych?: InputMaybe<Scalars['Boolean']['input']>;
  NazwyDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Rodzaj?: InputMaybe<GrupaTowarowRodzaj>;
};

export type GrupaTowaruNazwyDodatkoweModel = {
  __typename?: 'GrupaTowaruNazwyDodatkoweModel';
  GrupaID?: Maybe<Scalars['Int']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  NazwaDodatkowaID?: Maybe<Scalars['Int']['output']>;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Contains the secure URL used for the Payments Pro Hosted Solution payment method. */
export type HostedProUrl = {
  __typename?: 'HostedProUrl';
  /** The secure URL generated by PayPal. */
  secure_form_url?: Maybe<Scalars['String']['output']>;
};

/** Contains the required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
};

/** Contains target path parameters. */
export type HttpQueryParameter = {
  __typename?: 'HttpQueryParameter';
  /** A parameter name. */
  name?: Maybe<Scalars['String']['output']>;
  /** A parameter value. */
  value?: Maybe<Scalars['String']['output']>;
};

export type ImageSwatchData = SwatchDataInterface & {
  __typename?: 'ImageSwatchData';
  /** The URL assigned to the thumbnail of the swatch image. */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type InformacjaDodatkowaModel = {
  __typename?: 'InformacjaDodatkowaModel';
  Pole?: Maybe<Scalars['String']['output']>;
  Wartosci?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Contains an error message when an internal error occurred. */
export type InternalError = ErrorInterface & {
  __typename?: 'InternalError';
  /** The returned error message. */
  message: Scalars['String']['output'];
};

/** Contains invoice details. */
export type Invoice = {
  __typename?: 'Invoice';
  /** Comments on the invoice. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `Invoice` object. */
  id: Scalars['ID']['output'];
  /** Invoiced product details. */
  items?: Maybe<Array<Maybe<InvoiceItemInterface>>>;
  /** Sequential invoice number. */
  number: Scalars['String']['output'];
  /** Invoice total amount details. */
  total?: Maybe<InvoiceTotal>;
};

export type InvoiceItem = InvoiceItemInterface & {
  __typename?: 'InvoiceItem';
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Contains detailes about invoiced items. */
export type InvoiceItemInterface = {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Contains price details from an invoice. */
export type InvoiceTotal = {
  __typename?: 'InvoiceTotal';
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the invoice. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the invoice. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The invoice tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the invoice. */
  total_shipping: Money;
  /** The amount of tax applied to the invoice. */
  total_tax: Money;
};

/** Contains the result of the `isEmailAvailable` query. */
export type IsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput';
  /** Indicates whether the specified email address can be used to create a customer. */
  is_email_available?: Maybe<Scalars['Boolean']['output']>;
};

/** A list of options of the selected bundle product. */
export type ItemSelectedBundleOption = {
  __typename?: 'ItemSelectedBundleOption';
  /**
   * The unique ID for a `ItemSelectedBundleOption` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output'];
  /** The label of the option. */
  label: Scalars['String']['output'];
  /** The unique ID for a `ItemSelectedBundleOption` object. */
  uid: Scalars['ID']['output'];
  /** A list of products that represent the values of the parent option. */
  values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
};

/** A list of values for the selected bundle product. */
export type ItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue';
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output'];
  /** The price of the child bundle product. */
  price: Money;
  /** The name of the child bundle product. */
  product_name: Scalars['String']['output'];
  /** The SKU of the child bundle product. */
  product_sku: Scalars['String']['output'];
  /** The number of this bundle product that were ordered. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `ItemSelectedBundleOptionValue` object. */
  uid: Scalars['ID']['output'];
};

export type JednMiaryModel = {
  __typename?: 'JednMiaryModel';
  Id?: Maybe<Scalars['Int']['output']>;
  Skrot?: Maybe<Scalars['String']['output']>;
};

export type JednostkaAlternatywnaModel = {
  __typename?: 'JednostkaAlternatywnaModel';
  Licznik?: Maybe<Scalars['Int']['output']>;
  Mianownik?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
};

export type KartaTowaruModel = {
  __typename?: 'KartaTowaruModel';
  Ceny?: Maybe<Array<Maybe<CennikModel>>>;
  DataWprowadzenia?: Maybe<Scalars['String']['output']>;
  KompletacjaStanHandlowy?: Maybe<Scalars['Float']['output']>;
  StanUDostawcow?: Maybe<Array<Maybe<StanUKlientaModel>>>;
  Stany?: Maybe<Array<Maybe<StanTowaruNaMagazynieModel>>>;
  Towar?: Maybe<Towar2Model>;
};

export type KartaTowaruPelnaModel = {
  __typename?: 'KartaTowaruPelnaModel';
  JednostkiAlternatywne?: Maybe<Array<Maybe<JednostkaAlternatywnaModel>>>;
  KartaTowaru?: Maybe<KartaTowaruModel>;
  Pliki?: Maybe<Array<Maybe<PlikInfoModel>>>;
  Powiazane?: Maybe<Array<Maybe<PowiazanyTowarModel>>>;
  PrzynaleznosciDrzewKategorii?: Maybe<Array<Maybe<DrzewoKategoriiPrzynaleznoscModel>>>;
  SkladnikiKompletu?: Maybe<Array<Maybe<RekordZNazwaModel>>>;
  WartosciDowolne?: Maybe<Array<Maybe<WartoscDowolnaModel>>>;
  Zamienniki?: Maybe<Array<Maybe<ZamiennikTowaruModel>>>;
};

/** Contains a key-value pair. */
export type KeyValue = {
  __typename?: 'KeyValue';
  /** The name part of the key/value pair. */
  name?: Maybe<Scalars['String']['output']>;
  /** The value part of the key/value pair. */
  value?: Maybe<Scalars['String']['output']>;
};

export type KlientSzukanyModel = {
  __typename?: 'KlientSzukanyModel';
  ID?: Maybe<Scalars['Int']['output']>;
  ILN?: Maybe<Scalars['String']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  NIP?: Maybe<Scalars['String']['output']>;
  REGON?: Maybe<Scalars['String']['output']>;
  StatusKlienta?: Maybe<Array<Maybe<StatusKlienta>>>;
};

export type KlientSzukanyModelInput = {
  ID?: InputMaybe<Scalars['Int']['input']>;
  ILN?: InputMaybe<Scalars['String']['input']>;
  Kod?: InputMaybe<Scalars['String']['input']>;
  NIP?: InputMaybe<Scalars['String']['input']>;
  REGON?: InputMaybe<Scalars['String']['input']>;
  StatusKlienta?: InputMaybe<Array<InputMaybe<StatusKlienta>>>;
};

export type KosztTransportuEcommerceModel = {
  __typename?: 'KosztTransportuEcommerceModel';
  KosztTransportuPozycje?: Maybe<Array<Maybe<KosztTransportuPozycjaEcommerceModel>>>;
  KrajIWysylkiD?: Maybe<Scalars['Int']['output']>;
  KrajWysylkiNazwa?: Maybe<Scalars['String']['output']>;
  SpedytorID?: Maybe<Scalars['Int']['output']>;
  SposobPakowania?: Maybe<PackingType>;
  Towar?: Maybe<TowarWKoszykuModel>;
  WalutaID?: Maybe<Scalars['Int']['output']>;
};

export type KosztTransportuPozycjaEcommerceModel = {
  __typename?: 'KosztTransportuPozycjaEcommerceModel';
  CenaBrutto?: Maybe<Scalars['Float']['output']>;
  CenaNetto?: Maybe<Scalars['Float']['output']>;
  Ilosc?: Maybe<Scalars['Float']['output']>;
  KosztTransportu?: Maybe<RekordModel>;
};

export type KosztTransportuPozycjiEcommerceZapytanieModel = {
  Klient?: InputMaybe<KlientSzukanyModelInput>;
  Kraj?: InputMaybe<SzukanyRekordModel>;
  Towary?: InputMaybe<Array<InputMaybe<TowarWKoszykuModelInput>>>;
  Waluta?: InputMaybe<SzukanyRekordModel>;
};

export type KosztTransportuWynikModel = {
  __typename?: 'KosztTransportuWynikModel';
  InfoOPakiecieRabatowym?: Maybe<Scalars['String']['output']>;
  Koszty?: Maybe<Array<Maybe<KosztTransportuEcommerceModel>>>;
};

/** Contains information for rendering layered navigation. */
export type LayerFilter = {
  __typename?: 'LayerFilter';
  /**
   * An array of filter items.
   * @deprecated Use `Aggregation.options` instead.
   */
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  /**
   * The count of filter items in filter group.
   * @deprecated Use `Aggregation.count` instead.
   */
  filter_items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The name of a layered navigation filter.
   * @deprecated Use `Aggregation.label` instead.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The request variable name for a filter query.
   * @deprecated Use `Aggregation.attribute_code` instead.
   */
  request_var?: Maybe<Scalars['String']['output']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
  __typename?: 'LayerFilterItem';
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

export type LayerFilterItemInterface = {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

export type ListaApiChodliwoscModel = {
  __typename?: 'ListaApiChodliwoscModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<ApiChodliwoscModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaCenaIndywidualnaMModel = {
  __typename?: 'ListaCenaIndywidualnaMModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<CenaIndywidualnaMModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaCenaMModel = {
  __typename?: 'ListaCenaMModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<CenaMModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaCenaTowaruModel = {
  __typename?: 'ListaCenaTowaruModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<CenaTowaruModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaCenyWynikoweModel = {
  __typename?: 'ListaCenyWynikoweModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<CenyWynikoweModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaCzescZamiennaModel = {
  __typename?: 'ListaCzescZamiennaModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<CzescZamiennaModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaDokumentMModel = {
  __typename?: 'ListaDokumentMModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<DokumentMModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaDokumentStatusyModel = {
  __typename?: 'ListaDokumentStatusyModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<DokumentStatusyModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaPrzegladDefinicjaModel = {
  __typename?: 'ListaPrzegladDefinicjaModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<PrzegladDefinicjaModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaRekordowCenaIndywidualnaModel = {
  __typename?: 'ListaRekordowCenaIndywidualnaModel';
  BrakujaceID?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  Cursor?: Maybe<CursorModel>;
  Podsumowanie?: Maybe<CenaIndywidualnaModel>;
  PolaUzytkownikaDefinicje?: Maybe<Array<Maybe<PoleUzytkownikaDefinicjaModel>>>;
  PolaUzytkownikaSlowniki?: Maybe<Array<Maybe<SlownikUzytkownikaModel>>>;
  Rekordy?: Maybe<Array<Maybe<CenaIndywidualnaModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaRekordowTowarCenaModel = {
  __typename?: 'ListaRekordowTowarCenaModel';
  BrakujaceID?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  Cursor?: Maybe<CursorModel>;
  Podsumowanie?: Maybe<TowarCenaModel>;
  PolaUzytkownikaDefinicje?: Maybe<Array<Maybe<PoleUzytkownikaDefinicjaModel>>>;
  PolaUzytkownikaSlowniki?: Maybe<Array<Maybe<SlownikUzytkownikaModel>>>;
  Rekordy?: Maybe<Array<Maybe<TowarCenaModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaRekordowTowarCharakterystykaKlientaModel = {
  __typename?: 'ListaRekordowTowarCharakterystykaKlientaModel';
  BrakujaceID?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  Cursor?: Maybe<CursorModel>;
  Podsumowanie?: Maybe<TowarCharakterystykaKlientaModel>;
  PolaUzytkownikaDefinicje?: Maybe<Array<Maybe<PoleUzytkownikaDefinicjaModel>>>;
  PolaUzytkownikaSlowniki?: Maybe<Array<Maybe<SlownikUzytkownikaModel>>>;
  Rekordy?: Maybe<Array<Maybe<TowarCharakterystykaKlientaModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaRekordowTowarCharakterystykaMagazynModel = {
  __typename?: 'ListaRekordowTowarCharakterystykaMagazynModel';
  BrakujaceID?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  Cursor?: Maybe<CursorModel>;
  Podsumowanie?: Maybe<TowarCharakterystykaMagazynModel>;
  PolaUzytkownikaDefinicje?: Maybe<Array<Maybe<PoleUzytkownikaDefinicjaModel>>>;
  PolaUzytkownikaSlowniki?: Maybe<Array<Maybe<SlownikUzytkownikaModel>>>;
  Rekordy?: Maybe<Array<Maybe<TowarCharakterystykaMagazynModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaRekordowTowarJednostkaAlternatywnaModel = {
  __typename?: 'ListaRekordowTowarJednostkaAlternatywnaModel';
  BrakujaceID?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  Cursor?: Maybe<CursorModel>;
  Podsumowanie?: Maybe<TowarJednostkaAlternatywnaModel>;
  PolaUzytkownikaDefinicje?: Maybe<Array<Maybe<PoleUzytkownikaDefinicjaModel>>>;
  PolaUzytkownikaSlowniki?: Maybe<Array<Maybe<SlownikUzytkownikaModel>>>;
  Rekordy?: Maybe<Array<Maybe<TowarJednostkaAlternatywnaModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaRekordowTowarModel = {
  __typename?: 'ListaRekordowTowarModel';
  BrakujaceID?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  Cursor?: Maybe<CursorModel>;
  Podsumowanie?: Maybe<TowarModel>;
  PolaUzytkownikaDefinicje?: Maybe<Array<Maybe<PoleUzytkownikaDefinicjaModel>>>;
  PolaUzytkownikaSlowniki?: Maybe<Array<Maybe<SlownikUzytkownikaModel>>>;
  Rekordy?: Maybe<Array<Maybe<TowarModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaRekordowTowarStanModel = {
  __typename?: 'ListaRekordowTowarStanModel';
  BrakujaceID?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  Cursor?: Maybe<CursorModel>;
  Podsumowanie?: Maybe<TowarStanModel>;
  PolaUzytkownikaDefinicje?: Maybe<Array<Maybe<PoleUzytkownikaDefinicjaModel>>>;
  PolaUzytkownikaSlowniki?: Maybe<Array<Maybe<SlownikUzytkownikaModel>>>;
  Rekordy?: Maybe<Array<Maybe<TowarStanModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaRekordowTowarStanModelResult = {
  __typename?: 'ListaRekordowTowarStanModelResult';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaRekordowTowarStanModel>;
};

export type ListaResult = {
  __typename?: 'ListaResult';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaRekordowTowarModel>;
};

export type ListaTowar2Model = {
  __typename?: 'ListaTowar2Model';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<Towar2Model>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaTowarCharakterystykaMiejceMagazynoweModel = {
  __typename?: 'ListaTowarCharakterystykaMiejceMagazynoweModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<TowarCharakterystykaMiejceMagazynoweModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaTowarCzesciZamienneModel = {
  __typename?: 'ListaTowarCzesciZamienneModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<TowarCzesciZamienneModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaTowarEcommerceModel = {
  __typename?: 'ListaTowarEcommerceModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<TowarEcommerceModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaTowarPowiazaneModel = {
  __typename?: 'ListaTowarPowiazaneModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<TowarPowiazaneModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaTowarStanyModel = {
  __typename?: 'ListaTowarStanyModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<TowarStanyModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaTowaryZdjeciaModel = {
  __typename?: 'ListaTowaryZdjeciaModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<TowaryZdjeciaModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

export type ListaWartosciDowolneModelOutModel = {
  __typename?: 'ListaWartosciDowolneModelOutModel';
  Cursor?: Maybe<CursorModel>;
  Rekordy?: Maybe<Array<Maybe<WartosciDowolneModelOutModel>>>;
  Strona?: Maybe<PorcjaListyModel>;
};

/** Defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry';
  /** Details about the content of the media gallery item. */
  content?: Maybe<ProductMediaGalleryEntriesContent>;
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The path of the image on the server. */
  file?: Maybe<Scalars['String']['output']>;
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The alt text displayed on the storefront when the user points to the image. */
  label?: Maybe<Scalars['String']['output']>;
  /** Either `image` or `video`. */
  media_type?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID']['output'];
  /** Details about the content of a video item. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
};

export type MollieApplePayValidationOutput = {
  __typename?: 'MollieApplePayValidationOutput';
  response: Scalars['String']['output'];
};

export type MollieIssuer = {
  __typename?: 'MollieIssuer';
  code?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  svg?: Maybe<Scalars['String']['output']>;
};

export type MolliePaymentFee = {
  __typename?: 'MolliePaymentFee';
  /** Base mollie payment fee */
  base_fee?: Maybe<Money>;
  /** Base mollie payment fee tax */
  base_fee_tax?: Maybe<Money>;
  /** Mollie payment fee */
  fee?: Maybe<Money>;
  /** Mollie payment fee tax */
  fee_tax?: Maybe<Money>;
};

export type MolliePaymentLinkRedirectOutput = {
  __typename?: 'MolliePaymentLinkRedirectOutput';
  already_paid: Scalars['Boolean']['output'];
  is_expired: Scalars['Boolean']['output'];
  redirect_url?: Maybe<Scalars['String']['output']>;
};

export type MolliePaymentMethod = {
  __typename?: 'MolliePaymentMethod';
  code?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MolliePaymentMethodMeta = {
  __typename?: 'MolliePaymentMethodMeta';
  image?: Maybe<Scalars['String']['output']>;
};

export type MolliePaymentMethodsInput = {
  amount: Scalars['Float']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
};

export type MolliePaymentMethodsOutput = {
  __typename?: 'MolliePaymentMethodsOutput';
  methods?: Maybe<Array<Maybe<MolliePaymentMethod>>>;
};

export type MollieProcessTransactionInput = {
  /** The payment token returned from the PlaceOrder call/added to the return URL */
  payment_token: Scalars['String']['input'];
};

export type MollieProcessTransactionOutput = {
  __typename?: 'MollieProcessTransactionOutput';
  /** The cart is only available when the payment status is failed, canceled or expired. */
  cart?: Maybe<Cart>;
  paymentStatus?: Maybe<PaymentStatusEnum>;
  /** Indicates if the customer should be redirected to the cart. */
  redirect_to_cart?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if the customer should be redirected to the success page. */
  redirect_to_success_page?: Maybe<Scalars['Boolean']['output']>;
};

export type MollieResetCartInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String']['input'];
};

export type MollieResetCartOutput = {
  __typename?: 'MollieResetCartOutput';
  cart: Cart;
};

export type MollieStoreConfig = {
  __typename?: 'MollieStoreConfig';
  /** Is Mollie running in live mode? */
  live_mode?: Maybe<Scalars['Boolean']['output']>;
  /** The profile ID used for this store */
  profile_id?: Maybe<Scalars['String']['output']>;
};

export type MollieTerminalOutput = {
  __typename?: 'MollieTerminalOutput';
  brand: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  model: Scalars['String']['output'];
  serialNumber?: Maybe<Scalars['String']['output']>;
};

export type MollieTransactionInput = {
  issuer?: InputMaybe<Scalars['String']['input']>;
  payment_token: Scalars['String']['input'];
};

export type MollieTransactionOutput = {
  __typename?: 'MollieTransactionOutput';
  checkout_url?: Maybe<Scalars['String']['output']>;
};

/** Defines a monetary value, including a numeric value and a currency code. */
export type Money = {
  __typename?: 'Money';
  /** A three-letter currency code, such as USD or EUR. */
  currency?: Maybe<CurrencyEnum>;
  /** A number expressing a monetary value. */
  value?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add one or more bundle products to the specified cart. We recommend using `addProductsToCart` instead. */
  addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
  /** Add one or more configurable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
  /** Add one or more downloadable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
  /** Add any type of product to the cart. */
  addProductsToCart?: Maybe<AddProductsToCartOutput>;
  /** Add products to the specified compare list. */
  addProductsToCompareList?: Maybe<CompareList>;
  /** Add one or more products to the specified wish list. This mutation supports all product types. */
  addProductsToWishlist?: Maybe<AddProductsToWishlistOutput>;
  /** Add one or more simple products to the specified cart. We recommend using `addProductsToCart` instead. */
  addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
  addVendoProductByID?: Maybe<TowarResult>;
  /** Add one or more virtual products to the specified cart. We recommend using `addProductsToCart` instead. */
  addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
  /** Add items in the specified wishlist to the customer's cart. */
  addWishlistItemsToCart?: Maybe<AddWishlistItemsToCartOutput>;
  /** Apply a pre-defined coupon code to the specified cart. */
  applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
  /** Assign the specified compare list to the logged in customer. */
  assignCompareListToCustomer?: Maybe<AssignCompareListToCustomerOutput>;
  /** Assign a logged-in customer to the specified guest shopping cart. */
  assignCustomerToGuestCart: Cart;
  /** Change the password for the logged-in customer. */
  changeCustomerPassword?: Maybe<Customer>;
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String']['output'];
  /** Create a new compare list. The compare list is saved for logged in customers. */
  createCompareList?: Maybe<CompareList>;
  /** Use `createCustomerV2` instead. */
  createCustomer?: Maybe<CustomerOutput>;
  /** Create a billing or shipping address for a customer or guest. */
  createCustomerAddress?: Maybe<CustomerAddress>;
  /** Create a customer account. */
  createCustomerV2?: Maybe<CustomerOutput>;
  /** Create an empty shopping cart for a guest or logged in user */
  createEmptyCart?: Maybe<Scalars['String']['output']>;
  /** @deprecated Using the Order.mollie_redirect_url attribuut */
  createMollieTransaction?: Maybe<MollieTransactionOutput>;
  /** Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
  /** Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
  createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
  /** Create a product review for the specified product. */
  createProductReview: CreateProductReviewOutput;
  /** Delete the specified compare list. */
  deleteCompareList?: Maybe<DeleteCompareListOutput>;
  /** Delete customer account */
  deleteCustomer?: Maybe<Scalars['Boolean']['output']>;
  /** Delete the billing or shipping address of a customer. */
  deleteCustomerAddress?: Maybe<Scalars['Boolean']['output']>;
  /** Delete a customer's payment token. */
  deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
  /** Generate a token for specified customer. */
  generateCustomerToken?: Maybe<CustomerToken>;
  /** Request a customer token so that an administrator can perform remote shopping assistance. */
  generateCustomerTokenAsAdmin?: Maybe<GenerateCustomerTokenAsAdminOutput>;
  /** Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
  /** Transfer the contents of a guest cart into the cart of a logged-in customer. */
  mergeCarts: Cart;
  mollieApplePayValidation?: Maybe<MollieApplePayValidationOutput>;
  molliePaymentLinkRedirect?: Maybe<MolliePaymentLinkRedirectOutput>;
  mollieProcessTransaction?: Maybe<MollieProcessTransactionOutput>;
  mollieRestoreCart?: Maybe<MollieResetCartOutput>;
  /** Convert the quote into an order. */
  placeOrder?: Maybe<PlaceOrderOutput>;
  /** Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon. */
  removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
  /** Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist. */
  removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
  /** Remove products from the specified compare list. */
  removeProductsFromCompareList?: Maybe<CompareList>;
  /** Remove one or more products from the specified wish list. */
  removeProductsFromWishlist?: Maybe<RemoveProductsFromWishlistOutput>;
  /** Add all products from a customer's previous order to the cart. */
  reorderItems?: Maybe<ReorderItemsOutput>;
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']['output']>;
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using `requestPasswordResetEmail`. */
  resetPassword?: Maybe<Scalars['Boolean']['output']>;
  /** Revoke the customer token. */
  revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
  /** Send a message on behalf of a customer to the specified email addresses. */
  sendEmailToFriend?: Maybe<SendEmailToFriendOutput>;
  /** Set the billing address on a specific cart. */
  setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
  /** Assign the email address of a guest to the cart. */
  setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
  setLockerForCart: Scalars['Boolean']['output'];
  /**
   * Set the cart payment method and convert the cart into an order.
   * @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request.
   */
  setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
  /** Apply a payment method to the cart. */
  setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
  /** Set one or more shipping addresses on a specific cart. */
  setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
  /** Set one or more delivery methods on a cart. */
  setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
  /** Subscribe the specified email to the store's newsletter. */
  subscribeEmailToNewsletter?: Maybe<SubscribeEmailToNewsletterOutput>;
  /** Modify items in the cart. */
  updateCartItems?: Maybe<UpdateCartItemsOutput>;
  /** Use `updateCustomerV2` instead. */
  updateCustomer?: Maybe<CustomerOutput>;
  /** Update the billing or shipping address of a customer or guest. */
  updateCustomerAddress?: Maybe<CustomerAddress>;
  /** Change the email address for the logged-in customer. */
  updateCustomerEmail?: Maybe<CustomerOutput>;
  /** Update the customer's personal information. */
  updateCustomerV2?: Maybe<CustomerOutput>;
  /** Update one or more products in the specified wish list. */
  updateProductsInWishlist?: Maybe<UpdateProductsInWishlistOutput>;
};


export type MutationAddBundleProductsToCartArgs = {
  input?: InputMaybe<AddBundleProductsToCartInput>;
};


export type MutationAddConfigurableProductsToCartArgs = {
  input?: InputMaybe<AddConfigurableProductsToCartInput>;
};


export type MutationAddDownloadableProductsToCartArgs = {
  input?: InputMaybe<AddDownloadableProductsToCartInput>;
};


export type MutationAddProductsToCartArgs = {
  cartId: Scalars['String']['input'];
  cartItems: Array<CartItemInput>;
};


export type MutationAddProductsToCompareListArgs = {
  input?: InputMaybe<AddProductsToCompareListInput>;
};


export type MutationAddProductsToWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItems: Array<WishlistItemInput>;
};


export type MutationAddSimpleProductsToCartArgs = {
  input?: InputMaybe<AddSimpleProductsToCartInput>;
};


export type MutationAddVendoProductByIdArgs = {
  productData?: InputMaybe<ProductDataInput>;
};


export type MutationAddVirtualProductsToCartArgs = {
  input?: InputMaybe<AddVirtualProductsToCartInput>;
};


export type MutationAddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItemIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationApplyCouponToCartArgs = {
  input?: InputMaybe<ApplyCouponToCartInput>;
};


export type MutationAssignCompareListToCustomerArgs = {
  uid: Scalars['ID']['input'];
};


export type MutationAssignCustomerToGuestCartArgs = {
  cart_id: Scalars['String']['input'];
};


export type MutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationCreateCompareListArgs = {
  input?: InputMaybe<CreateCompareListInput>;
};


export type MutationCreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CustomerAddressInput;
};


export type MutationCreateCustomerV2Args = {
  input: CustomerCreateInput;
};


export type MutationCreateEmptyCartArgs = {
  input?: InputMaybe<CreateEmptyCartInput>;
};


export type MutationCreateMollieTransactionArgs = {
  input?: InputMaybe<MollieTransactionInput>;
};


export type MutationCreatePayflowProTokenArgs = {
  input: PayflowProTokenInput;
};


export type MutationCreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput;
};


export type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput;
};


export type MutationDeleteCompareListArgs = {
  uid: Scalars['ID']['input'];
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String']['input'];
};


export type MutationGenerateCustomerTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationGenerateCustomerTokenAsAdminArgs = {
  input: GenerateCustomerTokenAsAdminInput;
};


export type MutationHandlePayflowProResponseArgs = {
  input: PayflowProResponseInput;
};


export type MutationMergeCartsArgs = {
  destination_cart_id?: InputMaybe<Scalars['String']['input']>;
  source_cart_id: Scalars['String']['input'];
};


export type MutationMollieApplePayValidationArgs = {
  domain?: InputMaybe<Scalars['String']['input']>;
  validationUrl: Scalars['String']['input'];
};


export type MutationMolliePaymentLinkRedirectArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMollieProcessTransactionArgs = {
  input?: InputMaybe<MollieProcessTransactionInput>;
};


export type MutationMollieRestoreCartArgs = {
  input?: InputMaybe<MollieResetCartInput>;
};


export type MutationPlaceOrderArgs = {
  input?: InputMaybe<PlaceOrderInput>;
};


export type MutationRemoveCouponFromCartArgs = {
  input?: InputMaybe<RemoveCouponFromCartInput>;
};


export type MutationRemoveItemFromCartArgs = {
  input?: InputMaybe<RemoveItemFromCartInput>;
};


export type MutationRemoveProductsFromCompareListArgs = {
  input?: InputMaybe<RemoveProductsFromCompareListInput>;
};


export type MutationRemoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItemsIds: Array<Scalars['ID']['input']>;
};


export type MutationReorderItemsArgs = {
  orderNumber: Scalars['String']['input'];
};


export type MutationRequestPasswordResetEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  resetPasswordToken: Scalars['String']['input'];
};


export type MutationSendEmailToFriendArgs = {
  input?: InputMaybe<SendEmailToFriendInput>;
};


export type MutationSetBillingAddressOnCartArgs = {
  input?: InputMaybe<SetBillingAddressOnCartInput>;
};


export type MutationSetGuestEmailOnCartArgs = {
  input?: InputMaybe<SetGuestEmailOnCartInput>;
};


export type MutationSetLockerForCartArgs = {
  lockerId: Scalars['String']['input'];
};


export type MutationSetPaymentMethodAndPlaceOrderArgs = {
  input?: InputMaybe<SetPaymentMethodAndPlaceOrderInput>;
};


export type MutationSetPaymentMethodOnCartArgs = {
  input?: InputMaybe<SetPaymentMethodOnCartInput>;
};


export type MutationSetShippingAddressesOnCartArgs = {
  input?: InputMaybe<SetShippingAddressesOnCartInput>;
};


export type MutationSetShippingMethodsOnCartArgs = {
  input?: InputMaybe<SetShippingMethodsOnCartInput>;
};


export type MutationSubscribeEmailToNewsletterArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateCartItemsArgs = {
  input?: InputMaybe<UpdateCartItemsInput>;
};


export type MutationUpdateCustomerArgs = {
  input: CustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<CustomerAddressInput>;
};


export type MutationUpdateCustomerEmailArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateCustomerV2Args = {
  input: CustomerUpdateInput;
};


export type MutationUpdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItems: Array<WishlistItemUpdateInput>;
};

export type NadindeksInformacjaModel = {
  __typename?: 'NadindeksInformacjaModel';
  NadindeksID?: Maybe<Scalars['Int']['output']>;
  Sufix?: Maybe<Scalars['String']['output']>;
};

export type NazwaDodatkowaModel = {
  __typename?: 'NazwaDodatkowaModel';
  Code?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  Wartosc?: Maybe<Scalars['String']['output']>;
};

export type NazwyDodatkoweBaseModel = {
  __typename?: 'NazwyDodatkoweBaseModel';
  Kod?: Maybe<Scalars['String']['output']>;
  NazwaDodatkowaID?: Maybe<Scalars['Int']['output']>;
};

/** Contains an error message when an invalid UID was specified. */
export type NoSuchEntityUidError = ErrorInterface & {
  __typename?: 'NoSuchEntityUidError';
  /** The returned error message. */
  message: Scalars['String']['output'];
  /** The specified invalid unique ID of an object. */
  uid: Scalars['ID']['output'];
};

/** Contains the order ID. */
export type Order = {
  __typename?: 'Order';
  mollie_payment_token?: Maybe<Scalars['String']['output']>;
  mollie_redirect_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `order_number` instead. */
  order_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for an `Order` object. */
  order_number: Scalars['String']['output'];
};

/** Contains detailed information about an order's billing and shipping addresses. */
export type OrderAddress = {
  __typename?: 'OrderAddress';
  /** The city or town. */
  city: Scalars['String']['output'];
  /** The customer's company. */
  company?: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country_code?: Maybe<CountryCodeEnum>;
  /** The fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname: Scalars['String']['output'];
  /** The family name of the person associated with the shipping/billing address. */
  lastname: Scalars['String']['output'];
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** The state or province name. */
  region?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Region` object of a pre-defined region. */
  region_id?: Maybe<Scalars['ID']['output']>;
  /** An array of strings that define the street number and name. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The telephone number. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']['output']>;
};

export type OrderAddressData = {
  __typename?: 'OrderAddressData';
  city: Scalars['String']['output'];
  country_code?: Maybe<CountryCodeEnum>;
  postcode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  region_id?: Maybe<Scalars['ID']['output']>;
  street: Array<Maybe<Scalars['String']['output']>>;
};

export type OrderItem = OrderItemInterface & {
  __typename?: 'OrderItem';
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Order item details. */
export type OrderItemInterface = {
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Represents order item options like selected or entered. */
export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  /** The name of the option. */
  label: Scalars['String']['output'];
  /** The value of the option. */
  value: Scalars['String']['output'];
};

export type OrderItems = {
  __typename?: 'OrderItems';
  availability?: Maybe<Scalars['String']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price: Money;
  product_type?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  url_key?: Maybe<Scalars['String']['output']>;
};

/** Contains details about the payment method used to pay for the order. */
export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod';
  /** Additional data per payment method type. */
  additional_data?: Maybe<Array<Maybe<KeyValue>>>;
  /** The label that describes the payment method. */
  name: Scalars['String']['output'];
  /** The payment method code that indicates how the order was paid for. */
  type: Scalars['String']['output'];
};

export type OrderResult = {
  __typename?: 'OrderResult';
  billing_address?: Maybe<OrderAddressData>;
  consumer?: Maybe<CustomerBasicData>;
  created_at?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<OrderItems>>>;
  number: Scalars['String']['output'];
  payment_method?: Maybe<Scalars['String']['output']>;
  shipping_address?: Maybe<OrderAddressData>;
  shipping_method?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  total?: Maybe<OrderTotalSummary>;
};

/** Contains order shipment details. */
export type OrderShipment = {
  __typename?: 'OrderShipment';
  /** Comments added to the shipment. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `OrderShipment` object. */
  id: Scalars['ID']['output'];
  /** An array of items included in the shipment. */
  items?: Maybe<Array<Maybe<ShipmentItemInterface>>>;
  /** The sequential credit shipment number. */
  number: Scalars['String']['output'];
  /** An array of shipment tracking details. */
  tracking?: Maybe<Array<Maybe<ShipmentTracking>>>;
};

/** Contains details about the sales total amounts used to calculate the final price. */
export type OrderTotal = {
  __typename?: 'OrderTotal';
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the order. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the order. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The order tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the order. */
  total_shipping: Money;
  /** The amount of tax applied to the order. */
  total_tax: Money;
};

export type OrderTotalSummary = {
  __typename?: 'OrderTotalSummary';
  base_grand_total: Money;
  discounts: Money;
  grand_total: Money;
  subtotal: Money;
  total_shipping: Money;
  total_tax: Money;
};

export enum PackingType {
  /** @deprecated  */
  Paczka = 'Paczka',
  /** @deprecated  */
  Paleta = 'Paleta',
  /** @deprecated  */
  Polpaleta = 'Polpaleta'
}

/** Contains required input for Payflow Express Checkout payments. */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input'];
  /** The token returned by the createPaypalExpressToken mutation. */
  token: Scalars['String']['input'];
};

/** A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods. */
export enum PayflowLinkMode {
  /** @deprecated  */
  Live = 'LIVE',
  /** @deprecated  */
  Test = 'TEST'
}

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkToken = {
  __typename?: 'PayflowLinkToken';
  /** The mode for the Payflow transaction. */
  mode?: Maybe<PayflowLinkMode>;
  /** The PayPal URL used for requesting a Payflow form. */
  paypal_url?: Maybe<Scalars['String']['output']>;
  /** The secure token generated by PayPal. */
  secure_token?: Maybe<Scalars['String']['output']>;
  /** The secure token ID generated by PayPal. */
  secure_token_id?: Maybe<Scalars['String']['output']>;
};

/** Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
};

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information. */
  cc_details: CreditCardDetailsInput;
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** The payload returned from PayPal. */
  paypal_payload: Scalars['String']['input'];
};

export type PayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput';
  /** The cart with the updated selected payment method. */
  cart: Cart;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
  __typename?: 'PayflowProToken';
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output'];
};

/** Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  /** Available issuers for this payment method */
  mollie_available_issuers?: Maybe<Array<Maybe<MollieIssuer>>>;
  /** Retrieve meta information for this payment method (image) */
  mollie_meta: MolliePaymentMethodMeta;
};

/** Defines the payment method. */
export type PaymentMethodInput = {
  braintree?: InputMaybe<BraintreeInput>;
  braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
  /** The internal name for the payment method. */
  code: Scalars['String']['input'];
  /** Required input for PayPal Hosted pro payments. */
  hosted_pro?: InputMaybe<HostedProInput>;
  /** The Apple Pay payment token */
  mollie_applepay_payment_token?: InputMaybe<Scalars['String']['input']>;
  /** The card token provided by Mollie Components */
  mollie_card_token?: InputMaybe<Scalars['String']['input']>;
  /** Provided the issuer chosen by the end-user */
  mollie_selected_issuer?: InputMaybe<Scalars['String']['input']>;
  /** Provided the terminal chosen */
  mollie_selected_terminal?: InputMaybe<Scalars['String']['input']>;
  /** Required input for Payflow Express Checkout payments. */
  payflow_express?: InputMaybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments. */
  payflow_link?: InputMaybe<PayflowLinkInput>;
  /** Required input for PayPal Payflow Pro and Payment Pro payments. */
  payflowpro?: InputMaybe<PayflowProInput>;
  /** Required input for PayPal Payflow Pro vault payments. */
  payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
  /** Required input for Express Checkout and Payments Standard payments. */
  paypal_express?: InputMaybe<PaypalExpressInput>;
  /** The purchase order number. Optional for most payment methods. */
  purchase_order_number?: InputMaybe<Scalars['String']['input']>;
};

export enum PaymentStatusEnum {
  /** @deprecated  */
  Authorized = 'AUTHORIZED',
  /** @deprecated  */
  Canceled = 'CANCELED',
  /** @deprecated  */
  Completed = 'COMPLETED',
  /** @deprecated  */
  Created = 'CREATED',
  /** @deprecated  */
  Error = 'ERROR',
  /** @deprecated  */
  Expired = 'EXPIRED',
  /** @deprecated  */
  Failed = 'FAILED',
  /** @deprecated  */
  Open = 'OPEN',
  /** @deprecated  */
  Paid = 'PAID',
  /** @deprecated  */
  Pending = 'PENDING',
  /** @deprecated  */
  Refunded = 'REFUNDED',
  /** @deprecated  */
  Shipping = 'SHIPPING'
}

/** The stored payment method available to the customer. */
export type PaymentToken = {
  __typename?: 'PaymentToken';
  /** A description of the stored account details. */
  details?: Maybe<Scalars['String']['output']>;
  /** The payment method code associated with the token. */
  payment_method_code: Scalars['String']['output'];
  /** The public hash of the token. */
  public_hash: Scalars['String']['output'];
  /** Specifies the payment token type. */
  type: PaymentTokenTypeEnum;
};

/** The list of available payment token types. */
export enum PaymentTokenTypeEnum {
  /**
   * phpcs:ignore Magento2.GraphQL.ValidArgumentName
   * @deprecated
   */
  Account = 'account',
  /**
   * phpcs:ignore Magento2.GraphQL.ValidArgumentName
   * @deprecated
   */
  Card = 'card'
}

/** Contains required input for Express Checkout and Payments Standard payments. */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input'];
  /** The token returned by the `createPaypalExpressToken` mutation. */
  token: Scalars['String']['input'];
};

/** Deprecated. Use `PaypalExpressTokenOutput` instead. */
export type PaypalExpressToken = {
  __typename?: 'PaypalExpressToken';
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details.
   * @deprecated Use `PaypalExpressTokenOutput.paypal_urls` instead.
   */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /**
   * The token returned by PayPal.
   * @deprecated Use `PaypalExpressTokenOutput.token` instead.
   */
  token?: Maybe<Scalars['String']['output']>;
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
  /** The payment method code. */
  code: Scalars['String']['input'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false. */
  express_button?: InputMaybe<Scalars['Boolean']['input']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false. */
  use_paypal_credit?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput';
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details. */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /** The token returned by PayPal. */
  token?: Maybe<Scalars['String']['output']>;
};

/** Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type PaypalExpressUrlList = {
  __typename?: 'PaypalExpressUrlList';
  /** The PayPal URL that allows the buyer to edit their checkout details. */
  edit?: Maybe<Scalars['String']['output']>;
  /** The URL to the PayPal login page. */
  start?: Maybe<Scalars['String']['output']>;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. */
  pending_url?: InputMaybe<Scalars['String']['input']>;
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: InputMaybe<Scalars['String']['input']>;
};

/** Contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Defines Pickup Location information. */
export type PickupLocation = {
  __typename?: 'PickupLocation';
  city?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  pickup_location_code?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  region_id?: Maybe<Scalars['Int']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<FilterTypeInput>;
};

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<SortEnum>;
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: InputMaybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<SortEnum>;
};

/** Top level object returned in a pickup locations search. */
export type PickupLocations = {
  __typename?: 'PickupLocations';
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<PickupLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Specifies the quote to be converted to an order. */
export type PlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** Optionally send a URL where the visitor is returned after completing the Mollie order */
  mollie_return_url?: InputMaybe<Scalars['String']['input']>;
};

/** Contains the results of the request to place an order. */
export type PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput';
  /** The ID of the order. */
  order: Order;
};

export type PlikInfoModel = {
  __typename?: 'PlikInfoModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  Rozszerzenie?: Maybe<Scalars['String']['output']>;
};

export type PoleUzytkownikaDefinicjaModel = {
  __typename?: 'PoleUzytkownikaDefinicjaModel';
  CzyDomyslniePokazywana?: Maybe<Scalars['Boolean']['output']>;
  CzyEdytowalna?: Maybe<Scalars['Boolean']['output']>;
  CzyPosiadaOpis?: Maybe<Scalars['Boolean']['output']>;
  CzyProgramistyczna?: Maybe<Scalars['Boolean']['output']>;
  DbPoleFlaga?: Maybe<Scalars['String']['output']>;
  DbPoleOpis?: Maybe<Scalars['String']['output']>;
  DbPoleWartosc?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  LiczbaMiejscPoPrzecinku?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  NazwaWewnetrzna?: Maybe<Scalars['String']['output']>;
  NazwyDodatkowe?: Maybe<Array<Maybe<NazwaDodatkowaModel>>>;
  SlownikID?: Maybe<Scalars['Int']['output']>;
  SlownikRozmiarowkiID?: Maybe<Scalars['Int']['output']>;
  Typ?: Maybe<PoleUzytkownikaTyp>;
  TypObiektu?: Maybe<TypDanychRekordu>;
  WartosciDomyslne?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Wielojezykowa?: Maybe<Scalars['Boolean']['output']>;
  Wielokrotna?: Maybe<Scalars['Boolean']['output']>;
  WlascicielRodzaj?: Maybe<Scalars['Int']['output']>;
  WlascicielTypDanych?: Maybe<TypDanychRekordu>;
  WlascicielWykluczoneRodzaje?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type PoleUzytkownikaExtendedModel = {
  __typename?: 'PoleUzytkownikaExtendedModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Indeks?: Maybe<Scalars['Int']['output']>;
  NazwaDodatkowaId?: Maybe<Scalars['Int']['output']>;
  NazwaPliku?: Maybe<Scalars['String']['output']>;
  NazwaWewnetrzna?: Maybe<Scalars['String']['output']>;
  Opis?: Maybe<Scalars['String']['output']>;
  Wartosc?: Maybe<Scalars['String']['output']>;
};

export enum PoleUzytkownikaTyp {
  /** @deprecated  */
  Data = 'Data',
  /** @deprecated  */
  DataCzas = 'DataCzas',
  /** @deprecated  */
  Html = 'Html',
  /** @deprecated  */
  Json = 'Json',
  /** @deprecated  */
  JsonDialog = 'JsonDialog',
  /** @deprecated  */
  Kolor = 'Kolor',
  /** @deprecated  */
  Liczba = 'Liczba',
  /** @deprecated  */
  Logiczny = 'Logiczny',
  /** @deprecated  */
  Obiekt = 'Obiekt',
  /** @deprecated  */
  Plik = 'Plik',
  /** @deprecated  */
  SkrotDoKatalogu = 'SkrotDoKatalogu',
  /** @deprecated  */
  SkrotDoPliku = 'SkrotDoPliku',
  /** @deprecated  */
  Tekst = 'Tekst',
  /** @deprecated  */
  TekstWielolinijkowy = 'TekstWielolinijkowy'
}

export type PoleUzytkownikaWartoscModel = {
  __typename?: 'PoleUzytkownikaWartoscModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Indeks?: Maybe<Scalars['Int']['output']>;
  NazwaPliku?: Maybe<Scalars['String']['output']>;
  NazwaWewnetrzna?: Maybe<Scalars['String']['output']>;
  Opis?: Maybe<Scalars['String']['output']>;
  Wartosc?: Maybe<Scalars['String']['output']>;
};

export type PorcjaListyModel = {
  __typename?: 'PorcjaListyModel';
  Indeks?: Maybe<Scalars['Int']['output']>;
  LiczbaRekordow?: Maybe<Scalars['Int']['output']>;
};

export type PorcjaListyModelInput = {
  Indeks?: InputMaybe<Scalars['Int']['input']>;
  LiczbaRekordow?: InputMaybe<Scalars['Int']['input']>;
};

export type PowiazanyTowarModel = {
  __typename?: 'PowiazanyTowarModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Ilosc?: Maybe<Scalars['Float']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  Lp?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  Typ?: Maybe<Scalars['String']['output']>;
};

export type PozycjaTowarModel = {
  __typename?: 'PozycjaTowarModel';
  TowarId?: Maybe<Scalars['Int']['output']>;
  TowarKod?: Maybe<Scalars['String']['output']>;
  TowarNazwa?: Maybe<Scalars['String']['output']>;
};

/** Deprecated. Use `ProductPrice` instead. Defines the price of a product as well as any tax-related adjustments. */
export type Price = {
  __typename?: 'Price';
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Use `ProductPrice` instead.
   */
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Use `ProductPrice` instead.
   */
  amount?: Maybe<Money>;
};

/** Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type PriceAdjustment = {
  __typename?: 'PriceAdjustment';
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  code?: Maybe<PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

/** `PriceAdjustment.code` is deprecated. */
export enum PriceAdjustmentCodesEnum {
  /** @deprecated `PriceAdjustmentCodesEnum` is deprecated. Tax is included or excluded in the price. Tax is not shown separately in Catalog. */
  Tax = 'TAX',
  /** @deprecated WEEE code is deprecated. Use `fixed_product_taxes.label` instead. */
  Weee = 'WEEE',
  /** @deprecated Use `fixed_product_taxes` instead.  Tax is included or excluded in price. The tax is not shown separtely in Catalog. */
  WeeeTax = 'WEEE_TAX'
}

/** `PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded. */
export enum PriceAdjustmentDescriptionEnum {
  /** @deprecated  */
  Excluded = 'EXCLUDED',
  /** @deprecated  */
  Included = 'INCLUDED'
}

/** Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
  __typename?: 'PriceRange';
  /** The highest possible price for the product. */
  maximum_price?: Maybe<ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice;
};

/** Defines the price type. */
export enum PriceTypeEnum {
  /** @deprecated  */
  Dynamic = 'DYNAMIC',
  /** @deprecated  */
  Fixed = 'FIXED',
  /** @deprecated  */
  Percent = 'PERCENT'
}

/** Defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum PriceViewEnum {
  /** @deprecated  */
  AsLowAs = 'AS_LOW_AS',
  /** @deprecated  */
  PriceRange = 'PRICE_RANGE'
}

/** Contains a product attribute code and value. */
export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  /** The unique identifier for a product attribute code. */
  code: Scalars['String']['output'];
  /** The display value of the attribute. */
  value: Scalars['String']['output'];
};

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: Activity */
  activity?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Category Gear */
  category_gear?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use `category_uid` to filter product by category ID. */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Climate */
  climate?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Collar */
  collar?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color */
  color?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Eco Collection */
  eco_collection?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Erin Recommends */
  erin_recommends?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Features */
  features_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Format */
  format?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Gender */
  gender?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material */
  material?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: New */
  new?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pattern */
  pattern?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Performance Fabric */
  performance_fabric?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Price */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Sale */
  sale?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Size */
  size?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sleeve */
  sleeve?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Strap/Handle */
  strap_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bags */
  style_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bottom */
  style_bottom?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style General */
  style_general?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
};

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Attribute label: Price */
  price?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
};

export type ProductDataInput = {
  Id?: InputMaybe<Scalars['Int']['input']>;
  Sku?: InputMaybe<Scalars['String']['input']>;
};

/** Contains the discount applied to a product price. */
export type ProductDiscount = {
  __typename?: 'ProductDiscount';
  /** The actual value of the discount. */
  amount_off?: Maybe<Scalars['Float']['output']>;
  /** The discount expressed a percentage. */
  percent_off?: Maybe<Scalars['Float']['output']>;
};

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** The category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image. */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Contains product image information, including the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
  __typename?: 'ProductImage';
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Product Information used for Pickup Locations search. */
export type ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars['String']['input'];
};

/** Contains fields that are common to all types of products. */
export type ProductInterface = {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** Contains fields that are common to all types of products. */
export type ProductInterfaceReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** An implementation of `ProductLinksInterface`. */
export type ProductLinks = ProductLinksInterface & {
  __typename?: 'ProductLinks';
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']['output']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']['output']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']['output']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']['output']>;
};

/** Contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']['output']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']['output']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']['output']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']['output']>;
};

/** Contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent';
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']['output']>;
  /** The file name of the image. */
  name?: Maybe<Scalars['String']['output']>;
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']['output']>;
};

/** Contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
  __typename?: 'ProductMediaGalleryEntriesVideoContent';
  /** Must be external-video. */
  media_type?: Maybe<Scalars['String']['output']>;
  /** A description of the video. */
  video_description?: Maybe<Scalars['String']['output']>;
  /** Optional data about the video. */
  video_metadata?: Maybe<Scalars['String']['output']>;
  /** Describes the video source. */
  video_provider?: Maybe<Scalars['String']['output']>;
  /** The title of the video. */
  video_title?: Maybe<Scalars['String']['output']>;
  /** The URL to the video. */
  video_url?: Maybe<Scalars['String']['output']>;
};

/** Represents a product price. */
export type ProductPrice = {
  __typename?: 'ProductPrice';
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<ProductDiscount>;
  /** The final price of the product after applying discounts. */
  final_price: Money;
  /** An array of the multiple Fixed Product Taxes that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Money;
};

/** Deprecated. Use `PriceRange` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type ProductPrices = {
  __typename?: 'ProductPrices';
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `to` value.
   * @deprecated Use `PriceRange.maximum_price` instead.
   */
  maximalPrice?: Maybe<Price>;
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `from` value.
   * @deprecated Use `PriceRange.minimum_price` instead.
   */
  minimalPrice?: Maybe<Price>;
  /**
   * The base price of a product.
   * @deprecated Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead.
   */
  regularPrice?: Maybe<Price>;
};

/** Contains details of a product review. */
export type ProductReview = {
  __typename?: 'ProductReview';
  /** The average of all ratings for this product. */
  average_rating: Scalars['Float']['output'];
  /** The date the review was created. */
  created_at: Scalars['String']['output'];
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['output'];
  /** The reviewed product. */
  product: ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value. */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>;
  /** The summary (title) of the review. */
  summary: Scalars['String']['output'];
  /** The review text. */
  text: Scalars['String']['output'];
};

/** Contains data about a single aspect of a product review. */
export type ProductReviewRating = {
  __typename?: 'ProductReviewRating';
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String']['output'];
};

/** Contains the reviewer's rating for a single aspect of a review. */
export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String']['input'];
  /** An encoded rating value ID. */
  value_id: Scalars['String']['input'];
};

/** Contains details about a single aspect of a product review. */
export type ProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata';
  /** An encoded rating ID. */
  id: Scalars['String']['output'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>;
};

/** Contains details about a single value in a product review. */
export type ProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata';
  /** A ratings scale, such as the number of stars awarded. */
  value: Scalars['String']['output'];
  /** An encoded rating value ID. */
  value_id: Scalars['String']['output'];
};

/** Contains an array of metadata about each aspect of a product review. */
export type ProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata';
  /** An array of product reviews sorted by position. */
  items: Array<Maybe<ProductReviewRatingMetadata>>;
};

/** Contains an array of product reviews. */
export type ProductReviews = {
  __typename?: 'ProductReviews';
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo;
};

/** Deprecated. Use `ProductAttributeSortInput` instead. Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** Indicates the criteria to sort swatches. */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
  /** @deprecated  */
  InStock = 'IN_STOCK',
  /** @deprecated  */
  OutOfStock = 'OUT_OF_STOCK'
}

/** Deprecated. Use `TierPrice` instead. Defines a tier price, which is a quantity discount offered to a specific customer group. */
export type ProductTierPrices = {
  __typename?: 'ProductTierPrices';
  /**
   * The ID of the customer group.
   * @deprecated Not relevant for the storefront.
   */
  customer_group_id?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage discount of the item.
   * @deprecated Use `TierPrice.discount` instead.
   */
  percentage_value?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated Use `TierPrice.quantity` instead.
   */
  qty?: Maybe<Scalars['Float']['output']>;
  /**
   * The price of the fixed price item.
   * @deprecated Use `TierPrice.final_price` instead.
   */
  value?: Maybe<Scalars['Float']['output']>;
  /**
   * The ID assigned to the website.
   * @deprecated Not relevant for the storefront.
   */
  website_id?: Maybe<Scalars['Float']['output']>;
};

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
  __typename?: 'ProductVideo';
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
  /** Contains a `ProductMediaGalleryEntriesVideoContent` object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains the results of a `products` query. */
export type Products = {
  __typename?: 'Products';
  /** A bucket that contains the attribute code and label for each filterable option. */
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use `aggregations` instead.
   */
  filters?: Maybe<Array<Maybe<LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<SortFields>;
  /** An array of search suggestions for case when search query have no results. */
  suggestions?: Maybe<Array<Maybe<SearchSuggestion>>>;
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']['output']>;
};


/** Contains the results of a `products` query. */
export type ProductsAggregationsArgs = {
  filter?: InputMaybe<AggregationsFilterInput>;
};

export type ProstyFiltrModel = {
  Dopasowanie?: InputMaybe<DopasowanieSzukania>;
  Pola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Tekst?: InputMaybe<Scalars['String']['input']>;
};

export type ProstyStanMagazynuModel = {
  __typename?: 'ProstyStanMagazynuModel';
  MagazynID?: Maybe<Scalars['Int']['output']>;
  ProstyStan?: Maybe<Scalars['String']['output']>;
};

export type PrzegladDefinicjaModel = {
  __typename?: 'PrzegladDefinicjaModel';
  CoIlePrzeglad?: Maybe<Scalars['Float']['output']>;
  DzialId?: Maybe<Scalars['Int']['output']>;
  DzialKod?: Maybe<Scalars['String']['output']>;
  DzialNazwa?: Maybe<Scalars['String']['output']>;
  IleWczesniejPowiadomienie?: Maybe<Scalars['Float']['output']>;
  KtoryLicznik?: Maybe<PrzegladKtoryLicznikTyp>;
  ObiektId?: Maybe<Scalars['Int']['output']>;
  Opis?: Maybe<Scalars['String']['output']>;
  OstatniePowiadomieniePrzyLiczniku?: Maybe<Array<Maybe<PrzegladDefinicjaOstatniePowiadomienieModel>>>;
  Pola?: Maybe<Scalars['String']['output']>;
  PolaJson?: Maybe<Scalars['String']['output']>;
  PracownikId?: Maybe<Scalars['Int']['output']>;
  PracownikImieNazwisko?: Maybe<Scalars['String']['output']>;
  PracownikLogin?: Maybe<Scalars['String']['output']>;
  PrzegladDefinicjaId?: Maybe<Scalars['String']['output']>;
  RodzajPowiadomienia?: Maybe<PrzegladRodzajPowiadomieniaTyp>;
  RodzajWlasciciela?: Maybe<PrzegladRodzajWlascicielaTyp>;
  TowarId?: Maybe<Scalars['Int']['output']>;
  TypZdarzeniaId?: Maybe<Scalars['Int']['output']>;
};

export type PrzegladDefinicjaNarzedziaZapytanieModel = {
  TowarId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type PrzegladDefinicjaOstatniePowiadomienieModel = {
  __typename?: 'PrzegladDefinicjaOstatniePowiadomienieModel';
  Id?: Maybe<Scalars['Int']['output']>;
  StanLicznika?: Maybe<Scalars['Float']['output']>;
  TypDanych?: Maybe<TypDanychRekordu>;
};

export enum PrzegladKtoryLicznikTyp {
  /** @deprecated  */
  LicznikCzasu = 'LicznikCzasu',
  /** @deprecated  */
  LicznikOperacji = 'LicznikOperacji',
  /** @deprecated  */
  LicznikZnormalizowany = 'LicznikZnormalizowany'
}

export enum PrzegladRodzajPowiadomieniaTyp {
  /** @deprecated  */
  Chat = 'Chat',
  /** @deprecated  */
  Sms = 'Sms',
  /** @deprecated  */
  ZdarzeniePrzeglad = 'ZdarzeniePrzeglad'
}

export enum PrzegladRodzajWlascicielaTyp {
  /** @deprecated  */
  Dzial = 'Dzial',
  /** @deprecated  */
  Pracownik = 'Pracownik'
}

export type Query = {
  __typename?: 'Query';
  /** Get a list of available store views and their config information. */
  availableStores?: Maybe<Array<Maybe<StoreConfig>>>;
  /** Return information about the specified shopping cart. */
  cart?: Maybe<Cart>;
  /** Return a list of categories that match the specified filter. */
  categories?: Maybe<CategoryResult>;
  /**
   * Search for categories that match the criteria specified in the `search` and `filter` attributes.
   * @deprecated Use `categories` instead.
   */
  category?: Maybe<CategoryTree>;
  /**
   * Return an array of categories based on the specified filters.
   * @deprecated Use `categories` instead.
   */
  categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
  /** Return Terms and Conditions configuration information. */
  checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
  /** Return information about CMS blocks. */
  cmsBlocks?: Maybe<CmsBlocks>;
  /** Return details about a CMS page. */
  cmsPage?: Maybe<CmsPage>;
  /** Return products that have been added to the specified compare list. */
  compareList?: Maybe<CompareList>;
  /** The countries query provides information for all countries. */
  countries?: Maybe<Array<Maybe<Country>>>;
  /** The countries query provides information for a single country. */
  country?: Maybe<Country>;
  /** Return information about the store's currency. */
  currency?: Maybe<Currency>;
  /** Return the attribute type, given an attribute code and entity type. */
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  /** Return detailed information about a customer account. */
  customer?: Maybe<Customer>;
  /** Return information about the customer's shopping cart. */
  customerCart: Cart;
  /** Return a list of downloadable products the customer has purchased. */
  customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
  /** @deprecated Use the `customer` query instead. */
  customerOrders?: Maybe<CustomerOrders>;
  /** Return a list of customer payment tokens stored in the vault. */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  ecommerceCenyCenyHandlowe?: Maybe<CenyApiCenyHandloweWyjscieModel>;
  ecommerceCenyCenyIndywidualne?: Maybe<CenyApiCenyIndywidualneWyjscieModel>;
  ecommerceDokumentyHistoriaStatusowLista?: Maybe<DokumentyStatusyApiListaWyjscieModel>;
  ecommerceDokumentyLista?: Maybe<DokumentyApiListaWyjscieModel>;
  ecommerceTowaryChodliwosc?: Maybe<TowaryApiChodliwoscWyjscieModel>;
  ecommerceTowaryCzesciZamienneLista?: Maybe<TowaryApiCzesciZamienneListaWyjscieModel>;
  ecommerceTowaryKosztTransportuLista?: Maybe<TowaryApiKosztTransportuListaWyjscieModel>;
  ecommerceTowaryLista?: Maybe<TowaryApiListaWyjscieModel>;
  ecommerceTowaryPowiazane?: Maybe<TowaryApiPowiazaneWyjscieModel>;
  ecommerceTowaryStany?: Maybe<TowaryApiStanyWyjscieModel>;
  ecommerceTowaryZdjecia?: Maybe<TowaryApiZdjeciaWyjscieModel>;
  ecommerceWartosciDowolneDefinicje?: Maybe<WartosciDowolneApiDefinicjeWyjscieModel>;
  ecommerceWartosciDowolneLista?: Maybe<WartosciDowolneApiListaWyjscieModel>;
  /** Retrieve the secure PayPal URL for a Payments Pro Hosted Solution transaction. */
  getHostedProUrl?: Maybe<HostedProUrl>;
  /** Get order data by order Id */
  getOrder?: Maybe<OrderResult>;
  /** Retrieve payment credentials for a transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken?: Maybe<PayflowLinkToken>;
  /** Check whether the specified email has already been used to create a customer account. */
  isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
  magazynCeny?: Maybe<CenyResult>;
  magazynCenyIndywidualne?: Maybe<CenyIndywidualneResult>;
  magazynCenyTowarow?: Maybe<TowaryCenyTowarowWyjscieModel>;
  magazynCenyWynikowe?: Maybe<TowaryCenyWynikoweWyjscieModel>;
  magazynCharakterystykaNaMiejscuMagazynowym?: Maybe<TowarCharakterystykaMiejsceMagazynoweResult>;
  magazynCharakterystykiKlientow?: Maybe<TowaryCharakterystykiKlientowWyjscieModel>;
  magazynCharakterystykiNaMagazynach?: Maybe<TowaryCharakterystykiNaMagazynachWyjscieModel>;
  magazynCzesciZamienneLista?: Maybe<TowaryCzesciZamienneListaWyjscieModel>;
  magazynDomyslneUstawieniaKopiowaniaKartyTowaru?: Maybe<TowaryDomyslneUstawieniaKopiowaniaKartyTowaruWyjscieModel>;
  magazynGrupyCen?: Maybe<GrupaCenModelResult>;
  magazynGrupyTowarow?: Maybe<TowaryGrupyTowarowWyjscieModel>;
  magazynJednostkiAlternatywne?: Maybe<TowaryJednostkiAlternatywneWyjscieModel>;
  magazynLista?: Maybe<ListaResult>;
  magazynListaDefinicjiPrzegladuNarzedzia?: Maybe<TowaryListaDefinicjiPrzegladuNarzedziaWyjscieModel>;
  magazynNazwyDodatkowe?: Maybe<TowaryNazwyDodatkoweWyjscieModel>;
  magazynNormatywy?: Maybe<TowaryNormatywyWyjscieModel>;
  magazynRodzajeRozmiarow?: Maybe<TowaryRodzajeRozmiarowWyjscieModel>;
  magazynStany?: Maybe<ListaRekordowTowarStanModelResult>;
  magazynStanyInne?: Maybe<StanInnyModelResult>;
  magazynSzukaj?: Maybe<TowarySzukajWyjscieModel>;
  magazynTowar?: Maybe<TowarResult>;
  magazynTowarRozszerzony?: Maybe<TowaryTowarRozszerzonyWyjscieModel>;
  magazynTowary?: Maybe<TowaryTowaryWyjscieModel>;
  mollieCustomerOrder?: Maybe<CustomerOrder>;
  molliePaymentMethods?: Maybe<MolliePaymentMethodsOutput>;
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations?: Maybe<PickupLocations>;
  /** Return the active ratings attributes and the values each rating can have. */
  productReviewRatingsMetadata: ProductReviewRatingsMetadata;
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. */
  products?: Maybe<Products>;
  /** Return the full details for a specified product, category, or CMS page. */
  route?: Maybe<RoutableInterface>;
  /** Return details about the store's configuration. */
  storeConfig?: Maybe<StoreConfig>;
  /**
   * Return the relative URL for a specified product, category or CMS page.
   * @deprecated Use the `route` query instead.
   */
  urlResolver?: Maybe<EntityUrl>;
  /**
   * Return the contents of a customer's wish list.
   * @deprecated Moved under `Customer.wishlist`.
   */
  wishlist?: Maybe<WishlistOutput>;
};


export type QueryAvailableStoresArgs = {
  useCurrentGroup?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCartArgs = {
  cart_id: Scalars['String']['input'];
};


export type QueryCategoriesArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryListArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCmsBlocksArgs = {
  identifiers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCmsPageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCompareListArgs = {
  uid: Scalars['ID']['input'];
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>;
};


export type QueryEcommerceCenyCenyHandloweArgs = {
  input?: InputMaybe<CenyHandloweModelInModel>;
};


export type QueryEcommerceCenyCenyIndywidualneArgs = {
  input?: InputMaybe<CenyIndiwidualneModelInModel>;
};


export type QueryEcommerceDokumentyHistoriaStatusowListaArgs = {
  input?: InputMaybe<DokumentyStatusyModelInModel>;
};


export type QueryEcommerceDokumentyListaArgs = {
  input?: InputMaybe<DokumentyListaModelInModel>;
};


export type QueryEcommerceTowaryChodliwoscArgs = {
  input?: InputMaybe<TowaryListaModelInModel>;
};


export type QueryEcommerceTowaryCzesciZamienneListaArgs = {
  input?: InputMaybe<TowaryCzesciZamModelInModel>;
};


export type QueryEcommerceTowaryKosztTransportuListaArgs = {
  input?: InputMaybe<KosztTransportuPozycjiEcommerceZapytanieModel>;
};


export type QueryEcommerceTowaryListaArgs = {
  input?: InputMaybe<TowaryListaModelInModel>;
};


export type QueryEcommerceTowaryPowiazaneArgs = {
  input?: InputMaybe<TowaryPowiazaneModelInModel>;
};


export type QueryEcommerceTowaryStanyArgs = {
  input?: InputMaybe<TowaryStanyModelInModel>;
};


export type QueryEcommerceTowaryZdjeciaArgs = {
  input?: InputMaybe<TowaryZdjeciaModelInModel>;
};


export type QueryEcommerceWartosciDowolneDefinicjeArgs = {
  input?: InputMaybe<WartosciDowolneDefinicjaModelInModel>;
};


export type QueryEcommerceWartosciDowolneListaArgs = {
  input?: InputMaybe<WartosciDowolneModelInModel>;
};


export type QueryGetHostedProUrlArgs = {
  input: HostedProUrlInput;
};


export type QueryGetOrderArgs = {
  order_number: Scalars['String']['input'];
};


export type QueryGetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput;
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['String']['input'];
};


export type QueryMagazynCenyArgs = {
  input?: InputMaybe<TowarCenaZapytanieModel>;
};


export type QueryMagazynCenyIndywidualneArgs = {
  input?: InputMaybe<CenaIndywidualnaZapytanieModel>;
};


export type QueryMagazynCenyTowarowArgs = {
  input?: InputMaybe<CenaTowaruZapytanieModel>;
};


export type QueryMagazynCenyWynikoweArgs = {
  input?: InputMaybe<CenyWynikoweZapytanieModel>;
};


export type QueryMagazynCharakterystykaNaMiejscuMagazynowymArgs = {
  input?: InputMaybe<TowarCharakterystykaMiejsceMagazynoweZapytanieModel>;
};


export type QueryMagazynCharakterystykiKlientowArgs = {
  input?: InputMaybe<TowarCharakterystykaKlientaZapytanieModel>;
};


export type QueryMagazynCharakterystykiNaMagazynachArgs = {
  input?: InputMaybe<TowarCharakterystykaMagazynZapytanieModel>;
};


export type QueryMagazynCzesciZamienneListaArgs = {
  input?: InputMaybe<CzescZamiennaZapytanieModel>;
};


export type QueryMagazynDomyslneUstawieniaKopiowaniaKartyTowaruArgs = {
  IdTowaru?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMagazynGrupyCenArgs = {
  input?: InputMaybe<GrupaCenZapytanieModel>;
};


export type QueryMagazynGrupyTowarowArgs = {
  input?: InputMaybe<GrupaTowarowZapytanieModel>;
};


export type QueryMagazynJednostkiAlternatywneArgs = {
  input?: InputMaybe<TowarJednostkaAlternatywnaZapytanieModel>;
};


export type QueryMagazynListaArgs = {
  input?: InputMaybe<TowarZapytanieModel>;
};


export type QueryMagazynListaDefinicjiPrzegladuNarzedziaArgs = {
  input?: InputMaybe<PrzegladDefinicjaNarzedziaZapytanieModel>;
};


export type QueryMagazynNazwyDodatkoweArgs = {
  input?: InputMaybe<TowarNazwyDodatkoweZapytanieModel>;
};


export type QueryMagazynNormatywyArgs = {
  input?: InputMaybe<TowarNormatywyZapytanieModel>;
};


export type QueryMagazynRodzajeRozmiarowArgs = {
  input?: InputMaybe<RodzajeRozmiarowZapytanieModel>;
};


export type QueryMagazynStanyArgs = {
  input?: InputMaybe<TowarStanZapytanieModel>;
};


export type QueryMagazynStanyInneArgs = {
  input?: InputMaybe<StanInnyZapytanieModel>;
};


export type QueryMagazynSzukajArgs = {
  input?: InputMaybe<TowarSzukanyModelInput>;
};


export type QueryMagazynTowarArgs = {
  input?: InputMaybe<SzukanyTowarModel>;
};


export type QueryMagazynTowarRozszerzonyArgs = {
  input?: InputMaybe<SzukanyTowarPelnyModel>;
};


export type QueryMagazynTowaryArgs = {
  input?: InputMaybe<SzukaneTowaryModel>;
};


export type QueryMollieCustomerOrderArgs = {
  hash?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMolliePaymentMethodsArgs = {
  input?: InputMaybe<MolliePaymentMethodsInput>;
};


export type QueryPickupLocationsArgs = {
  area?: InputMaybe<AreaInput>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<PickupLocationFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  productsInfo?: InputMaybe<Array<InputMaybe<ProductInfoInput>>>;
  sort?: InputMaybe<PickupLocationSortInput>;
};


export type QueryProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};


export type QueryRouteArgs = {
  url: Scalars['String']['input'];
};


export type QueryUrlResolverArgs = {
  url: Scalars['String']['input'];
};

export type RecordZNazwaModel = {
  __typename?: 'RecordZNazwaModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
};

export type Region = {
  __typename?: 'Region';
  /** The two-letter code for the region, such as TX for Texas. */
  code?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Region` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** The name of the region, such as Texas. */
  name?: Maybe<Scalars['String']['output']>;
};

export type RekordModel = {
  __typename?: 'RekordModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
};

export type RekordZNazwaModel = {
  __typename?: 'RekordZNazwaModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
};

/** Specifies the cart from which to remove a coupon. */
export type RemoveCouponFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Contains details about the cart after removing a coupon. */
export type RemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput';
  /** The cart after removing a coupon. */
  cart?: Maybe<Cart>;
};

/** Specifies which items to remove from the cart. */
export type RemoveItemFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** Required field. The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
};

/** Contains details about the cart after removing an item. */
export type RemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput';
  /** The cart after removing an item. */
  cart: Cart;
};

/** Defines which products to remove from a compare list. */
export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input'];
};

/** Contains the customer's wish list and any errors encountered. */
export type RemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput';
  /** An array of errors encountered while deleting products from a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted. */
  wishlist: Wishlist;
};

/** Contains the cart and any errors after adding products. */
export type ReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput';
  /** Detailed information about the customer's cart. */
  cart: Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>;
};

export type ResponseStatusErrorModel = {
  __typename?: 'ResponseStatusErrorModel';
  ErrorCode?: Maybe<Scalars['String']['output']>;
  FieldName?: Maybe<Scalars['String']['output']>;
  Message?: Maybe<Scalars['String']['output']>;
};

export type ResponseStatusModel = {
  __typename?: 'ResponseStatusModel';
  ErrorCode?: Maybe<Scalars['String']['output']>;
  Errors?: Maybe<Array<Maybe<ResponseStatusErrorModel>>>;
  HttpErrorCode?: Maybe<Scalars['Int']['output']>;
  Message?: Maybe<Scalars['String']['output']>;
  StackTrace?: Maybe<Scalars['String']['output']>;
};

/** Contains the result of a request to revoke a customer token. */
export type RevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput';
  /** The result of a request to revoke a customer token. */
  result: Scalars['Boolean']['output'];
};

export enum RodzajNadindeksu {
  /** @deprecated  */
  Nadindeks = 'Nadindeks',
  /** @deprecated  */
  Podindeks = 'Podindeks',
  /** @deprecated  */
  Zwykly = 'Zwykly'
}

export type RodzajRozmiaruElementModel = {
  __typename?: 'RodzajRozmiaruElementModel';
  Aktywny?: Maybe<Scalars['Boolean']['output']>;
  ElementID?: Maybe<Scalars['Int']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  Lp?: Maybe<Scalars['Int']['output']>;
  RodzajRozmiaruID?: Maybe<Scalars['Int']['output']>;
};

export enum RodzajTowaru {
  /** @deprecated  */
  RodzajBilet = 'RodzajBilet',
  /** @deprecated  */
  RodzajCzynnosc = 'RodzajCzynnosc',
  /** @deprecated  */
  RodzajKoszt = 'RodzajKoszt',
  /** @deprecated  */
  RodzajPseudoTowar = 'RodzajPseudoTowar',
  /** @deprecated  */
  RodzajRozmiarowka = 'RodzajRozmiarowka',
  /** @deprecated  */
  RodzajTk = 'RodzajTK',
  /** @deprecated  */
  RodzajTowar = 'RodzajTowar',
  /** @deprecated  */
  RodzajUsluga = 'RodzajUsluga',
  /** @deprecated  */
  RodzajZestaw = 'RodzajZestaw'
}

export enum RodzajTowaruIi {
  /** @deprecated  */
  RodzajGabarytowy = 'RodzajGabarytowy',
  /** @deprecated  */
  RodzajPaletowy = 'RodzajPaletowy',
  /** @deprecated  */
  RodzajPolpaletowy = 'RodzajPolpaletowy',
  /** @deprecated  */
  RodzajZwykly = 'RodzajZwykly'
}

export type RodzajeRozmiarowModel = {
  __typename?: 'RodzajeRozmiarowModel';
  Elementy?: Maybe<Array<Maybe<RodzajRozmiaruElementModel>>>;
  ID?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
};

export type RodzajeRozmiarowZapytanieModel = {
  RodzajRozmiaruID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** Routable entities serve as the model for a rendered page. */
export type RoutableInterface = {
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Contains details about a comment. */
export type SalesCommentItem = {
  __typename?: 'SalesCommentItem';
  /** The text of the message. */
  message: Scalars['String']['output'];
  /** The timestamp of the comment. */
  timestamp: Scalars['String']['output'];
};

export type SalesItemInterface = {
  __typename?: 'SalesItemInterface';
  /** The entered gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
};

/** This enumeration defines the scope type for customer orders. */
export enum ScopeTypeEnum {
  /** @deprecated  */
  Global = 'GLOBAL',
  /** @deprecated  */
  Store = 'STORE',
  /** @deprecated  */
  Website = 'WEBSITE'
}

/** Provides navigation for the query response. */
export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo';
  /** The specific page to return. */
  current_page?: Maybe<Scalars['Int']['output']>;
  /** The maximum number of items to return per page of results. */
  page_size?: Maybe<Scalars['Int']['output']>;
  /** The total number of pages in the response. */
  total_pages?: Maybe<Scalars['Int']['output']>;
};

/** A string that contains search suggestion */
export type SearchSuggestion = {
  __typename?: 'SearchSuggestion';
  /** The search suggestion of existing product. */
  search: Scalars['String']['output'];
};

/** Contains details about a selected bundle option. */
export type SelectedBundleOption = {
  __typename?: 'SelectedBundleOption';
  /** @deprecated Use `uid` instead */
  id: Scalars['Int']['output'];
  /** The display name of the selected bundle product option. */
  label: Scalars['String']['output'];
  /** The type of selected bundle product option. */
  type: Scalars['String']['output'];
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID']['output'];
  /** An array of selected bundle option values. */
  values: Array<Maybe<SelectedBundleOptionValue>>;
};

/** Contains details about a value for a selected bundle option. */
export type SelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue';
  /** Use `uid` instead */
  id: Scalars['Int']['output'];
  /** The display name of the value for the selected bundle product option. */
  label: Scalars['String']['output'];
  /** The price of the value for the selected bundle product option. */
  price: Scalars['Float']['output'];
  /** The quantity of the value for the selected bundle product option. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID']['output'];
};

/** Contains details about a selected configurable option. */
export type SelectedConfigurableOption = {
  __typename?: 'SelectedConfigurableOption';
  /** The unique ID for a `ConfigurableProductOptions` object. */
  configurable_product_option_uid: Scalars['ID']['output'];
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  configurable_product_option_value_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_uid` instead. */
  id: Scalars['Int']['output'];
  /** The display text for the option. */
  option_label: Scalars['String']['output'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead. */
  value_id: Scalars['Int']['output'];
  /** The display name of the selected configurable option. */
  value_label: Scalars['String']['output'];
};

/** Identifies a customized product that has been placed in a cart. */
export type SelectedCustomizableOption = {
  __typename?: 'SelectedCustomizableOption';
  /** The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  customizable_option_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedCustomizableOption.customizable_option_uid` instead. */
  id: Scalars['Int']['output'];
  /** Indicates whether the customizable option is required. */
  is_required: Scalars['Boolean']['output'];
  /** The display name of the selected customizable option. */
  label: Scalars['String']['output'];
  /** A value indicating the order to display this option. */
  sort_order: Scalars['Int']['output'];
  /** The type of `CustomizableOptionInterface` object. */
  type: Scalars['String']['output'];
  /** An array of selectable values. */
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

/** Identifies the value of the selected customized option. */
export type SelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue';
  /** The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute. */
  customizable_option_value_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead. */
  id: Scalars['Int']['output'];
  /** The display name of the selected value. */
  label: Scalars['String']['output'];
  /** The price of the selected customizable value. */
  price: CartItemSelectedOptionValuePrice;
  /** The text identifying the selected value. */
  value: Scalars['String']['output'];
};

/** Describes the payment method the shopper selected. */
export type SelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod';
  /** The payment method code. */
  code: Scalars['String']['output'];
  /** Retrieve meta information for this payment method (image) */
  mollie_meta: MolliePaymentMethodMeta;
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']['output']>;
  /** The payment method title. */
  title: Scalars['String']['output'];
};

/** Contains details about the selected shipping method and carrier. */
export type SelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod';
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output'];
  /** A shipping method code associated with a carrier. */
  method_code: Scalars['String']['output'];
  /** The label for the method code. */
  method_title: Scalars['String']['output'];
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

/** Defines the referenced product and the email sender and recipients. */
export type SendEmailToFriendInput = {
  /** The ID of the product that the sender is referencing. */
  product_id: Scalars['Int']['input'];
  /** An array containing information about each recipient. */
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  /** Information about the customer and the content of the message. */
  sender: SendEmailToFriendSenderInput;
};

/** Contains information about the sender and recipients. */
export type SendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput';
  /** An array containing information about each recipient. */
  recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
  /** Information about the customer and the content of the message. */
  sender?: Maybe<SendEmailToFriendSender>;
};

/** An output object that contains information about the recipient. */
export type SendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient';
  /** The email address of the recipient. */
  email: Scalars['String']['output'];
  /** The name of the recipient. */
  name: Scalars['String']['output'];
};

/** Contains details about a recipient. */
export type SendEmailToFriendRecipientInput = {
  /** The email address of the recipient. */
  email: Scalars['String']['input'];
  /** The name of the recipient. */
  name: Scalars['String']['input'];
};

/** An output object that contains information about the sender. */
export type SendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender';
  /** The email address of the sender. */
  email: Scalars['String']['output'];
  /** The text of the message to be sent. */
  message: Scalars['String']['output'];
  /** The name of the sender. */
  name: Scalars['String']['output'];
};

/** Contains details about the sender. */
export type SendEmailToFriendSenderInput = {
  /** The email address of the sender. */
  email: Scalars['String']['input'];
  /** The text of the message to be sent. */
  message: Scalars['String']['input'];
  /** The name of the sender. */
  name: Scalars['String']['input'];
};

/** Contains details about the configuration of the Email to a Friend feature. */
export type SendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration';
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean']['output'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean']['output'];
};

/** Sets the billing address. */
export type SetBillingAddressOnCartInput = {
  /** The billing address. */
  billing_address: BillingAddressInput;
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Contains details about the cart after setting the billing address. */
export type SetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput';
  /** The cart after setting the billing address. */
  cart: Cart;
};

/** Defines the guest email and cart. */
export type SetGuestEmailOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The email address of the guest. */
  email: Scalars['String']['input'];
};

/** Contains details about the cart after setting the email of a guest. */
export type SetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput';
  /** The cart after setting the guest email. */
  cart: Cart;
};

/** Applies a payment method to the quote. */
export type SetPaymentMethodAndPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Applies a payment method to the cart. */
export type SetPaymentMethodOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Contains details about the cart after setting the payment method. */
export type SetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput';
  /** The cart after setting the payment method. */
  cart: Cart;
};

/** Specifies an array of addresses to use for shipping. */
export type SetShippingAddressesOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of shipping addresses. */
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

/** Contains details about the cart after setting the shipping addresses. */
export type SetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput';
  /** The cart after setting the shipping addresses. */
  cart: Cart;
};

/** Applies one or shipping methods to the cart. */
export type SetShippingMethodsOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of shipping methods. */
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

/** Contains details about the cart after setting the shipping methods. */
export type SetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput';
  /** The cart after setting the shipping methods. */
  cart: Cart;
};

/** Defines whether bundle items must be shipped together. */
export enum ShipBundleItemsEnum {
  /** @deprecated  */
  Separately = 'SEPARATELY',
  /** @deprecated  */
  Together = 'TOGETHER'
}

export type ShipmentItem = ShipmentItemInterface & {
  __typename?: 'ShipmentItem';
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Order shipment item details. */
export type ShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Contains order shipment tracking details. */
export type ShipmentTracking = {
  __typename?: 'ShipmentTracking';
  /** The shipping carrier for the order delivery. */
  carrier: Scalars['String']['output'];
  /** The tracking number of the order shipment. */
  number?: Maybe<Scalars['String']['output']>;
  /** The shipment tracking title. */
  title: Scalars['String']['output'];
};

/** Defines a single shipping address. */
export type ShippingAddressInput = {
  /** Defines a shipping address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for shipping. */
  customer_address_id?: InputMaybe<Scalars['Int']['input']>;
  /** Text provided by the shopper. */
  customer_notes?: InputMaybe<Scalars['String']['input']>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: InputMaybe<Scalars['String']['input']>;
};

/** Contains shipping addresses and methods. */
export type ShippingCartAddress = CartAddressInterface & {
  __typename?: 'ShippingCartAddress';
  /** An array that lists the shipping methods that can be applied to the cart. */
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** @deprecated Use `cart_items_v2` instead. */
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
  /** An array that lists the items in the cart. */
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** Text provided by the shopper. */
  customer_notes?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** @deprecated This information should not be exposed on the frontend. */
  items_weight?: Maybe<Scalars['Float']['output']>;
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  pickup_location_code?: Maybe<Scalars['String']['output']>;
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An object that describes the selected shipping method. */
  selected_shipping_method?: Maybe<SelectedShippingMethod>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type ShippingDiscount = {
  __typename?: 'ShippingDiscount';
  /** The amount of the discount. */
  amount: Money;
};

/** Contains details about shipping and handling costs. */
export type ShippingHandling = {
  __typename?: 'ShippingHandling';
  /** The shipping amount, excluding tax. */
  amount_excluding_tax?: Maybe<Money>;
  /** The shipping amount, including tax. */
  amount_including_tax?: Maybe<Money>;
  /** The applied discounts to the shipping. */
  discounts?: Maybe<Array<Maybe<ShippingDiscount>>>;
  /** Details about taxes applied for shipping. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The total amount for shipping. */
  total_amount: Money;
};

/** Defines the shipping carrier and method. */
export type ShippingMethodInput = {
  /** A string that identifies a commercial carrier or an offline delivery method. */
  carrier_code: Scalars['String']['input'];
  /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
  method_code: Scalars['String']['input'];
};

/** An implementation for simple product cart items. */
export type SimpleCartItem = CartItemInterface & {
  __typename?: 'SimpleCartItem';
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'SimpleProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};


/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single product to add to the cart. */
export type SimpleProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Contains a simple product wish list item. */
export type SimpleWishlistItem = WishlistItemInterface & {
  __typename?: 'SimpleWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

export type SlownikUzytkownikaElementModel = {
  __typename?: 'SlownikUzytkownikaElementModel';
  ElementID?: Maybe<Scalars['Int']['output']>;
  NazwyDodatkowe?: Maybe<Array<Maybe<NazwaDodatkowaModel>>>;
  SlownikID?: Maybe<Scalars['Int']['output']>;
  Tekst?: Maybe<Scalars['String']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  Wartosc?: Maybe<Scalars['String']['output']>;
};

export type SlownikUzytkownikaModel = {
  __typename?: 'SlownikUzytkownikaModel';
  Elementy?: Maybe<Array<Maybe<SlownikUzytkownikaElementModel>>>;
  ID?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
};

/** Indicates whether to return results in ascending or descending order. */
export enum SortEnum {
  /** @deprecated  */
  Asc = 'ASC',
  /** @deprecated  */
  Desc = 'DESC'
}

/** Defines a possible sort field. */
export type SortField = {
  __typename?: 'SortField';
  /** The label of the sort field. */
  label?: Maybe<Scalars['String']['output']>;
  /** The attribute code of the sort field. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Contains a default value for sort fields and all available sort fields. */
export type SortFields = {
  __typename?: 'SortFields';
  /** The default sort field value. */
  default?: Maybe<Scalars['String']['output']>;
  /** An array of possible sort fields. */
  options?: Maybe<Array<Maybe<SortField>>>;
};

export type StanInnyModel = {
  __typename?: 'StanInnyModel';
  Data?: Maybe<Scalars['String']['output']>;
  KlientID?: Maybe<Scalars['Int']['output']>;
  Stan?: Maybe<Scalars['Float']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
};

export type StanInnyModelResult = {
  __typename?: 'StanInnyModelResult';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<Array<Maybe<StanInnyModel>>>;
};

export type StanInnyZapytanieModel = {
  KlientID?: InputMaybe<Scalars['Int']['input']>;
  TowarId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type StanTowaruNaMagazynieModel = {
  __typename?: 'StanTowaruNaMagazynieModel';
  DataCzasOstatniejModyfikacji?: Maybe<Scalars['String']['output']>;
  MagazynID?: Maybe<Scalars['Int']['output']>;
  Oczekiwane?: Maybe<Scalars['Float']['output']>;
  StanHandlowy?: Maybe<Scalars['Float']['output']>;
  StanRzeczywisty?: Maybe<Scalars['Float']['output']>;
  TowMagID?: Maybe<Scalars['Int']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  Zapotrzebowanie?: Maybe<Scalars['Float']['output']>;
};

export type StanUKlientaModel = {
  __typename?: 'StanUKlientaModel';
  KlientID?: Maybe<Scalars['Int']['output']>;
  Stan?: Maybe<Scalars['Float']['output']>;
};

export type StatusEcommerceModel = {
  __typename?: 'StatusEcommerceModel';
  Id?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
};

export enum StatusKlienta {
  /** @deprecated  */
  SklAktywny = 'SKL_AKTYWNY',
  /** @deprecated  */
  SklNieaktywny = 'SKL_NIEAKTYWNY',
  /** @deprecated  */
  SklPotencjalny = 'SKL_POTENCJALNY',
  /** @deprecated  */
  SklUsuniety = 'SKL_USUNIETY'
}

export type StawkaVatModel = {
  __typename?: 'StawkaVatModel';
  Procent?: Maybe<Scalars['Int']['output']>;
  Typ?: Maybe<Scalars['String']['output']>;
};

export type StawkaVatObjModel = {
  __typename?: 'StawkaVatObjModel';
  Wartosc?: Maybe<Scalars['String']['output']>;
  Wartosci?: Maybe<VatStawkaModel>;
};

/** Contains information about a store's configuration. */
export type StoreConfig = {
  __typename?: 'StoreConfig';
  /** Contains scripts that must be included in the HTML before the closing `<body>` tag. */
  absolute_footer?: Maybe<Scalars['String']['output']>;
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No). */
  allow_guests_to_write_product_reviews?: Maybe<Scalars['String']['output']>;
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items?: Maybe<Scalars['String']['output']>;
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order?: Maybe<Scalars['String']['output']>;
  /** Indicates whether to enable autocomplete on login and forgot password forms. */
  autocomplete_on_storefront?: Maybe<Scalars['Boolean']['output']>;
  /** The base currency code. */
  base_currency_code?: Maybe<Scalars['String']['output']>;
  /** A fully-qualified URL that is used to create relative links to the `base_url`. */
  base_link_url?: Maybe<Scalars['String']['output']>;
  /** The fully-qualified URL that specifies the location of media files. */
  base_media_url?: Maybe<Scalars['String']['output']>;
  /** The fully-qualified URL that specifies the location of static view files. */
  base_static_url?: Maybe<Scalars['String']['output']>;
  /** The store’s fully-qualified base URL. */
  base_url?: Maybe<Scalars['String']['output']>;
  /** Braintree cc vault status. */
  braintree_cc_vault_active?: Maybe<Scalars['String']['output']>;
  /** The default sort order of the search results list. */
  catalog_default_sort_by?: Maybe<Scalars['String']['output']>;
  /** Corresponds to the 'Display Prices In Product Lists' field in the Admin. It indicates how FPT information is displayed on category pages. */
  category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** The suffix applied to category pages, such as `.htm` or `.html`. */
  category_url_suffix?: Maybe<Scalars['String']['output']>;
  /** Indicates whether only specific countries can use this payment method. */
  check_money_order_enable_for_specific_countries?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the Check/Money Order payment method is enabled. */
  check_money_order_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The name of the party to whom the check must be payable. */
  check_money_order_make_check_payable_to?: Maybe<Scalars['String']['output']>;
  /** The maximum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_max_order_total?: Maybe<Scalars['String']['output']>;
  /** The minimum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_min_order_total?: Maybe<Scalars['String']['output']>;
  /** The status of new orders placed using the Check/Money Order payment method. */
  check_money_order_new_order_status?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of specific countries allowed to use the Check/Money Order payment method. */
  check_money_order_payment_from_specific_countries?: Maybe<Scalars['String']['output']>;
  /** The full street address or PO Box where the checks are mailed. */
  check_money_order_send_check_to?: Maybe<Scalars['String']['output']>;
  /** A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout. */
  check_money_order_sort_order?: Maybe<Scalars['Int']['output']>;
  /** The title of the Check/Money Order payment method displayed on the storefront. */
  check_money_order_title?: Maybe<Scalars['String']['output']>;
  /** The name of the CMS page that identifies the home page for the store. */
  cms_home_page?: Maybe<Scalars['String']['output']>;
  /** A specific CMS page that displays when cookies are not enabled for the browser. */
  cms_no_cookies?: Maybe<Scalars['String']['output']>;
  /** A specific CMS page that displays when a 404 'Page Not Found' error occurs. */
  cms_no_route?: Maybe<Scalars['String']['output']>;
  /**
   * A code assigned to the store to identify it.
   * @deprecated Use `store_code` instead.
   */
  code?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the `parent` or child (`itself`) thumbnail should be used in the cart for configurable products. */
  configurable_thumbnail_source?: Maybe<Scalars['String']['output']>;
  /** The copyright statement that appears at the bottom of each page. */
  copyright?: Maybe<Scalars['String']['output']>;
  /** The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length. */
  default_description?: Maybe<Scalars['String']['output']>;
  /** The default display currency code. */
  default_display_currency_code?: Maybe<Scalars['String']['output']>;
  /** A series of keywords that describe your store, each separated by a comma. */
  default_keywords?: Maybe<Scalars['String']['output']>;
  /** The title that appears at the title bar of each page when viewed in a browser. */
  default_title?: Maybe<Scalars['String']['output']>;
  /** Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes). */
  demonotice?: Maybe<Scalars['Int']['output']>;
  /** The landing page that is associated with the base URL. */
  front?: Maybe<Scalars['String']['output']>;
  /** The default number of products per page in Grid View. */
  grid_per_page?: Maybe<Scalars['Int']['output']>;
  /** A list of numbers that define how many products can be displayed in Grid View. */
  grid_per_page_values?: Maybe<Scalars['String']['output']>;
  /** Scripts that must be included in the HTML before the closing `<head>` tag. */
  head_includes?: Maybe<Scalars['String']['output']>;
  /** The small graphic image (favicon) that appears in the address bar and tab of the browser. */
  head_shortcut_icon?: Maybe<Scalars['String']['output']>;
  /** The path to the logo that appears in the header. */
  header_logo_src?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the store.
   * @deprecated Use `store_code` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the store view has been designated as the default within the store group. */
  is_default_store?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the store group has been designated as the default within the website. */
  is_default_store_group?: Maybe<Scalars['Boolean']['output']>;
  /** The format of the search results list. */
  list_mode?: Maybe<Scalars['String']['output']>;
  /** The default number of products per page in List View. */
  list_per_page?: Maybe<Scalars['Int']['output']>;
  /** A list of numbers that define how many products can be displayed in List View. */
  list_per_page_values?: Maybe<Scalars['String']['output']>;
  /** The store locale. */
  locale?: Maybe<Scalars['String']['output']>;
  /** The Alt text that is associated with the logo. */
  logo_alt?: Maybe<Scalars['String']['output']>;
  /** The height of the logo image, in pixels. */
  logo_height?: Maybe<Scalars['Int']['output']>;
  /** The width of the logo image, in pixels. */
  logo_width?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether wishlists are enabled (1) or disabled (0). */
  magento_wishlist_general_is_enabled?: Maybe<Scalars['String']['output']>;
  /** The minimum number of characters required for a valid password. */
  minimum_password_length?: Maybe<Scalars['String']['output']>;
  /** Mollie store config */
  mollie?: Maybe<MollieStoreConfig>;
  /** The default page that displays when a 404 'Page not Found' error occurs. */
  no_route?: Maybe<Scalars['String']['output']>;
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']['output']>;
  /** Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages. */
  product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No). */
  product_reviews_enabled?: Maybe<Scalars['String']['output']>;
  /** The suffix applied to product pages, such as `.htm` or `.html`. */
  product_url_suffix?: Maybe<Scalars['String']['output']>;
  /** The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. */
  required_character_classes_number?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the root category.
   * @deprecated Use `root_category_uid` instead.
   */
  root_category_id?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `CategoryInterface` object. */
  root_category_uid?: Maybe<Scalars['ID']['output']>;
  /** Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. */
  sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** A secure fully-qualified URL that is used to create relative links to the `base_url`. */
  secure_base_link_url?: Maybe<Scalars['String']['output']>;
  /** The secure fully-qualified URL that specifies the location of media files. */
  secure_base_media_url?: Maybe<Scalars['String']['output']>;
  /** The secure fully-qualified URL that specifies the location of static view files. */
  secure_base_static_url?: Maybe<Scalars['String']['output']>;
  /** The store’s fully-qualified secure base URL. */
  secure_base_url?: Maybe<Scalars['String']['output']>;
  /** Email to a Friend configuration. */
  send_friend?: Maybe<SendFriendConfiguration>;
  /** Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes). */
  show_cms_breadcrumbs?: Maybe<Scalars['Int']['output']>;
  /** The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope. */
  store_code?: Maybe<Scalars['ID']['output']>;
  /** The unique ID assigned to the store group. In the Admin, this is called the Store Name. */
  store_group_code?: Maybe<Scalars['ID']['output']>;
  /** The label assigned to the store group. */
  store_group_name?: Maybe<Scalars['String']['output']>;
  /** The label assigned to the store view. */
  store_name?: Maybe<Scalars['String']['output']>;
  /** The store view sort order. */
  store_sort_order?: Maybe<Scalars['Int']['output']>;
  /** The time zone of the store. */
  timezone?: Maybe<Scalars['String']['output']>;
  /** A prefix that appears before the title to create a two- or three-part title. */
  title_prefix?: Maybe<Scalars['String']['output']>;
  /** The character that separates the category name and subcategory in the browser title bar. */
  title_separator?: Maybe<Scalars['String']['output']>;
  /** A suffix that appears after the title to create a two- or three-part title. */
  title_suffix?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the store code should be used in the URL. */
  use_store_in_url?: Maybe<Scalars['Boolean']['output']>;
  /** The unique ID for the website. */
  website_code?: Maybe<Scalars['ID']['output']>;
  /**
   * The ID number assigned to the website store.
   * @deprecated The field should not be used on the storefront.
   */
  website_id?: Maybe<Scalars['Int']['output']>;
  /** The label assigned to the website. */
  website_name?: Maybe<Scalars['String']['output']>;
  /** The unit of weight. */
  weight_unit?: Maybe<Scalars['String']['output']>;
  /** Text that appears in the header of the page and includes the name of the logged in customer. */
  welcome?: Maybe<Scalars['String']['output']>;
  /** Indicates whether only specific countries can use this payment method. */
  zero_subtotal_enable_for_specific_countries?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the Zero Subtotal payment method is enabled. */
  zero_subtotal_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The status of new orders placed using the Zero Subtotal payment method. */
  zero_subtotal_new_order_status?: Maybe<Scalars['String']['output']>;
  /** When the new order status is 'Processing', this can be set to `authorize_capture` to automatically invoice all items that have a zero balance. */
  zero_subtotal_payment_action?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. */
  zero_subtotal_payment_from_specific_countries?: Maybe<Scalars['String']['output']>;
  /** A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. */
  zero_subtotal_sort_order?: Maybe<Scalars['Int']['output']>;
  /** The title of the Zero Subtotal payment method displayed on the storefront. */
  zero_subtotal_title?: Maybe<Scalars['String']['output']>;
};

/** Indicates where an attribute can be displayed. */
export type StorefrontProperties = {
  __typename?: 'StorefrontProperties';
  /** The relative position of the attribute in the layered navigation block. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the attribute is filterable with results, without results, or not at all. */
  use_in_layered_navigation?: Maybe<UseInLayeredNavigationOptions>;
  /** Indicates whether the attribute is displayed in product listings. */
  use_in_product_listing?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the attribute can be used in layered navigation on search results pages. */
  use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the attribute is displayed on product pages. */
  visible_on_catalog_pages?: Maybe<Scalars['Boolean']['output']>;
};

/** Contains the result of the `subscribeEmailToNewsletter` operation. */
export type SubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput';
  /** The status of the subscription request. */
  status?: Maybe<SubscriptionStatusesEnum>;
};

/** Indicates the status of the request. */
export enum SubscriptionStatusesEnum {
  /** @deprecated  */
  NotActive = 'NOT_ACTIVE',
  /** @deprecated  */
  Subscribed = 'SUBSCRIBED',
  /** @deprecated  */
  Unconfirmed = 'UNCONFIRMED',
  /** @deprecated  */
  Unsubscribed = 'UNSUBSCRIBED'
}

/** Describes the swatch type and a value. */
export type SwatchData = {
  __typename?: 'SwatchData';
  /** The type of swatch filter item: 1 - text; 2 - image. */
  type?: Maybe<Scalars['String']['output']>;
  /** The value for the swatch item. It could be text or an image link. */
  value?: Maybe<Scalars['String']['output']>;
};

export type SwatchDataInterface = {
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
  __typename?: 'SwatchLayerFilterItem';
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<SwatchData>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

export type SwatchLayerFilterItemInterface = {
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<SwatchData>;
};

export type SzukanaCenaWynikowaModel = {
  Ilosc?: InputMaybe<Scalars['Float']['input']>;
  TowarID?: InputMaybe<Scalars['Int']['input']>;
};

export type SzukaneTowaryModel = {
  Aktywnosc?: InputMaybe<AktywnoscTowaru>;
  BezProstegoStanuBrak?: InputMaybe<Scalars['Boolean']['input']>;
  BezZerowychStanowHandlowych?: InputMaybe<Scalars['Boolean']['input']>;
  Cecha?: InputMaybe<Scalars['String']['input']>;
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  DataCzasModyfikacji?: InputMaybe<Scalars['String']['input']>;
  DataCzasModyfikacjiTyp?: InputMaybe<TypDataCzasModyfikacji>;
  Ean?: InputMaybe<Scalars['String']['input']>;
  Grupa1?: InputMaybe<SzukanyRekordModel>;
  Grupa2?: InputMaybe<SzukanyRekordModel>;
  GrupaWWW?: InputMaybe<SzukanyRekordModel>;
  InformacjeDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  KlientDoLiczeniaCen?: InputMaybe<SzukanyRekordModel>;
  KlientWylaczny?: InputMaybe<SzukanyRekordModel>;
  Kod?: InputMaybe<Scalars['String']['input']>;
  KodUDostawcy?: InputMaybe<Scalars['String']['input']>;
  MagazynKompletow?: InputMaybe<SzukanyRekordModel>;
  Nadindeks?: InputMaybe<SzukanyNadindeksModel>;
  Nazwa?: InputMaybe<Scalars['String']['input']>;
  Opis?: InputMaybe<Scalars['String']['input']>;
  ProducentID?: InputMaybe<Scalars['Int']['input']>;
  ProsteStanyMagazynow?: InputMaybe<Scalars['Boolean']['input']>;
  ProstyFiltr?: InputMaybe<ProstyFiltrModel>;
  ProstyStanLacznie?: InputMaybe<Scalars['Boolean']['input']>;
  Sortowanie?: InputMaybe<TowarZapytanieSortowanie>;
  SortowanieRosnaco?: InputMaybe<Scalars['Boolean']['input']>;
  Status?: InputMaybe<SzukanyRekordModel>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  SzukanieCechy?: InputMaybe<DopasowanieSzukania>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  Towar?: InputMaybe<SzukanyRekordModel>;
  UwzglednijPodgrupy?: InputMaybe<Scalars['Boolean']['input']>;
  UwzglednijPustaWylacznoscKlienta?: InputMaybe<Scalars['Boolean']['input']>;
  WalutaCen?: InputMaybe<SzukanyRekordModel>;
  WartosciDowolne?: InputMaybe<Array<InputMaybe<WartoscWartosciDowolnejWejscieModel>>>;
  WidokLimitowany?: InputMaybe<Scalars['Int']['input']>;
};

export type SzukanyNadindeksModel = {
  NadindeksID?: InputMaybe<Scalars['Int']['input']>;
  Rodzaj?: InputMaybe<SzukanyRodzajNadindeksu>;
  Sufiks?: InputMaybe<Scalars['String']['input']>;
};

export type SzukanyRekordModel = {
  ID?: InputMaybe<Scalars['Int']['input']>;
  Kod?: InputMaybe<Scalars['String']['input']>;
};

export enum SzukanyRodzajNadindeksu {
  /** @deprecated  */
  Glowny = 'Glowny',
  /** @deprecated  */
  Lisc = 'Lisc',
  /** @deprecated  */
  Nadindeks = 'Nadindeks',
  /** @deprecated  */
  Podindeks = 'Podindeks',
  /** @deprecated  */
  Wszystkie = 'Wszystkie',
  /** @deprecated  */
  Zwykly = 'Zwykly'
}

export type SzukanyTowarModel = {
  GrupaCen?: InputMaybe<Array<InputMaybe<SzukanyRekordModel>>>;
  InformacjeDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  KlientDoLiczeniaCen?: InputMaybe<SzukanyRekordModel>;
  ProsteStanyMagazynow?: InputMaybe<Scalars['Boolean']['input']>;
  ProstyStanLacznie?: InputMaybe<Scalars['Boolean']['input']>;
  StanyNaMagazynach?: InputMaybe<Array<InputMaybe<SzukanyRekordModel>>>;
  StanyUDostawcow?: InputMaybe<Array<InputMaybe<SzukanyRekordModel>>>;
  Towar?: InputMaybe<SzukanyRekordModel>;
  WalutaCen?: InputMaybe<SzukanyRekordModel>;
};

export type SzukanyTowarPelnyModel = {
  GrupyCen?: InputMaybe<Array<InputMaybe<SzukanyRekordModel>>>;
  InformacjeDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  KlientDoLiczeniaCen?: InputMaybe<SzukanyRekordModel>;
  ProsteStanyMagazynow?: InputMaybe<Scalars['Boolean']['input']>;
  ProstyStanLacznie?: InputMaybe<Scalars['Boolean']['input']>;
  StanyNaMagazynach?: InputMaybe<Array<InputMaybe<SzukanyRekordModel>>>;
  StanyUDostawcow?: InputMaybe<Array<InputMaybe<SzukanyRekordModel>>>;
  Towar?: InputMaybe<SzukanyRekordModel>;
  WalutaCen?: InputMaybe<SzukanyRekordModel>;
  ZwrocJednostkiAlternatywne?: InputMaybe<Scalars['Boolean']['input']>;
  ZwrocPliki?: InputMaybe<Scalars['Boolean']['input']>;
  ZwrocPrzynaleznosciDrzewKategorii?: InputMaybe<Scalars['Boolean']['input']>;
  ZwrocSkladnikiKompletow?: InputMaybe<Scalars['Boolean']['input']>;
  ZwrocTowaryPowiazane?: InputMaybe<Scalars['Boolean']['input']>;
  ZwrocWartosciDowolne?: InputMaybe<Scalars['Boolean']['input']>;
  ZwrocZamienniki?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains tax item details. */
export type TaxItem = {
  __typename?: 'TaxItem';
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The rate used to calculate the tax. */
  rate: Scalars['Float']['output'];
  /** A title that describes the tax. */
  title: Scalars['String']['output'];
};

export type TextSwatchData = SwatchDataInterface & {
  __typename?: 'TextSwatchData';
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Defines a price based on the quantity purchased. */
export type TierPrice = {
  __typename?: 'TierPrice';
  /** The price discount that this tier represents. */
  discount?: Maybe<ProductDiscount>;
  /** The price of the product at this tier. */
  final_price?: Maybe<Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type Towar = {
  __typename?: 'Towar';
  Aktywnosc?: Maybe<Scalars['String']['output']>;
  Cecha1?: Maybe<CechaTowaruModel>;
  Cecha2?: Maybe<CechaTowaruModel>;
  Cecha3?: Maybe<CechaTowaruModel>;
  Cecha4?: Maybe<CechaTowaruModel>;
  Cecha5?: Maybe<CechaTowaruModel>;
  Cecha6?: Maybe<CechaTowaruModel>;
  CenaDlaKlienta?: Maybe<CenaDlaKlientaModel>;
  Chodliwosc1?: Maybe<Chodliwosc>;
  Chodliwosc2?: Maybe<ChodliwoscIi>;
  DataCzasOstatniejModyfikacji?: Maybe<Scalars['String']['output']>;
  DataCzasOstatniejModyfikacjiRecord?: Maybe<Scalars['String']['output']>;
  Dlugosc?: Maybe<Scalars['Float']['output']>;
  Dostawca?: Maybe<RekordModel>;
  EAN?: Maybe<Scalars['String']['output']>;
  Grupa1?: Maybe<RekordModel>;
  Grupa2?: Maybe<RekordModel>;
  GrupaWWW?: Maybe<RekordModel>;
  ID?: Maybe<Scalars['Int']['output']>;
  InformacjeDodatkowe?: Maybe<Array<Maybe<InformacjaDodatkowaModel>>>;
  Jednostka?: Maybe<RekordModel>;
  Kod?: Maybe<Scalars['String']['output']>;
  KodUDostawcy?: Maybe<Scalars['String']['output']>;
  KompletacjaHandlowy?: Maybe<Scalars['Float']['output']>;
  KompletacjaRzeczywisty?: Maybe<Scalars['Float']['output']>;
  KompletacjaZZapotrzebowaniem?: Maybe<Scalars['Float']['output']>;
  LimitDokladnejIlosci?: Maybe<Scalars['Float']['output']>;
  MaRecepture?: Maybe<Scalars['Boolean']['output']>;
  MaStrukture?: Maybe<Scalars['Boolean']['output']>;
  MaTechnologie?: Maybe<Scalars['Boolean']['output']>;
  MaZamiennik?: Maybe<Scalars['Boolean']['output']>;
  NadindeksInfo?: Maybe<NadindeksInformacjaModel>;
  NadindeksRodzaj?: Maybe<Scalars['String']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  NazwaUDostawcy?: Maybe<Scalars['String']['output']>;
  Objetosc?: Maybe<Scalars['Float']['output']>;
  Opis?: Maybe<Scalars['String']['output']>;
  OpisHTML?: Maybe<Scalars['String']['output']>;
  PKWiU?: Maybe<Scalars['String']['output']>;
  Powierzchnia?: Maybe<Scalars['Float']['output']>;
  Producent?: Maybe<RecordZNazwaModel>;
  ProsteStanyMagazynow?: Maybe<Array<Maybe<ProstyStanMagazynuModel>>>;
  ProstyStan?: Maybe<Scalars['String']['output']>;
  Rodzaj1?: Maybe<Scalars['String']['output']>;
  Rodzaj2?: Maybe<Scalars['String']['output']>;
  SchematRozmiaru?: Maybe<Scalars['Int']['output']>;
  StronaWWW?: Maybe<Scalars['String']['output']>;
  VATSprzedaz?: Maybe<StawkaVatModel>;
  VATZakup?: Maybe<StawkaVatModel>;
  Waga?: Maybe<Scalars['Float']['output']>;
  WymiarDlugosc?: Maybe<Scalars['Float']['output']>;
  WymiarSzerokosc?: Maybe<Scalars['Float']['output']>;
  WymiarWysokosc?: Maybe<Scalars['Float']['output']>;
};

export type Towar2Model = {
  __typename?: 'Towar2Model';
  Aktywnosc?: Maybe<AktywnoscTowaru>;
  Cecha1?: Maybe<CechaTowaruModel>;
  Cecha2?: Maybe<CechaTowaruModel>;
  Cecha3?: Maybe<CechaTowaruModel>;
  Cecha4?: Maybe<CechaTowaruModel>;
  Cecha5?: Maybe<CechaTowaruModel>;
  Cecha6?: Maybe<CechaTowaruModel>;
  CenaDlaKlienta?: Maybe<CenaDlaKlientaModel>;
  Chodliwosc1?: Maybe<Chodliwosc>;
  Chodliwosc2?: Maybe<ChodliwoscIi>;
  DataCzasOstatniejModyfikacji?: Maybe<Scalars['String']['output']>;
  DataCzasOstatniejModyfikacjiRecord?: Maybe<Scalars['String']['output']>;
  Dlugosc?: Maybe<Scalars['Float']['output']>;
  Dostawca?: Maybe<RekordModel>;
  EAN?: Maybe<Scalars['String']['output']>;
  Grupa1?: Maybe<RekordModel>;
  Grupa2?: Maybe<RekordModel>;
  GrupaWWW?: Maybe<RekordModel>;
  ID?: Maybe<Scalars['Int']['output']>;
  InformacjeDodatkowe?: Maybe<Array<Maybe<InformacjaDodatkowaModel>>>;
  Jednostka?: Maybe<RekordModel>;
  Kod?: Maybe<Scalars['String']['output']>;
  KodUDostawcy?: Maybe<Scalars['String']['output']>;
  KompletacjaHandlowy?: Maybe<Scalars['Float']['output']>;
  KompletacjaRzeczywisty?: Maybe<Scalars['Float']['output']>;
  KompletacjaZZapotrzebowaniem?: Maybe<Scalars['Float']['output']>;
  LimitDokladnejIlosci?: Maybe<Scalars['Float']['output']>;
  MaRecepture?: Maybe<Scalars['Boolean']['output']>;
  MaStrukture?: Maybe<Scalars['Boolean']['output']>;
  MaTechnologie?: Maybe<Scalars['Boolean']['output']>;
  MaZamiennik?: Maybe<Scalars['Boolean']['output']>;
  NadindeksInfo?: Maybe<NadindeksInformacjaModel>;
  NadindeksRodzaj?: Maybe<RodzajNadindeksu>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  NazwaUDostawcy?: Maybe<Scalars['String']['output']>;
  Objetosc?: Maybe<Scalars['Float']['output']>;
  Opis?: Maybe<Scalars['String']['output']>;
  OpisHTML?: Maybe<Scalars['String']['output']>;
  PKWiU?: Maybe<Scalars['String']['output']>;
  Powierzchnia?: Maybe<Scalars['Float']['output']>;
  Producent?: Maybe<RekordZNazwaModel>;
  ProsteStanyMagazynow?: Maybe<Array<Maybe<ProstyStanMagazynuModel>>>;
  ProstyStan?: Maybe<Scalars['String']['output']>;
  Rodzaj1?: Maybe<RodzajTowaru>;
  Rodzaj2?: Maybe<RodzajTowaruIi>;
  SchematRozmiaru?: Maybe<Scalars['Int']['output']>;
  StronaWWW?: Maybe<Scalars['String']['output']>;
  VATSprzedaz?: Maybe<StawkaVatModel>;
  VATZakup?: Maybe<StawkaVatModel>;
  Waga?: Maybe<Scalars['Float']['output']>;
  WymiarDlugosc?: Maybe<Scalars['Float']['output']>;
  WymiarSzerokosc?: Maybe<Scalars['Float']['output']>;
  WymiarWysokosc?: Maybe<Scalars['Float']['output']>;
};

export enum TowarAktywnosc {
  /** @deprecated  */
  Aktywny = 'Aktywny',
  /** @deprecated  */
  DoUruchomienia = 'DoUruchomienia',
  /** @deprecated  */
  Nieaktywny = 'Nieaktywny'
}

export type TowarCechaModel = {
  __typename?: 'TowarCechaModel';
  Nazwa?: Maybe<Scalars['String']['output']>;
  Wartosc?: Maybe<Scalars['String']['output']>;
};

export type TowarCenaModel = {
  __typename?: 'TowarCenaModel';
  CenaBrutto?: Maybe<Scalars['Float']['output']>;
  CenaNetto?: Maybe<Scalars['Float']['output']>;
  Domyslny?: Maybe<Scalars['Boolean']['output']>;
  GrupaCenID?: Maybe<Scalars['Int']['output']>;
  GrupaCenKod?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  WalutaID?: Maybe<Scalars['Int']['output']>;
  WalutaKod?: Maybe<Scalars['String']['output']>;
};

export type TowarCenaZapytanieModel = {
  Aktywne?: InputMaybe<Scalars['Boolean']['input']>;
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  CzySynchronizacja?: InputMaybe<Scalars['Boolean']['input']>;
  DataCzasModyfikacji?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalny?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalnyPola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  GrupyCen?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Limit?: InputMaybe<Scalars['String']['input']>;
  OstatniaSynchronizacjaDataCzas?: InputMaybe<Scalars['String']['input']>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  Towary?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TylkoPodsumowanie?: InputMaybe<Scalars['Boolean']['input']>;
  WalutaID?: InputMaybe<Scalars['Int']['input']>;
  ZsynchronizawaneID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ZwracanePola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaParametry?: InputMaybe<Array<InputMaybe<ZwracanePoleParametrModel>>>;
};

export type TowarCenyWynikoweZapytanieModel = {
  DlaSprzedazy?: InputMaybe<Scalars['Boolean']['input']>;
  DokumentID?: InputMaybe<Scalars['Int']['input']>;
  KlientID?: InputMaybe<Scalars['Int']['input']>;
  NaDzien?: InputMaybe<Scalars['String']['input']>;
  OddzialID?: InputMaybe<Scalars['Int']['input']>;
  WalutaID?: InputMaybe<Scalars['Int']['input']>;
};

export type TowarCharakterystykaKlientaModel = {
  __typename?: 'TowarCharakterystykaKlientaModel';
  Ean?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  JednostkaAltNazwa?: Maybe<Scalars['String']['output']>;
  JednostkaAltSkrot?: Maybe<Scalars['String']['output']>;
  JednostkaAlternatywnaID?: Maybe<Scalars['Int']['output']>;
  KlientID?: Maybe<Scalars['Int']['output']>;
  KlientKod?: Maybe<Scalars['String']['output']>;
  KlientNazwa?: Maybe<Scalars['String']['output']>;
  KoduKlienta?: Maybe<Scalars['String']['output']>;
  NazwaUKlienta?: Maybe<Scalars['String']['output']>;
  NieUstawiajPrzyWystDok?: Maybe<Scalars['Boolean']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  TowarKod?: Maybe<Scalars['String']['output']>;
  TowarNazwa?: Maybe<Scalars['String']['output']>;
  TypDostawacyID?: Maybe<Scalars['Int']['output']>;
  TypDostawcyNazwa?: Maybe<Scalars['String']['output']>;
};

export type TowarCharakterystykaKlientaZapytanieModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  CzySynchronizacja?: InputMaybe<Scalars['Boolean']['input']>;
  FiltrUniwersalny?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalnyPola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ID?: InputMaybe<Scalars['Int']['input']>;
  KlienciID?: InputMaybe<Scalars['Int']['input']>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  OstatniaSynchronizacjaDataCzas?: InputMaybe<Scalars['String']['input']>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  TowaryID?: InputMaybe<Scalars['Int']['input']>;
  TylkoPodsumowanie?: InputMaybe<Scalars['Boolean']['input']>;
  ZsynchronizawaneID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ZwracanePola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaParametry?: InputMaybe<Array<InputMaybe<ZwracanePoleParametrModel>>>;
};

export type TowarCharakterystykaMagazynModel = {
  __typename?: 'TowarCharakterystykaMagazynModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Krotnosc?: Maybe<Scalars['Float']['output']>;
  MagazynID?: Maybe<Scalars['Int']['output']>;
  MagazynNazwa?: Maybe<Scalars['String']['output']>;
  StanMax?: Maybe<Scalars['Float']['output']>;
  StanMin?: Maybe<Scalars['Float']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
};

export type TowarCharakterystykaMagazynZapytanieModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  CzySynchronizacja?: InputMaybe<Scalars['Boolean']['input']>;
  FiltrUniwersalny?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalnyPola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  MagazynyID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  OstatniaSynchronizacjaDataCzas?: InputMaybe<Scalars['String']['input']>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  TowaryID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TylkoPodsumowanie?: InputMaybe<Scalars['Boolean']['input']>;
  ZsynchronizawaneID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ZwracanePola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaParametry?: InputMaybe<Array<InputMaybe<ZwracanePoleParametrModel>>>;
};

export type TowarCharakterystykaMiejceMagazynoweModel = {
  __typename?: 'TowarCharakterystykaMiejceMagazynoweModel';
  CharakterystykaMiejsceMagazynoweId?: Maybe<Scalars['Int']['output']>;
  Flaga?: Maybe<Scalars['Int']['output']>;
  KrotnoscGenerowania?: Maybe<Scalars['Float']['output']>;
  KrotnoscWlasna?: Maybe<Scalars['Boolean']['output']>;
  MagazynId?: Maybe<Scalars['Int']['output']>;
  MagazynKod?: Maybe<Scalars['String']['output']>;
  MagazynNazwa?: Maybe<Scalars['String']['output']>;
  MiejsceMagazynoweId?: Maybe<Scalars['Int']['output']>;
  MiejsceMagazynoweNumerPelny?: Maybe<Scalars['String']['output']>;
  StanMax?: Maybe<Scalars['Float']['output']>;
  StanMin?: Maybe<Scalars['Float']['output']>;
  TowarId?: Maybe<Scalars['Int']['output']>;
  TowarKod?: Maybe<Scalars['String']['output']>;
  TowarNazwa?: Maybe<Scalars['String']['output']>;
};

export type TowarCharakterystykaMiejsceMagazynoweResult = {
  __typename?: 'TowarCharakterystykaMiejsceMagazynoweResult';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaTowarCharakterystykaMiejceMagazynoweModel>;
};

export type TowarCharakterystykaMiejsceMagazynoweZapytanieModel = {
  CharakterystykaMiejsceMagazynoweId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  MagazynId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  MiejsceMagazynoweId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TowaryId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export enum TowarChodliwosc {
  /** @deprecated  */
  ChodliwoscA = 'ChodliwoscA',
  /** @deprecated  */
  ChodliwoscB = 'ChodliwoscB',
  /** @deprecated  */
  ChodliwoscC = 'ChodliwoscC',
  /** @deprecated  */
  ChodliwoscD = 'ChodliwoscD'
}

export enum TowarChodliwoscIi {
  /** @deprecated  */
  ChodliwoscX = 'ChodliwoscX',
  /** @deprecated  */
  ChodliwoscY = 'ChodliwoscY',
  /** @deprecated  */
  ChodliwoscZ = 'ChodliwoscZ'
}

export type TowarCzesciZamienneModel = {
  __typename?: 'TowarCzesciZamienneModel';
  DataModyfikacji?: Maybe<Scalars['String']['output']>;
  Ilosc?: Maybe<Scalars['Float']['output']>;
  TowarCzescZamiennaId?: Maybe<Scalars['Int']['output']>;
  TowarCzescZamiennaKod?: Maybe<Scalars['String']['output']>;
  TowarZrodlowyId?: Maybe<Scalars['Int']['output']>;
  TowarZrodlowyKod?: Maybe<Scalars['String']['output']>;
  Zywotnosc?: Maybe<Scalars['Float']['output']>;
};

export type TowarEcommerceModel = {
  __typename?: 'TowarEcommerceModel';
  Chodliwosc1?: Maybe<Scalars['Int']['output']>;
  Chodliwosc2?: Maybe<Scalars['Int']['output']>;
  DataModyfikacji?: Maybe<Scalars['String']['output']>;
  Dlugosc?: Maybe<Scalars['Float']['output']>;
  EAN?: Maybe<Scalars['String']['output']>;
  Grupa1Id?: Maybe<Scalars['Int']['output']>;
  Grupa2Id?: Maybe<Scalars['Int']['output']>;
  GrupaWWW?: Maybe<Scalars['Int']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Jednostka?: Maybe<JednMiaryModel>;
  Katalogi?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  Kod?: Maybe<Scalars['String']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  Opis?: Maybe<Scalars['String']['output']>;
  OpisHTML?: Maybe<Scalars['String']['output']>;
  PolaUzytkownika?: Maybe<Array<Maybe<PoleUzytkownikaExtendedModel>>>;
  PolaUzytkownikaDB?: Maybe<Array<Maybe<PoleUzytkownikaWartoscModel>>>;
  Status?: Maybe<StatusEcommerceModel>;
  StawkaVatSprzedaz?: Maybe<Scalars['Float']['output']>;
  StawkiVatKraje?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  StronaWWW?: Maybe<Scalars['String']['output']>;
  Szerokosc?: Maybe<Scalars['Float']['output']>;
  Waga?: Maybe<Scalars['Float']['output']>;
  Wysokosc?: Maybe<Scalars['Float']['output']>;
};

export enum TowarGrupaIii {
  /** @deprecated  */
  Handlowy = 'Handlowy',
  /** @deprecated  */
  Nieznana = 'Nieznana',
  /** @deprecated  */
  Polprodukt = 'Polprodukt',
  /** @deprecated  */
  Surowiec = 'Surowiec',
  /** @deprecated  */
  Wyrob = 'Wyrob'
}

export type TowarJednostkaAlternatywnaModel = {
  __typename?: 'TowarJednostkaAlternatywnaModel';
  Ean?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  JednostkaID?: Maybe<Scalars['Int']['output']>;
  Licznik?: Maybe<Scalars['Int']['output']>;
  Mianownik?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  Objetosc?: Maybe<Scalars['Float']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  Waga?: Maybe<Scalars['Int']['output']>;
};

export type TowarJednostkaAlternatywnaZapytanieModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  CzySynchronizacja?: InputMaybe<Scalars['Boolean']['input']>;
  DataCzasModyfikacji?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalny?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalnyPola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  OstatniaSynchronizacjaDataCzas?: InputMaybe<Scalars['String']['input']>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  Towary?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TylkoPodsumowanie?: InputMaybe<Scalars['Boolean']['input']>;
  ZsynchronizawaneID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ZwracanePola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaParametry?: InputMaybe<Array<InputMaybe<ZwracanePoleParametrModel>>>;
};

export type TowarKartaKopiowanieModel = {
  __typename?: 'TowarKartaKopiowanieModel';
  CharakterystkiMagazynowe?: Maybe<Scalars['Boolean']['output']>;
  CzesciZamienne?: Maybe<Scalars['Boolean']['output']>;
  JednostkiAlternatywne?: Maybe<Scalars['Boolean']['output']>;
  Kalkulacje?: Maybe<Scalars['Boolean']['output']>;
  KatalogTowarow?: Maybe<Scalars['Boolean']['output']>;
  Podindeksy?: Maybe<Scalars['Boolean']['output']>;
  PowiazaneElementyKompletu?: Maybe<Scalars['Boolean']['output']>;
  Przynaleznosci?: Maybe<Scalars['Boolean']['output']>;
  RecepturyDomyslne?: Maybe<Scalars['Boolean']['output']>;
  StrukturyKonstrukcyjne?: Maybe<Scalars['Boolean']['output']>;
  TechnologieDomyslne?: Maybe<Scalars['Boolean']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  WartosciDowolne?: Maybe<Scalars['Boolean']['output']>;
  Zamienniki?: Maybe<Scalars['Boolean']['output']>;
  Zdjecia?: Maybe<Scalars['Boolean']['output']>;
  ZgodnieZUstawieniami?: Maybe<Scalars['Boolean']['output']>;
};

export type TowarModel = {
  __typename?: 'TowarModel';
  Akcyza?: Maybe<Scalars['Float']['output']>;
  Aktywnosc?: Maybe<TowarAktywnosc>;
  BlokadaFvPrWz?: Maybe<Scalars['Boolean']['output']>;
  BlokadaFzPzKoPw?: Maybe<Scalars['Boolean']['output']>;
  BlokadaOf?: Maybe<Scalars['Boolean']['output']>;
  BlokadaZlp?: Maybe<Scalars['Boolean']['output']>;
  BlokadaZo?: Maybe<Scalars['Boolean']['output']>;
  BlokadaZw?: Maybe<Scalars['Boolean']['output']>;
  Cecha1?: Maybe<TowarCechaModel>;
  Cecha2?: Maybe<TowarCechaModel>;
  Cecha3?: Maybe<TowarCechaModel>;
  Cecha4?: Maybe<TowarCechaModel>;
  Cecha5?: Maybe<TowarCechaModel>;
  Cecha6?: Maybe<TowarCechaModel>;
  CenaBazowa?: Maybe<Scalars['Float']['output']>;
  CenaBazowaWalutaID?: Maybe<Scalars['Int']['output']>;
  CenaDomyslna?: Maybe<Scalars['Float']['output']>;
  CenaDomyslnaWalutaID?: Maybe<Scalars['Int']['output']>;
  CenaKgoNetto?: Maybe<Scalars['Float']['output']>;
  CenaSrednia?: Maybe<Scalars['Float']['output']>;
  Ceny?: Maybe<Array<Maybe<TowarCenaModel>>>;
  CenyWynikowe?: Maybe<CenyWynikoweModel>;
  Certyfikowany?: Maybe<Scalars['Boolean']['output']>;
  Chodliwosc1?: Maybe<TowarChodliwosc>;
  Chodliwosc2?: Maybe<TowarChodliwoscIi>;
  Clo?: Maybe<Scalars['Float']['output']>;
  CzasDostawy?: Maybe<Scalars['Int']['output']>;
  DataCzasOstatniejModyfikacji?: Maybe<Scalars['String']['output']>;
  DataCzasOstatniejModyfikacjiRekordu?: Maybe<Scalars['String']['output']>;
  Dlugosc?: Maybe<Scalars['Float']['output']>;
  DlugoscL?: Maybe<Scalars['Float']['output']>;
  DlugoscM?: Maybe<Scalars['Float']['output']>;
  DostawcaID?: Maybe<Scalars['Int']['output']>;
  DostawcaKod?: Maybe<Scalars['String']['output']>;
  EAN?: Maybe<Scalars['String']['output']>;
  Grupa1ID?: Maybe<Scalars['Int']['output']>;
  Grupa1Kod?: Maybe<Scalars['String']['output']>;
  Grupa2ID?: Maybe<Scalars['Int']['output']>;
  Grupa2Kod?: Maybe<Scalars['String']['output']>;
  Grupa3?: Maybe<TowarGrupaIii>;
  GrupaWWWID?: Maybe<Scalars['Int']['output']>;
  GrupaWWWKod?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  JednostkaID?: Maybe<Scalars['Int']['output']>;
  JednostkaKod?: Maybe<Scalars['String']['output']>;
  JednostkiAlternatywne?: Maybe<Array<Maybe<TowarJednostkaAlternatywnaModel>>>;
  Kod?: Maybe<Scalars['String']['output']>;
  KodUDostawcy?: Maybe<Scalars['String']['output']>;
  KreatorProduktuId?: Maybe<Scalars['Int']['output']>;
  KrotnoscGenerowan?: Maybe<Scalars['Float']['output']>;
  LacznyStan?: Maybe<Scalars['Float']['output']>;
  LimitDokladnejIlosci?: Maybe<Scalars['Float']['output']>;
  MaRecepture?: Maybe<Scalars['Boolean']['output']>;
  MaStrukture?: Maybe<Scalars['Boolean']['output']>;
  MaTechnologie?: Maybe<Scalars['Boolean']['output']>;
  MaZamiennik?: Maybe<Scalars['Boolean']['output']>;
  MagazynPodProdukcjeID?: Maybe<Scalars['Int']['output']>;
  MechanizmPP?: Maybe<Scalars['Boolean']['output']>;
  MinimalnaWielkoscZamowienia?: Maybe<Scalars['Float']['output']>;
  MwoDynamiczne?: Maybe<Scalars['Float']['output']>;
  MwoStatyczne?: Maybe<Scalars['Float']['output']>;
  Nadindeks?: Maybe<TowarNadindeksModel>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  NazwaUDostawcy?: Maybe<Scalars['String']['output']>;
  NazwaWJezyku?: Maybe<Scalars['String']['output']>;
  NazwyDodatkowe?: Maybe<Array<Maybe<TowarNazwyDodatkoweModel>>>;
  Objetosc?: Maybe<Scalars['Float']['output']>;
  ObjetoscL?: Maybe<Scalars['Float']['output']>;
  ObjetoscM?: Maybe<Scalars['Float']['output']>;
  Opis?: Maybe<Scalars['String']['output']>;
  OpisHTML?: Maybe<Scalars['String']['output']>;
  OstatniaCenaNabycia?: Maybe<Scalars['Float']['output']>;
  OstatniaCenaZakupu?: Maybe<Scalars['Float']['output']>;
  OstatniaCenaZakupuWalutaID?: Maybe<Scalars['Int']['output']>;
  PKWiU?: Maybe<Scalars['String']['output']>;
  Pcn?: Maybe<Scalars['String']['output']>;
  PodatekCukrowyNetto?: Maybe<Scalars['Float']['output']>;
  PolaUzytkownika?: Maybe<Array<Maybe<PoleUzytkownikaWartoscModel>>>;
  Powiazane?: Maybe<Array<Maybe<TowarPowiazanyModel>>>;
  Powierzchnia?: Maybe<Scalars['Float']['output']>;
  PowierzchniaL?: Maybe<Scalars['Float']['output']>;
  PowierzchniaM?: Maybe<Scalars['Float']['output']>;
  ProducentID?: Maybe<Scalars['Int']['output']>;
  ProducentKod?: Maybe<Scalars['String']['output']>;
  RecepturaWgWymiarow?: Maybe<Scalars['Boolean']['output']>;
  Rodzaj1?: Maybe<TowarRodzaj>;
  Rodzaj2?: Maybe<TowarRodzajIi>;
  StanInny?: Maybe<StanInnyModel>;
  StanMax?: Maybe<Scalars['Float']['output']>;
  StanMin?: Maybe<Scalars['Float']['output']>;
  Stany?: Maybe<Array<Maybe<TowarStanModel>>>;
  StronaWWW?: Maybe<Scalars['String']['output']>;
  TypPrzeliczenia?: Maybe<TowarTypPrzeliczenia>;
  VATNpPrzyEksporcie?: Maybe<Scalars['Boolean']['output']>;
  VATOdwrotneObciazenie?: Maybe<Scalars['Boolean']['output']>;
  VATSprzedaz?: Maybe<StawkaVatModel>;
  VATZakup?: Maybe<StawkaVatModel>;
  Waga?: Maybe<Scalars['Float']['output']>;
  WagaOpakowania?: Maybe<Scalars['Float']['output']>;
  WylacznaFirmaID?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  WylacznaGrupaKlientaID?: Maybe<Scalars['Int']['output']>;
  WylacznyKlientID?: Maybe<Scalars['Int']['output']>;
  WylacznyMagazynID?: Maybe<Scalars['Int']['output']>;
  WymiarDlugosc?: Maybe<Scalars['Float']['output']>;
  WymiarSzerokosc?: Maybe<Scalars['Float']['output']>;
  WymiarWysokosc?: Maybe<Scalars['Float']['output']>;
  Zamienniki?: Maybe<Array<Maybe<TowarZamiennikModel>>>;
  ZawieraExcelaProdukcyjnego?: Maybe<Scalars['Boolean']['output']>;
};

export type TowarNadindeksModel = {
  __typename?: 'TowarNadindeksModel';
  NadindeksID?: Maybe<Scalars['Int']['output']>;
  Rodzaj?: Maybe<TowarNadindeksRodzaj>;
  Sufix?: Maybe<Scalars['String']['output']>;
};

export enum TowarNadindeksRodzaj {
  /** @deprecated  */
  Glowny = 'Glowny',
  /** @deprecated  */
  Lisc = 'Lisc',
  /** @deprecated  */
  Nadindeks = 'Nadindeks',
  /** @deprecated  */
  Podindeks = 'Podindeks',
  /** @deprecated  */
  Zwykly = 'Zwykly'
}

export type TowarNazwyDodatkoweModel = {
  __typename?: 'TowarNazwyDodatkoweModel';
  Kod?: Maybe<Scalars['String']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  NazwaDodatkowaID?: Maybe<Scalars['Int']['output']>;
  Opis?: Maybe<Scalars['String']['output']>;
  OpisHtml?: Maybe<Scalars['String']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  Www?: Maybe<Scalars['String']['output']>;
};

export type TowarNazwyDodatkoweZapytanieModel = {
  NazwaDodatkowa?: InputMaybe<SzukanyRekordModel>;
  Towar?: InputMaybe<SzukanyRekordModel>;
};

export type TowarNormatywyModel = {
  __typename?: 'TowarNormatywyModel';
  CzasDostawy?: Maybe<Scalars['Int']['output']>;
  KrotnoscGenerowania?: Maybe<Scalars['Float']['output']>;
  LimitJest?: Maybe<Scalars['Int']['output']>;
  MagazynID?: Maybe<Scalars['Int']['output']>;
  MinimalnaWielkoscZamowienia?: Maybe<Scalars['Float']['output']>;
  StanMaksymalny?: Maybe<Scalars['Float']['output']>;
  StanMinimalny?: Maybe<Scalars['Float']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
};

export type TowarNormatywyZapytanieModel = {
  Magazyn?: InputMaybe<SzukanyRekordModel>;
  Towar?: InputMaybe<SzukanyRekordModel>;
};

export type TowarPowiazaneModel = {
  __typename?: 'TowarPowiazaneModel';
  DataModyfikacji?: Maybe<Scalars['String']['output']>;
  Ilosc?: Maybe<Scalars['Float']['output']>;
  KodTypTowaruPowiazanego?: Maybe<Scalars['String']['output']>;
  Lp?: Maybe<Scalars['Int']['output']>;
  Powiazanie?: Maybe<Scalars['String']['output']>;
  TowarPowiazanyId?: Maybe<Scalars['Int']['output']>;
  TowarPowiazanyKod?: Maybe<Scalars['String']['output']>;
  TowarZrodlowyId?: Maybe<Scalars['Int']['output']>;
  TowarZrodlowyKod?: Maybe<Scalars['String']['output']>;
};

export type TowarPowiazanyModel = {
  __typename?: 'TowarPowiazanyModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Ilosc?: Maybe<Scalars['Float']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  KodTypuTowaruPowiazanego?: Maybe<Scalars['String']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  Powiazanie?: Maybe<Scalars['String']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  TowarZrodlowyID?: Maybe<Scalars['Int']['output']>;
  Typ?: Maybe<TowarPowiazanyTyp>;
};

export enum TowarPowiazanyTyp {
  /** @deprecated  */
  TowarPowiazanyObowiazkowyAutomatyczneDodawany = 'TowarPowiazanyObowiazkowyAutomatyczneDodawany',
  /** @deprecated  */
  TowarPowiazanyObowiazkowyZalecanyDoWykupu = 'TowarPowiazanyObowiazkowyZalecanyDoWykupu',
  /** @deprecated  */
  TowarPowiazanyOpcjonalny = 'TowarPowiazanyOpcjonalny'
}

export type TowarResult = {
  __typename?: 'TowarResult';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<TowarWynik>;
};

export enum TowarRodzaj {
  /** @deprecated  */
  Bilet = 'Bilet',
  /** @deprecated  */
  Czynnosc = 'Czynnosc',
  /** @deprecated  */
  Koszt = 'Koszt',
  /** @deprecated  */
  Pakiet = 'Pakiet',
  /** @deprecated  */
  PseudoTowar = 'PseudoTowar',
  /** @deprecated  */
  Rozmiarowka = 'Rozmiarowka',
  /** @deprecated  */
  Tk = 'TK',
  /** @deprecated  */
  Towar = 'Towar',
  /** @deprecated  */
  Usluga = 'Usluga',
  /** @deprecated  */
  Zbior = 'Zbior',
  /** @deprecated  */
  Zestaw = 'Zestaw'
}

export enum TowarRodzajIi {
  /** @deprecated  */
  Gabarytowy = 'Gabarytowy',
  /** @deprecated  */
  Paletowy = 'Paletowy',
  /** @deprecated  */
  Polpaletowy = 'Polpaletowy',
  /** @deprecated  */
  Zwykly = 'Zwykly'
}

export type TowarStanModel = {
  __typename?: 'TowarStanModel';
  DataCzasOstatniejModyfikacji?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  JednostkaID?: Maybe<Scalars['Int']['output']>;
  JednostkaKod?: Maybe<Scalars['String']['output']>;
  MagazynID?: Maybe<Scalars['Int']['output']>;
  MagazynKod?: Maybe<Scalars['String']['output']>;
  MagazynNazwa?: Maybe<Scalars['String']['output']>;
  Oczekiwane?: Maybe<Scalars['Float']['output']>;
  StanHandlowy?: Maybe<Scalars['Float']['output']>;
  StanRzeczywisty?: Maybe<Scalars['Float']['output']>;
  TowarID?: Maybe<Scalars['Int']['output']>;
  Zapotrzebowanie?: Maybe<Scalars['Float']['output']>;
};

export type TowarStanZapytanieModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  CzySynchronizacja?: InputMaybe<Scalars['Boolean']['input']>;
  DataCzasModyfikacji?: InputMaybe<Scalars['String']['input']>;
  DataCzasModyfikacjiDotyczyCalegoTowaru?: InputMaybe<Scalars['Boolean']['input']>;
  FiltrUniwersalny?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalnyPola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  Magazyny?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  OstatniaSynchronizacjaDataCzas?: InputMaybe<Scalars['String']['input']>;
  PominKompletyBezStanu?: InputMaybe<Scalars['Boolean']['input']>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  Towary?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TylkoPodsumowanie?: InputMaybe<Scalars['Boolean']['input']>;
  UwzglednijMagazynySpecjalne?: InputMaybe<Scalars['Boolean']['input']>;
  ZsynchronizawaneID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ZwracanePola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaParametry?: InputMaybe<Array<InputMaybe<ZwracanePoleParametrModel>>>;
};

export type TowarStanyModel = {
  __typename?: 'TowarStanyModel';
  DataModyfikacji?: Maybe<Scalars['String']['output']>;
  Stan?: Maybe<Scalars['Float']['output']>;
  TowarId?: Maybe<Scalars['Int']['output']>;
  TowarKod?: Maybe<Scalars['String']['output']>;
};

export type TowarSzukanyModel = {
  __typename?: 'TowarSzukanyModel';
  EAN?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  KodUKlienta?: Maybe<Scalars['String']['output']>;
  KontekstKlienta?: Maybe<KlientSzukanyModel>;
};

export type TowarSzukanyModelInput = {
  EAN?: InputMaybe<Scalars['String']['input']>;
  ID?: InputMaybe<Scalars['Int']['input']>;
  Kod?: InputMaybe<Scalars['String']['input']>;
  KodUKlienta?: InputMaybe<Scalars['String']['input']>;
  KonteksKlienta?: InputMaybe<KlientSzukanyModelInput>;
};

export enum TowarTypPrzeliczenia {
  /** @deprecated  */
  Brak = 'Brak',
  /** @deprecated  */
  Dlugosc = 'Dlugosc',
  /** @deprecated  */
  Objetosc = 'Objetosc',
  /** @deprecated  */
  Powierzchnia = 'Powierzchnia',
  /** @deprecated  */
  Waga = 'Waga'
}

export type TowarWKoszykuModel = {
  __typename?: 'TowarWKoszykuModel';
  Ilosc?: Maybe<Scalars['Float']['output']>;
  Towar?: Maybe<TowarSzukanyModel>;
};

export type TowarWKoszykuModelInput = {
  Ilosc?: InputMaybe<Scalars['Float']['input']>;
  Towar?: InputMaybe<TowarSzukanyModelInput>;
};

export type TowarWynik = {
  __typename?: 'TowarWynik';
  Ceny?: Maybe<Array<Maybe<CennikModel>>>;
  DataWprowadzenia?: Maybe<Scalars['String']['output']>;
  KompletacjaStanHandlowy?: Maybe<Scalars['Float']['output']>;
  StanUDostawcow?: Maybe<Array<Maybe<StanUKlientaModel>>>;
  Stany?: Maybe<Array<Maybe<StanTowaruNaMagazynieModel>>>;
  Towar?: Maybe<Towar>;
};

export type TowarZamiennikModel = {
  __typename?: 'TowarZamiennikModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  Przelicznik?: Maybe<Scalars['Float']['output']>;
  TowarDocelowyID?: Maybe<Scalars['Int']['output']>;
  TowarZrodlowyID?: Maybe<Scalars['Int']['output']>;
};

export type TowarZapytanieModel = {
  Aktywnosci?: InputMaybe<Array<InputMaybe<TowarAktywnosc>>>;
  Atrybuty?: InputMaybe<AtrybutyFiltryZapytanieModel>;
  BezCertyfikowanych?: InputMaybe<Scalars['Boolean']['input']>;
  BezStanowZerowych?: InputMaybe<Scalars['Boolean']['input']>;
  BezStanowZerowychWzgledem?: InputMaybe<BezStanowZerowychWzgledem>;
  CenaBazowaDo?: InputMaybe<Scalars['Float']['input']>;
  CenaBazowaOd?: InputMaybe<Scalars['Float']['input']>;
  CenyWynikoweZapytanie?: InputMaybe<TowarCenyWynikoweZapytanieModel>;
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  CzySynchronizacja?: InputMaybe<Scalars['Boolean']['input']>;
  DataCzasModyfikacji?: InputMaybe<Scalars['String']['input']>;
  DataCzasModyfikacjiTyp?: InputMaybe<TypDataCzasModyfikacji>;
  DokumentID?: InputMaybe<Scalars['Int']['input']>;
  DostawcyID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  EAN?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalny?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalnyPola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Grupy1ID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Grupy2ID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Grupy3?: InputMaybe<Array<InputMaybe<TowarGrupaIii>>>;
  GrupyCen?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  GrupyWWWID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  KlientID?: InputMaybe<Scalars['Int']['input']>;
  KlientWylacznyID?: InputMaybe<Scalars['Int']['input']>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  MagazynID?: InputMaybe<Scalars['Int']['input']>;
  NadindeksID?: InputMaybe<Scalars['Int']['input']>;
  NadindeksRodzaj?: InputMaybe<TowarNadindeksRodzaj>;
  NazwyDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  OstatniaSynchronizacjaDataCzas?: InputMaybe<Scalars['String']['input']>;
  ProducenciID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Rodzaje1?: InputMaybe<Array<InputMaybe<TowarRodzaj>>>;
  Sortowanie?: InputMaybe<Array<InputMaybe<TowarZapytanieSortowanieModel>>>;
  StatusyID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  Sufiks?: InputMaybe<Scalars['String']['input']>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  TowaryID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TylkoPodsumowanie?: InputMaybe<Scalars['Boolean']['input']>;
  UwzglednijMagazynySpecjalne?: InputMaybe<Scalars['Boolean']['input']>;
  WykluczoneTowaryID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ZPodgrupami?: InputMaybe<Scalars['Boolean']['input']>;
  ZPustaWylacznoscKlienta?: InputMaybe<Scalars['Boolean']['input']>;
  ZsynchronizawaneID?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ZwracanePola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaParametry?: InputMaybe<Array<InputMaybe<ZwracanePoleParametrModel>>>;
};

export enum TowarZapytanieSortowanie {
  /** @deprecated  */
  Cecha1 = 'Cecha1',
  /** @deprecated  */
  Cecha2 = 'Cecha2',
  /** @deprecated  */
  Cecha3 = 'Cecha3',
  /** @deprecated  */
  Cecha4 = 'Cecha4',
  /** @deprecated  */
  Cecha5 = 'Cecha5',
  /** @deprecated  */
  Cecha6 = 'Cecha6',
  /** @deprecated  */
  Cena0 = 'Cena0',
  /** @deprecated  */
  CenaBazowa = 'CenaBazowa',
  /** @deprecated  */
  Id = 'ID',
  /** @deprecated  */
  Kod = 'Kod',
  /** @deprecated  */
  Nazwa = 'Nazwa',
  /** @deprecated  */
  Stan = 'Stan'
}

export type TowarZapytanieSortowanieModel = {
  Malejaco?: InputMaybe<Scalars['Boolean']['input']>;
  Pole?: InputMaybe<TowarZapytanieSortowanie>;
};

export type TowaryApiChodliwoscWyjscieModel = {
  __typename?: 'TowaryApiChodliwoscWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaApiChodliwoscModel>;
};

export type TowaryApiCzesciZamienneListaWyjscieModel = {
  __typename?: 'TowaryApiCzesciZamienneListaWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaTowarCzesciZamienneModel>;
};

export type TowaryApiKosztTransportuListaWyjscieModel = {
  __typename?: 'TowaryApiKosztTransportuListaWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<KosztTransportuWynikModel>;
};

export type TowaryApiListaWyjscieModel = {
  __typename?: 'TowaryApiListaWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaTowarEcommerceModel>;
};

export type TowaryApiPowiazaneWyjscieModel = {
  __typename?: 'TowaryApiPowiazaneWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaTowarPowiazaneModel>;
};

export type TowaryApiStanyWyjscieModel = {
  __typename?: 'TowaryApiStanyWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaTowarStanyModel>;
};

export type TowaryApiZdjeciaWyjscieModel = {
  __typename?: 'TowaryApiZdjeciaWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaTowaryZdjeciaModel>;
};

export type TowaryCenyTowarowWyjscieModel = {
  __typename?: 'TowaryCenyTowarowWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaCenaTowaruModel>;
};

export type TowaryCenyWynikoweWyjscieModel = {
  __typename?: 'TowaryCenyWynikoweWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaCenyWynikoweModel>;
};

export type TowaryCharakterystykiKlientowWyjscieModel = {
  __typename?: 'TowaryCharakterystykiKlientowWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaRekordowTowarCharakterystykaKlientaModel>;
};

export type TowaryCharakterystykiNaMagazynachWyjscieModel = {
  __typename?: 'TowaryCharakterystykiNaMagazynachWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaRekordowTowarCharakterystykaMagazynModel>;
};

export type TowaryCzesciZamModelInModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  DataModyfikacji?: InputMaybe<Scalars['String']['input']>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  TowarId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TowarKod?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TowaryCzesciZamienneListaWyjscieModel = {
  __typename?: 'TowaryCzesciZamienneListaWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaCzescZamiennaModel>;
};

export type TowaryDomyslneUstawieniaKopiowaniaKartyTowaruWyjscieModel = {
  __typename?: 'TowaryDomyslneUstawieniaKopiowaniaKartyTowaruWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<TowarKartaKopiowanieModel>;
};

export type TowaryGrupyTowarowWyjscieModel = {
  __typename?: 'TowaryGrupyTowarowWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<Array<Maybe<GrupaTowarowModel>>>;
};

export type TowaryJednostkiAlternatywneWyjscieModel = {
  __typename?: 'TowaryJednostkiAlternatywneWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaRekordowTowarJednostkaAlternatywnaModel>;
};

export type TowaryListaDefinicjiPrzegladuNarzedziaWyjscieModel = {
  __typename?: 'TowaryListaDefinicjiPrzegladuNarzedziaWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaPrzegladDefinicjaModel>;
};

export type TowaryListaModelInModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  DataModyfikacji?: InputMaybe<Scalars['String']['input']>;
  Filtry?: InputMaybe<FiltryTowarListaModel>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type TowaryNazwyDodatkoweWyjscieModel = {
  __typename?: 'TowaryNazwyDodatkoweWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<TowarNazwyDodatkoweModel>;
};

export type TowaryNormatywyWyjscieModel = {
  __typename?: 'TowaryNormatywyWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<TowarNormatywyModel>;
};

export type TowaryPowiazaneModelInModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  DataModyfikacji?: InputMaybe<Scalars['String']['input']>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  TowarId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TowarKod?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TowaryRodzajeRozmiarowWyjscieModel = {
  __typename?: 'TowaryRodzajeRozmiarowWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<Array<Maybe<RodzajeRozmiarowModel>>>;
};

export type TowaryStanyModelInModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  CzySynchronizacja?: InputMaybe<Scalars['Boolean']['input']>;
  DataCzasModyfikacji?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalny?: InputMaybe<Scalars['String']['input']>;
  FiltrUniwersalnyPola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Filtry?: InputMaybe<FiltryStanyModel>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  Magazyny?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  OstatniaSynchronizacjaDataCzas?: InputMaybe<Scalars['String']['input']>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  Towary?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  TylkoPodsumowanie?: InputMaybe<Scalars['Boolean']['input']>;
  ZsynchronizawaneID?: InputMaybe<Scalars['Int']['input']>;
  ZwracanePola?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaDodatkowe?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ZwracanePolaParametry?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TowarySzukajWyjscieModel = {
  __typename?: 'TowarySzukajWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<Array<Maybe<RekordModel>>>;
};

export type TowaryTowarRozszerzonyWyjscieModel = {
  __typename?: 'TowaryTowarRozszerzonyWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<KartaTowaruPelnaModel>;
};

export type TowaryTowaryWyjscieModel = {
  __typename?: 'TowaryTowaryWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaTowar2Model>;
};

export type TowaryZdjeciaModel = {
  __typename?: 'TowaryZdjeciaModel';
  DataModyfikacji?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  NazwyDodatkowe?: Maybe<Array<Maybe<NazwyDodatkoweBaseModel>>>;
  Rozszerzenie?: Maybe<Scalars['String']['output']>;
  TowarId?: Maybe<Scalars['Int']['output']>;
  ZawartoscBase64?: Maybe<Scalars['String']['output']>;
};

export type TowaryZdjeciaModelInModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  DataModyfikacji?: InputMaybe<Scalars['String']['input']>;
  Filtry?: InputMaybe<FiltryZdjecieModel>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
  ZwrocZawartosc?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TypDanychRekordu {
  /** @deprecated  */
  Abonament = 'Abonament',
  /** @deprecated  */
  Ankieta = 'Ankieta',
  /** @deprecated  */
  AnkietaSzablon = 'AnkietaSzablon',
  /** @deprecated  */
  Bank = 'Bank',
  /** @deprecated  */
  CenaIndywidualna = 'CenaIndywidualna',
  /** @deprecated  */
  Certyfikaty = 'Certyfikaty',
  /** @deprecated  */
  CharakterystykaTowaruPerKlient = 'CharakterystykaTowaruPerKlient',
  /** @deprecated  */
  ChatHistoria = 'ChatHistoria',
  /** @deprecated  */
  ChatKonwersacja = 'ChatKonwersacja',
  /** @deprecated  */
  CiagTechologiczny = 'CiagTechologiczny',
  /** @deprecated  */
  CzlowiekKlienta = 'CzlowiekKlienta',
  /** @deprecated  */
  Dokument = 'Dokument',
  /** @deprecated  */
  DrzewoKategorii = 'DrzewoKategorii',
  /** @deprecated  */
  Dyspozycja = 'Dyspozycja',
  /** @deprecated  */
  Dzial = 'Dzial',
  /** @deprecated  */
  ElementAbonamentu = 'ElementAbonamentu',
  /** @deprecated  */
  ElementKalendarzaPracownika = 'ElementKalendarzaPracownika',
  /** @deprecated  */
  ElementSlownikaRozmiarowki = 'ElementSlownikaRozmiarowki',
  /** @deprecated  */
  ElementSlownikaUzytkownika = 'ElementSlownikaUzytkownika',
  /** @deprecated  */
  ElementZapisuKh = 'ElementZapisuKH',
  /** @deprecated  */
  FormaPlatnosci = 'FormaPlatnosci',
  /** @deprecated  */
  GrupaCen = 'GrupaCen',
  /** @deprecated  */
  GrupaI = 'GrupaI',
  /** @deprecated  */
  GrupaIi = 'GrupaII',
  /** @deprecated  */
  GrupaTechnologiczna = 'GrupaTechnologiczna',
  /** @deprecated  */
  GrupaWww = 'GrupaWWW',
  /** @deprecated  */
  Harmonogram = 'Harmonogram',
  /** @deprecated  */
  Jednostka = 'Jednostka',
  /** @deprecated  */
  JednostkaAlternatywna = 'JednostkaAlternatywna',
  /** @deprecated  */
  JednostkaLogistyczna = 'JednostkaLogistyczna',
  /** @deprecated  */
  Kpo = 'KPO',
  /** @deprecated  */
  KalendarzPracownika = 'KalendarzPracownika',
  /** @deprecated  */
  KkwNumerySeryjne = 'KkwNumerySeryjne',
  /** @deprecated  */
  KkwPrzychodRozchod = 'KkwPrzychodRozchod',
  /** @deprecated  */
  KkwSpinaczOperacji = 'KkwSpinaczOperacji',
  /** @deprecated  */
  KkwWykonanie = 'KkwWykonanie',
  /** @deprecated  */
  KkwWykonanieRuch = 'KkwWykonanieRuch',
  /** @deprecated  */
  Klient = 'Klient',
  /** @deprecated  */
  KlientZdarzenia = 'KlientZdarzenia',
  /** @deprecated  */
  KlientZlecenia = 'KlientZlecenia',
  /** @deprecated  */
  KontoKh = 'KontoKH',
  /** @deprecated  */
  KontoPocztowe = 'KontoPocztowe',
  /** @deprecated  */
  Kraj = 'Kraj',
  /** @deprecated  */
  Lata = 'Lata',
  /** @deprecated  */
  ListPrzewozowySzczegoly = 'ListPrzewozowySzczegoly',
  /** @deprecated  */
  LogHis = 'LogHis',
  /** @deprecated  */
  Magazyn = 'Magazyn',
  /** @deprecated  */
  MapyHistoriaPolozenGps = 'MapyHistoriaPolozenGps',
  /** @deprecated  */
  MesScada = 'MesScada',
  /** @deprecated  */
  MiejsceMagazynowe = 'MiejsceMagazynowe',
  /** @deprecated  */
  MobilnySzablonWydruku = 'MobilnySzablonWydruku',
  /** @deprecated  */
  MprKkw = 'MprKkw',
  /** @deprecated  */
  MprKkwOperacja = 'MprKkwOperacja',
  /** @deprecated  */
  NazwaRejestruVat = 'NazwaRejestruVAT',
  /** @deprecated  */
  Obiekt = 'Obiekt',
  /** @deprecated  */
  Oddzial = 'Oddzial',
  /** @deprecated  */
  OperacjaTechnologiczna = 'OperacjaTechnologiczna',
  /** @deprecated  */
  PaczkaPrzewozowa = 'PaczkaPrzewozowa',
  /** @deprecated  */
  Partia = 'Partia',
  /** @deprecated  */
  PartiaHelper = 'PartiaHelper',
  /** @deprecated  */
  Pcn = 'Pcn',
  /** @deprecated  */
  PlanZlecenia = 'PlanZlecenia',
  /** @deprecated  */
  Platnosci = 'Platnosci',
  /** @deprecated  */
  Plik = 'Plik',
  /** @deprecated  */
  PomiarDefinicja = 'PomiarDefinicja',
  /** @deprecated  */
  PomiarWykonanie = 'PomiarWykonanie',
  /** @deprecated  */
  PozycjaDokumentu = 'PozycjaDokumentu',
  /** @deprecated  */
  PozycjaDokumentuEx = 'PozycjaDokumentuEx',
  /** @deprecated  */
  Praca = 'Praca',
  /** @deprecated  */
  Pracownik = 'Pracownik',
  /** @deprecated  */
  PracownikZdarzenia = 'PracownikZdarzenia',
  /** @deprecated  */
  PracownikZlecenia = 'PracownikZlecenia',
  /** @deprecated  */
  ProjektyBudzet = 'ProjektyBudzet',
  /** @deprecated  */
  RachunkiBankoweKlienta = 'RachunkiBankoweKlienta',
  /** @deprecated  */
  Region = 'Region',
  /** @deprecated  */
  RejestrVat = 'RejestrVAT',
  /** @deprecated  */
  ReportsPages = 'ReportsPages',
  /** @deprecated  */
  RodzajDokumentu = 'RodzajDokumentu',
  /** @deprecated  */
  RodzajKlienta = 'RodzajKlienta',
  /** @deprecated  */
  RodzajObiektu = 'RodzajObiektu',
  /** @deprecated  */
  RodzajZdarzenia = 'RodzajZdarzenia',
  /** @deprecated  */
  Rozliczenie = 'Rozliczenie',
  /** @deprecated  */
  Rozrachunek = 'Rozrachunek',
  /** @deprecated  */
  SerieDokumentowWgRodzajow = 'SerieDokumentowWgRodzajow',
  /** @deprecated  */
  SkrotAplikacji = 'SkrotAplikacji',
  /** @deprecated  */
  SkrotAplikacjiGrupa = 'SkrotAplikacjiGrupa',
  /** @deprecated  */
  SlownikUzytkownika = 'SlownikUzytkownika',
  /** @deprecated  */
  SlownikWykonania = 'SlownikWykonania',
  /** @deprecated  */
  Spedytor = 'Spedytor',
  /** @deprecated  */
  SrodkiTrwale = 'SrodkiTrwale',
  /** @deprecated  */
  Stanowiska = 'Stanowiska',
  /** @deprecated  */
  Status = 'Status',
  /** @deprecated  */
  StatusHistoria = 'StatusHistoria',
  /** @deprecated  */
  StawkaVat = 'StawkaVat',
  /** @deprecated  */
  StrukturaProduktu = 'StrukturaProduktu',
  /** @deprecated  */
  Swiadectwo = 'Swiadectwo',
  /** @deprecated  */
  SystemyZewnetrzne = 'SystemyZewnetrzne',
  /** @deprecated  */
  TcConfig = 'TCConfig',
  /** @deprecated  */
  TabelaKursow = 'TabelaKursow',
  /** @deprecated  */
  Technologia = 'Technologia',
  /** @deprecated  */
  TechnologiaOperacja = 'TechnologiaOperacja',
  /** @deprecated  */
  TechnologiaPrzychodRozchod = 'TechnologiaPrzychodRozchod',
  /** @deprecated  */
  TechnologiaStanowiskaPracy = 'TechnologiaStanowiskaPracy',
  /** @deprecated  */
  Towar = 'Towar',
  /** @deprecated  */
  Transport = 'Transport',
  /** @deprecated  */
  TypDostawcyAlternatywnego = 'TypDostawcyAlternatywnego',
  /** @deprecated  */
  TypZdarzenia = 'TypZdarzenia',
  /** @deprecated  */
  TypySprzedazyZakupu = 'TypySprzedazyZakupu',
  /** @deprecated  */
  WagaKlienta = 'WagaKlienta',
  /** @deprecated  */
  Waluta = 'Waluta',
  /** @deprecated  */
  Wydzialy = 'Wydzialy',
  /** @deprecated  */
  ZapisKh = 'ZapisKH',
  /** @deprecated  */
  Zdarzenie = 'Zdarzenie',
  /** @deprecated  */
  ZdarzeniePowiazanie = 'ZdarzeniePowiazanie',
  /** @deprecated  */
  ZgodaRodo = 'ZgodaRodo',
  /** @deprecated  */
  Zlecenie = 'Zlecenie',
  /** @deprecated  */
  ZrodloInformacji = 'ZrodloInformacji'
}

export enum TypDataCzasModyfikacji {
  /** @deprecated  */
  Globalny = 'Globalny',
  /** @deprecated  */
  Rekordu = 'Rekordu'
}

export enum TypWartosciDowolnej {
  /** @deprecated  */
  Data = 'Data',
  /** @deprecated  */
  DataIGodzina = 'DataIGodzina',
  /** @deprecated  */
  Dokument = 'Dokument',
  /** @deprecated  */
  Dzial = 'Dzial',
  /** @deprecated  */
  ElementRozmiarowki = 'ElementRozmiarowki',
  /** @deprecated  */
  Inny = 'Inny',
  /** @deprecated  */
  Json = 'Json',
  /** @deprecated  */
  JsonDialog = 'JsonDialog',
  /** @deprecated  */
  Kkw = 'KKW',
  /** @deprecated  */
  KkwNumerSeryjny = 'KKWNumerSeryjny',
  /** @deprecated  */
  Klient = 'Klient',
  /** @deprecated  */
  KlientGrupaI = 'KlientGrupaI',
  /** @deprecated  */
  Kraj = 'Kraj',
  /** @deprecated  */
  Liczba = 'Liczba',
  /** @deprecated  */
  LudzieKlienta = 'LudzieKlienta',
  /** @deprecated  */
  Magazyn = 'Magazyn',
  /** @deprecated  */
  MiejsceMagazynowe = 'MiejsceMagazynowe',
  /** @deprecated  */
  Nieznany = 'Nieznany',
  /** @deprecated  */
  Obiekt = 'Obiekt',
  /** @deprecated  */
  Plik = 'Plik',
  /** @deprecated  */
  PoleTekstowe = 'PoleTekstowe',
  /** @deprecated  */
  PoleTekstoweWJezyku = 'PoleTekstoweWJezyku',
  /** @deprecated  */
  PozycjaDokumentu = 'PozycjaDokumentu',
  /** @deprecated  */
  Pracownik = 'Pracownik',
  /** @deprecated  */
  SkrotDoKatalogu = 'SkrotDoKatalogu',
  /** @deprecated  */
  SkrotDoPliku = 'SkrotDoPliku',
  /** @deprecated  */
  Slownik = 'Slownik',
  /** @deprecated  */
  Spedytor = 'Spedytor',
  /** @deprecated  */
  TabelaKursowWalut = 'TabelaKursowWalut',
  /** @deprecated  */
  TakNie = 'TakNie',
  /** @deprecated  */
  Technologia = 'Technologia',
  /** @deprecated  */
  Tekst = 'Tekst',
  /** @deprecated  */
  TekstWJezyku = 'TekstWJezyku',
  /** @deprecated  */
  Towar = 'Towar',
  /** @deprecated  */
  TowarGrupaI = 'TowarGrupaI',
  /** @deprecated  */
  TowarGrupaIi = 'TowarGrupaII',
  /** @deprecated  */
  TowarGrupaWww = 'TowarGrupaWWW',
  /** @deprecated  */
  Waluta = 'Waluta',
  /** @deprecated  */
  Zasob = 'Zasob',
  /** @deprecated  */
  Zdarzenie = 'Zdarzenie',
  /** @deprecated  */
  Zlecenie = 'Zlecenie'
}

/** Modifies the specified items in the cart. */
export type UpdateCartItemsInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of items to be updated. */
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

/** Contains details about the cart after updating items. */
export type UpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput';
  /** The cart after updating products. */
  cart: Cart;
};

/** Contains the customer's wish list and any errors encountered. */
export type UpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput';
  /** An array of errors encountered while updating products in a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated. */
  wishlist: Wishlist;
};

/** Contains URL rewrite details. */
export type UrlRewrite = {
  __typename?: 'UrlRewrite';
  /** An array of request parameters. */
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
  /** The request URL. */
  url?: Maybe<Scalars['String']['output']>;
};

/** This enumeration defines the entity type. */
export enum UrlRewriteEntityTypeEnum {
  /** @deprecated  */
  Category = 'CATEGORY',
  /** @deprecated  */
  CmsPage = 'CMS_PAGE',
  /** @deprecated  */
  Product = 'PRODUCT'
}

/** Defines whether the attribute is filterable in layered navigation. */
export enum UseInLayeredNavigationOptions {
  /** @deprecated  */
  FilterableNoResult = 'FILTERABLE_NO_RESULT',
  /** @deprecated  */
  FilterableWithResults = 'FILTERABLE_WITH_RESULTS',
  /** @deprecated  */
  No = 'NO'
}

export type VatStawkaModel = {
  __typename?: 'VatStawkaModel';
  Id?: Maybe<Scalars['Int']['output']>;
  OO?: Maybe<Scalars['Int']['output']>;
  Stawka?: Maybe<Scalars['Float']['output']>;
};

/** Contains required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token. */
  public_hash: Scalars['String']['input'];
};

/** An implementation for virtual product cart items. */
export type VirtualCartItem = CartItemInterface & {
  __typename?: 'VirtualCartItem';
  /** An array containing customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'VirtualProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single product to add to the cart. */
export type VirtualProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Contains a virtual product wish list item. */
export type VirtualWishlistItem = WishlistItemInterface & {
  __typename?: 'VirtualWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

export type WartoscDowolnaModel = {
  __typename?: 'WartoscDowolnaModel';
  DefinicjaID?: Maybe<Scalars['Int']['output']>;
  Filtry?: Maybe<Array<Maybe<FiltrWartosciDowolnejModel>>>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  Opis?: Maybe<Scalars['String']['output']>;
  SlownikID?: Maybe<Scalars['Int']['output']>;
  SlownikRozmiarowkiID?: Maybe<Scalars['Int']['output']>;
  Typ?: Maybe<TypWartosciDowolnej>;
  Wartosci?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Wielokrotna?: Maybe<Scalars['Boolean']['output']>;
};

export type WartoscWartosciDowolnejWejscieModel = {
  DefinicjaID?: InputMaybe<Scalars['Int']['input']>;
  Nazwa?: InputMaybe<Scalars['String']['input']>;
  Typ?: InputMaybe<TypWartosciDowolnej>;
  Wartosci?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WartosciDowolneApiDefinicjeWyjscieModel = {
  __typename?: 'WartosciDowolneApiDefinicjeWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<Array<Maybe<WartosciDowolneDefinicjaModelOutModel>>>;
};

export type WartosciDowolneApiListaWyjscieModel = {
  __typename?: 'WartosciDowolneApiListaWyjscieModel';
  ResponseStatus?: Maybe<ResponseStatusModel>;
  Wynik?: Maybe<ListaWartosciDowolneModelOutModel>;
};

export type WartosciDowolneDefinicjaModelInModel = {
  ObiektTypDanych?: InputMaybe<Scalars['Int']['input']>;
};

export type WartosciDowolneDefinicjaModelOutModel = {
  __typename?: 'WartosciDowolneDefinicjaModelOutModel';
  MVId?: Maybe<Scalars['Int']['output']>;
  MVNazwaWewnetrzna?: Maybe<Scalars['String']['output']>;
  MVNazwyDodatkowe?: Maybe<Array<Maybe<NazwaDodatkowaModel>>>;
  MVOpis?: Maybe<Scalars['String']['output']>;
};

export type WartosciDowolneModelInModel = {
  Cursor?: InputMaybe<Scalars['Boolean']['input']>;
  CursorCzyZamknac?: InputMaybe<Scalars['Boolean']['input']>;
  CursorNazwa?: InputMaybe<Scalars['String']['input']>;
  Nazwy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ObiektId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ObiektTypDanych?: InputMaybe<Scalars['Int']['input']>;
  Strona?: InputMaybe<PorcjaListyModelInput>;
  TekstLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type WartosciDowolneModelOutModel = {
  __typename?: 'WartosciDowolneModelOutModel';
  ObiektId?: Maybe<Scalars['Int']['output']>;
  ObiektTypDanych?: Maybe<Scalars['Int']['output']>;
  WartosciDowolne?: Maybe<Array<Maybe<PoleUzytkownikaWartoscModel>>>;
};

/** Deprecated. It should not be used on the storefront. Contains information about a website. */
export type Website = {
  __typename?: 'Website';
  /**
   * A code assigned to the website to identify it.
   * @deprecated The field should not be used on the storefront.
   */
  code?: Maybe<Scalars['String']['output']>;
  /**
   * The default group ID of the website.
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the website.
   * @deprecated The field should not be used on the storefront.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates whether this is the default website.
   * @deprecated The field should not be used on the storefront.
   */
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute to use for sorting websites.
   * @deprecated The field should not be used on the storefront.
   */
  sort_order?: Maybe<Scalars['Int']['output']>;
};

/** An error encountered while performing operations with WishList. */
export type WishListUserInputError = {
  __typename?: 'WishListUserInputError';
  /** A wish list-specific error code. */
  code: WishListUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

/** A list of possible error types. */
export enum WishListUserInputErrorType {
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Contains a customer wish list. */
export type Wishlist = {
  __typename?: 'Wishlist';
  /** The unique ID for a `Wishlist` object. */
  id?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use the `items_v2` field instead. */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /** The number of items in the wish list. */
  items_count?: Maybe<Scalars['Int']['output']>;
  /** An array of items in the customer's wish list. */
  items_v2?: Maybe<WishlistItems>;
  /** An encrypted code that Magento uses to link to the wish list. */
  sharing_code?: Maybe<Scalars['String']['output']>;
  /** The time of the last modification to the wish list. */
  updated_at?: Maybe<Scalars['String']['output']>;
};


/** Contains a customer wish list. */
export type WishlistItems_V2Args = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains details about errors encountered when a customer added wish list items to the cart. */
export type WishlistCartUserInputError = {
  __typename?: 'WishlistCartUserInputError';
  /** An error code that describes the error encountered. */
  code: WishlistCartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The unique ID of the `Wishlist` object containing an error. */
  wishlistId: Scalars['ID']['output'];
  /** The unique ID of the wish list item containing an error. */
  wishlistItemId: Scalars['ID']['output'];
};

/** A list of possible error types. */
export enum WishlistCartUserInputErrorType {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Contains details about a wish list item. */
export type WishlistItem = {
  __typename?: 'WishlistItem';
  /** The time when the customer added the item to the wish list. */
  added_at?: Maybe<Scalars['String']['output']>;
  /** The customer's comment about this item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItem` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Details about the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']['output']>;
};

/** Defines the items to add to a wish list. */
export type WishlistItemInput = {
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** The amount or number of items to add. */
  quantity: Scalars['Float']['input'];
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU. */
  sku: Scalars['String']['input'];
};

/** The interface for wish list items. */
export type WishlistItemInterface = {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Defines updates to items in a wish list. */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The unique ID for a `WishlistItemInterface` object. */
  wishlist_item_id: Scalars['ID']['input'];
};

/** Contains an array of items in a wish list. */
export type WishlistItems = {
  __typename?: 'WishlistItems';
  /** A list of items in the wish list. */
  items: Array<Maybe<WishlistItemInterface>>;
  /** Contains pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
};

/** Deprecated: Use the `Wishlist` type instead. */
export type WishlistOutput = {
  __typename?: 'WishlistOutput';
  /**
   * An array of items in the customer's wish list
   * @deprecated Use the `Wishlist.items` field instead.
   */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /**
   * The number of items in the wish list.
   * @deprecated Use the `Wishlist.items_count` field instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist.
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * An encrypted code that links to the wish list.
   * @deprecated Use the `Wishlist.sharing_code` field instead.
   */
  sharing_code?: Maybe<Scalars['String']['output']>;
  /**
   * The time of the last modification to the wish list.
   * @deprecated Use the `Wishlist.updated_at` field instead.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ZamiennikTowaruModel = {
  __typename?: 'ZamiennikTowaruModel';
  ID?: Maybe<Scalars['Int']['output']>;
  Kod?: Maybe<Scalars['String']['output']>;
  Nazwa?: Maybe<Scalars['String']['output']>;
  Przelicznik?: Maybe<Scalars['Float']['output']>;
};

export enum ZrodloDokumentu {
  /** @deprecated  */
  Adept = 'Adept',
  /** @deprecated  */
  Allegro = 'Allegro',
  /** @deprecated  */
  EKatalog = 'EKatalog',
  /** @deprecated  */
  Ewd = 'EWD',
  /** @deprecated  */
  Ebay = 'Ebay',
  /** @deprecated  */
  Evendo = 'Evendo',
  /** @deprecated  */
  FirmaFirma = 'FirmaFirma',
  /** @deprecated  */
  Inne = 'Inne',
  /** @deprecated  */
  KolektorDanych = 'KolektorDanych',
  /** @deprecated  */
  Mlm = 'MLM',
  /** @deprecated  */
  MobilneVendo = 'MobilneVendo',
  /** @deprecated  */
  Nieznane = 'Nieznane',
  /** @deprecated  */
  PgmSoft = 'PGMSoft',
  /** @deprecated  */
  PsMobile = 'PSMobile',
  /** @deprecated  */
  PracaPodstawowa = 'PracaPodstawowa',
  /** @deprecated  */
  Roner = 'Roner',
  /** @deprecated  */
  Sosimply = 'Sosimply',
  /** @deprecated  */
  Xmlcfi = 'XMLCFI',
  /** @deprecated  */
  Zoio = 'Zoio'
}

export type ZwracanePoleParametrModel = {
  ParametrNazwa?: InputMaybe<Scalars['String']['input']>;
  ParametrWartosc?: InputMaybe<Scalars['String']['input']>;
  ZwracanePole?: InputMaybe<Scalars['String']['input']>;
};

/** Assigns a specific `cart_id` to the empty cart. */
export type CreateEmptyCartInput = {
  /** The ID to assign to the cart. */
  cart_id?: InputMaybe<Scalars['String']['input']>;
};

export type AvailableRegionsBasicDataFragment = { __typename?: 'Region', id?: number | null, name?: string | null };

type BasicProductDataFragment_BundleProduct_Fragment = { __typename: 'BundleProduct', id?: number | null, name?: string | null, sku?: string | null, url_key?: string | null, special_price?: number | null, small_image?: { __typename?: 'ProductImage', url?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', final_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null }, regular_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } } };

type BasicProductDataFragment_ConfigurableProduct_Fragment = { __typename: 'ConfigurableProduct', id?: number | null, name?: string | null, sku?: string | null, url_key?: string | null, special_price?: number | null, small_image?: { __typename?: 'ProductImage', url?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', final_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null }, regular_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } } };

type BasicProductDataFragment_DownloadableProduct_Fragment = { __typename: 'DownloadableProduct', id?: number | null, name?: string | null, sku?: string | null, url_key?: string | null, special_price?: number | null, small_image?: { __typename?: 'ProductImage', url?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', final_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null }, regular_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } } };

type BasicProductDataFragment_GroupedProduct_Fragment = { __typename: 'GroupedProduct', id?: number | null, name?: string | null, sku?: string | null, url_key?: string | null, special_price?: number | null, small_image?: { __typename?: 'ProductImage', url?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', final_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null }, regular_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } } };

type BasicProductDataFragment_SimpleProduct_Fragment = { __typename: 'SimpleProduct', id?: number | null, name?: string | null, sku?: string | null, url_key?: string | null, special_price?: number | null, small_image?: { __typename?: 'ProductImage', url?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', final_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null }, regular_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } } };

type BasicProductDataFragment_VirtualProduct_Fragment = { __typename: 'VirtualProduct', id?: number | null, name?: string | null, sku?: string | null, url_key?: string | null, special_price?: number | null, small_image?: { __typename?: 'ProductImage', url?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', final_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null }, regular_price: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } } };

export type BasicProductDataFragmentFragment = BasicProductDataFragment_BundleProduct_Fragment | BasicProductDataFragment_ConfigurableProduct_Fragment | BasicProductDataFragment_DownloadableProduct_Fragment | BasicProductDataFragment_GroupedProduct_Fragment | BasicProductDataFragment_SimpleProduct_Fragment | BasicProductDataFragment_VirtualProduct_Fragment;

export type CartCustomerBillingAddressFragmentFragment = { __typename?: 'BillingCartAddress', uid: string, postcode?: string | null, city: string, street: Array<string | null>, telephone?: string | null, firstname: string, lastname: string, country: { __typename?: 'CartAddressCountry', code: string } };

export type CartCustomerShippingAddressFragmentFragment = { __typename?: 'ShippingCartAddress', uid: string, postcode?: string | null, city: string, street: Array<string | null>, telephone?: string | null, firstname: string, lastname: string, country: { __typename?: 'CartAddressCountry', code: string }, region?: { __typename?: 'CartAddressRegion', region_id?: number | null } | null };

type CartProductFragment_BundleProduct_Fragment = { __typename?: 'BundleProduct', name?: string | null, sku?: string | null, url_key?: string | null, stock_status?: ProductStockStatus | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null } } } };

type CartProductFragment_ConfigurableProduct_Fragment = { __typename?: 'ConfigurableProduct', name?: string | null, sku?: string | null, url_key?: string | null, stock_status?: ProductStockStatus | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null } } } };

type CartProductFragment_DownloadableProduct_Fragment = { __typename?: 'DownloadableProduct', name?: string | null, sku?: string | null, url_key?: string | null, stock_status?: ProductStockStatus | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null } } } };

type CartProductFragment_GroupedProduct_Fragment = { __typename?: 'GroupedProduct', name?: string | null, sku?: string | null, url_key?: string | null, stock_status?: ProductStockStatus | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null } } } };

type CartProductFragment_SimpleProduct_Fragment = { __typename?: 'SimpleProduct', name?: string | null, sku?: string | null, url_key?: string | null, stock_status?: ProductStockStatus | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null } } } };

type CartProductFragment_VirtualProduct_Fragment = { __typename?: 'VirtualProduct', name?: string | null, sku?: string | null, url_key?: string | null, stock_status?: ProductStockStatus | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null } } } };

export type CartProductFragmentFragment = CartProductFragment_BundleProduct_Fragment | CartProductFragment_ConfigurableProduct_Fragment | CartProductFragment_DownloadableProduct_Fragment | CartProductFragment_GroupedProduct_Fragment | CartProductFragment_SimpleProduct_Fragment | CartProductFragment_VirtualProduct_Fragment;

export type AddressFragmentFragment = { __typename?: 'CustomerAddress', id?: number | null, city?: string | null, postcode?: string | null, country_code?: CountryCodeEnum | null, street?: Array<string | null> | null, default_billing?: boolean | null, default_shipping?: boolean | null, firstname?: string | null, lastname?: string | null, middlename?: string | null, telephone?: string | null };

export type CustomerAddressFieldFragment = { __typename?: 'CustomerAddress', id?: number | null, firstname?: string | null, lastname?: string | null, street?: Array<string | null> | null, city?: string | null, postcode?: string | null, country_code?: CountryCodeEnum | null, telephone?: string | null, default_billing?: boolean | null, default_shipping?: boolean | null, region?: { __typename?: 'CustomerAddressRegion', region?: string | null, region_id?: number | null } | null };

export type NavigationItemFragment = { __typename?: 'CategoryTree', uid: string, include_in_menu?: number | null, name?: string | null, url_path?: string | null, url_key?: string | null, level?: number | null, breadcrumbs?: Array<{ __typename?: 'Breadcrumb', category_name?: string | null } | null> | null };

export type OrderAddressFieldFragment = { __typename?: 'OrderAddress', city: string, company?: string | null, country_code?: CountryCodeEnum | null, firstname: string, lastname: string, postcode?: string | null, region?: string | null, region_id?: string | null, street: Array<string | null>, suffix?: string | null, telephone?: string | null, vat_id?: string | null };

export type PageInfoFieldFragment = { __typename?: 'SearchResultPageInfo', current_page?: number | null, page_size?: number | null, total_pages?: number | null };

type ProductFeatures_BundleProduct_Fragment = { __typename?: 'BundleProduct', name?: string | null, sku?: string | null, special_price?: number | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, media_gallery?: Array<{ __typename?: 'ProductImage', label?: string | null, url?: string | null } | { __typename?: 'ProductVideo', label?: string | null, url?: string | null } | null> | null, categories?: Array<{ __typename?: 'CategoryTree', url_path?: string | null, url_key?: string | null, level?: number | null, name?: string | null, breadcrumbs?: Array<{ __typename?: 'Breadcrumb', category_url_path?: string | null, category_url_key?: string | null, category_level?: number | null, category_name?: string | null } | null> | null } | null> | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null }, final_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } } };

type ProductFeatures_ConfigurableProduct_Fragment = { __typename?: 'ConfigurableProduct', name?: string | null, sku?: string | null, special_price?: number | null, variants?: Array<{ __typename?: 'ConfigurableVariant', product?: { __typename?: 'SimpleProduct', name?: string | null, sku?: string | null, media_gallery?: Array<{ __typename?: 'ProductImage', url?: string | null, label?: string | null } | { __typename?: 'ProductVideo', url?: string | null, label?: string | null } | null> | null } | null, attributes?: Array<{ __typename?: 'ConfigurableAttributeOption', code?: string | null, uid: string } | null> | null } | null> | null, configurable_options?: Array<{ __typename?: 'ConfigurableProductOptions', uid: string, attribute_code?: string | null, label?: string | null, values?: Array<{ __typename?: 'ConfigurableProductOptionsValues', uid?: string | null, label?: string | null, swatch_data?: { __typename?: 'ColorSwatchData', value?: string | null } | { __typename?: 'ImageSwatchData', thumbnail?: string | null, value?: string | null } | { __typename?: 'TextSwatchData', value?: string | null } | null } | null> | null } | null> | null, configurable_product_options_selection?: { __typename?: 'ConfigurableProductOptionsSelection', options_available_for_selection?: Array<{ __typename?: 'ConfigurableOptionAvailableForSelection', attribute_code: string, option_value_uids: Array<string | null> } | null> | null } | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, media_gallery?: Array<{ __typename?: 'ProductImage', label?: string | null, url?: string | null } | { __typename?: 'ProductVideo', label?: string | null, url?: string | null } | null> | null, categories?: Array<{ __typename?: 'CategoryTree', url_path?: string | null, url_key?: string | null, level?: number | null, name?: string | null, breadcrumbs?: Array<{ __typename?: 'Breadcrumb', category_url_path?: string | null, category_url_key?: string | null, category_level?: number | null, category_name?: string | null } | null> | null } | null> | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null }, final_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } } };

type ProductFeatures_DownloadableProduct_Fragment = { __typename?: 'DownloadableProduct', name?: string | null, sku?: string | null, special_price?: number | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, media_gallery?: Array<{ __typename?: 'ProductImage', label?: string | null, url?: string | null } | { __typename?: 'ProductVideo', label?: string | null, url?: string | null } | null> | null, categories?: Array<{ __typename?: 'CategoryTree', url_path?: string | null, url_key?: string | null, level?: number | null, name?: string | null, breadcrumbs?: Array<{ __typename?: 'Breadcrumb', category_url_path?: string | null, category_url_key?: string | null, category_level?: number | null, category_name?: string | null } | null> | null } | null> | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null }, final_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } } };

type ProductFeatures_GroupedProduct_Fragment = { __typename?: 'GroupedProduct', name?: string | null, sku?: string | null, special_price?: number | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, media_gallery?: Array<{ __typename?: 'ProductImage', label?: string | null, url?: string | null } | { __typename?: 'ProductVideo', label?: string | null, url?: string | null } | null> | null, categories?: Array<{ __typename?: 'CategoryTree', url_path?: string | null, url_key?: string | null, level?: number | null, name?: string | null, breadcrumbs?: Array<{ __typename?: 'Breadcrumb', category_url_path?: string | null, category_url_key?: string | null, category_level?: number | null, category_name?: string | null } | null> | null } | null> | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null }, final_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } } };

type ProductFeatures_SimpleProduct_Fragment = { __typename?: 'SimpleProduct', name?: string | null, sku?: string | null, special_price?: number | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, media_gallery?: Array<{ __typename?: 'ProductImage', label?: string | null, url?: string | null } | { __typename?: 'ProductVideo', label?: string | null, url?: string | null } | null> | null, categories?: Array<{ __typename?: 'CategoryTree', url_path?: string | null, url_key?: string | null, level?: number | null, name?: string | null, breadcrumbs?: Array<{ __typename?: 'Breadcrumb', category_url_path?: string | null, category_url_key?: string | null, category_level?: number | null, category_name?: string | null } | null> | null } | null> | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null }, final_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } } };

type ProductFeatures_VirtualProduct_Fragment = { __typename?: 'VirtualProduct', name?: string | null, sku?: string | null, special_price?: number | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, media_gallery?: Array<{ __typename?: 'ProductImage', label?: string | null, url?: string | null } | { __typename?: 'ProductVideo', label?: string | null, url?: string | null } | null> | null, categories?: Array<{ __typename?: 'CategoryTree', url_path?: string | null, url_key?: string | null, level?: number | null, name?: string | null, breadcrumbs?: Array<{ __typename?: 'Breadcrumb', category_url_path?: string | null, category_url_key?: string | null, category_level?: number | null, category_name?: string | null } | null> | null } | null> | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null }, final_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } } };

export type ProductFeaturesFragment = ProductFeatures_BundleProduct_Fragment | ProductFeatures_ConfigurableProduct_Fragment | ProductFeatures_DownloadableProduct_Fragment | ProductFeatures_GroupedProduct_Fragment | ProductFeatures_SimpleProduct_Fragment | ProductFeatures_VirtualProduct_Fragment;

export type WishlistItemsFieldFragment = { __typename?: 'WishlistItems', items: Array<{ __typename?: 'BundleWishlistItem', id: string, quantity: number, product?: { __typename?: 'BundleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'ConfigurableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'DownloadableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'GroupedProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'SimpleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'VirtualProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | null } | { __typename?: 'ConfigurableWishlistItem', id: string, quantity: number, product?: { __typename?: 'BundleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'ConfigurableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'DownloadableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'GroupedProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'SimpleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'VirtualProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | null } | { __typename?: 'DownloadableWishlistItem', id: string, quantity: number, product?: { __typename?: 'BundleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'ConfigurableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'DownloadableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'GroupedProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'SimpleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'VirtualProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | null } | { __typename?: 'GroupedProductWishlistItem', id: string, quantity: number, product?: { __typename?: 'BundleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'ConfigurableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'DownloadableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'GroupedProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'SimpleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'VirtualProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | null } | { __typename?: 'SimpleWishlistItem', id: string, quantity: number, product?: { __typename?: 'BundleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'ConfigurableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'DownloadableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'GroupedProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'SimpleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'VirtualProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | null } | { __typename?: 'VirtualWishlistItem', id: string, quantity: number, product?: { __typename?: 'BundleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'ConfigurableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'DownloadableProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'GroupedProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'SimpleProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | { __typename?: 'VirtualProduct', special_price?: number | null, name?: string | null, url_key?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null } | null, description?: { __typename?: 'ComplexTextValue', html: string } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null }, final_price: { __typename?: 'Money', value?: number | null } } } } | null } | null> };

export type ProductConfigurationFragment = { __typename?: 'ConfigurableProductOptions', uid: string, attribute_code?: string | null, label?: string | null, values?: Array<{ __typename?: 'ConfigurableProductOptionsValues', uid?: string | null, label?: string | null, swatch_data?: { __typename?: 'ColorSwatchData', value?: string | null } | { __typename?: 'ImageSwatchData', thumbnail?: string | null, value?: string | null } | { __typename?: 'TextSwatchData', value?: string | null } | null } | null> | null };

export const AvailableRegionsBasicDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailableRegionsBasicData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<AvailableRegionsBasicDataFragment, unknown>;
export const BasicProductDataFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicProductDataFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"url_key"}},{"kind":"Field","name":{"kind":"Name","value":"small_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minimum_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"final_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"regular_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"special_price"}}]}}]} as unknown as DocumentNode<BasicProductDataFragmentFragment, unknown>;
export const CartCustomerBillingAddressFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartCustomerBillingAddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BillingCartAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}}]} as unknown as DocumentNode<CartCustomerBillingAddressFragmentFragment, unknown>;
export const CartCustomerShippingAddressFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartCustomerShippingAddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingCartAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"region_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}}]} as unknown as DocumentNode<CartCustomerShippingAddressFragmentFragment, unknown>;
export const CartProductFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"url_key"}},{"kind":"Field","name":{"kind":"Name","value":"stock_status"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minimum_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regular_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CartProductFragmentFragment, unknown>;
export const AddressFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"default_billing"}},{"kind":"Field","name":{"kind":"Name","value":"default_shipping"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}}]}}]} as unknown as DocumentNode<AddressFragmentFragment, unknown>;
export const CustomerAddressFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerAddressField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"default_billing"}},{"kind":"Field","name":{"kind":"Name","value":"default_shipping"}},{"kind":"Field","name":{"kind":"Name","value":"region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"region_id"}}]}}]}}]} as unknown as DocumentNode<CustomerAddressFieldFragment, unknown>;
export const NavigationItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryTree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"include_in_menu"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url_path"}},{"kind":"Field","name":{"kind":"Name","value":"url_key"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]} as unknown as DocumentNode<NavigationItemFragment, unknown>;
export const OrderAddressFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderAddressField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"region_id"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"vat_id"}}]}}]} as unknown as DocumentNode<OrderAddressFieldFragment, unknown>;
export const PageInfoFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchResultPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current_page"}},{"kind":"Field","name":{"kind":"Name","value":"page_size"}},{"kind":"Field","name":{"kind":"Name","value":"total_pages"}}]}}]} as unknown as DocumentNode<PageInfoFieldFragment, unknown>;
export const ProductConfigurationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductConfiguration"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableProductOptions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"attribute_code"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"swatch_data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageSwatchData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<ProductConfigurationFragment, unknown>;
export const ProductFeaturesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFeatures"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media_gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special_price"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url_path"}},{"kind":"Field","name":{"kind":"Name","value":"url_key"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category_url_path"}},{"kind":"Field","name":{"kind":"Name","value":"category_url_key"}},{"kind":"Field","name":{"kind":"Name","value":"category_level"}},{"kind":"Field","name":{"kind":"Name","value":"category_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minimum_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regular_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"final_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"media_gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurable_options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductConfiguration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurable_product_options_selection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"configurableOptionValueUids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"selectedIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options_available_for_selection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute_code"}},{"kind":"Field","name":{"kind":"Name","value":"option_value_uids"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductConfiguration"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableProductOptions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"attribute_code"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"swatch_data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageSwatchData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<ProductFeaturesFragment, unknown>;
export const WishlistItemsFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WishlistItemsField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WishlistItems"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"special_price"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minimum_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regular_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"final_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url_key"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}}]}}]}}]} as unknown as DocumentNode<WishlistItemsFieldFragment, unknown>;