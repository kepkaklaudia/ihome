import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RadioGroup } from "@/components/ui/radio-group";

type StatusDataItem = {
  label: string;
  id: string;
  methodCode: string;
  image?: string;
};

interface RadioGroupFieldsProps {
  dataTable?: StatusDataItem[];
  fieldName: string;
  requiredMessage: string;
  errorClassName?: string;
  children: React.ReactNode;
}

export const RadioGroupFields = ({
  fieldName,
  requiredMessage,
  errorClassName,
  children
}: RadioGroupFieldsProps) => {
  const {
    control,
    watch,
    formState: { errors }
  } = useFormContext();

  useController({
    name: fieldName,
    control,
    rules: { required: requiredMessage }
  });

  return (
    <div className="relative my-4 w-full">
      <RadioGroup className="w-full flex flex-col" name={fieldName}>
        {children}
      </RadioGroup>
      {!watch(fieldName) && errors[fieldName] && (
        <p className={cn("text-xs text-red mt-1", errorClassName)}>
          {`${errors[fieldName]?.message}` || ""}
        </p>
      )}
    </div>
  );
};
