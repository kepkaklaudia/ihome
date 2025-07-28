import { Controller, FieldErrors, Control } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface CheckboxFieldProps {
  label: string;
  fieldName: string;
  errors: FieldErrors;
  control: Control;
  containerClassName?: string;
  errorClassName?: string;
  onClick?: () => void;
  requiredMessage?: string;
  iconClassName?: string;
}

export const CheckboxField = ({
  label,
  fieldName,
  errors,
  requiredMessage,
  control,
  containerClassName,
  errorClassName,
  onClick,
  iconClassName
}: CheckboxFieldProps) => {
  return (
    <div
      className={cn(
        "flex items-center mx-auto justify-center flex-col gap-2",
        containerClassName
      )}
    >
      <Controller
        control={control}
        name={fieldName}
        key={fieldName}
        defaultValue={false}
        rules={{ required: requiredMessage ?? false }}
        render={({ field: { onChange, value, ref } }) => (
          <div className="flex items-start gap-2 mx-auto justify-center">
            <Checkbox
              onCheckedChange={onChange}
              ref={ref}
              className={iconClassName ?? "text-red"}
              onClick={onClick}
              checked={value}
              id={fieldName}
            >
              {fieldName}
            </Checkbox>
            <label
              htmlFor={fieldName}
              className={cn(
                "self-center text-xs mini:text-sm text-boulder lg:text-base font-normal cursor-pointer",
                value && !iconClassName && "text-red"
              )}
            >
              {label}
            </label>
          </div>
        )}
      />
      {errors[fieldName] && (
        <p className={cn("text-xs text-red", errorClassName)}>
          {`${errors[fieldName]?.message}` || ""}
        </p>
      )}
    </div>
  );
};
