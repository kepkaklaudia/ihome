import { routing } from "@/lib/i18n/routing";

interface Locale {
  locale: (typeof routing.locales)[number];
  storefront: string;
}

export const magento = {
  locales: [
    {
      locale: "en",
      storefront: "default",
    },
    {
      locale: "pl",
      storefront: "pl",
    },
  ] satisfies Locale[],
};
