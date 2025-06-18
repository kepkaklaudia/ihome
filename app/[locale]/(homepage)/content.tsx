"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { Menu } from "@/components/common/Sheet";
import Image from "next/image";

export const Content = () => {
  const t = useTranslations("homepage");

  return (
    <>
      <Navbar />
      <div className="h-[68px] bg-black lg:hidden flex items-center pl-4 xs:pl-0 xs:justify-center w-full relative">
        <Link href="/">
          <Image
            src="/ihome-logo-white.png"
            alt="logo"
            className="w-18 h-auto"
            width={48}
            height={10}
          />
        </Link>
        <Menu />
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div>
            <Link href="/about">{t("about")}</Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
