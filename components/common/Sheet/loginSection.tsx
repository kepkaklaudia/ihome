import React from "react";
import { LogOut, LogIn } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useHandleLogout } from "@/hooks/useHandleLogout";
import { useAuth } from "@/providers/auth";
import Image from "next/image";

export const LoginSection = () => {
  const t = useTranslations("common.sheet");
  const { isAuthenticated, user } = useAuth();

  const iconClass =
    "w-5 h-auto stroke-greyIcons hover:stroke-red transition-colors";

  const { handleLogout, isLogoutLoading } = useHandleLogout();

  return (
    <button
      onClick={handleLogout}
      className={cn(
        "focus-style grid grid-cols-[auto_1fr_auto] rounded-ee-lg bg-sand items-center gap-4 p-4 text-left border-t cursor-pointer",
        isLogoutLoading && "opacity-50 pointer-events-none"
      )}
    >
      <Image
        width={40}
        height={40}
        className="fill-red hover:scale-[105%] transition-transform duration-500"
        alt="logo"
        src="/logo-black.png"
      />
      <>
        <div className="flex flex-col">
          {isAuthenticated ? (
            <>
              <p className="font-bold italic text-sm">{user?.firstname}</p>
              <p className="text-xs">{user?.email}</p>
            </>
          ) : (
            <p className="font-semibold text-sm flex gap-2 p-2.5 hover:text-red transition-colors">
              {t("Log in")}
            </p>
          )}
        </div>
        {isAuthenticated ? (
          <LogOut className={iconClass} />
        ) : (
          <LogIn className={iconClass} />
        )}
      </>
    </button>
  );
};
