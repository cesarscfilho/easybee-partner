import {
  ChevronRight,
  UserCircle,
  Wrench,
  Mail,
  MapPin,
  Wallet,
  LogOut,
} from "@tamagui/lucide-icons";
import { H3, ListItem, Separator, YStack } from "tamagui";

import { UserAvatar } from "@/components/use-avatar";

export default function Index() {
  return (
    <YStack fullscreen padding="$3" space="$3">
      <YStack alignItems="center" space="$3">
        <UserAvatar />
        <H3>Cesar Silva</H3>
      </YStack>
      <YStack paddingTop="$5" separator={<Separator />}>
        <ListItem
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
          title="Email"
          subTitle="cesar@gmail.com"
          icon={Mail}
          iconAfter={ChevronRight}
        />

        <ListItem
          title="Endereço"
          subTitle="Av, Hugo Musso 2380"
          icon={MapPin}
          iconAfter={ChevronRight}
        />

        <ListItem
          title="Dados Bancários"
          subTitle="Pix, Cartão de Crédito"
          icon={Wallet}
          iconAfter={ChevronRight}
        />

        <ListItem hoverTheme icon={LogOut} iconAfter={ChevronRight}>
          Sair
        </ListItem>
      </YStack>
    </YStack>
  );
}
