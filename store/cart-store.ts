import { create, StoreApi } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import Cookies from "js-cookie";

export type CartStateType = {
  cartId?: string;
  shippingAddressId?: number;
  selectedPaymentMethod?: string;
  selectedDeliveryMethod?: {
    methodCode: string;
    carrierCode: string;
  };
};

type SetAddressIdType = (addressId: number) => void;

export type CartActionsType = {
  setCartId: (cartId: string) => void;
  setShippingAddressId: SetAddressIdType;
  reset: () => void;
};

export type CartStoreType = CartStateType & CartActionsType;
export type CartStoreApi = StoreApi<CartStoreType>;

export const defaultInitState = {
  cartId: undefined,
  billingAddressId: undefined,
  shippingAddressId: undefined,
  selectedPaymentMethod: undefined,
  selectedDeliveryMethod: undefined
};

const cookieStorage = {
  getItem: (name: string) => {
    const value = Cookies.get(name);
    return value ? JSON.parse(value) : undefined;
  },
  setItem: (name: string, value: string | null) => {
    Cookies.set(name, JSON.stringify(value), { path: "/" });
  },
  removeItem: (name: string) => {
    Cookies.remove(name);
  }
};

export const useCartStoreBase = create(
  persist<CartStoreType>(
    (set) => ({
      ...defaultInitState,
      setCartId: (cartId) => set({ cartId: cartId }),
      setShippingAddressId: (addressId) =>
        set({ shippingAddressId: addressId }),
      reset: () => set(defaultInitState)
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => cookieStorage)
    }
  )
);

export const useCartStore = createSelectorHooks(useCartStoreBase);
