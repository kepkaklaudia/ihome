import { useMutation } from "@apollo/client";
import { useTranslations } from "next-intl";
import { FieldValues, UseFormReset } from "react-hook-form";
import { gql } from "@/__generated__";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";

const SUBSCRIBE_EMAIL_TO_NEWSLETTER = gql(/* GraphQL */ `
  mutation SubscribeEmailToNewsletter($email: String!) {
    subscribeEmailToNewsletter(email: $email) {
      status
    }
  }
`);

export const useSubscribeNewsletter = (reset: UseFormReset<FieldValues>) => {
  
  const t = useTranslations("hooks");

  const errorMessages = {
    MAGENTO_MAIL_ERROR: {
      condition: "Enter a valid email address",
      message: t("Invalid email")
    },
    MAGENTO_FAILED_ERROR: {
      condition: "Cannot create a newsletter subscription",
      message: t("Failed to subscribe")
    },
    MAGENTO_GUEST_ERROR: {
      condition: "Guests can not subscribe",
      message: t("Log in to subscribe")
    },
    MAGENTO_SUBSCRIBED_ERROR: {
      condition: "This email address is already",
      message: t("This email address is already")
    },
    MAGENTO_MISSING_ERROR: {
      condition: "Cannot create a newsletter subscription",
      message: t("Fill in all the fields")
    },
    default: { condition: "default", message: t("Failed to subscribe") }
  };

  const [mutate, { loading }] = useMutation(SUBSCRIBE_EMAIL_TO_NEWSLETTER, {
    onError: (error) => {
      handleErrors(error, errorMessages);
      reset();
    },
    onCompleted: () => {
      toast({ title: t("Email has been subscribed") });
      reset();
    }
  });

  const mutateSubscribeNewsletter = (data: FieldValues) => {
    mutate({
      variables: {
        email: data.email
      }
    });
  };

  return { mutateSubscribeNewsletter, loading };
};
