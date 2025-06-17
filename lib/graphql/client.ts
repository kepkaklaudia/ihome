import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { customerLink } from "./customerLink";
import { cache } from "./cache";
import { setContext } from "@apollo/client/link/context";
import { magento } from "@/magento";

const getHttpLink = (ssr?: boolean) =>
  new HttpLink({
    uri: ssr ? `${process.env.MAGENTO_URL}/graphql` : "/graphql"
  });

const getLocaleLink = (locale?: string) =>
  setContext((_, context) => {
    if (!locale) return context;

    if (!context.headers) context.headers = {};

    const storefront = magento.locales.find(
      ({ locale: storefrontLocale }) => storefrontLocale === locale
    )?.storefront;

    context.headers.store = storefront;

    return context;
  });

// export const client = new ApolloClient({
//   link: ApolloLink.from([customerLink, httpLink]),
//   cache,
// });

export const getClient = (locale?: string, ssr?: boolean) =>
  new ApolloClient({
    link: ApolloLink.from([
      customerLink,
      getLocaleLink(locale),
      getHttpLink(ssr)
    ]),
    cache
  });
