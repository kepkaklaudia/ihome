import { Montserrat } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import { getTranslations } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/providers/auth";
import { GraphqlProvider } from "@/lib/graphql/provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const t = await getTranslations("metaData.homepage");

  return {
    title: t("title"),
    description: t("description"),
    icons: { icon: "/icon.png" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} antialiased`}>
        <NextIntlClientProvider>
          <GraphqlProvider locale={locale}>
            <AuthProvider>{children}</AuthProvider>
          </GraphqlProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
