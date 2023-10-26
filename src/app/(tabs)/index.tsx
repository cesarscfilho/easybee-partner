import { useIsFocused } from "@react-navigation/native";
import { ChevronRight } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, H3, Text, XStack, YStack } from "tamagui";

export default function Index() {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <YStack fullscreen paddingTop={insets.top} backgroundColor="$sms">
      <YStack>
        <XStack padding="$3" alignItems="center" justifyContent="space-between">
          <H3 color="$yellow1Dark" fontWeight="bold" marginLeft="$3">
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
            color="$yellow1Dark"
            paddingVertical="$3"
            paddingHorizontal="$3"
            fontWeight="bold"
          >
            Solicitaçõs pendentes
          </Text>
          <YStack
            flex={1}
            backgroundColor="$sms"
            padding="$3"
            justifyContent="center"
          >
            <Button
              onPress={() => router.push(`/(tabs)/pending`)}
              theme="green_active"
              height={"$8"}
            >
              Você possui 2 contratos pendentes
              <ChevronRight />
            </Button>
          </YStack>
        </YStack>
        <YStack flexGrow={2}>
          <Text
            backgroundColor="$sms"
            color="$yellow1Dark"
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
