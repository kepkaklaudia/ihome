"use client";

import { ApolloError, ApolloProvider } from "@apollo/client";
import { getClient } from "./client";
import { useEffect, useMemo } from "react";
import { useTokenStore } from "@/store/tokenStore";

interface GraphqlProviderProps {
  locale: string;
  children: React.ReactNode;
}

export const GraphqlProvider: React.FC<GraphqlProviderProps> = ({
  children,
  locale
}) => {
  const client = useMemo(() => getClient(locale), [locale]);
  const { removeToken } = useTokenStore();

  useEffect(() => {
    client.reFetchObservableQueries().catch((apolloError: ApolloError) => {
      if (!apolloError) return;

      // clear all cached data and remove token if auth error found
      for (const error of apolloError.graphQLErrors) {
        if (error.extensions?.category === "graphql-authorization") {
          removeToken();
          client.cache.reset();
          return;
        }
      }
    });
  }, [client]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
