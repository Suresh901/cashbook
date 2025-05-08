import { useSSO } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

const login = () => {
  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });
      if (setActive && createdSessionId) {
        setActive!({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error("OAuth error:", error);
    }
  };
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      keyboardVerticalOffset={60}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex flex-col items-center justify-center gap-5 h-full px-4">
          <View>
            <Image
              source={require("../../assets/images/login.png")}
              className="w-96 h-96"
              resizeMode="contain"
            />
          </View>

          <View className="flex flex-col gap-2 items-center">
            <Text className="text-3xl font-bold">Welcome</Text>
            <Text className="text-xl">Login With mobile number</Text>
          </View>

          <View className="flex-row items-center gap-2 px-4 w-full">
            <View className="border border-gray-300 p-4 rounded-xl">
              <Text className="text-base text-gray-700">+977</Text>
            </View>

            <TextInput
              className="border border-gray-300 p-4 flex-1 rounded-xl"
              placeholder="Enter mobile number"
              placeholderTextColor="#959399"
              keyboardType="phone-pad"
            />
          </View>

          <View>
            <Pressable className="border border-gray-300 px-4 py-3 rounded-lg bg-green-500">
              <Text className="text-white text-xl">Send OTP</Text>
            </Pressable>
          </View>

          <View className="flex flex-col gap-3">
            <Text className="text-center text-xl">OR</Text>
            <View>
              <Pressable
                className="border border-gray-300 px-4 py-3 rounded-lg flex-row gap-3 items-center"
                onPress={handleGoogleSignIn}
              >
                <Ionicons name="logo-google" size={28} color="#000" />
                <Text className="text-xl">Continue With Google</Text>
              </Pressable>
            </View>
          </View>
          <Text className="text-center text-sm text-gray-500">
            By continuing, you agree to our Terms and Privacy Policy
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default login;
