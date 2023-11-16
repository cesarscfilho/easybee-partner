import React from "react";

import { useStorageState } from "@/hooks/use-storage-state";
import { api, setDefaultHeaders } from "@/lib/api";
import { User } from "@/lib/types/user";

export const AuthContext = React.createContext<{
  signIn: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signOut: () => void;
  token: string | null;
  isLoading: boolean;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({
  signIn: async () => {},
  signOut: () => {},
  token: null,
  isLoading: true,
  user: null,
  setUser: () => {},
});

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [[isLoading, token], setSession] = useStorageState("token");
  const [user, setUser] = React.useState<User | null>(null);

  async function signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const res = await api.post("/login", {
      email,
      password,
      user_type: "partner",
    });

    if (res.status === 200) {
      setSession(res.data.token);
      setUser(res.data.account);
    }
  }
  async function getUser() {
    const { data } = await api.get("check_auth");
    setUser(data.account);
  }

  React.useEffect(() => {
    if (token) setDefaultHeaders(token);
  }, [token]);

  // Sync user info
  React.useEffect(() => {
    if (token && !user) getUser();
  }, [token, user]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut: () => {
          setSession(null);
          setUser(null);
        },
        token,
        isLoading,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
