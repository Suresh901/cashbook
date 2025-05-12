import { Text, View } from "react-native";

export default function TransactionCard({
  purpose,
  type,
  amount,
  remarks,
  date,
}) {
  const amountColor = amount > 0 ? "text-green-600" : "text-red-600";

  return (
    <View className="bg-white mb-2 rounded">
      <View className="p-3">
        <View className="flex-row justify-between mb-1">
          <View className="flex-row gap-2">
            <View className="bg-purple-100 rounded-md px-2 py-1">
              <Text className="text-purple-700 text-xs">{purpose}</Text>
            </View>
            <View className="bg-blue-100 rounded-md px-2 py-1">
              <Text className="text-blue-700 text-xs">{type}</Text>
            </View>
          </View>
          <Text className={`font-medium ${amountColor}`}>{amount}</Text>
        </View>
        <Text className="text-gray-800 text-sm mb-1">{remarks}</Text>

        <View className="flex-row mt-2">
          <Text className="text-gray-500 text-xs ml-2">{date}</Text>
        </View>
      </View>
    </View>
  );
}
