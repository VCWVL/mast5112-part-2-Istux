import { Stack } from "expo-router";
import { AppProvider } from "../lib/AppContext";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="home" />
        <Stack.Screen name="menu" />
        <Stack.Screen name="add-dish" />
        <Stack.Screen name="remove-dish" />
        <Stack.Screen name="filter" />
        <Stack.Screen name="user-menu" />
        <Stack.Screen name="help" />
      </Stack>
    </AppProvider>
  );
}
