import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, Text } from "react-native";

export default function Button({ onPress }) {
  return (
    <Pressable
      className=" rounded-full bg-primary  flex-row items-center p-2 gap-2"
      onPress={onPress}
    >
      <Ionicons name="add" size={30} color="white" />
      <Text className="text-white">Add new book</Text>
    </Pressable>
  );
}
