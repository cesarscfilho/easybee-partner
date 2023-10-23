import {
  Home,
} from "@tamagui/lucide-icons";
  
  import { Tabs } from "expo-router";
  
  export default function Layout() {
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
      </Tabs>
    );
  }