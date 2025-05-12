import React from "react";
import { Text, View } from "react-native";

const TransactionHeader = () => {
  return (
    <View className="flex flex-row items-center justify-between pt-5">
      <Text className="text-lg">Your Recent Transactions</Text>
    </View>
  );
};

export default TransactionHeader;
