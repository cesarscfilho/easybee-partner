import { Image } from "expo-image";
import { Avatar } from "tamagui";

export function UserAvatar() {
  return (
    <Avatar circular size="$10" backgroundColor="$color">
      <Image
        accessibilityLabel="Cam"
        source="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
        style={{ width: "100%", height: "100%" }}
      />
    </Avatar>
  );
}
