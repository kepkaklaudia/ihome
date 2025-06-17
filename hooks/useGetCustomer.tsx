import { useEffect, useState } from "react";
import { gql } from "@/__generated__";
import { CustomerAddress } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";

const GET_CUSTOMER = gql(/* GraphQL */ `
  query GetCustomer {
    customer {
      addresses {
        ...CustomerAddressField
      }
      default_billing
      default_shipping
      email
      firstname
      is_subscribed
      lastname
      taxvat
    }
  }
`);

export const useGetCustomer = () => {
  const { data, loading, error } = useQuery(GET_CUSTOMER, {});
  const [billingAddress, setBillingAddress] = useState<
    CustomerAddress | null | undefined
  >();
  const [shippingAddress, setShippingAddress] = useState<
    CustomerAddress | null | undefined
  >();

  const nip = data?.customer?.taxvat;
  const firstname = data?.customer?.firstname;
  const customer = data?.customer;
  const addresses = data?.customer?.addresses;

  const findBillingAddress = () => {
    const billing = data?.customer?.addresses?.find(
      (address) => address?.default_billing === true
    );

    return billing;
  };

  const findShippingAddress = () => {
    const shipping = data?.customer?.addresses?.find(
      (address) => address?.default_shipping === true
    );

    return shipping;
  };

  useEffect(() => {
    const billingAdr = findBillingAddress();
    const shippingAdr = findShippingAddress();

    setBillingAddress(billingAdr);
    setShippingAddress(shippingAdr);
  }, [data]);

  return {
    data,
    loading,
    error,
    nip,
    firstname,
    customer,
    addresses,
    billingAddress,
    shippingAddress
  };
};
