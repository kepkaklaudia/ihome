"use client";

import { useEffect, useState } from "react";

const localStorageKey = "viewPreference";

export const useProductsDisplayMode = () => {
  const [displayMode, setDisplayMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    if (!globalThis) {
      return;
    }

    const localMode = localStorage.getItem(localStorageKey);

    if (localMode !== "grid" && localMode !== "list") {
      return;
    }

    setDisplayMode(localMode);
  }, []);

  const handleDisplayModeChange = (newMode: "grid" | "list") => {
    setDisplayMode(newMode);

    if (!globalThis) {
      return;
    }

    localStorage.setItem(localStorageKey, newMode);
  };

  return { displayMode, handleDisplayModeChange };
};
