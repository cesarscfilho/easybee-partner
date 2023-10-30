import { Image } from "expo-image";
import { Separator, Text, View, XStack, YStack } from "tamagui";

export default function Documents() {
  return (
    <YStack fullscreen padding="$5" space="$7">
      <View
        backgroundColor="$red5Dark"
        padding="$4"
        alignSelf="center"
        borderRadius="$3"
      >
        <Text>Para editar entre em contado com a Easybee</Text>
      </View>

      <YStack separator={<Separator />} space="$5">
        <XStack alignItems="center">
          <Image
            accessibilityLabel="Cam"
            source={require("@/assets/empty_document.svg")}
            style={{ width: 117, height: 105 }}
          />

          <Text>Frente do documento (RG ou CNH)</Text>
        </XStack>
      </YStack>
    </YStack>
  );
}
