import React from "react";
import { Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const barData = [
  {
    value: 40,
    label: "Jan",
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: "black" },
    frontColor: "#177AD5",
  },
  {
    value: 20,
    frontColor: "#ED6665",
  },
];

export default function BarCharts() {
  return (
    <View className="border border-[#E0E0E0] shadow-sm shadow-black mx-2 bg-[#FFFFFF] p-10 rounded-xl">
      <Text className="text-black text-lg font-bold text-center mb-5">
        BarChart
      </Text>

      <View className="flex-row justify-center mb-4">
        <View className="flex-row items-center mr-4">
          <View className="h-3 w-3 rounded-full bg-[#177AD5] mr-2" />
          <Text className="text-black">Point 01</Text>
        </View>
        <View className="flex-row items-center">
          <View className="h-3 w-3 rounded-full bg-[#ED6665] mr-2" />
          <Text className="text-black">Point 02</Text>
        </View>
      </View>

      <BarChart
        data={barData}
        barWidth={12}
        spacing={24}
        roundedTop
        roundedBottom
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{ color: "gray" }}
        noOfSections={3}
        maxValue={75}
      />
    </View>
  );
}
