import { useTranslations } from "next-intl";
import { FieldValues } from "react-hook-form";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { getClient } from "@/lib/graphql/client";
import { toast } from "sonner";
import { useRouter } from "@/lib/i18n/navigation";
import { handleErrors } from "@/lib/utils/handleErrors";
import { useTokenStore } from "@/store/tokenStore";

interface useChangePasswordProps {
  onError: () => void;
  onCompleted: () => void;
}

const CHANGE_PASSWORD = gql(/* GraphQL */ `
  mutation ChangeCustomerPassword(
    $currentPassword: String!
    $newPassword: String!
  ) {
    changeCustomerPassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      email
    }
  }
`);

export const useChangePassword = ({
  onError,
  onCompleted,
}: useChangePasswordProps) => {
  const router = useRouter();
  const t = useTranslations("hooks");
  const client = getClient();
  const { removeToken } = useTokenStore();

  const errorMessages = {
    MAGENTO_MISSING_ERROR: {
      condition: `Specify the "currentPassword" value`,
      message: t("Current password is required"),
    },
    MAGENTO_NEW_MISSING_ERROR: {
      condition: `Specify the "newPassword" value`,
      message: t("New password is required"),
    },
    MAGENTO_AUTH_ERROR: {
      condition: "The current customer",
      message: t("To change your password"),
    },
    MAGENTO_INVALID_ERROR: {
      condition: "Invalid login or password",
      message: t("Current password is incorrect"),
    },
    MAGENTO_BLOCKED_ERROR: {
      condition: "The account is locked",
      message: t("This account is blocked"),
    },
    default: { condition: "default", message: t("Password change failed") },
  };

  const [mutate, { loading }] = useMutation(CHANGE_PASSWORD, {
    onError: (error) => {
      handleErrors(error, errorMessages);
      onError();
    },
    onCompleted: async () => {
      onCompleted();
      removeToken();
      await client.resetStore().catch(() => {});
      await toast(t("Please log in again"));
      await router.push("/login");
    },
  });

  const mutateChangePassword = (data: FieldValues) => {
    mutate({
      variables: {
        currentPassword: data.oldPassword,
        newPassword: data.password,
      },
    });
  };

  return { mutateChangePassword, loading };
};
