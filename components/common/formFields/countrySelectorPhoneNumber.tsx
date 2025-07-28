"use client";

import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  Controller,
  Control,
  UseFormWatch,
  FieldValues
} from "react-hook-form";
import { useCountryCodes } from "@/lib/utils/useCountryCode";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface CountrySelectorPhoneNumberProps {
  control: Control;
  watch: UseFormWatch<FieldValues>;
  isShipping?: boolean;
}

export const CountrySelectorPhoneNumber = ({
  control,
  watch,
  isShipping
}: CountrySelectorPhoneNumberProps) => {
  const t = useTranslations("components.countrySelector");

  const { countryDatasObject, countryPhonesObject, findCountryCodeByDetails } =
    useCountryCodes();

  const fieldName = isShipping
    ? "phoneNumberCountryCodeShipping"
    : "phoneNumberCountryCode";

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(
    countryDatasObject[watch(fieldName)]?.toLocaleLowerCase()
  );

  useEffect(() => {
    setValue(
      watch(fieldName)
        ? countryDatasObject[watch(fieldName)].toLocaleLowerCase()
        : countryDatasObject["PL"].toLocaleLowerCase()
    );
  }, [countryDatasObject, watch]);

  const foundCountryCode: string | null = findCountryCodeByDetails(value);

  return (
    <>
      <div className="relative mt-8">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              aria-expanded={open}
              className="center p-1 items-center justify-between flex text-xs lg:text-base w-[95px] mini:w-[110px] lg:w-[125px] focus-style"
            >
              <div className="flex gap-2 mini:gap-4">
                {value ? (
                  <>
                    {
                      <Image
                        width={20}
                        height={15}
                        className="w-4 mini:w-6 h-fit mt-auto border-solid border border-alto"
                        alt=""
                        src={`/images/flags/${foundCountryCode?.toLocaleLowerCase()}.svg`}
                      />
                    }
                    {foundCountryCode === null
                      ? ""
                      : countryPhonesObject[foundCountryCode]}
                  </>
                ) : (
                  t("Choose a country dots")
                )}
              </div>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0 bg-white z-[200]">
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
                  key={fieldName}
                  control={control}
                  name={fieldName}
                  rules={{ required: t("Choose a country") }}
                  render={({ field: { onChange } }) => (
                    <>
                      <ScrollArea className="h-56 pr-3" key="country">
                        {Object.entries(countryDatasObject).map(
                          ([code, details]) => (
                            <CommandItem
                              key={code}
                              value={details ? String(details) : ""}
                              onSelect={(currentValue: string) => {
                                setOpen(false);
                                onChange(
                                  findCountryCodeByDetails(currentValue)
                                );
                              }}
                              className={cn(
                                code === watch(fieldName) && "bg-red text-white"
                              )}
                            >
                              <div
                                className={cn(
                                  "flex py-2 justify-start gap-4 w-full",
                                  value === details
                                    ? "opacity-80"
                                    : "opacity-100"
                                )}
                              >
                                <Image
                                  width={20}
                                  height={15}
                                  className="w-4 mini:w-6 h-fit mt-auto border-solid border border-alto"
                                  alt=""
                                  src={`/images/flags/${code.toLocaleLowerCase()}.svg`}
                                />
                                {details ? String(details) : ""}
                              </div>
                            </CommandItem>
                          )
                        )}
                      </ScrollArea>
                    </>
                  )}
                />
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
