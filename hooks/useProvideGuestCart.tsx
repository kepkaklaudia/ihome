import { useGuestCartStore } from "@/store/guest-cart-store";
import { useCreateEmptyCart } from "@/hooks/useCreateEmptyCart";

export const useProvideGuestCart = () => {
  const { cartId: guestCartId, setCartId } = useGuestCartStore();
  const { mutateCreateCart, loading } = useCreateEmptyCart();

  const provideGuestCart = async (): Promise<string> => {
    if (guestCartId) {
      return guestCartId;
    }

    try {
      const { data } = await mutateCreateCart();
      if (data?.createEmptyCart) {
        setCartId(data.createEmptyCart);
        return data.createEmptyCart;
      }
      throw new Error("Failed to create a guest cart");
    } catch (error) {
      console.error("Error providing guest cart:", error);
      throw new Error("Failed to provide guest cart");
    }
  };

  return { provideGuestCart, loading, guestCartId };
};
