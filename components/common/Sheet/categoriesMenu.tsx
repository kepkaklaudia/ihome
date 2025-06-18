import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";
import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

interface CategoriesMenuProps {
  path: string[];
  setPath: Dispatch<SetStateAction<string[]>>;
  //onLinkClick: () => void;
}

const itemStyle =
  "box-border m-px font-bold text-sm flex items-center w-full p-2.5 hover:text-white hover:bg-red transition-colors rounded-md";

export const CategoriesMenu: React.FC<CategoriesMenuProps> = ({
  path,
  setPath,
}) => {
  const t = useTranslations("common.sheet");
  const { getNavItem } = useMenu();
  const { path: urlPath } = useParams();

  const currentKey = Array.isArray(urlPath) ? urlPath.at(-1) : null;

  const activeItem = getNavItem(path);

  if (!activeItem) return null;

  const href = (path: string[]) => {
    return { pathname: "/categories/[...path]", params: { path: path } };
  };

  return (
    <div className="flex flex-col gap-2 w-[95%] mx-auto">
      {activeItem.path.length > 0 && (
        <button
          className="box-border m-px focus-style font-bold bg-athens shadow-backMenu text-sm flex gap-2 w-full p-2.5 hover:text-white hover:bg-redOpacity transition-colors text-heather italic leading-6 tracking-wide rounded-md"
          onClick={() => setPath((previous) => previous.slice(0, -1))}
        >
          <ArrowLeft />
          {t("Back")}
        </button>
      )}
      <ul className="flex flex-col gap-1 mx-auto text-left w-full">
        {activeItem.namePath.length > 0 && (
          <li>
            <Link
              className={cn(itemStyle, {
                "text-white bg-red pointer-events-none":
                  activeItem.key === currentKey,
              })}
              href={href(activeItem.path)}
            >
              {activeItem.name}
            </Link>
            <div className="border-b border-red w-11/12 mx-auto my-1.5" />
          </li>
        )}
        {activeItem.children.map((item) => (
          <li key={item.id}>
            {item.children.length > 0 ? (
              <button
                className={cn(itemStyle, "justify-between")}
                onClick={() => setPath((previous) => [...previous, item.key])}
              >
                {item.name}
                {item.children?.length > 0 && (
                  <ChevronRight
                    className="h-4"
                    width={undefined}
                    height={undefined}
                  />
                )}
              </button>
            ) : (
              <Link
                className={cn(itemStyle, "justify-between", {
                  "text-white bg-red pointer-events-none":
                    item.key === currentKey,
                })}
                href={href(item.path)}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
