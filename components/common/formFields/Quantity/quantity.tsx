import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  FieldErrors,
  UseFormReset,
  UseFormHandleSubmit
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Content } from "@/components/common/formFields/Quantity/content";
import { useUpdateCartItems } from "@/hooks/useUpdateCartItems";
import { useUpdateProductsInWishlist } from "@/hooks/useUpdateProductsInWishlist";
import { ChangeQuantity } from "./content";

interface QuantityProps {
  defaultValue: number | undefined;
  setValue: UseFormSetValue<ChangeQuantity>;
  watch: UseFormWatch<ChangeQuantity>;
  register: UseFormRegister<ChangeQuantity>;
  errors: FieldErrors;
  className?: string;
  uid?: string;
  cartId?: string | undefined;
  wishlistId?: string | null | undefined;
  reset: UseFormReset<ChangeQuantity>;
  handleSubmit: UseFormHandleSubmit<ChangeQuantity, undefined>;
}

export const Quantity = ({
  defaultValue,
  setValue,
  watch,
  errors,
  register,
  className,
  cartId,
  wishlistId,
  reset,
  handleSubmit,
  uid
}: QuantityProps) => {
  const { mutateUpdateCartItems } = useUpdateCartItems({
    cartId,
    uid,
    reset
  });

  const { mutateUpdateProductsInWishlist } = useUpdateProductsInWishlist({
    wishlistId,
    id: uid,
    reset
  });

  const onSubmit = (data: ChangeQuantity) => {
    if (wishlistId) {
      mutateUpdateProductsInWishlist(data);
    } else {
      mutateUpdateCartItems(data.quantity);
    }
  };

  return (
    <div
      className={cn(
        "relative flex gap-1 justify-between w-[150px] items-center h-full my-auto",
        className
      )}
    >
      <Content
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        defaultValue={defaultValue}
        setValue={setValue}
        watch={watch}
      />
    </div>
  );
};
