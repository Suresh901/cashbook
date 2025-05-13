import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

type TransactionItemProps = {
  purpose: string;
  remarks: string;
  amount: number;
  date: string | Date;
  type: "in" | "out";
};

const TransactionItem: React.FC<TransactionItemProps> = ({
  purpose,
  remarks,
  amount,
  date,
  type,
}) => {
  const isCashIn = type === "in";

  return (
    <View className="border p-3 rounded-md bg-gray-100 mb-3 flex-row justify-between">
      <View className="flex-row gap-3 items-center">
        <View className="border p-2 border-gray-400 rounded-lg bg-gray-100">
          <Ionicons
            name={isCashIn ? "arrow-down-outline" : "arrow-up-outline"}
            size={24}
            color={isCashIn ? "green" : "red"}
          />
        </View>
        <View>
          <Text className="text-lg font-bold text-primary">{purpose}</Text>
          <Text className="text-gray-600 text-xs">{remarks}</Text>
        </View>
      </View>

      <View className="items-end justify-center">
        <Text
          className={`text-lg font-bold ${
            isCashIn ? "text-green-600" : "text-red-500"
          }`}
        >
          {isCashIn ? `Rs. ${amount}` : `- Rs. ${amount}`}
        </Text>
        <Text className="text-gray-500 text-sm">
          {new Date(date).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
};

export default TransactionItem;
