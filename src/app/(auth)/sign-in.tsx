import { Image } from "expo-image";
import { Link } from "expo-router";
import { YStack, Button } from "tamagui";

import { SignInForm } from "@/components/forms/signin-form";

export default function SignIn() {
  return (
    <YStack
      fullscreen
      alignItems="center"
      justifyContent="center"
      space="$10"
      padding="$5"
    >
      <Image
        source={require(`../../assets/easybee_logo_yellow.png`)}
        style={{ width: 230, height: 120 }}
      />

      <SignInForm />

      <Link href="/sign-up" asChild>
        <Button width={"100%"}>Cria conta</Button>
      </Link>
    </YStack>
  );
}
