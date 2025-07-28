"use client";

import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  Controller,
  Control,
  UseFormWatch,
  FieldValues,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCountriesData } from "@/hooks/useGetCountries";
import { RegionSelector } from "@/components/common/formFields/regionSelector";

interface CountrySelectorProps {
  control: Control;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: FieldErrors;
}

export const CountrySelector = ({
  control,
  watch,
  setValue,
  errors,
}: CountrySelectorProps) => {
  const { data } = useCountriesData();
  const [open, setOpen] = useState<boolean>(false);

  const countries = data?.countries;

  const findSelectedCountry = () => {
    const country = countries?.find(
      (country) =>
        country?.full_name_locale?.toLocaleLowerCase() ===
        watch("country")?.toLocaleLowerCase()
    );
    return country;
  };

  const t = useTranslations("components.countrySelector");

  const selectedCountryRegions = findSelectedCountry()?.available_regions;

  return (
    <>
      <div className="relative flex flex-col gap-2">
        <label className="text-xs mini:text-base">{t("Country")}</label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              aria-expanded={open}
              className="focus-style text-xs mini:text-base focus:outline-alto center py-1 items-center justify-between flex lg:text-base border border-alto rounded-md p-2"
            >
              <div className="flex gap-2 mini:gap-4">
                {watch("country") ? (
                  <>
                    {
                      <Image
                        width={20}
                        height={15}
                        className="w-4 mini:w-6 h-fit mt-auto border-solid border border-alto"
                        alt=""
                        src={`/images/flags/${findSelectedCountry()?.id?.toLocaleLowerCase()}.svg`}
                      />
                    }
                    {watch("country") !== null ? (
                      <span className="capitalize">{watch("country")}</span>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  t("Choose a country dots")
                )}
              </div>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[250px] p-0 bg-white z-[200]"
          >
            <Command
              filter={(value, search) => {
                if (value.includes(search.toLocaleLowerCase())) return 1;
                return 0;
              }}
            >
              <CommandInput placeholder={t("Search for a country")} />
              <CommandEmpty>{t("No countries")}</CommandEmpty>
              <CommandGroup className="text-sm lg:text-base">
                <Controller
                  key="country"
                  control={control}
                  name="country"
                  rules={{ required: t("Choose a country") }}
                  render={({ field: { onChange } }) => (
                    <>
                      <ScrollArea className="h-56 pr-3" key="country">
                        {countries?.map((country) => (
                          <CommandItem
                            key={country?.id}
                            value={
                              country?.full_name_locale
                                ? country?.full_name_locale
                                : undefined
                            }
                            onSelect={(currentValue: string) => {
                              setOpen(false);
                              onChange(currentValue);
                              setValue("countryCode", country?.id);
                              setValue("regionId", null);
                              setValue("region", "");
                            }}
                          >
                            <div className="flex py-2 justify-start gap-4 w-full">
                              <Image
                                width={20}
                                height={15}
                                className="w-4 mini:w-6 h-fit mt-auto border-solid border border-alto"
                                alt=""
                                src={
                                  country?.id
                                    ? `/images/flags/${country?.id.toLocaleLowerCase()}.svg`
                                    : ""
                                }
                              />
                              {country?.full_name_locale ?? ""}
                            </div>
                          </CommandItem>
                        ))}
                      </ScrollArea>
                    </>
                  )}
                />
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      {selectedCountryRegions !== null &&
        selectedCountryRegions !== undefined && (
          <>
            <RegionSelector
              setValue={setValue}
              control={control}
              watch={watch}
              errors={errors}
              selectedCountryRegions={selectedCountryRegions}
            />
          </>
        )}
    </>
  );
};
