import { useGuestCartStore } from "@/store/guest-cart-store";
import { useMutation } from "@apollo/client";
import { gql } from "@/__generated__";

export const MERGE_CARTS = gql(/* GraphQL */ `
  mutation MergeCarts($source_cart_id: String!, $destination_cart_id: String) {
    mergeCarts(
      source_cart_id: $source_cart_id
      destination_cart_id: $destination_cart_id
    ) {
      id
      items {
        uid
        product {
          name
          sku
        }
        quantity
      }
    }
  }
`);

export const useMergeCarts = () => {
  const { cartId: guestCartId, reset } = useGuestCartStore();

  const [mutate, { loading }] = useMutation(MERGE_CARTS, {
    onError: (error) => {
      console.log(error);
    },
    onCompleted: () => {
      reset();
    }
  });

  const mutateMergeCarts = ({ cartId }: { cartId: string }) => {
    if (cartId && guestCartId) {
      mutate({
        variables: {
          source_cart_id: guestCartId,
          destination_cart_id: cartId
        }
      });
    }
  };
  return { mutateMergeCarts, loading };
};
