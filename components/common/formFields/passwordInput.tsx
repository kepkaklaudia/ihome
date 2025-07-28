import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  Path
} from "react-hook-form";
import Password from "../../../../public/images/form/password.svg";
import { validateFunctionProps } from "@/components/common/formFields/validateFunctions";

export interface MainPasswordInputProps<T extends FieldValues> {
  className?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors;
  fieldName: Path<T>;
  requiredMessage: string;
  placeholder: string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  validateFunction?: validateFunctionProps;
  classNameLabel?: string;
}

export const PasswordInput = <T extends FieldValues>({
  className,
  register,
  fieldName,
  requiredMessage,
  minLength,
  validateFunction,
  maxLength,
  errors,
  placeholder,
  classNameLabel,
  ...props
}: MainPasswordInputProps<T>) => {
  const [typePassword, setTypePassword] = useState("password");

  const visibility = useAnimation();
  const showHidePassword = () => {
    setTypePassword(typePassword === "text" ? "password" : "text");
    visibility.set({ opacity: 0 });
    visibility.start({
      opacity: 1,
      transition: {
        opacity: { duration: 0.5 }
      }
    });
  };

  return (
    <>
      <label
        className={cn(
          "text-xs mini:text-base w-full flex flex-col mx-auto gap-2",
          classNameLabel
        )}
      >
        {placeholder}
        <div className="relative">
          <input
            type={typePassword}
            placeholder={placeholder}
            {...register(fieldName, {
              required: requiredMessage,
              minLength: minLength || undefined,
              maxLength: maxLength || undefined,
              validate: validateFunction || undefined
            })}
            className={cn(
              "border border-alto tracking-wide rounded-md p-2 text-xs mini:text-base mini:pl-10 w-11/12 mini:w-[calc(100%-50px)] focus:outline-grafit input-autofill-style",
              errors[fieldName] && typePassword === "password"
                ? "text-red"
                : "text-black"
            )}
            {...props}
          ></input>
          <Password
            strokeWidth={1.5}
            className={cn(
              "hidden mini:block absolute top-1/2 transform -translate-y-1/2 left-2.5",
              errors[fieldName] ? "text-red" : "text-boulder"
            )}
            alt="e-mail"
            src="/images/form/password.svg"
          />
          <AnimatePresence>
            <motion.div animate={visibility} onClick={showHidePassword}>
              {typePassword === "text" ? (
                <Eye
                  strokeWidth={1.5}
                  className="stroke-boulder absolute top-1/2 transform scale-90 mini:scale-100 -translate-y-1/2 right-3 cursor-pointer"
                />
              ) : (
                <EyeOff
                  strokeWidth={1.5}
                  className="stroke-boulder absolute top-1/2 transform scale-90 mini:scale-100 -translate-y-1/2 right-3 cursor-pointer"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        {errors[fieldName] && (
          <p className="text-xs text-red">{`${errors[fieldName]?.message}`}</p>
        )}
      </label>
    </>
  );
};
