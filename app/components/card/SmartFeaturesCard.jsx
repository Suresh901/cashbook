import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const SmartFeaturesCard = () => {
  return (
    <View className="border border-[#E0E0E0] shadow-sm shadow-black mx-2 bg-white p-5 rounded-xl">
      <Text className="font-bold text-xl mb-6">Smart Features</Text>
      <View className="flex gap-6">
        <TouchableOpacity
          onPress={() => router.push("/pages/docupload")}
          className="flex-row items-center justify-between border-b border-gray-200 pb-4"
        >
          <View className="flex-row items-center gap-5">
            <Ionicons name="cloud-upload-outline" size={22} color="#4B5563" />
            <Text className="text-base text-gray-700">
              Upload Bills & Invoices
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/pages/docscan")}
          className="flex-row items-center justify-between border-b border-gray-200 pb-4"
        >
          <View className="flex-row items-center gap-5">
            <Ionicons name="scan-outline" size={22} color="#4B5563" />
            <Text className="text-base text-gray-700">Scan Receipts</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SmartFeaturesCard;
