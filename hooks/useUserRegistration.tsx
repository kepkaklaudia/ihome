import { useMutation } from "@apollo/client";
import { useTranslations } from "next-intl";
import { FieldValues, UseFormReset } from "react-hook-form";
import { gql } from "@/__generated__";
import { useRouter } from "@/lib/i18n/navigation";
import { handleErrors } from "@/lib/utils/handleErrors";

const CREATE_CUSTOMER = gql(/* GraphQL */ `
  mutation CreateCustomer($createCustomerInput: CustomerInput!) {
    createCustomer(input: $createCustomerInput) {
      customer {
        email
      }
    }
  }
`);

export const useUserRegistration = (reset: UseFormReset<FieldValues>) => {
  const router = useRouter();
  const t = useTranslations("hooks");

  const errorMessages = {
    GQL_MISSING_ERROR: {
      condition: "Required parameters are missing",
      message: t("Fill in all the fields"),
    },
    MAGENTO_MAIL_ERROR: {
      condition: "A customer with the same email",
      message: t("Provided email address"),
    },
    default: { condition: "default", message: t("Registration failed") },
  };

  const [mutate, { loading }] = useMutation(CREATE_CUSTOMER, {
    onError: (error) => {
      handleErrors(error, errorMessages);
    },
    onCompleted: () => {
      router.push("/login");
      reset();
    },
    fetchPolicy: "no-cache",
  });

  const mutateRegistration = (data: FieldValues) => {
    mutate({
      variables: {
        createCustomerInput: {
          email: data.email,
          password: data.password,
          firstname: data.name,
          lastname: data.name,
        },
      },
    });
  };

  return { mutateRegistration, loading };
};
