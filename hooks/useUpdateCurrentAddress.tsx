import { FieldValues } from "react-hook-form";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { handleErrors } from "@/lib/utils/handleErrors";

interface UseUpdateCurrentAddressProps {
  onCompleted: () => void;
  index: number | null | undefined;
}

const UPDATE_CURRENT_ADDRESS = gql(/* GraphQL */ `
  mutation UpdateCustomerAddress(
    $id: Int!
    $updateCustomerAddress: CustomerAddressInput
  ) {
    updateCustomerAddress(id: $id, input: $updateCustomerAddress) {
      id
    }
  }
`);

export const useUpdateCurrentAddress = ({
  onCompleted,
  index,
}: UseUpdateCurrentAddressProps) => {
  const t = useTranslations("hooks");

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

  const [mutate, { loading }] = useMutation(UPDATE_CURRENT_ADDRESS, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },
    onCompleted: () => {
      onCompleted();
      toast(t("The address has been updated"));
    },
  });

  const mutateUpdateCurrentAddress = (data: FieldValues) => {
    const updateData: {
      default_shipping?: boolean;
      default_billing?: boolean;
    } = {};

    if (data.shipping) {
      updateData.default_shipping = data.shipping;
    }
    if (data.billing) {
      updateData.default_billing = data.billing;
    }

    if (typeof index === "number") {
      mutate({
        variables: {
          id: index,
          updateCustomerAddress: updateData,
        },
      });
    } else {
      toast.error( errorMessages.MAGENTO_SYNTAX_ERROR.message,
    );
    }
  };

  return { mutateUpdateCurrentAddress, loading };
};
