import { FieldValues, UseFormReset } from "react-hook-form";
import { useCountryCodes } from "@/lib/utils/useCountryCode";
import { slicePhoneNumber } from "@/lib/utils/slicePhoneNumber";
import { CustomerCartType } from "@/hooks/useGetCart";

export const useGuestAddressForm = ({
  cartData,
  reset,
  findRegionNameById
}: {
  cartData: {
    cartId: string | undefined;
    prices: CustomerCartType["prices"] | null;
    appliedCoupons: CustomerCartType["applied_coupons"];
    availablePaymentMethods: CustomerCartType["available_payment_methods"];
    selectedPaymentMethod: CustomerCartType["selected_payment_method"];
    shippingAddress: CustomerCartType["shipping_addresses"][0];
    billingAddress: CustomerCartType["billing_address"];
    email: string | null | undefined;
  } | null;
  reset: UseFormReset<FieldValues>;
  findRegionNameById: (
    regionId: number | null | undefined
  ) => string | null | undefined;
}) => {
  const { findCountryCodeByPrefix } = useCountryCodes();

  const billingAddress = cartData?.billingAddress;
  const shippingAddress = cartData?.shippingAddress;

  const phoneNumber =
    (billingAddress?.telephone !== undefined &&
      billingAddress?.telephone !== null &&
      slicePhoneNumber(billingAddress?.telephone)?.realNumber) ||
    "";
  const phoneNumberCode = findCountryCodeByPrefix(
    (billingAddress?.telephone !== undefined &&
      billingAddress?.telephone !== null &&
      slicePhoneNumber(billingAddress?.telephone)?.prefix) ||
      ""
  );
  const phoneNumberShipping =
    (shippingAddress?.telephone !== undefined &&
      shippingAddress?.telephone !== null &&
      slicePhoneNumber(shippingAddress?.telephone)?.realNumber) ||
    "";
  const phoneNumberCodeShipping = findCountryCodeByPrefix(
    (shippingAddress?.telephone !== undefined &&
      shippingAddress?.telephone !== null &&
      slicePhoneNumber(shippingAddress?.telephone)?.prefix) ||
      ""
  );

  const defaultValues = {
    email: cartData?.email || "",
    city: billingAddress?.city,
    addressLine: billingAddress?.street[0],
    postalCode: billingAddress?.postcode,
    firstName: billingAddress?.firstname,
    country: "polska",
    lastName: billingAddress?.lastname,
    phoneNumber,
    phoneNumberCountryCode: phoneNumberCode ?? "PL",
    regionId: billingAddress?.region?.region_id,
    region: findRegionNameById(billingAddress?.region?.region_id),
    companyName: billingAddress?.company,
    NIP: billingAddress?.vat_id,
    cityShipping: shippingAddress?.city,
    addressLineShipping: shippingAddress?.street[0],
    postalCodeShipping: shippingAddress?.postcode,
    firstNameShipping: shippingAddress?.firstname,
    lastNameShipping: shippingAddress?.lastname,
    phoneNumberShipping,
    phoneNumberCountryCodeShipping: phoneNumberCodeShipping ?? "PL",
    regionIdShipping: shippingAddress?.region?.region_id,
    regionShipping: findRegionNameById(shippingAddress?.region?.region_id)
  };

  reset(defaultValues);
};
