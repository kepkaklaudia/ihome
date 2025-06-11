import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonLoader({
  loading,
  text,
}: {
  loading: boolean;
  text: string;
}) {
  return (
    <Button size="sm" disabled>
      {loading ? (
        <>
          <Loader2Icon className="animate-spin" />
          Ładowanie
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
}
