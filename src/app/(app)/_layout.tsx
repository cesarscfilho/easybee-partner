import { Redirect, Stack } from "expo-router";
import React from "react";

import { LoadingMessage } from "@/components/loading/loading-message";
import { useAuth } from "@/hooks/use-auth";

export default function AppLayout() {
  const { token, isLoading, user } = useAuth();

  if (isLoading) {
    return <LoadingMessage message="Carregando" />;
  }

  if (!token) {
    return <Redirect href="/sign-in" />;
  }

  if (token && !user) {
    return <LoadingMessage message="Carregando suas informações" />;
  }

  // if (user?.confirmation_code === "") {
  //   return <Redirect href="/confirm-code" />;
  // }

  return <Stack screenOptions={{ headerShown: false }} />;
}
