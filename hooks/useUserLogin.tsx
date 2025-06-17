import { useTranslations } from "next-intl";
import { FieldValues } from "react-hook-form";
import { gql } from "@/__generated__";
import { toast } from "sonner";
import { useMutation } from "@apollo/client";
import { handleErrors } from "@/lib/utils/handleErrors";
import { useTokenStore } from "@/store/tokenStore";

const GENERATE_CUSTOMER_TOKEN = gql(/* GraphQL */ `
  mutation GenerateCustomerTokenMutation($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`);

export const useUserLogin = () => {
  const { updateToken } = useTokenStore();

  const t = useTranslations("hooks");

  const errorMessages = {
    GQL_MAIL_ERROR: {
      condition: `Variable "$email"`,
      message: t("E-mail is required"),
    },
    GQL_PASSWORD_ERROR: {
      condition: `Variable "$password"`,
      message: t("Password is required"),
    },
    MAGENTO_MAIL_ERROR: {
      condition: `Specify the "email"`,
      message: t("E-mail is required"),
    },
    MAGENTO_PASSWORD_ERROR: {
      condition: `Specify the "password"`,
      message: t("Password is required"),
    },
    MAGENTO_AUTH_ERROR: {
      condition: `The account sign-in`,
      message: t("Incorrect login"),
    },
    default: { condition: "default", message: t("Login failed") },
  };

  const [mutate, { loading, data }] = useMutation(GENERATE_CUSTOMER_TOKEN, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },

    onCompleted() {
      toast(t("Logged in"));
    },
    fetchPolicy: "no-cache",
  });

  const mutateLogin = async (data: FieldValues) => {
    const result = await mutate({
      variables: {
        email: data.email,
        password: data.password,
      },
    });

    if (result.data?.generateCustomerToken?.token)
      updateToken(result.data?.generateCustomerToken?.token);
  };

  return { mutateLogin, loading, data };
};
