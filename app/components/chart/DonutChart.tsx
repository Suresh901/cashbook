import React from "react";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function DonutChart() {
  const pieData = [
    { value: 54, color: "#177AD5", text: "54%" },
    { value: 20, color: "#ED6665", text: "56%" },
  ];

  return (
    <View
      style={{
        alignItems: "center",
      }}
      className="border border-[#E0E0E0] shadow-sm shadow-black mx-2 bg-[#FFFFFF] p-10 rounded-xl"
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 12,
          color: "#000",
        }}
      >
        Donut Chart
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
