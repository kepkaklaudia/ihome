import { useTranslations } from "next-intl";
import { Modal } from "@/components/common/modal";
import { Button } from "@/components/ui/button";
import { EmailInput } from "./emailInput";
import { FieldValues, useForm } from "react-hook-form";

interface ChangeEmailProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginModal = ({ open, onOpenChange }: ChangeEmailProps) => {
  const t = useTranslations("components.loginModal");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit = () => {
    onOpenChange(false);
  };

  const onCancel = () => {
    onOpenChange(false);
  };

  return (
    <Modal
      open={open}
      onOpenChange={(openValue) => {
        if (!openValue) onCancel();
        onOpenChange(openValue);
      }}
      title={t("Log in to your account")}
    >
      zaloguj się
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4"
      >
        <EmailInput isValidated={false} register={register} errors={errors} />
        nie pamiętasz hasła? zresetruj hasło
        <div className="my-5 flex justify-center gap-8">
          <Button onClick={handleSubmit(onSubmit)} type="button">
            {t("Log in")}
          </Button>
        </div>
      </form>
      <div>Załóż konto</div>
      <ul>
        <li>Wygodnie odbieraj rabaty i promocje</li>
        <li>Korzystaj z szybszej finalizacji zakupów</li>
        <li>Śledź swoje zamówienia i przeglądaj historię zakupów</li>
        <li>Zarządzaj listą ulubionych produktów</li>
      </ul>
    </Modal>
  );
};
