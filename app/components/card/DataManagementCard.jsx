import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const DataManagementCard = () => {
  return (
    <View className="border border-[#E0E0E0] shadow-sm shadow-black mx-2 bg-[#FFFFFF] px-5 py-10 rounded-xl">
      <Text className="font-bold text-xl mb-6">Data Management</Text>

      <View className="flex gap-6">
        {/* Export Transactions */}
        <View className="flex-row items-center justify-between border-b border-gray-200 pb-4">
          <View className="flex-row items-center gap-5">
            <Ionicons name="download" size={22} color="#4B5563" />
            <Text className="text-base text-gray-700">
              Export your transaction
            </Text>
          </View>
        </View>

        {/* Clear All Data */}
        <View className="flex-row items-center justify-between border-b border-gray-200 pb-4">
          <View className="flex-row items-center gap-5">
            <Ionicons name="trash-outline" size={22} color="#DC2626" />
            <Text className="text-base text-red-600">Clear all data</Text>
          </View>
        </View>

        {/* Delete Account */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-5">
            <Ionicons name="person-remove-outline" size={22} color="#DC2626" />
            <Text className="text-base text-red-600">Delete Account</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DataManagementCard;
