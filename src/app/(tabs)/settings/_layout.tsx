import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Configurações",
        }}
      />
      <Stack.Screen
        name="bank-informations"
        options={{
          title: "Dados Bancários",
          headerBackTitle: "Voltar",
        }}
      />
    </Stack>
  );
}
