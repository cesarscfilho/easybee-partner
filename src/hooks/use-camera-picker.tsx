import * as ImagePicker from "expo-image-picker";
import React from "react";

interface ImagePickerResponse {
  image: string | null;
  pickImageCamera: () => Promise<void>;
  result: ImagePicker.ImagePickerSuccessResult | null;
}

export function useCamera(): ImagePickerResponse {
  const [image, setImage] = React.useState<string | null>(null);
  const [result, setResult] =
    React.useState<ImagePicker.ImagePickerSuccessResult | null>(null);

  const pickImageCamera = async (): Promise<void> => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert(
        "Você precisa permitir o acesso à câmera para prosseguir com o cadastro, pois as fotos dos documentos são obrigatórias.",
      );
      return;
    }

    const pickerResult = await ImagePicker.launchCameraAsync();

    if (!pickerResult.canceled) {
      setImage(pickerResult.assets[0].uri);
      setResult(pickerResult);
    }
  };

  return { image, pickImageCamera, result };
}
