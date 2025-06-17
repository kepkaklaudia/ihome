import { useRouter } from "next/navigation";
import { gql } from "@/__generated__";
import { useLazyQuery } from "@apollo/client";
import { useCartStore } from "@/store/cart-store";
import { useMergeCarts } from "@/hooks/useMergeCarts";

const GET_CUSTOMER_CART_ID = gql(/* GraphQL */ `
  query GetCustomerCartId {
    customerCart {
      id
    }
  }
`);

export const useGetCustomerCartIdAndMergeCarts = () => {
  const router = useRouter();
  const { setCartId } = useCartStore();
  const { mutateMergeCarts } = useMergeCarts();

  const [getCartAndMerge] = useLazyQuery(GET_CUSTOMER_CART_ID, {
    onCompleted: ({ customerCart }) => {
      const cartId = customerCart.id;
      mutateMergeCarts({ cartId });
      setCartId(cartId);
      router.push("/");
    }
  });

  return {
    getCartAndMerge
  };
};
