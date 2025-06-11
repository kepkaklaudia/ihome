import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function ButtonLoader({
  loading,
  text,
}: {
  loading: boolean;
  text: string;
}) {
  const t = useTranslations("components");
  return (
    <Button size="sm" disabled>
      {loading ? (
        <>
          <Loader2Icon className="animate-spin" />
          {t("Loading")}
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
}
