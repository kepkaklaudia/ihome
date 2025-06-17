"use client";

import { createContext, useContext, useState } from "react";
import { Loader } from "@/components/common/Loader/loader";
import { ProviderProps } from "./ProviderProps";

// Interfejs dla stanu ładowania każdego zapytania
interface LoaderContextProps {
  loadingStates: { [key: string]: boolean } | null; // Mapa stanów ładowania
  setLoading: (id: string, isLoading: boolean) => void; // Funkcja ustawiająca stan ładowania
  disableLoading: () => void;
}

const LoaderContext = createContext<LoaderContextProps | null>(null);

export const LoaderProvider: React.FC<ProviderProps> = ({ children }) => {
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  } | null>(null);
  const [disable, setDisable] = useState(false);

  const setLoading = (id: string, isLoading: boolean) => {
    setLoadingStates((prev) => ({
      ...prev,
      [id]: isLoading
    }));
  };

  const disableLoading = () => {
    setDisable(true);
  };

  // default state as true
  const isLoading = loadingStates
    ? Object.values(loadingStates).includes(true)
    : true;

  return (
    <LoaderContext.Provider
      value={{ loadingStates, setLoading, disableLoading }}
    >
      <>
        {isLoading && !disable && <Loader />}
        {children}
      </>
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }

  return context;
};
