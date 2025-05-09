import { Text, TouchableOpacity, View } from "react-native";
import { ChevronRight } from "react-native-feather";

export default function BalanceCard() {
  return (
    <View className="bg-white mx-4 my-4 rounded-lg shadow-sm p-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-gray-800 font-medium text-base">Net Balance</Text>
        <Text className="text-gray-800 font-medium text-base">0</Text>
      </View>

      <View className="mt-3">
        <View className="flex-row justify-between items-center py-1">
          <Text className="text-gray-600 text-sm">Total In (+)</Text>
          <Text className="text-green-600 text-sm">0</Text>
        </View>
        <View className="flex-row justify-between items-center py-1">
          <Text className="text-gray-600 text-sm">Total Out (-)</Text>
          <Text className="text-red-600 text-sm">0</Text>
        </View>
      </View>

      <TouchableOpacity className="flex-row justify-center items-center pt-2 mt-2">
        <Text className="text-blue-500 font-medium mr-1">VIEW</Text>
        <ChevronRight width={16} height={16} stroke="#3b82f6" />
      </TouchableOpacity>
    </View>
  );
}
