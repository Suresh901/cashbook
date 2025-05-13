import { useTransactionStore } from "@/app/store/store";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import DatePicker from "./DatePicker";

type EntryFormProps = {
  type: "in" | "out";
};

const EntryForm: React.FC<EntryFormProps> = ({ type }) => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [purpose, setPurpose] = useState("");
  const [paymentMode, setPaymentMode] = useState<string | null>(null);

  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const paymentOptions = [
    { key: "1", value: "Cash" },
    { key: "2", value: "Bank (Fund Transfer)" },
    { key: "3", value: "QR" },
    { key: "4", value: "Card Payment" },
    { key: "5", value: "Credit" },
  ];

  const handleSubmit = () => {
    if (!amount || !remarks || !purpose) {
      Alert.alert("Missing Fields", "Please fill all required fields.");
      return;
    }

    addTransaction({
      date,
      amount,
      remarks,
      purpose,
      paymentMode,
      type,
    });

    router.push("/(tabs)");
  };

  return (
    <ScrollView className="flex-1 px-4 pt-5">
      {/* Date */}
      <DatePicker date={date} setDate={setDate} />

      {/* Amount Input */}
      <View className="mb-4">
        <Text className="text-gray-600 mb-1">
          Amount <Text className="text-red-500">*</Text>
        </Text>
        <TextInput
          className="border border-gray-300 rounded-md px-3 py-3 text-base"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="Enter amount"
          placeholderTextColor="#888"
        />
      </View>

      {/* Remarks */}
      <View className="mb-4">
        <Text className="text-gray-600 mb-1">
          Remarks <Text className="text-red-500">*</Text>
        </Text>
        <TextInput
          className="border border-gray-300 rounded-md px-3 py-3 text-base text-gray-700"
          value={remarks}
          onChangeText={setRemarks}
          placeholder="Enter remarks"
          placeholderTextColor="#888"
        />
      </View>

      {/* Purpose */}
      <View className="mb-4">
        <Text className="text-gray-600 mb-1">
          Purpose <Text className="text-red-500">*</Text>
        </Text>
        <TextInput
          className="border border-gray-300 rounded-md px-3 py-3 text-base text-gray-700"
          value={purpose}
          onChangeText={setPurpose}
          placeholder="Enter purpose"
          placeholderTextColor="#888"
        />
      </View>

      {/* Payment Mode */}
      <View className="mb-4">
        <Text className="text-gray-600 mb-2">Payment Mode</Text>
        <SelectList
          setSelected={setPaymentMode}
          data={paymentOptions}
          boxStyles={{ borderColor: "#ccc" }}
          dropdownStyles={{ borderColor: "#ccc" }}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity
        className="bg-primary rounded-md py-4 mt-4"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center font-medium text-lg">SAVE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EntryForm;
