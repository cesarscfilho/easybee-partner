import { YStack, H3, ScrollView } from "tamagui";

import { SignUpForm } from "@/components/forms/signup-form";

export default function SignIn() {
  return (
    <YStack fullscreen paddingHorizontal="$5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <H3 alignSelf="center" paddingVertical="$3">
          Informações pessoais
        </H3>
        <SignUpForm />
      </ScrollView>
    </YStack>
  );
}
