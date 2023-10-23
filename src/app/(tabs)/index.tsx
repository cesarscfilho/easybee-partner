import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H3, XStack, YStack } from "tamagui";

export default function Index() {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();

  return (
    <YStack fullscreen paddingTop={insets.top} backgroundColor="$sms">
      <YStack>
        <XStack padding="$3" alignItems="center">
          <H3 color="white" marginLeft="$3">
            EasyBee
          </H3>
        </XStack>
      </YStack>
      <YStack
        flexGrow={1}
        backgroundColor="$background"
        borderTopWidth="$1"
        borderTopColor="$background"
      ></YStack>
      {isFocused && <StatusBar style="light" />}
    </YStack>
  );
}
