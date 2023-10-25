import { useIsFocused } from "@react-navigation/native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H3, Text, XStack, YStack } from "tamagui";

export default function Index() {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();

  return (
    <YStack fullscreen paddingTop={insets.top} backgroundColor="$sms">
      <YStack>
        <XStack padding="$4" alignItems="center" justifyContent="space-between">
          <H3 color="white" marginLeft="$3">
            Bem vindo, Cesar
          </H3>
          <Image
            style={{ width: 35, height: 30 }}
            source={require("./../../assets/icon_easybee_black.png")}
          />
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
            Solicitaçõs pendentes
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
            Proximos serviços
          </Text>
        </YStack>
      </YStack>
      {isFocused && <StatusBar style="light" />}
    </YStack>
  );
}
