import { Bell, Calendar, Clock, Home, Settings } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Agenda",
          headerShown: false,
          tabBarIcon: ({ color }) => <Calendar color={color} />,
        }}
      />
      <Tabs.Screen
        name="pending"
        options={{
          title: "Solicitações",
          headerShown: false,
          tabBarIcon: ({ color }) => <Clock color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notificações",
          headerShown: false,
          tabBarIcon: ({ color }) => <Bell color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          headerShown: false,
          tabBarIcon: ({ color }) => <Settings color={color} />,
        }}
      />
    </Tabs>
  );
}
