import { Pressable, Text, TextInput, View } from "react-native";
import "../global.css";
export default function Index() {
  return (
    <View className="h-[60vh] flex flex-col items-center justify-center gap-4">
      <Text className="text-xl ">Welcome</Text>
      <Text>Login With Phone number</Text>
      <View className="flex-row items-center space-x-2">
        <TextInput
          className="border border-gray-300  px-3 py-2 w-60"
          placeholder="Enter mobile number"
          placeholderTextColor="#959399"
        />
      </View>
      <View>
        <Pressable className="border border-gray-300 px-4 py-2 rounded-lg bg-green-500 ">
          <Text className="text-white">Send OTP</Text>
        </Pressable>
      </View>
      <Text>By continuing, you agree to our Terms and Privacy Policy</Text>
    </View>
  );
}
