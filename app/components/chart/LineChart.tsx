import React from "react";
import { ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function LineCharts() {
  const lineData = [
    { value: 0, dataPointText: "0" },
    { value: 10, dataPointText: "10" },
    { value: 8, dataPointText: "8" },
  ];

  const lineData2 = [
    { value: 0, dataPointText: "0" },
    { value: 14, dataPointText: "14" },
    { value: 10, dataPointText: "10" },
  ];

  return (
    <View className="border border-[#E0E0E0] shadow-sm shadow-black mx-2 bg-[#FFFFFF] p-5 rounded-xl">
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#000",
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Line Chart
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator>
        <LineChart
          data={lineData}
          data2={lineData2}
          height={240}
          width={lineData.length * 80}
          spacing={44}
          initialSpacing={0}
          color1="skyblue"
          color2="orange"
          textColor1="green"
          dataPointsHeight={6}
          dataPointsWidth={6}
          dataPointsColor1="blue"
          dataPointsColor2="red"
          textShiftY={-2}
          textShiftX={-5}
          textFontSize={13}
        />
      </ScrollView>
    </View>
  );
}
