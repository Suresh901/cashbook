import React from "react";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function DonutChart({ period }) {
  const getPieData = () => {
    switch (period) {
      case "daily":
        return [
          { value: 30, color: "#177AD5", text: "30%" },
          { value: 70, color: "#ED6665", text: "70%" },
        ];
      case "monthly":
        return [
          { value: 60, color: "#177AD5", text: "60%" },
          { value: 40, color: "#ED6665", text: "40%" },
        ];
      case "quarterly":
        return [
          { value: 45, color: "#177AD5", text: "45%" },
          { value: 55, color: "#ED6665", text: "55%" },
        ];
      case "custom":
        return [
          { value: 50, color: "#177AD5", text: "50%" },
          { value: 50, color: "#ED6665", text: "50%" },
        ];
      default:
        return [];
    }
  };

  const pieData = getPieData();

  return (
    <View className="border border-[#E0E0E0] shadow-sm shadow-black mx-2 bg-[#FFFFFF] p-10 rounded-xl items-center">
      <Text className="text-lg font-bold text-black mb-4">
        Donut Chart - {period.charAt(0).toUpperCase() + period.slice(1)}
      </Text>

      <PieChart
        donut
        innerRadius={40}
        radius={100}
        showText
        textColor="white"
        textSize={15}
        data={pieData}
      />
    </View>
  );
}
