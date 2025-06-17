import { useState } from "react";
import { useTranslations } from "next-intl";
import { getClient } from "@/lib/graphql/client";
import { useRouter } from "@/lib/i18n/navigation";
import { toast } from "sonner";
import { useTokenStore } from "@/store/tokenStore";
import { useAuth } from "@/providers/auth";
import { useCartStore } from "@/store/cart-store";

export const useHandleLogout = () => {
  const t = useTranslations("hooks");
  const router = useRouter();
  
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);
  const { isAuthenticated } = useAuth();
  const { removeToken } = useTokenStore();
  const { reset } = useCartStore();

  const handleLogout = async () => {
    if (isAuthenticated) {
      const client = getClient();

      await setIsLogoutLoading(true);
      removeToken();
      client.cache.reset();
      await toast({ title: t("You've been logged out") });
      await setIsLogoutLoading(false);
      reset();
      return;
    }

    if (!isAuthenticated) {
      router.push("/login");
    }
  };

  return { handleLogout, isLogoutLoading };
};
