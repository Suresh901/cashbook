import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import BarCharts from "../components/chart/BarChart";
import DonutChart from "../components/chart/DonutChart";
import LineCharts from "../components/chart/LineChart";
import BalanceCard from "../pages/dashboard/components/BalanceCard";
import CurrentBalance from "../pages/dashboard/components/CurrentBalance";

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("daily");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const renderCharts = () => {
    switch (selectedPeriod) {
      case "daily":
        return (
          <>
            <BarCharts period="daily" />
            <LineCharts period="daily" />
          </>
        );
      case "monthly":
        return (
          <>
            <BarCharts period="monthly" />
            <DonutChart period="monthly" />
          </>
        );
      case "quarterly":
        return (
          <>
            <DonutChart period="quarterly" />
            <LineCharts period="quarterly" />
          </>
        );
      case "custom":
        return (
          <>
            <BarCharts period="custom" />
            <DonutChart period="custom" />
            <LineCharts period="custom" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="p-4 bg-white shadow-sm">
        <Text className="text-lg font-semibold">Analytics</Text>
      </View>

      {/* Time Periods */}
      <View className="flex-row justify-between p-2 mb-1 overflow-hidden">
        {["daily", "monthly", "quarterly", "custom"].map((period) => (
          <TouchableOpacity
            key={period}
            className={`px-3 py-2 rounded-lg ${
              selectedPeriod === period
                ? "bg-primary"
                : "border border-gray-300"
            }`}
            onPress={() => {
              setSelectedPeriod(period);
              setShowDatePicker(period === "custom");
            }}
          >
            <Text
              className={`text-sm ${
                selectedPeriod === period ? "text-white" : "text-gray-700"
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Custom Date Picker */}
      {showDatePicker && (
        <View className="bg-white p-4 rounded-xl shadow mb-4">
          <Text className="text-lg font-medium mb-2">Select Date Range</Text>
          <View className="flex-row justify-between">
            <View className="flex-1 mr-2">
              <Text className="text-gray-500 mb-1">Start Date</Text>
              <TouchableOpacity className="border border-gray-300 rounded-md p-2">
                <Text>Select date</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-gray-500 mb-1">End Date</Text>
              <TouchableOpacity className="border border-gray-300 rounded-md p-2">
                <Text>Select date</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            className="bg-primary rounded-md p-2 mt-4"
            onPress={() => setShowDatePicker(false)}
          >
            <Text className="text-white text-center">Apply</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Scrollable Chart Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <View className="px-4 pt-4 flex-col gap-5">
          <BalanceCard />
          <CurrentBalance />
          {renderCharts()}
        </View>
      </ScrollView>
    </View>
  );
}
