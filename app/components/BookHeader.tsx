import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const BooksHeader = () => {
  return (
    <View className="flex flex-row items-center justify-between pt-5">
      <Text className="text-lg">Your Books</Text>
      <Ionicons name="search" size={22} color="black" />
    </View>
  );
};

export default BooksHeader;
