import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { handleZeroInput } from "@/components/common/formFields/functions";

export interface ChangeQuantity {
  quantity: number | string;
}

export interface QuantityContentProps {
  defaultValue: number | undefined;
  setValue: UseFormSetValue<ChangeQuantity>;
  watch: UseFormWatch<ChangeQuantity>;
  register: UseFormRegister<ChangeQuantity>;
  errors: FieldErrors;
  className?: string;
  handleSubmit?: UseFormHandleSubmit<ChangeQuantity>;
  onSubmit?: (data: ChangeQuantity) => void;
  isProductDetails?: boolean;
}

export const Content = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  defaultValue,
  setValue,
  watch,
  isProductDetails,
}: QuantityContentProps) => {
  const t = useTranslations("components.quantityForm");
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handleDelayedSubmit = () => {
    if (handleSubmit && onSubmit) {
      if (timeoutId) clearTimeout(timeoutId);
      setTimeoutId(
        globalThis.setTimeout(() => {
          handleSubmit(onSubmit)();
        }, 500)
      );
    }
  };

  const increaseQuantity = () => {
    const currentQuantity = watch("quantity") || 0;
    const parsedQuantity =
      typeof currentQuantity === "number"
        ? currentQuantity
        : Number.parseInt(currentQuantity, 10);

    setValue("quantity", parsedQuantity + 1);

    if (!isProductDetails) {
      handleDelayedSubmit();
    }
  };

  const decreaseQuantity = () => {
    const currentQuantity = watch("quantity") || 0;
    const parsedQuantity =
      typeof currentQuantity === "number"
        ? currentQuantity
        : Number.parseInt(currentQuantity);

    if (parsedQuantity > 1) {
      setValue("quantity", parsedQuantity - 1);

      if (!isProductDetails) {
        handleDelayedSubmit();
      }
    }
  };

  const onInputChange = () => {
    if (!isProductDetails) {
      handleDelayedSubmit();
    }
  };

  return (
    <>
      <label htmlFor="quantity" className="hidden">
        {t("Quantity")}
      </label>
      <button
        onClick={decreaseQuantity}
        className="focus-style relative py-1 px-1.5"
        type="button"
      >
        <ChevronLeft className="hover:text-red transition-colors cursor-pointer" />
        {errors.quantity && (
          <p
            className={cn(
              "text-red text-xs absolute -bottom-4 left-0 right-0 w-[150px]"
            )}
          >
            {`${errors.quantity?.message}`}
          </p>
        )}
      </button>
      <input
        min={1}
        key={defaultValue}
        type="number"
        id="quantity"
        placeholder={t("Quantity")}
        inputMode="numeric"
        defaultValue={defaultValue}
        className="border border-alto rounded-md text-xs mini:text-base p-1.5  mini:p-1 focus:outline-grafit min-w-[50px] placeholder:text-xs input-autofill-style"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleDelayedSubmit();
          }
        }}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleZeroInput(e)}
        {...register("quantity", {
          onChange: () => onInputChange(),
          validate: {
            positiveNumber: (value) => {
              if (/^[1-9][0-9]*$/.test(value.toString())) {
                return true;
              }
              return t("Enter the correct quantity");
            },
          },
        })}
      />
      <button
        type="button"
        onClick={increaseQuantity}
        className="focus-style py-1 px-1.5"
      >
        <ChevronRight className="hover:text-red transition-colors cursor-pointer" />
      </button>{" "}
    </>
  );
};
