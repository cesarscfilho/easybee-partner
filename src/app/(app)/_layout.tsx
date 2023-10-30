import { Redirect, Stack } from "expo-router";
import React from "react";
import { Text, YStack } from "tamagui";

import { useAuth } from "@/hooks/use-auth";

export default function AppLayout() {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return (
      <YStack
        fullscreen
        alignItems="center"
        justifyContent="center"
        backgroundColor={"$background"}
      >
        <Text>Loading...</Text>
      </YStack>
    );
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
