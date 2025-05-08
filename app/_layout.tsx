import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitialLayout from "./(auth)/InitialLayout";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
