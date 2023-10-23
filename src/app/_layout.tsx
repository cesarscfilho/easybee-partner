import '@tamagui/core/reset.css'

import React from "react";
import { Stack } from "expo-router";
import { TamaguiProvider } from 'tamagui'

import { AppState, useColorScheme } from "react-native";

import config from '../tamagui.config'
import { useFonts } from "expo-font";

export default function Layout() {
    const appState = React.useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = React.useState(appState.current);
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
            <Stack>
                <Stack.Screen
                name="(tabs)"
                options={{
                    title: "Home",
                    headerShown: false,
                }}
                />
            </Stack>
        </TamaguiProvider>
    )
}