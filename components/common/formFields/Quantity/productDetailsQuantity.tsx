import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  FieldErrors
} from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  ChangeQuantity,
  Content
} from "@/components/common/formFields/Quantity/content";

interface QuantityProductFormProps {
  defaultValue: number | undefined;
  setValue: UseFormSetValue<ChangeQuantity>;
  watch: UseFormWatch<ChangeQuantity>;
  register: UseFormRegister<ChangeQuantity>;
  errors: FieldErrors;
  className?: string;
}

export const ProductDetailsQuantity = ({
  defaultValue,
  setValue,
  watch,
  errors,
  register,
  className
}: QuantityProductFormProps) => {
  return (
    <div
      className={cn(
        "relative flex gap-1 justify-between w-[150px] items-center h-full my-auto mb-6",
        className
      )}
    >
      <Content
        register={register}
        errors={errors}
        defaultValue={defaultValue}
        setValue={setValue}
        watch={watch}
        isProductDetails
      />
    </div>
  );
};
