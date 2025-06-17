import * as countryCodes from "country-codes-list";
import type { CountryProperty } from "country-codes-list";

export const useCountryCodes = () => {
  const countryDatasObject = countryCodes.customList(
    "countryCode" as CountryProperty,
    "{countryNameEn} +{countryCallingCode}"
  );

  const countryPhonesObject = countryCodes.customList(
    "countryCode" as CountryProperty,
    "+{countryCallingCode}"
  );

  function findCountryPrefixByCode(countryCode: string): string {
    const countryCallingCode = countryPhonesObject[countryCode];
    return countryCallingCode;
  }

  function findCountryCodeByDetails(details: string): string | null {
    for (const countryCode in countryDatasObject) {
      if (countryDatasObject[countryCode].toLocaleLowerCase() === details) {
        return countryCode;
      }
    }
    return null;
  }

  function findCountryCodeByPrefix(prefix: string): string | null {
    for (const countryCode in countryPhonesObject) {
      if (countryPhonesObject[countryCode] === prefix) {
        return countryCode;
      }
    }
    return null;
  }

  return {
    findCountryCodeByDetails,
    findCountryPrefixByCode,
    findCountryCodeByPrefix,
    countryDatasObject,
    countryPhonesObject,
    countryCodes
  };
};
