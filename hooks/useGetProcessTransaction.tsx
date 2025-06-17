import { useTranslations } from "next-intl";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { PaymentStatusEnum } from "@/__generated__/graphql";

const GET_PROCESS_TRANSACTION = gql(/* GraphQL */ `
  mutation GetProcessTransaction($paymentToken: String!) {
    mollieProcessTransaction(input: { payment_token: $paymentToken }) {
      paymentStatus
    }
  }
`);

export const useGetProcessTransaction = ({
  setStatusDetails
}: {
  setStatusDetails: (status: {
    title: string;
    description: string;
    status: string;
  }) => void;
}) => {
  const t = useTranslations("cart");

  const [mutate, { loading, error }] = useMutation(GET_PROCESS_TRANSACTION, {
    onError: (error) => {
      console.error("Error processing transaction", error);
      setStatusDetails({
        title: t("ERROR-title"),
        description: t("ERROR-description"),
        status: t("ERROR-status")
      });
    },
    onCompleted: (data) => {
      const paymentStatus = data?.mollieProcessTransaction
        ?.paymentStatus as PaymentStatusEnum;

      const isValidStatus =
        Object.values(PaymentStatusEnum).includes(paymentStatus);

      setStatusDetails({
        title: t(`${isValidStatus ? paymentStatus : "default"}-title`),
        description: t(
          `${isValidStatus ? paymentStatus : "default"}-description`
        ),
        status: t(`${isValidStatus ? paymentStatus : "default"}-status`)
      });
    }
  });

  return {
    loading,
    error,
    mutate
  };
};
