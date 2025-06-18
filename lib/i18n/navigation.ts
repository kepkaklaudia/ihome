import { createNavigation } from "next-intl/navigation";
import { routing } from "@/lib/i18n/routing";
import { Pathnames } from "next-intl/routing";

export const locales = ["en", "pl"] as const;

export const pathnames = {
  "/": "/",
  "/forgot-password": {
    en: "/forgot-password",
    pl: "/zapomniales-haslo",
  },
  "/login": {
    en: "/login",
    pl: "/logowanie",
  },
  "/registration": {
    en: "/registration",
    pl: "/rejestracja",
  },
  "/registration/[token]": {
    en: "/registration/[token]",
    pl: "/rejestracja/[token]",
  },
  "/reset-password": {
    en: "/reset-password",
    pl: "/resetuj-haslo",
  },
  "/cart": {
    en: "/cart",
    pl: "/koszyk",
  },
  "/cart/account": {
    en: "/cart/account",
    pl: "/koszyk/konto",
  },
  "/cart/summary": {
    en: "/cart/summary",
    pl: "/koszyk/podsumowanie",
  },
  "/configurator": {
    en: "/configurator",
    pl: "/konfigurator",
  },

  "/favourites": {
    en: "/favourites",
    pl: "/ulubione",
  },

  "/orders": {
    en: "/orders",
    pl: "/zamowienia",
  },

  "/orders/[number]": {
    en: "/orders/[number]",
    pl: "/zamowienia/[number]",
  },

  "/orders/[number]/tracking": {
    en: "/orders/[number]/tracking",
    pl: "/zamowienia/[number]/sledzenie-zamowienia",
  },
  "/products": {
    en: "/products",
    pl: "/produkty",
  },
  "/products/[id]": {
    en: "/products/[id]",
    pl: "/produkty/[id]",
  },
  "/search": {
    en: "/search",
    pl: "/wyszukaj",
  },
  "/settings/edit-profile": {
    en: "/settings/edit-profile",
    pl: "/ustawienia/edytuj-profil",
  },
  "/settings/edit-profile/my-addresses": {
    en: "/settings/edit-profile/my-addresses",
    pl: "/ustawienia/edytuj-profil/moje-adresy",
  },
  "/settings": {
    en: "/settings",
    pl: "/ustawienia",
  },
  "/privacy-policy": {
    en: "/privacy-policy",
    pl: "/polityka-prywatnosci",
  },
  "/admin/new-users": {
    en: "/admin/new-users",
    pl: "/admin/nowi-uzytkownicy",
  },
  "/categories/[...path]": {
    en: "/categories/[...path]",
    pl: "/kategorie/[...path]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
