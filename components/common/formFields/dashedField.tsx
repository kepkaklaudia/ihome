import React, { KeyboardEvent, useState } from "react";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  handleKeyDown,
  handleNumberInput,
  handleTextInput
} from "@/components/common/formFields/functions";
import { validateValue } from "@/components/common/formFields/validateFunctions";

interface DashedFieldProps {
  fieldName: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  maxLength?: number;
  placeholder: string;
  type: string;
  dashPositions: number[];
  required: boolean;
  isNumericField: boolean;
  expectedLength?: number[];
  defaultValue?: string;
  additionalErrorClass?: string;
  validationFunction?: (value: string) => string | true;
  readOnly?: boolean;
}

export const DashedField = ({
  fieldName,
  register,
  errors,
  maxLength,
  placeholder,
  type,
  dashPositions,
  required,
  validationFunction,
  expectedLength,
  defaultValue,
  readOnly,
  isNumericField,
  additionalErrorClass
}: DashedFieldProps) => {
  const [error, setError] = useState<string>("");

  const t = useTranslations("components.dashedField");
  const errorText = t("The field accepts only numbers");

  return (
    <label
      className={cn(
        readOnly
          ? " text-nobel pointer-events-none peer-focus:scale-[100%] peer-focus:text-nobel"
          : "relative text-xs mini:text-base w-full flex flex-col mx-auto gap-2"
      )}
      htmlFor={fieldName}
    >
      {placeholder}
      <input
        className={cn(
          "border border-alto rounded-md text-xs mini:text-base p-2 focus:outline-grafit input-autofill-style",
          readOnly ? "pointer-events-none" : ""
        )}
        id={fieldName}
        placeholder={placeholder}
        type={type}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
          isNumericField ? handleKeyDown(e, setError, errorText) : undefined
        }
        inputMode={isNumericField ? "numeric" : "text"}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          isNumericField
            ? handleNumberInput(e, dashPositions)
            : handleTextInput(e, dashPositions)
        }
        defaultValue={defaultValue}
        maxLength={maxLength}
        {...register(fieldName, {
          validate: (value: string) =>
            validateValue(
              value,
              required,
              t("This field is required"),
              t("Incorrect number of digits"),
              expectedLength,
              validationFunction
            )
        })}
      />
      {!error && errors[fieldName] && (
        <p className={cn("text-red text-xs", additionalErrorClass)}>
          {`${errors[fieldName]?.message}`}
        </p>
      )}
      {error && (
        <p className={cn("text-red text-xs", additionalErrorClass)}>{error}</p>
      )}
    </label>
  );
};
