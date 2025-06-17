import { toast } from "sonner";

interface ErrorMessage {
  condition: string;
  message: string;
}

export const handleErrors = (
  error: Error,
  errorMessages: Record<string, ErrorMessage>
) => {
  const matchingError = Object.values(errorMessages).find(
    (errorMessage: ErrorMessage) =>
      error.message.includes(errorMessage.condition)
  );

  const errorMessage = matchingError?.message ?? errorMessages.default.message;

  toast.error(errorMessage);
};
