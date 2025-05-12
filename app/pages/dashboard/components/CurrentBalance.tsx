import React from "react";
import { Text, View } from "react-native";

export default function CurrentBalance() {
  return (
    <View className="bg-primary px-5 py-8 mx-2 rounded-md flex-col gap-3">
      <Text className="text-white text-lg font-semibold">Current Balance</Text>
      <Text className="text-white text-2xl font-bold">Rs 5000</Text>
    </View>
  );
}
