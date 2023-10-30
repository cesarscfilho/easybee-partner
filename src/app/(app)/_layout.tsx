import { Redirect, Stack } from "expo-router";
import { Text, YStack } from "tamagui";

import { useAuth } from "@/hooks/use-auth";

export default function AppLayout() {
  const { session, isLoading } = useAuth();
  console.log(isLoading, session);
  if (isLoading) {
    return (
      // loading
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
    return <Redirect href="/(auth)/sign-in" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
