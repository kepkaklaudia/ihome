import { InMemoryCache } from "@apollo/client";
import { typePolicies } from "./typePolicies";
import fragments from "@/gql/fragments.json";

//TODO Dodać wygenerowane fragmenty

export const cache = new InMemoryCache({
  typePolicies,
  possibleTypes: fragments.possibleTypes, //TODO Aktualnie fragmenty są generowane za pomocą codegen:types
});
