import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const GET_USER = gql(/* GraphQL */ `
  query GetUser {
    customer {
      firstname
      middlename
      lastname
      email
      default_billing
      default_shipping
      taxvat
      addresses {
        ...AddressFragment
      }
    }
  }
`);

export const useGetUser = () => {
  const userData = useQuery(GET_USER, {
    fetchPolicy: "no-cache"
  });

  const { data, ...rest } = userData;
  return { user: data?.customer, ...rest };
};

export type UseGetUserType = ReturnType<typeof useGetUser>;
