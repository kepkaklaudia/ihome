import { useTranslations } from "next-intl";

export const usePlaceOrderErrorMessages = () => {
  const t = useTranslations("hooks");

  const setBillingAddressMessages = {
    CART_NOT_FOUND: {
      condition: "Could not find a cart",
      message: t("Failed to set shipping address")
    },
    EMPTY_FIELDS: {
      condition: "was not provided",
      message: t("Fill in all the fields")
    },
    PERMISSION_ERROR: {
      condition: "The current user cannot perform operations on cart",
      message: t("You do not have permission")
    },
    default: {
      condition: "default",
      message: t("Failed to set shipping address")
    }
  };

  const setShippingAddressMessages = {
    CART_NOT_FOUND: {
      condition: "Could not find a cart",
      message: t("Failed to set shipping address")
    },
    EMPTY_FIELDS: {
      condition: "was not provided",
      message: t("Fill in all the fields")
    },
    PERMISSION_ERROR: {
      condition: "The current user cannot perform operations on cart",
      message: t("You do not have permission")
    },
    default: {
      condition: "default",
      message: t("Failed to set shipping address")
    }
  };

  const setShippingMethodsMessages = {
    CART_NOT_FOUND: {
      condition: "Could not find a cart",
      message: t("Failed to set shipping method")
    },
    SHIPPING_NOT_FOUND: {
      condition: "Carrier with such method not found",
      message: t("Selected shipping method is unavailable")
    },
    EMPTY_FIELDS: {
      condition: "Required parameter",
      message: t("Failed to set shipping method")
    },
    PERMISSION_ERROR: {
      condition: "The current user cannot perform operations on cart",
      message: t("You do not have permission")
    },
    EMPTY_CART: {
      condition: "Add an item to cart and try again",
      message: t("Failed to set shipping method - the cart is empty")
    },
    MULTIPLE_ERROR: {
      condition: "You cannot specify multiple shipping methods",
      message: t("You can set only one shipping method")
    },
    default: {
      condition: "default",
      message: t("Failed to set shipping method")
    }
  };

  const setPaymentMethodMessages = {
    CART_NOT_FOUND: {
      condition: "Could not find a cart with ID",
      message: t("Failed to find a cart")
    },
    CART_ID_ERROR: {
      condition: `Required parameter "cart_id"`,
      message: t("Failed to read the cart identifier")
    },
    CODE_ERROR: {
      condition: `Required parameter "code"`,
      message: t("Failed to read the code")
    },
    PAYMENT_METHOD_ERROR: {
      condition: "The requested Payment Method is not available",
      message: t("Selected payment method is unavailable")
    },
    SHIPPPING_ERROR: {
      condition: "The shipping address is missing",
      message: t("Failed to read the shipping address")
    },
    default: {
      condition: "default",
      message: t("Failed to set payment method")
    }
  };

  const placeOrderMessages = {
    CART_NOT_FOUND: {
      condition: "Could not find a cart",
      message: t("Failed to place order")
    },
    CART_NOT_ACTIVE: {
      condition: "The cart isn't active",
      message: t("The cart isn't active")
    },
    GUEST_EMAIL_MISSING: {
      condition: "Guest email for cart is missing",
      message: t("Email is required")
    },
    EMPTY_CART: {
      condition: "A server error stopped your order",
      message: t("Failed to place an order - the cart is empty")
    },
    SHIPPING_ERROR: {
      condition: "Some addresses",
      message: t("Incorrect shipping address")
    },
    NO_SHIPPING_METHOD: {
      condition: "The shipping method is missing",
      message: t("The shipping method is missing")
    },
    BILLING_ERROR: {
      condition: "Please check the billing address",
      message: t("The billing address is missing")
    },
    PAYMENT_ERROR: {
      condition: "Enter a valid payment method",
      message: t("The payment method is missing")
    },
    OUT_OF_STOCK: {
      condition: "Some of the products are out of stock",
      message: t("Some of the products are out of stock")
    },
    default: {
      condition: "default",
      message: t("Failed to place order")
    }
  };

  return {
    placeOrderMessages,
    setBillingAddressMessages,
    setShippingAddressMessages,
    setShippingMethodsMessages,
    setPaymentMethodMessages
  };
};
