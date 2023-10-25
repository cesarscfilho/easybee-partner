import { ChevronLeft, ChevronRight } from "@tamagui/lucide-icons";
import { H4, ListItem, Separator, Text, XStack, YStack } from "tamagui";

export default function Index() {
  return (
    <YStack padding="$3" fullscreen space="$5">
      <XStack justifyContent="space-around">
        <ChevronLeft />
        <Text fontSize="$8">Dezembro</Text>
        <ChevronRight />
      </XStack>
      <XStack justifyContent="space-around" gap="$2">
        <Text>DOM</Text>
        <Text>SEG</Text>
        <Text>TER</Text>
        <Text>QUA</Text>
        <Text>QUI</Text>
        <Text>SEX</Text>
        <Text>SAB</Text>
      </XStack>
      <XStack justifyContent="space-around">
        <Text backgroundColor="$backgroundFocus" padding="$2">
          24
        </Text>
        <Text backgroundColor="$backgroundFocus" padding="$2">
          25
        </Text>
        <Text backgroundColor="$backgroundFocus" padding="$2">
          26
        </Text>
        <Text backgroundColor="$blue10" padding="$2" borderRadius="$3">
          27
        </Text>
        <Text backgroundColor="$backgroundFocus" padding="$2">
          28
        </Text>
        <Text backgroundColor="$backgroundFocus" padding="$2">
          29
        </Text>
        <Text backgroundColor="$backgroundFocus" padding="$2">
          30
        </Text>
      </XStack>
      <YStack space="$3" paddingTop="$5" separator={<Separator />}>
        <H4 marginBottom="$3">27 de Dezembro de 2023</H4>
        <ListItem iconAfter={ChevronRight}>Lorem weorw werwer</ListItem>
        <ListItem iconAfter={ChevronRight}>Lorem weorw werwer</ListItem>
        <ListItem iconAfter={ChevronRight}>Lorem weorw werwer</ListItem>
      </YStack>
    </YStack>
  );
}
