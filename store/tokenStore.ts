import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import Cookies from "js-cookie";

type TokenStoreBaseType = {
  token: string | null;
};

interface TokenStoreActionsType {
  updateToken: (token: string) => void;
  removeToken: () => void;
}

type TokenStoreType = TokenStoreBaseType & TokenStoreActionsType;

const defaultInitState = {
  token: null
};

const cookieStorage = {
  getItem: (name: string) => {
    const value = Cookies.get(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: (name: string, value: string | null) => {
    Cookies.set(name, JSON.stringify(value), { path: "/" });
  },
  removeItem: (name: string) => {
    Cookies.remove(name, { path: "/" });
  }
};

export const useTokenStoreBase = create(
  persist<TokenStoreType>(
    (set) => ({
      ...defaultInitState,
      updateToken: (token) => set({ token: token }),
      removeToken: () => set(defaultInitState)
    }),
    {
      name: "token",
      storage: createJSONStorage(() => cookieStorage)
    }
  )
);

export const useTokenStore = createSelectorHooks(useTokenStoreBase);
