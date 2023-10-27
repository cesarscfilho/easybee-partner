import "@tamagui/core/reset.css";

import { TamaguiProvider, Theme } from "@tamagui/core";
import { useFonts } from "expo-font";
import { Slot, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppState, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SessionProvider, useSession } from "@/providers/auth-provider";
import { NavigationThemeProvider } from "@/providers/navigation-theme-provider";
import config from "@/tamagui.config";

export const unstable_settings = {
  initialRouteName: "onboarding",
};

const AppLayout = () => {
  const session = useSession();
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    if (!session?.isLoading) return;

    const inTabsGroup = segments[0] === "(tabs)";

    if (session?.session && !inTabsGroup) {
      router.replace("/(tabs)");
    } else if (!session?.session) {
      router.replace("/sign-in");
    }
  }, [session?.session]);

  return <Slot />;
};

export default function RootLayout() {
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

  return (
    <TamaguiProvider config={config}>
      <Theme name={"dark"}>
        <NavigationThemeProvider>
          <SessionProvider>
            <SafeAreaProvider>
              <StatusBar style="light" />
              <AppLayout />
            </SafeAreaProvider>
          </SessionProvider>
        </NavigationThemeProvider>
      </Theme>
    </TamaguiProvider>
  );
}
