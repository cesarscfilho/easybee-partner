import { Image } from "expo-image";
import { Avatar } from "tamagui";

type UserAvatarProps = {
  imageUri: string | null;
};

export function UserAvatar({ imageUri }: UserAvatarProps) {
  return (
    <Avatar circular size="$10" backgroundColor="$color">
      <Image
        accessibilityLabel="Cam"
        source={imageUri ?? ""}
        style={{ width: "100%", height: "100%" }}
      />
    </Avatar>
  );
}
