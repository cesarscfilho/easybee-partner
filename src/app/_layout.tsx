import { Stack } from "expo-router";
import '@tamagui/core/reset.css'

import { TamaguiProvider } from 'tamagui'

import config from '../tamagui.config'

export default function Layout() {
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