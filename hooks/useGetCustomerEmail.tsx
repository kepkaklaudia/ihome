import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const GET_CUSTOMER_EMAIL = gql(/* GraphQL */ `
  query GetCustomerEmail {
    customer {
      email
    }
  }
`);

export const useGetCustomerEmail = () => {
  const { data, loading, refetch, error } = useQuery(GET_CUSTOMER_EMAIL, {});

  return { data, loading, error, refetch };
};
