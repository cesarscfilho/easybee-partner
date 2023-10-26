import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Configurações",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerBackTitle: "Voltar",
        }}
      />
      <Stack.Screen
        name="bank-informations"
        options={{
          title: "Dados Bancários",
          headerBackTitle: "Voltar",
        }}
      />
      <Stack.Screen
        name="documents"
        options={{
          title: "Documentos Pessoais",
          headerBackTitle: "Voltar",
        }}
      />
    </Stack>
  );
}
