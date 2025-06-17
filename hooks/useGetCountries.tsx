import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const COUNTRIES = gql(/* GraphQL */ `
  query GetCountriesData {
    countries {
      id
      full_name_locale
      available_regions {
        ...AvailableRegionsBasicData
      }
    }
  }
`);

export const useCountriesData = () => {
  // a query firstly will looking for an data in the cache
  const { data, loading, error } = useQuery(COUNTRIES, {
    fetchPolicy: "cache-first"
  });

  const countries = data?.countries;

  const findSelectedCountry = (condition: string) => {
    const country = countries?.find((country) => country?.id === condition);
    return country;
  };

  return { data, loading, error, findSelectedCountry };
};
