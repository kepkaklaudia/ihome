import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const GET_CUSTOMER_ADDRESS = gql(/* GraphQL */ `
  query GetCustomerAddresses {
    customer {
      addresses {
        ...CustomerAddressField
      }
    }
  }
`);

export const useGetCustomerAddresses = () => {
  const { data, loading, refetch, error } = useQuery(GET_CUSTOMER_ADDRESS, {
    fetchPolicy: "cache-first"
  });

  return { data, loading, error, refetch };
};
