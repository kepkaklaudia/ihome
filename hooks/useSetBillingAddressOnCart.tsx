import { useTranslations } from "next-intl";
import { FieldValues } from "react-hook-form";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { GET_CUSTOMER_CART } from "@/hooks/useGetCart";
import { useCountryCodes } from "@/lib/utils/useCountryCode";

const SET_BILLING_ADDRESS_ON_CART = gql(/* GraphQL */ `
  mutation SetBillingAddressOnCart($input: SetBillingAddressOnCartInput) {
    setBillingAddressOnCart(input: $input) {
      cart {
        id
      }
    }
  }
`);

export const useSetBillingAddressOnCart = (cartId: string | undefined) => {
  const t = useTranslations("hooks");

  const [mutate, { loading }] = useMutation(SET_BILLING_ADDRESS_ON_CART, {
    onError: () => toast.error(t("Failed to set billing address")),
  });

  const { findCountryPrefixByCode } = useCountryCodes();

  const mutateSetBillingAddressOnCart = async (data: FieldValues) => {
    if (cartId) {
      mutate({
        variables: {
          input: {
            cart_id: cartId,
            billing_address: {
              use_for_shipping: data.firstNameShipping ? false : true,
              address: {
                city: data.city,
                country_code: "PL",
                firstname: data.firstName,
                lastname: data.lastName,
                street: data.addressLine,
                company: data.companyName,
                postcode: data.postalCode,
                region_id: data.regionId,
                telephone: `${findCountryPrefixByCode(
                  data.phoneNumberCountryCode
                )} ${data.phoneNumber}`,
                vat_id: data.NIP,
              },
            },
          },
        },
        refetchQueries: [GET_CUSTOMER_CART],
      });
    } else {
      toast.error(t("Failed to find a cart"));
    }
  };

  return { mutateSetBillingAddressOnCart, loading };
};
