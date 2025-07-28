import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { validateFunctionProps } from "@/components/common/formFields/validateFunctions";

export interface TextFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors;
  fieldName: Path<T>;
  placeholder: string;
  icon?: ReactNode;
  requiredMessage?: string;
  validateFunction?: validateFunctionProps;
  classNameInput?: string;
  classNameLabel?: string;
  defaultValue?: string;
  type?: "text" | "number";
  min?: number;
  minValidation?: { value: number; message: string };
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
}

export const TextField = <T extends FieldValues>({
  classNameInput,
  classNameLabel,
  register,
  errors,
  icon,
  requiredMessage,
  fieldName,
  placeholder,
  validateFunction,
  defaultValue,
  minLength,
  maxLength,
}: TextFieldProps<T>) => {
  return (
    <>
      <label
        className={cn(
          "text-xs mini:text-base w-full flex flex-col mx-auto gap-2",
          classNameLabel
        )}
      >
        {placeholder}
        <div className="relative w-full">
          <input
            type="text"
            placeholder={placeholder}
            {...register(fieldName, {
              required: requiredMessage || false,
              minLength: minLength || undefined,
              maxLength: maxLength || undefined,
              validate: validateFunction || undefined,
            })}
            defaultValue={defaultValue}
            className={cn(
              "border border-alto rounded-md text-xs mini:text-base p-2 w-11/12 focus:outline-grafit mini:w-[calc(100%-18px)] input-autofill-style",
              icon !== undefined && "mini:pl-10 mini:w-[calc(100%-50px)]",
              classNameInput
            )}
          />
          <div className="absolute hidden mini:flex items-center justify-center w-10 h-10 top-0 p-[1px]">
            <div className="h-6">{icon}</div>
          </div>
        </div>
        {errors[fieldName] && (
          <p className="text-xs text-red">{`${errors[fieldName]?.message}`}</p>
        )}
      </label>
    </>
  );
};
