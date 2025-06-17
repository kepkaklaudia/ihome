import { useTranslations } from "next-intl";
import { FieldValues } from "react-hook-form";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";
import { useCountryCodes } from "@/lib/utils/useCountryCode";

const SET_SHIPPING_ADDRESS_ON_CART = gql(/* GraphQL */ `
  mutation SetShippingAddressOnGuestCart(
    $input: SetShippingAddressesOnCartInput
  ) {
    setShippingAddressesOnCart(input: $input) {
      cart {
        id
      }
    }
  }
`);

export const useSetShippingAddressOnCart = (cartId: string | undefined) => {
  const t = useTranslations("hooks");

  const errorMessages = {
    CART_NOT_FOUND: {
      condition: "Could not find a cart with ID",
      message: t("Failed to find a cart"),
    },

    MAGENTO_FIRSTNAME_ERROR: {
      condition: "Field CartAddressInput.firstname",
      message: t("Missing first name in shipping address"),
    },
    MAGENTO_LASTNAME_ERROR: {
      condition: "Field CartAddressInput.lastname",
      message: t("Missing last name in shipping address"),
    },
    MAGENTO_CITY_ERROR: {
      condition: "Field CartAddressInput.city",
      message: t("Missing city in shipping address"),
    },
    MAGENTO_STREET_ERROR: {
      condition: "Field CartAddressInput.street",
      message: t("Missing street in shipping address"),
    },
    MAGENTO_COUNTRY_ERROR: {
      condition: "Field CartAddressInput.country_code",
      message: t("Missing country in shipping address"),
    },
    MAGENTO_ADDRESS_ERROR: {
      condition: "Field CartAddressInput.shipping_addresses",
      message: t("Missing address in shipping address"),
    },

    MAGENTO_AUTH_ERROR: {
      condition: "The current user cannot perform operations on cart",
      message: t("You do not have permission"),
    },
    default: {
      condition: "default",
      message: t("Failed to set shipping address"),
    },
  };

  const [mutate, { loading }] = useMutation(SET_SHIPPING_ADDRESS_ON_CART, {
    onError: (error) => handleErrors(error, errorMessages),
  });
  const { findCountryPrefixByCode } = useCountryCodes();

  const mutateSetShippingAddressOnCart = async (data: FieldValues) => {
    if (cartId) {
      mutate({
        variables: {
          input: {
            cart_id: cartId,
            shipping_addresses: [
              {
                address: {
                  country_code: "PL",
                  firstname: data.firstNameShipping,
                  lastname: data.lastNameShipping,
                  city: data.cityShipping,
                  street: data.addressLineShipping,
                  company: data.companyNameShipping,
                  postcode: data.postalCodeShipping,
                  region_id: data.regionIdShipping,
                  telephone: `${findCountryPrefixByCode(
                    data.phoneNumberCountryCodeShipping ?? "PL"
                  )} ${data.phoneNumberShipping}`,
                },
              },
            ],
          },
        },
      });
    } else {
      toast.error( t("Failed to find a cart"));
    }
  };

  return { mutateSetShippingAddressOnCart, loading };
};
