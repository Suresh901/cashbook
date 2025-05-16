import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function DocScanPage() {
  const [name, setName] = useState("");
  const [size, setSize] = useState(0);
  const [uri, setUri] = useState("");

  const selectDoc = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        // for all file types
      });
      // console.log(result);

      if (!result.canceled) {
        const { name, size, uri } = result.assets[0];
        setName(name);
        setSize(size);
        setUri(uri);
      }
    } catch (error) {
      Alert.alert("Error", "Could not select document");
      console.error("Document Picker Error:", error);
    }
  };

  const handleUpload = () => {
    if (!uri) {
      return Alert.alert("No file selected", "Please choose a file first.");
    }

    // You can now use file.uri to upload the file
    Alert.alert("Upload", `Uploading file: ${name}`);
    console.log("Ready to upload:", uri);
  };

  return (
    <View className="flex-1 bg-white px-6 py-10">
      <Text className="text-2xl font-bold mb-6">Upload Document</Text>

      <View className="border border-dashed border-gray-400 rounded-xl h-60 justify-center items-center mb-6 bg-gray-50">
        <Ionicons name="document-outline" size={48} color="#9CA3AF" />
        <Text className="text-gray-400 mt-4">
          {name ? name : "No document uploaded"}
        </Text>
      </View>

      <TouchableOpacity
        className="bg-blue-600 rounded-xl py-4 items-center"
        onPress={selectDoc}
      >
        <Text className="text-white font-semibold text-base">Choose File</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-green-600 rounded-xl py-4 items-center mt-4"
        onPress={handleUpload}
      >
        <Text className="text-white font-semibold text-base">Upload</Text>
      </TouchableOpacity>
    </View>
  );
}
