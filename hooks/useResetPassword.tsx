import { useTranslations } from "next-intl";
import { FieldValues, UseFormReset } from "react-hook-form";
import { useState } from "react";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";

const RESET_PASSWORD = gql(/* GraphQL */ `
  mutation ResetPassword(
    $email: String!
    $resetPasswordToken: String!
    $newPassword: String!
  ) {
    resetPassword(
      email: $email
      resetPasswordToken: $resetPasswordToken
      newPassword: $newPassword
    )
  }
`);

export const useResetPassword = (
  reset: UseFormReset<FieldValues>,
  token: string | null
) => {
  const t = useTranslations("hooks");
  const [status, setStatus] = useState("");

  const errorMessages = {
    MAGENTO_MAIL_ERROR: {
      condition: "The email address has an invalid format",
      message: t("Invalid email"),
    },
    MAGENTO_MISSING_ERROR: {
      condition: "You must specify an email address",
      message: t("E-mail is required"),
    },
    MAGENTO_BLOCKED_ERROR: {
      condition: "The account is locked",
      message: t("This account is blocked"),
    },
    MAGENTO_SENDING_ERROR: {
      condition: "Cannot set",
      message: t("Failed to reset password"),
    },
    MAGENTO_TOKEN_ERROR: {
      condition: "resetPasswordToken must be specified",
      message: t("Invalid token"),
    },
    MAGENTO_PASSWORD_ERROR: {
      condition: "newPassword must be specified",
      message: t("Password is required"),
    },
    default: { condition: "default", message: t("Failed to reset password") },
  };

  const [mutate, { loading }] = useMutation(RESET_PASSWORD, {
    onError: (error) => {
      handleErrors(error, errorMessages);
      setStatus("error");
      reset();
    },
    onCompleted: () => {
      toast(t("Password has been changed"));
      setStatus("success");
      reset();
    },
    fetchPolicy: "no-cache",
  });

  const mutateResetPassword = (data: FieldValues) => {
    if (token === null) {
      toast.error(t("Invalid token"));
    } else {
      mutate({
        variables: {
          email: data.email,
          newPassword: data.password,
          resetPasswordToken: token,
        },
      });
    }
  };

  return { mutateResetPassword, loading, status };
};
