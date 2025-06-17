"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useGetUser, UseGetUserType } from "@/hooks/useGetUser";
import { ProviderProps } from "./ProviderProps";
import { useTokenStore } from "@/store/tokenStore";
import { NetworkStatus } from "@apollo/client";

type ComplexContextType = Pick<
  UseGetUserType,
  "user" | "error" | "loading" | "refetch" | "networkStatus"
> & { isAuthenticated: boolean };

const AuthContext = createContext<ComplexContextType | null>(null);

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const { token } = useTokenStore();
  const { user, error, loading, refetch, networkStatus } = useGetUser();

  const value = useMemo(() => {
    if (token) {
      return {
        user,
        error,
        loading,
        isAuthenticated: Boolean(user),
        networkStatus,
        // may be helpful when we need to update any user data
        refetch
      };
    }

    return {
      user: null,
      error: undefined,
      loading: false,
      isAuthenticated: false,
      networkStatus: NetworkStatus.ready,
      refetch
    };
  }, [user, error, loading, token]);

  useEffect(() => {
    if (token) refetch();
  }, [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
