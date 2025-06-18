import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { StaticItem } from "@/components/common/Sheet/staticItems";
import { useAuth } from "@/providers/auth";
import { useParams } from "next/navigation";

interface StaticMenuProps {
  onLinkClick?: () => void;
  items: StaticItem[];
}

export const StaticMenu: React.FC<StaticMenuProps> = ({
  onLinkClick,
  items,
}) => {
  const { isAuthenticated } = useAuth();
  const t = useTranslations("common.sheet");
  const pathname = usePathname();
  const params = useParams();

  const menu = items.map(({ path, title, icon, auth }) => {
    if (auth && !isAuthenticated) return;

    const href =
      typeof path === "string" && path.includes("[")
        ? { pathname: path, params: { ...params } }
        : path;

    return (
      <Link
        key={path}
        className={cn(
          "group box-border m-px flex gap-2 font-bold text-sm items-center w-full p-2.5 text-boulder hover:text-black transition-colors rounded-md",
          {
            "text-black pointer-events-none": pathname === path,
          }
        )}
        href={href}
        onClick={() => {
          if (!onLinkClick) return;
          onLinkClick();
        }}
      >
        <div
          className={cn(
            "text-boulder group-hover:text-black transition-colors",
            {
              "text-black": pathname === path,
            }
          )}
        >
          {icon}
        </div>
        <div>{t(title)}</div>
      </Link>
    );
  });

  return menu;
};
