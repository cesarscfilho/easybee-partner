import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

import { useStorageState } from "@/hooks/use-storage-state";
import { api } from "@/lib/api";
export const AuthContext = React.createContext<{
  signIn: ({ email, password }: { email: string; password: string }) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => {},
  signOut: () => {},
  session: null,
  isLoading: true,
});

export const saveToken = async (token: string) =>
  await AsyncStorage.setItem("@EASYBEE:token", token);
export const getToken = async () =>
  await AsyncStorage.getItem("@EASYBEE:token");
export const clearToken = async () =>
  await AsyncStorage.removeItem("@EASYBEE:token");

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: async ({
          email,
          password,
        }: {
          email: string;
          password: string;
        }) => {
          const res = await api.post("/login", {
            email,
            password,
            user_type: "partner",
          });

          if (res.status === 200) {
            setSession(res.data.token);
          }
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
