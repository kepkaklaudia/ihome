import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMenu } from "@/hooks/useMenu";
import { usePathname } from "@/lib/i18n/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { LoginSection } from "@/components/common/Sheet/loginSection";
import { LanguageSelector } from "@/components/common/LanguageSelector";
import { StaticMenu } from "@/components/common/Sheet/staticMenu";
import {
  staticItemsBottom,
  staticItemsUpper,
} from "@/components/common/Sheet/staticItems";
import { InvisibleScrollArea } from "@/components/ui/invisible-scroll-area";
import { CategoriesMenu } from "@/components/common/Sheet/categoriesMenu";

export const Menu = () => {
  const pathname = usePathname();
  const { path: urlPath } = useParams();

  const [categoryPath, setCategoryPath] = useState<string[]>([]);
  const { validatePath } = useMenu();

  const externalPath =
    pathname === "/categories/[...path]" && Array.isArray(urlPath)
      ? validatePath(urlPath)
      : null;

  const externalPathDependency = externalPath?.join("/");

  useEffect(() => {
    if (!externalPath || externalPath.length === 0) return;

    setCategoryPath(externalPath);
  }, [externalPathDependency, externalPath]);

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col w-[95%] gap-1 mx-auto text-left">
      {children}
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger className="text-white absolute top-1/2 right-2 transform -translate-y-1/2">
        <div>
          <Image
            alt=""
            className="stroke-white fill-white color-white cursor-pointer"
            src="/hamburger.svg"
            width={60}
            height={60}
          />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle />
        {categoryPath.length === 0 && (
          <>
            <Wrapper>
              <StaticMenu items={staticItemsUpper} />
            </Wrapper>
            <div className="border-b border-alto w-11/12 mx-auto my-1.5" />
          </>
        )}
        <InvisibleScrollArea>
          <CategoriesMenu path={categoryPath} setPath={setCategoryPath} />
        </InvisibleScrollArea>
        {categoryPath.length === 0 && (
          <>
            <div className="border-b border-alto w-11/12 mx-auto my-2 mt-auto" />
            <Wrapper>
              <StaticMenu items={staticItemsBottom} />
              <LanguageSelector isNavbar={false} />
            </Wrapper>
          </>
        )}
        <LoginSection />
      </SheetContent>
    </Sheet>
  );
};
