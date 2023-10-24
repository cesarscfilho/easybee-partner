import { YStack, H3 } from "tamagui";

import { SignUpForm } from "@/components/forms/signup-form";

export default function SignIn() {
  return (
    <YStack fullscreen space="$10" padding="$5">
      <H3 alignSelf="center">Informações pessoais</H3>

      <SignUpForm />
    </YStack>
  );
}
