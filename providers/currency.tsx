"use client";

import {
  useGetCurrencies,
  useGetCurrenciesType
} from "@/hooks/useGetCurrencies";
import React, { createContext, useContext } from "react";
import { ProviderProps } from "./ProviderProps";

const CurrenciesContext = createContext<useGetCurrenciesType | null>(null);

export const CurrencyProvider: React.FC<ProviderProps> = ({ children }) => {
  const { currencies, error, loading } = useGetCurrencies();

  const value: useGetCurrenciesType = { currencies, error, loading };

  return (
    <CurrenciesContext.Provider value={value}>
      {children}
    </CurrenciesContext.Provider>
  );
};

export const useCurrencies = () => {
  const context = useContext(CurrenciesContext);
  if (!context) {
    throw new Error("useCurrencies must be used inside CurrenciesProvider");
  }

  return context;
};
