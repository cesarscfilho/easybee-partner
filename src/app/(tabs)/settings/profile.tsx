import { H3, YStack } from "tamagui";

import { UpdateProfileForm } from "@/components/forms/update-profile-form";

export default function Profile() {
  return (
    <YStack fullscreen padding="$3" space="$6">
      <H3>Atualizar perfil</H3>
      <UpdateProfileForm />
    </YStack>
  );
}
