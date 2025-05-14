import React from "react";
import { Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const BarCharts = ({ period }) => {
  // Sample data based on the period
  const getBarData = () => {
    switch (period) {
      case "daily":
        return [
          {
            value: 10,
            label: "Mon",
            frontColor: "#177AD5",
            labelTextStyle: { color: "black" },
          },
          {
            value: 20,
            label: "Tue",
            frontColor: "#ED6665",
            labelTextStyle: { color: "black" },
          },
          {
            value: 30,
            label: "Wed",
            frontColor: "#177AD5",
            labelTextStyle: { color: "black" },
          },
          {
            value: 25,
            label: "Thu",
            frontColor: "#ED6665",
            labelTextStyle: { color: "black" },
          },
          {
            value: 15,
            label: "Fri",
            frontColor: "#177AD5",
            labelTextStyle: { color: "black" },
          },
        ];
      case "monthly":
        return [
          {
            value: 40,
            label: "Jan",
            frontColor: "#177AD5",
            labelTextStyle: { color: "black" },
          },
          {
            value: 20,
            label: "Feb",
            frontColor: "#ED6665",
            labelTextStyle: { color: "black" },
          },
          {
            value: 50,
            label: "Mar",
            frontColor: "#177AD5",
            labelTextStyle: { color: "black" },
          },
        ];
      case "quarterly":
        return [
          {
            value: 80,
            label: "Q1",
            frontColor: "#177AD5",
            labelTextStyle: { color: "black" },
          },
          {
            value: 60,
            label: "Q2",
            frontColor: "#ED6665",
            labelTextStyle: { color: "black" },
          },
        ];
      case "custom":
        return [
          {
            value: 35,
            label: "W1",
            frontColor: "#177AD5",
            labelTextStyle: { color: "black" },
          },
          {
            value: 50,
            label: "W2",
            frontColor: "#ED6665",
            labelTextStyle: { color: "black" },
          },
          {
            value: 40,
            label: "W3",
            frontColor: "#177AD5",
            labelTextStyle: { color: "black" },
          },
        ];
      default:
        return [];
    }
  };

  const barData = getBarData();

  return (
    <View className="border border-[#E0E0E0] shadow-sm shadow-black mx-2 bg-[#FFFFFF] p-10 rounded-xl">
      <Text className="text-black text-lg font-bold text-center mb-5">
        BarChart - {period.charAt(0).toUpperCase() + period.slice(1)}
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
        maxValue={100}
      />
    </View>
  );
};

export default BarCharts;
