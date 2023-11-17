import { TamaguiProvider, Theme } from "@tamagui/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppState, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SessionProvider } from "@/providers/auth-provider";
import { NavigationThemeProvider } from "@/providers/navigation-theme-provider";
import config from "@/tamagui.config";

export default function Root() {
  const appState = React.useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = React.useState(
    appState.current,
  );
  const colorScheme = useColorScheme();
  const [activeColorScheme, setActiveColorScheme] = React.useState(colorScheme);

  React.useEffect(() => {
    if (appStateVisible === "active") {
      setActiveColorScheme(colorScheme);
    }
  }, [appStateVisible, colorScheme]);

  React.useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  const queryClient = new QueryClient();

  return (
    <TamaguiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Theme name={"dark"}>
          <NavigationThemeProvider>
            <SessionProvider>
              <SafeAreaProvider>
                <StatusBar style="light" />
                <Slot />
              </SafeAreaProvider>
            </SessionProvider>
          </NavigationThemeProvider>
        </Theme>
      </QueryClientProvider>
    </TamaguiProvider>
  );
}
