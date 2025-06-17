import { useState } from "react";
import { useTranslations } from "next-intl";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";
import { useGetCustomerCart } from "@/hooks/useGetCustomerCart";

const REORDER_ITEMS = gql(/* GraphQL */ `
  mutation reorderItems($orderNumber: String!) {
    reorderItems(orderNumber: $orderNumber) {
      userInputErrors {
        code
        message
        path
      }
    }
  }
`);

export const useReorderItems = () => {
  const [orderErrors, setOrderErrors] = useState({});

  const t = useTranslations("hooks");

  // TODO Zweryfikować
  const { refetch } = useGetCustomerCart();

  const errorMessages = {
    default: {
      condition: "default",
      message: t("Failed to add items"),
    },
  };

  const [mutate, { loading, data }] = useMutation(REORDER_ITEMS, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },

    onCompleted: (data, variables) => {
      const orderNumber = variables?.variables?.orderNumber;

      if (data.reorderItems?.userInputErrors.length === 0) {
        toast(t("The products have been added to the cart"));
      } else {
        setOrderErrors((prevErrors) => ({
          ...prevErrors,
          [orderNumber]: data.reorderItems?.userInputErrors,
        }));
      }

      refetch();
    },
  });

  const mutateReorderItems = (orderNumber: string | undefined) => {
    if (orderNumber) {
      mutate({
        variables: {
          orderNumber: orderNumber,
        },
      });
    } else {
      toast.error(errorMessages.default.message);
    }
  };

  return { mutateReorderItems, loading, data, setOrderErrors, orderErrors };
};
