import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  DateTimePickerAndroid,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar, ChevronDown } from "react-native-feather";

export default function DatePicker() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const openDatePicker = () => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: "date",
        is24Hour: true,
      });
    } else {
      setShowPicker(true);
    }
  };

  return (
    <View className="mb-4">
      <TouchableOpacity
        onPress={openDatePicker}
        className="flex-row items-center justify-between border border-gray-300 rounded-md px-2 py-3"
      >
        <View className="flex-row gap-2">
          <Calendar stroke="#666" width={20} height={20} />
          <Text className="ml-2 text-gray-700">
            {date.toLocaleDateString()}
          </Text>
        </View>
        <ChevronDown stroke="#666" width={16} height={16} className="ml-auto" />
      </TouchableOpacity>

      {showPicker && Platform.OS === "ios" && (
        <View className="mt-2 bg-white rounded-md p-2">
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={onChange}
            themeVariant="light"
          />
        </View>
      )}
    </View>
  );
}
