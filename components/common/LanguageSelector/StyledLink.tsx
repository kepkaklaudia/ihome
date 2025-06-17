import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface StyledLinkProps {
  newLocale: "pl" | "en";
  flagCode: "pl" | "gb";
  alt: string;
  isNavbar: boolean;
}

export const StyledLink = ({
  newLocale,
  flagCode,
  alt,
  isNavbar,
}: StyledLinkProps) => {
  const t = useTranslations("common.languageSelector");

  const pathname = usePathname();

  return (
    <Link
      href={`/${newLocale}/${pathname.split("/").slice(2).join("/")}`}
      locale="false"
      prefetch={false}
      className={cn(
        "focus-style",
        isNavbar
          ? ""
          : "flex lg:hidden gap-2 text-sm p-2.5 items-center text-boulder hover:text-black transition-colors"
      )}
      key={flagCode}
    >
      <div
        className={cn(
          "border border-alto",
          isNavbar ? "hover:scale-[105%] transition-transform duration-300" : ""
        )}
      >
        <Image
          alt={alt}
          src={`/images/flags/${flagCode}.svg`}
          width={24}
          height={18}
          className="w-[24px] h-auto"
        />
      </div>
      {!isNavbar && t("Change language")}
    </Link>
  );
};
