import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";

export function ButtonLink({ href, text }: { href: string; text: string }) {
  return (
    <Button asChild>
      <Link href={href}>{text}</Link>
    </Button>
  );
}
