import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { handleErrors } from "@/lib/utils/handleErrors";
import { usePlaceOrderErrorMessages } from "@/hooks/placeOrder/usePlaceOrderErrors";
import { useCartStore } from "@/store/cart-store";
import { useGuestCartStore } from "@/store/guest-cart-store";
import { gql } from "@/__generated__";

export interface useHandlePlaceOrderProps {
  cartId: string | undefined;
  paymentMethod: string | undefined;
  refetch: () => void;
}

export const noMolliePaymentMethods = [
  "checkmo",
  "cashondelivery",
  "banktransfer",
  "free",
];

const PLACE_ORDER = gql(/* GraphQL */ `
  mutation placeOrderMutation($input: PlaceOrderInput) {
    placeOrder(input: $input) {
      order {
        order_number
        mollie_payment_token
        mollie_redirect_url
      }
    }
  }
`);

export const useHandlePlaceOrder = ({
  cartId,
  paymentMethod,
  refetch,
}: useHandlePlaceOrderProps) => {
  const router = useRouter();
  const { placeOrderMessages, setPaymentMethodMessages } =
    usePlaceOrderErrorMessages();
  const { reset } = useCartStore();
  const { reset: resetGuest } = useGuestCartStore();

  const handlePlaceOrder = () => {
    if (cartId) {
      mutatePlaceOrder({
        variables: {
          input: {
            cart_id: cartId,
          },
        },
      });
    } else {
      toast.error(setPaymentMethodMessages.default.message);
    }
  };

  const [mutatePlaceOrder, { loading }] = useMutation(PLACE_ORDER, {
    onError: (error) => {
      handleErrors(error, placeOrderMessages);
      console.error("mutatePlaceOrder", error);
    },
    onCompleted: (data) => {
      if (data.placeOrder?.order.mollie_redirect_url) {
        router.push(data.placeOrder?.order.mollie_redirect_url);
      }

      const isValidStatus =
        paymentMethod &&
        Object.values(noMolliePaymentMethods).includes(paymentMethod);

      if (paymentMethod && noMolliePaymentMethods.includes(paymentMethod)) {
        router.push(
          `/cart/summary?order_id=${
            data.placeOrder?.order.order_number
          }&payment_token=${isValidStatus ? paymentMethod : "default"}`
        );
      }
      reset();
      resetGuest();
      refetch();
    },
  });
  return { handlePlaceOrder, loading };
};
