import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalComp({ setModalVisible, modalVisible }) {
  return (
    <Modal
      transparent={false}
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white" }}
        edges={["top", "left", "right"]}
      >
        <View className="flex-1 p-6 relative">
          <Pressable
            onPress={() => setModalVisible(false)}
            className="absolute top-10 right-4 z-10 bg-red-500 w-8 h-8 rounded-full items-center justify-center"
          >
            <Text className="text-white font-bold">X</Text>
          </Pressable>

          <Text className="text-lg font-semibold mb-4 mt-16">
            Add Cash In Entry
          </Text>

          {/* Your form goes here */}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
