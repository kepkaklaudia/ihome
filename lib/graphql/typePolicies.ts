import { TypePolicies } from "@apollo/client";

export const typePolicies: TypePolicies = {
  CustomerToken: { keyFields: [] },
  Country: {
    keyFields: ["id"]
  },
  Region: {
    keyFields: ["id"]
  },
  Customer: {
    keyFields: []
  },
  BillingCartAddress: {
    keyFields: []
  },
  CartPrices: {
    keyFields: []
  },
  SelectedPaymentMethod: {
    keyFields: []
  },
  Query: {
    fields: {
      GetProducts: {
        keyArgs: ["search", "filter", "currentPage"]
      }
    }
  }
};
