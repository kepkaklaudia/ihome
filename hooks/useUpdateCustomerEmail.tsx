import { useMutation } from "@apollo/client";
import { useTranslations } from "next-intl";
import { gql } from "@/__generated__";
import { handleErrors } from "@/lib/utils/handleErrors";

interface useUpdateCustomerEmailProps {
  onCompleted: () => void;
}

const UPDATE_CUSTOMER_EMAIL = gql(/* GraphQL */ `
  mutation UpdateCustomerEmail($email: String!, $password: String!) {
    updateCustomerEmail(email: $email, password: $password) {
      customer {
        email
      }
    }
  }
`);

export const useUpdateCustomerEmail = ({
  onCompleted
}: useUpdateCustomerEmailProps) => {

  const t = useTranslations("hooks");

  const errorMessages = {
    MAGENTO_MISSING_ERROR: {
      condition: "Required parameters are missing",
      message: t("Fill in all the fields")
    },
    MAGENTO_PASSWORD_ERROR: {
      condition: `Provide the current "password" to change "email"`,
      message: t("Incorrect email")
    },
    MAGENTO_EMAIL_ERROR: {
      condition: "is not a valid email address",
      message: t("Incorrect email")
    },
    MAGENTO_VALIDATION_ERROR: {
      condition: "Invalid login or password",
      message: t("Incorrect email")
    },
    MAGENTO_AUTH_ERROR: {
      condition: "The current customer",
      message: t("To update email")
    },
    MAGENTO_DUPLICATION_ERROR: {
      condition: "the same email address already exists",
      message: t("Provided email address")
    },
    default: {
      condition: "default",
      message: t("Failed to update email")
    }
  };

  const [mutate, { loading }] = useMutation(UPDATE_CUSTOMER_EMAIL, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },
    onCompleted
  });

  const mutateUpdateCustomerEmail = (data: {
    email: string;
    password: string;
  }) => {
    mutate({
      variables: {
        email: data.email,
        password: data.password
      }
    });
  };

  return { mutateUpdateCustomerEmail, loading };
};
