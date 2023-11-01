import React from "react";

import { useStorageState } from "@/hooks/use-storage-state";
import { api } from "@/lib/api";

export const AuthContext = React.createContext<{
  signIn: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signOut: () => void;
  session: string | null;
  isLoading: boolean;
}>({
  signIn: async () => {},
  signOut: () => {},
  session: null,
  isLoading: true,
});

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
          console.log(res);
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
