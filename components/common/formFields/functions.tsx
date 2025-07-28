interface HandleInputProps {
  (e: React.ChangeEvent<HTMLInputElement>, dashPositions: number[]): void;
}

interface HandleKeyDownProps {
  (
    e: React.KeyboardEvent<HTMLInputElement>,
    setError: React.Dispatch<React.SetStateAction<string>>,
    errorText: string
  ): void;
}

interface AddDashProps {
  (value: string, dashPositions: number[]): string;
}

export const handleKeyDown: HandleKeyDownProps = (e, setError, errorText) => {
  const key = e.key;
  const isNumericKey = /^\d$/.test(key);

  if (isNumericKey || key === "Backspace" || key === "Tab" || key === "Enter") {
    setError("");
  } else {
    setError(`${errorText}`);
  }
};

export const phoneDashPositions = [3, 6, 9];
export const nipDashPositions = [3, 6, 8, 10];
export const postCodeDashPositions = [2];
export const postCodeCompanyDashPositions = [2, 5, 8];
export const phoneExpectedLength = [9, 10, 11, 12];
export const postCodeExpectedLength = [5];

export const addDash: AddDashProps = (value, dashPositions) => {
  if (!value) return "";

  return value
    .split("")
    .map((char, index) => (dashPositions.includes(index) ? `-${char}` : char))
    .join("");
};

export const handleNumberInput: HandleInputProps = (e, dashPositions) => {
  const rawValue = e.target.value.replace(/[^0-9]/g, "");
  const formattedValue = addDash(rawValue, dashPositions);
  e.target.value = formattedValue;
};

export const handleTextInput: HandleInputProps = (e, dashPositions) => {
  let rawValue = e.target.value.replace(/-/g, "");
  const formattedValue = addDash(rawValue, dashPositions);
  e.target.value = formattedValue;
};

export const handleZeroInput = (
  e: React.ChangeEvent<HTMLInputElement>
): void => {
  const rawValue = e.target.value;
  if (rawValue.length === 1 && rawValue === "0") {
    e.target.value = "";
  } else if (rawValue.length > 1 && rawValue.charAt(0) === "0") {
    e.target.value = rawValue.slice(1);
  }
};
