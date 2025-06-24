import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { useTranslations } from "next-intl";
import Mail from "../../../public/images/form/mail.svg";
import { cn } from "@/lib/utils";
import { TextField } from "@/components/common/formFields/textField";
import { validateEmail } from "@/components/common/formFields/validateFunctions";

export interface EmailInputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isValidated: boolean;
}

export const EmailInput = ({
  register,
  errors,
  isValidated,
}: EmailInputProps) => {
  const t = useTranslations("components.emailFields");
  return (
    <TextField
      classNameLabel="w-11/12"
      requiredMessage={t("E-mail is required")}
      fieldName="email"
      placeholder={t("E-mail")}
      register={register}
      errors={errors}
      validateFunction={
        isValidated
          ? (value: FieldValues["email"]) =>
              validateEmail(value, t("E-mail is invalid"))
          : undefined
      }
      icon={
        <Mail
          className={cn(
            "hidden mini:block absolute top-1/2 transform scale-50 -translate-y-1/2 left-0",
            errors.email ? "text-red" : "text-boulder"
          )}
          alt="email"
        />
      }
    />
  );
};
