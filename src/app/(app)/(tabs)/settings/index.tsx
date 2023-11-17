import {
  ChevronRight,
  UserCircle,
  Wrench,
  MapPin,
  Wallet,
  LogOut,
  CreditCard,
} from "@tamagui/lucide-icons";
import { Redirect, useRouter } from "expo-router";
import React from "react";
import { H3, ListItem, Separator, YStack } from "tamagui";

import { UserAvatar } from "@/components/use-avatar";
import { usePartner } from "@/hooks/data/use-partner";
import { useAuth } from "@/hooks/use-auth";

export default function Index() {
  const router = useRouter();
  const { signOut, user } = useAuth();

  if (!user) return <Redirect href="/sign-in" />;

  const { partner } = usePartner();

  if (!partner) return null;

  return (
    <YStack fullscreen padding="$3">
      <YStack alignItems="center" space="$3">
        <UserAvatar
          imageUri={partner.personal_document.profile_photo.url ?? null}
        />
        <H3>{partner.name}</H3>
      </YStack>
      <YStack paddingTop="$5" separator={<Separator />}>
        <ListItem
          onPress={() => router.push(`/(tabs)/settings/profile`)}
          title="Perfil"
          subTitle="(27) 12345-6789"
          icon={UserCircle}
          iconAfter={ChevronRight}
        />

        <ListItem
          title="Serviços"
          subTitle="Diarista, Faxineiro"
          icon={Wrench}
          iconAfter={ChevronRight}
        />

        <ListItem
          title="Endereço"
          subTitle="Av, Hugo Musso 2380"
          icon={MapPin}
          iconAfter={ChevronRight}
        />

        <ListItem
          onPress={() => router.push(`/(tabs)/settings/bank-informations`)}
          title="Dados Bancários"
          subTitle="Pix, Cartão de Crédito"
          icon={Wallet}
          iconAfter={ChevronRight}
        />

        <ListItem
          onPress={() => router.push(`/(tabs)/settings/documents`)}
          title="Documentos Pessoais"
          subTitle="RG, CNH"
          icon={CreditCard}
          iconAfter={ChevronRight}
        />

        <ListItem
          onPress={() => signOut()}
          theme="red_active"
          hoverTheme
          icon={LogOut}
          iconAfter={ChevronRight}
        >
          Sair
        </ListItem>
      </YStack>
    </YStack>
  );
}
