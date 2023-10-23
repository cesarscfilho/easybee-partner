import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H3, Text, XStack, YStack } from "tamagui";

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
      >
        <YStack height={170}>
          <Text
            backgroundColor="$sms"
            color="white"
            paddingVertical="$3"
            paddingHorizontal="$3"
            fontWeight="bold"
          >
            Proximos serviços
          </Text>
          <YStack flex={1} overflow="hidden" backgroundColor="$sms"></YStack>
        </YStack>
        <YStack flexGrow={2}>
          <Text
            backgroundColor="$sms"
            color="white"
            paddingVertical="$3"
            paddingHorizontal="$3"
            fontWeight="bold"
          >
            Solicitaçõs pendentes
          </Text>
        </YStack>
      </YStack>
      {isFocused && <StatusBar style="light" />}
    </YStack>
  );
}
