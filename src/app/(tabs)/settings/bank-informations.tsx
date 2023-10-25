import { H3, YStack } from "tamagui";

import { UpdateBankInfosForm } from "@/components/forms/update-bank-infos-form";

export default function BankInformations() {
  return (
    <YStack fullscreen padding="$3" space="$6">
      <H3>Atualizar dados bancários</H3>
      <UpdateBankInfosForm />
    </YStack>
  );
}
