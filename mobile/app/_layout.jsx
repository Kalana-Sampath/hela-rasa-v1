import { Slot } from "expo-router";
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors"
import { StatusBar } from 'expo-status-bar';

export default function RootLayoutNav() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
  <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
    <StatusBar style="light" backgroundColor={COLORS.background} translucent={false} />
    <Slot />
  </SafeAreaView>
</ClerkProvider>

  );
}