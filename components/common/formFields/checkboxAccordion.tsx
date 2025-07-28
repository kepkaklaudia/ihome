"use client";

import React, { ReactNode } from "react";
import { Control, FieldValues, FieldErrors } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem
} from "@/components/ui/accordion";
import { CheckboxField } from "@/components/common/formFields/checkboxField";

export interface CheckboxAccordionProps {
  errors: FieldErrors<FieldValues>;
  control: Control;
  value: string;
  label: string;
  children: ReactNode;
  fieldName: string;
  handleResetSection: (() => void) | undefined;
  iconClassName?: string;
}

export const CheckboxAccordion = ({
  errors,
  control,
  value,
  label,
  children,
  fieldName,
  iconClassName,
  handleResetSection
}: CheckboxAccordionProps) => {
  return (
    <>
      <Accordion
        value={value}
        className="w-full my-4"
        type="single"
        collapsible
      >
        <CheckboxField
          errors={errors}
          control={control}
          onClick={handleResetSection}
          fieldName={fieldName}
          label={label}
          iconClassName={iconClassName ? iconClassName : "text-red"}
        />
        <AccordionItem value={value}>
          <AccordionContent className="flex flex-col gap-4 mt-6">
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
