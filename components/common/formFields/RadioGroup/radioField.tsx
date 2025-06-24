import { UseFormSetValue, FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

interface RadioFieldProps {
  text: string;
  id: string;
  fieldName: string;
  checked: boolean;
  setValue: UseFormSetValue<FieldValues>;
  children: React.ReactNode;
  className?: string;
}

export const RadioField = ({
  id,
  fieldName,
  checked,
  setValue,
  children,
  className,
}: RadioFieldProps) => {
  const handleClick = () => {
    if (setValue) {
      setValue(fieldName, id);
    }
  };

  return (
    <div className={cn("flex gap-4 items-center justify-start", className)}>
      <RadioGroupItem
        id={id}
        value={id}
        className={cn("text-red", checked && "pointer-events-none")}
        checked={checked}
        onClick={handleClick}
      />
      {/* Attach to each children's event onclick */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{ onClick?: () => void }>,
            {
              onClick: handleClick,
            }
          );
        }
      })}
    </div>
  );
};

RadioField.displayName = "RadioField";
