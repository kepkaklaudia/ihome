"use client";

import { useState } from "react";
import {
  Controller,
  UseFormSetValue,
  UseFormWatch,
  FieldValues,
  FieldErrors,
  Control
} from "react-hook-form";
import { ChevronsUpDown } from "lucide-react";
import { useTranslations } from "next-intl";
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

interface Region {
  id?: number | null | undefined;
  name?: string | null | undefined;
}

export interface RegionSelectorProps {
  control: Control;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: FieldErrors;
  selectedCountryRegions: (Region | null)[];
  isShipping?: boolean;
}

export const RegionSelector = ({
  control,
  watch,
  selectedCountryRegions,
  setValue,
  errors,
  isShipping
}: RegionSelectorProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations("components.countrySelector");

  const region = isShipping ? "regionShipping" : "region";
  const regionId = isShipping ? "regionIdShipping" : "regionId";

  return (
    <>
      <div className="relative flex flex-col gap-2 w-full">
        <label className="text-xs mini:text-base">{t("Region")}</label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              aria-expanded={open}
              className="focus-style text-xs mini:text-base focus:outline-alto center items-center justify-between flex lg:text-base border border-alto rounded-md p-2"
            >
              <div className="flex gap-2 mini:gap-4">
                {watch(region) ? (
                  <>{watch(region) ?? ""}</>
                ) : (
                  t("Choose a region dots")
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
              <CommandInput placeholder={t("Search for a region")} />
              <CommandEmpty>{t("No regions")}</CommandEmpty>
              <CommandGroup className="text-sm lg:text-base">
                <Controller
                  key={region}
                  control={control}
                  name={region}
                  rules={{ required: t("Choose a region") }}
                  render={({ field: { onChange } }) => (
                    <>
                      <ScrollArea className="h-56 pr-3" key={region}>
                        {selectedCountryRegions?.map((region) => (
                          <CommandItem
                            key={region?.id}
                            value={region?.name || ""}
                            onSelect={(currentValue) => {
                              setOpen(false);
                              onChange(currentValue);
                              setValue(regionId, region?.id);
                            }}
                          >
                            <div className="flex py-2 justify-start gap-4 w-full">
                              {region?.name}
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
        {errors[region] && (
          <p className="text-xs text-red">{`${errors[region]?.message}`}</p>
        )}
      </div>
    </>
  );
};
