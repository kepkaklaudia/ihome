import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { handleErrors } from "@/lib/utils/handleErrors";

interface UseDeleteCustomerAddressProps {
  index: number | null | undefined;
  onCompleted: () => void;
}

const DELETE_CUSTOMER_ADDRESS = gql(/* GraphQL */ `
  mutation DeleteCustomerAddress($id: Int!) {
    deleteCustomerAddress(id: $id)
  }
`);

export const useDeleteCustomerAddress = ({
  index,
  onCompleted,
}: UseDeleteCustomerAddressProps) => {
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
    MAGENTO_BILLING_ERROR: {
      condition: "is set as default billing address",
      message: t("The billing address"),
    },
    MAGENTO_SHIPPING_ERROR: {
      condition: "is set as default shipping address",
      message: t("The shipping address"),
    },

    MAGENTO_AUTH_ERROR: {
      condition: "The current customer",
      message: t("To delete address"),
    },

    MAGENTO_TYPE_ERROR: {
      condition: `Field "deleteCustomerAddress"`,
      message: t("Error - address ID"),
    },
    MAGENTO_SYNTAX_ERROR: {
      condition: "Syntax Error",
      message: t("Error - address ID"),
    },

    default: { condition: "default", message: t("Failed to delete") },
  };

  const [mutate, { loading }] = useMutation(DELETE_CUSTOMER_ADDRESS, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },
    onCompleted: () => {
      onCompleted();
      toast(t("The address has been"));
    },
  });

  const mutateDeleteCustomerAddress = () => {
    if (typeof index === "number") {
      mutate({
        variables: {
          id: index,
        },
      });
    } else {
      toast.error(errorMessages.MAGENTO_SYNTAX_ERROR.message);
    }
  };
  
  return { mutateDeleteCustomerAddress, loading };
};
