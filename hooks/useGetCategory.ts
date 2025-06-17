import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const GET_CATEGORY = gql(/* GraphQL */ `
  query GetCategory($path: String) {
    categories(filters: { url_path: { eq: $path } }) {
      items {
        name
        uid
      }
    }
  }
`);

export const useGetCategory = (path: string) => {
  const { data, loading } = useQuery(GET_CATEGORY, {
    variables: { path }
  });

  return { data, loading };
};
