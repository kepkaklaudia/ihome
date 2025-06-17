import { useTranslations } from "next-intl";
import { FieldValues, UseFormReset } from "react-hook-form";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";

const REQUEST_PASSWORD_RESET_EMAIL = gql(/* GraphQL */ `
  mutation RequestPasswordResetEmail($email: String!) {
    requestPasswordResetEmail(email: $email)
  }
`);

export const useRequestPasswordResetEmail = (
  reset: UseFormReset<FieldValues>
) => {
  
  const t = useTranslations("hooks");

  const errorMessages = {
    MAGENTO_MAIL_ERROR: {
      condition: "The email address has an invalid format",
      message: t("Invalid email")
    },
    MAGENTO_MISSING_ERROR: {
      condition: "You must specify an email address",
      message: t("E-mail is required")
    },
    MAGENTO_BLOCKED_ERROR: {
      condition: "The account is locked",
      message: t("This account is blocked")
    },
    MAGENTO_SENDING_ERROR: {
      condition: "Cannot reset",
      message: t("Failed to send an email")
    },
    default: { condition: "default", message: t("Failed to send an email") }
  };

  const [mutate, { loading }] = useMutation(REQUEST_PASSWORD_RESET_EMAIL, {
    onError: (error) => {
      handleErrors(error, errorMessages);
      reset();
    },
    onCompleted: () => {
      toast(t("The email has been sent"));
      reset();
    },
    fetchPolicy: "no-cache"
  });

  const mutateRequestEmail = (data: FieldValues) => {
    mutate({
      variables: {
        email: data.email
      }
    });
  };

  return { mutateRequestEmail, loading };
};
