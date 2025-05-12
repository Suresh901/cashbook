import { Text, View } from "react-native";

export default function BalanceCard() {
  return (
    <View className="flex-row justify-between mx-2 my-2">
      {/* Total In */}
      <View className="flex-1 bg-white rounded-lg shadow-sm px-4 py-6 mr-2">
        <Text className="text-gray-600 text-base mb-1">Total In (+)</Text>
        <Text className="text-green-600 text-xl font-semibold">0</Text>
      </View>

      {/* Total Out */}
      <View className="flex-1 bg-white rounded-lg shadow-sm px-4 py-6 ml-2">
        <Text className="text-gray-600 text-base mb-1">Total Out (-)</Text>
        <Text className="text-red-600 text-xl font-semibold">0</Text>
      </View>
    </View>
  );
}
