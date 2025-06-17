import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const CURRENCIES = gql(/* GraphQL */ `
  query GetCurrency {
    currency {
      base_currency_code
      base_currency_symbol
    }
  }
`);

export const useGetCurrencies = () => {
  const { data, loading, error } = useQuery(CURRENCIES);

  const currencies = [
    {
      symbol: data?.currency?.base_currency_symbol,
      currency: data?.currency?.base_currency_code
    }
  ];

  return { currencies, loading, error };
};

export type useGetCurrenciesType = ReturnType<typeof useGetCurrencies>;
