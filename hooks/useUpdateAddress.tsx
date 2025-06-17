import { FieldValues } from "react-hook-form";
import { useTranslations } from "next-intl";
import { gql } from "@/__generated__";
import { CountryCodeEnum } from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";
import { useCountryCodes } from "@/lib/utils/useCountryCode";

const UPDATE_CUSTOMER_ADDRESS = gql(/* GraphQL */ `
  mutation UpdateCustomerAddress(
    $id: Int!
    $updateCustomerAddress: CustomerAddressInput
  ) {
    updateCustomerAddress(id: $id, input: $updateCustomerAddress) {
      id
    }
  }
`);

export interface UseUpdateAddressProps {
  onCompleted: () => void;
  index: number | null | undefined;
}

export const useUpdateAddress = ({
  index,
  onCompleted,
}: UseUpdateAddressProps) => {
  const t = useTranslations("hooks");

  const { findCountryPrefixByCode } = useCountryCodes();

  const errorMessages = {
    MAGENTO_ID_ERROR: {
      condition: "Could not find a address with ID",
      message: t("Error - address ID"),
    },
    MAGENTO_MISSING_ERROR: {
      condition: `Address "id" value should be specified`,
      message: t("Error - address ID"),
    },
    MAGENTO_PERMISSIONS_ERROR: {
      condition: "Current customer does not have permission",
      message: t("You do not have permission"),
    },
    MAGENTO_TYPE_ERROR: {
      condition: `Field "updateCustomerAddress"`,
      message: t("Error - address ID"),
    },
    MAGENTO_INPUT_ERROR: {
      condition: `"input" value must be specified`,
      message: t("Choose at least one option"),
    },
    MAGENTO_AUTH_ERROR: {
      condition: "The current customer",
      message: t("To update address"),
    },
    MAGENTO_SYNTAX_ERROR: {
      condition: "Syntax Error",
      message: t("Error - address ID"),
    },
    default: {
      condition: "default",
      message: t("The address update was unsuccessful"),
    },
  };

  const [mutate, { loading }] = useMutation(UPDATE_CUSTOMER_ADDRESS, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },
    onCompleted: () => {
      onCompleted();
      toast(t("The address has been updated"));
    },
  });

  const mutateUpdateAddress = (data: FieldValues) => {
    if (typeof index === "number") {
      mutate({
        variables: {
          id: index,
          updateCustomerAddress: {
            city: data.city,
            postcode: data.postalCode,
            street: data.addressLine,
            country_code: CountryCodeEnum.Pl,
            region: { region_id: data.regionId },
            firstname: data.firstname,
            lastname: data.lastname,
            telephone: `${findCountryPrefixByCode(
              data.phoneNumberCountryCode
            )} ${data.phoneNumber}`,
          },
        },
      });
    } else {
      toast.error(errorMessages.MAGENTO_MISSING_ERROR.message);
    }
  };

  return { mutateUpdateAddress, loading };
};
