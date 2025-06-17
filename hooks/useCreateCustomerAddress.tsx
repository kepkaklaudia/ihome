import { useTranslations } from "next-intl";
import { FieldValues } from "react-hook-form";
import { gql } from "@/__generated__";
import { CountryCodeEnum } from "@/__generated__/graphql";
import { useMutation } from "@apollo/client";
import { handleErrors } from "@/lib/utils/handleErrors";
import { useCountryCodes } from "@/lib/utils/useCountryCode";
import { toast } from "sonner";

export interface UseCreateCustomerAddressProps {
  additionalFlag: string | undefined;
  onCompleted: () => void;
}

const CREATE_CUSTOMER_ADDRESS = gql(/* GraphQL */ `
  mutation CreateCustomerAddress(
    $createCustomerAddressInput: CustomerAddressInput!
  ) {
    createCustomerAddress(input: $createCustomerAddressInput) {
      id
    }
  }
`);

export const useCreateCustomerAddress = ({
  onCompleted,
  additionalFlag,
}: UseCreateCustomerAddressProps) => {
  const t = useTranslations("hooks");

  const { findCountryPrefixByCode } = useCountryCodes();

  const errorMessages = {
    MAGENTO_EMPTY_ERROR: {
      condition: "Expected type CustomerAddressInput",
      message: t("Fill in all the fields"),
    },
    MAGENTO_INPUT_ERROR: {
      condition: `"input" value should be specified`,
      message: t("Fill in all the fields"),
    },
    MAGENTO_MISSING_ERROR: {
      condition: "Required parameters are missing",
      message: t("Fill in all the fields"),
    },
    MAGENTO_SYNTAX_ERROR: {
      condition: "Syntax Error",
      message: t("Fill in all the fields"),
    },
    MAGENTO_AUTH_ERROR: {
      condition: "The current customer",
      message: t("To create address"),
    },
    default: { condition: "default", message: t("Failed to create address") },
  };

  const [mutate, { loading }] = useMutation(CREATE_CUSTOMER_ADDRESS, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },
    onCompleted: () => {
      onCompleted();
      toast(t("The address has been created"));
    },
  });

  const mutateCreateCustomerAddress = (data: FieldValues) => {
    mutate({
      variables: {
        createCustomerAddressInput: {
          city: data.city,
          postcode: data.postalCode,
          street: data.addressLine,
          country_code: CountryCodeEnum.Pl,
          region: {
            region_id: data.regionId,
          },
          firstname: data.firstname,
          lastname: data.lastname,
          telephone: `${findCountryPrefixByCode(data.phoneNumberCountryCode)} ${
            data.phoneNumber
          }`,
          ...(additionalFlag && { [additionalFlag]: true }),
        },
      },
    });
  };

  return { mutateCreateCustomerAddress, loading };
};
