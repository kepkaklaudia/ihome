import { FieldValues } from "react-hook-form";

interface validatePasswordType {
  (value: FieldValues["password"], invalidMessage: any): boolean | string;
}

interface validateMatchedPasswordType {
  (value: FieldValues["repeatPassword"], props: any): boolean | string;
}

interface validateEmailType {
  (value: FieldValues["email"], invalidMessage: any): boolean | string;
}

export type validateFunctionProps =
  | validatePasswordType
  | validateMatchedPasswordType
  | validateEmailType;

export const validatePassword: validatePasswordType = (
  value,
  invalidMessage
) => {
  if (
    value.length >= 8 &&
    /[A-Z]/.test(value) &&
    /[a-z]/.test(value) &&
    /[\W_]/.test(value) &&
    /\d/.test(value)
  ) {
    return true;
  }
  return invalidMessage;
};

export const validateMatchedPassword: validateMatchedPasswordType = (
  value,
  props
) => {
  validatePassword(value, props.invalidMessage);

  if (
    validatePassword(value, props.invalidMessage) &&
    value === props.passwordValue
  ) {
    return true;
  } else {
    return props.incompatibleMessage;
  }
};

export const validateEmail: validateEmailType = (value, invalidMessage) => {
  if (/^[\w\.-]+@[\w\.-]+\.\w+$/.test(value) || value.trim() === "") {
    return true;
  }
  return invalidMessage;
};

const isCorrectLength = (value: string, expectedLength: number[]): boolean => {
  const numericValue = value.replace(/[^0-9]/g, "");
  return expectedLength.some((length) => numericValue.length === length);
};

export const validateValue = (
  value: string,
  required: boolean,
  requiredErrorText: string,
  expectedLengthErrorText: string,
  expectedLength?: number[],
  validationFunction?: (value: string) => string | true
): string | true => {
  if (required && value.trim() === "") {
    return requiredErrorText;
  } else if (!required && value.trim() === "") {
    return true;
  } else if (expectedLength && !isCorrectLength(value, expectedLength)) {
    return expectedLengthErrorText;
  } else if (validationFunction) {
    return validationFunction(value);
  } else {
    return true;
  }
};
