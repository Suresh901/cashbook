import React from "react";
import { ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function LineCharts({ period }) {
  const getLineData = () => {
    switch (period) {
      case "daily":
        return {
          data1: [
            { value: 5, dataPointText: "5" },
            { value: 12, dataPointText: "12" },
            { value: 9, dataPointText: "9" },
            { value: 7, dataPointText: "7" },
          ],
          data2: [
            { value: 4, dataPointText: "4" },
            { value: 10, dataPointText: "10" },
            { value: 6, dataPointText: "6" },
            { value: 8, dataPointText: "8" },
          ],
        };
      case "monthly":
        return {
          data1: [
            { value: 20, dataPointText: "20" },
            { value: 35, dataPointText: "35" },
            { value: 30, dataPointText: "30" },
            { value: 40, dataPointText: "40" },
          ],
          data2: [
            { value: 25, dataPointText: "25" },
            { value: 30, dataPointText: "30" },
            { value: 28, dataPointText: "28" },
            { value: 35, dataPointText: "35" },
          ],
        };
      case "quarterly":
        return {
          data1: [
            { value: 50, dataPointText: "50" },
            { value: 60, dataPointText: "60" },
            { value: 70, dataPointText: "70" },
          ],
          data2: [
            { value: 45, dataPointText: "45" },
            { value: 55, dataPointText: "55" },
            { value: 65, dataPointText: "65" },
          ],
        };
      case "custom":
        return {
          data1: [
            { value: 10, dataPointText: "10" },
            { value: 30, dataPointText: "30" },
            { value: 25, dataPointText: "25" },
          ],
          data2: [
            { value: 8, dataPointText: "8" },
            { value: 22, dataPointText: "22" },
            { value: 20, dataPointText: "20" },
          ],
        };
      default:
        return { data1: [], data2: [] };
    }
  };

  const { data1, data2 } = getLineData();

  return (
    <View className="border border-[#E0E0E0] shadow-sm shadow-black mx-2 bg-[#FFFFFF] p-5 rounded-xl">
      <Text className="text-lg font-bold text-black text-center mb-4">
        Line Chart - {period.charAt(0).toUpperCase() + period.slice(1)}
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator>
        <LineChart
          data={data1}
          data2={data2}
          height={240}
          width={data1.length * 80}
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
