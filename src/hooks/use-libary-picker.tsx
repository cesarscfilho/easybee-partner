import * as ImagePicker from "expo-image-picker";
import React from "react";

interface ImagePickerResponse {
  image: string | null;
  pickImageLibary: () => Promise<void>;
  result: ImagePicker.ImagePickerSuccessResult | null;
}

export function useLibrary(): ImagePickerResponse {
  const [image, setImage] = React.useState<string | null>(null);
  const [result, setResult] =
    React.useState<ImagePicker.ImagePickerSuccessResult | null>(null);

  const pickImageLibary = async (): Promise<void> => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert(
        "Você precisa permitir o acesso à biblioteca de mídia para prosseguir com o cadastro, pois as fotos dos documentos são obrigatórias.",
      );
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setImage(pickerResult.assets[0].uri);
      setResult(pickerResult);
    }
  };

  return { image, pickImageLibary, result };
}
