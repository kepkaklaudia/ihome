import { setContext } from "@apollo/client/link/context";
import { ApolloLink } from "@apollo/client";
import { useTokenStore } from "@/store/tokenStore";

const addTokenHeader = setContext((_, context) => {
  if (!context.headers) context.headers = {};

  try {
    const token = useTokenStore.getState()?.token;

    if (token) {
      context.headers.authorization = `Bearer ${token}`;
      return context;
    }
    return context;
  } catch {
    return context;
  }
});

export const customerLink = ApolloLink.from([addTokenHeader]);
