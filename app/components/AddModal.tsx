import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  bookName: string;
  onChange: (text: string) => void;
  onAdd: () => void;
};

export default function AddBookModal({
  visible,
  onClose,
  bookName,
  onChange,
  onAdd,
}: Props) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 items-center justify-center bg-black/50 relative">
        <View className="bg-white p-6 rounded-lg w-80 relative flex-col gap-5">
          <Pressable
            onPress={onClose}
            className="absolute top-2 right-2 z-10 bg-red-500 w-8 h-8 rounded-full items-center justify-center"
          >
            <Ionicons name="close" color="white" size={20} />
          </Pressable>

          <Text className="text-lg font-semibold text-center">
            Add New Book
          </Text>

          <TextInput
            className="w-full p-4 border rounded-lg"
            placeholder="Enter your book name"
            placeholderTextColor="#888"
            value={bookName}
            onChangeText={onChange}
          />

          <Pressable
            onPress={onAdd}
            className="p-4 rounded-lg items-center justify-center bg-primary"
          >
            <Text className="font-bold text-white">Add New Book</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
