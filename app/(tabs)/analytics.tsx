import React from "react";
import { ScrollView, Text, View } from "react-native";
import BarChart from "../components/chart/BarChart";
import BalanceCard from "../pages/dashboard/components/BalanceCard";
import CurrentBalance from "../pages/dashboard/components/CurrentBalance";

export default function Analytics() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {/* Header */}
        <View className="p-4 bg-white shadow-sm">
          <Text className="text-lg font-semibold">Analytics</Text>
        </View>

        {/* Content */}
        <View className="px-4 pt-4 flex-col gap-5">
          <BalanceCard />
          <CurrentBalance />

          <BarChart />
        </View>
      </ScrollView>
    </View>
  );
}
