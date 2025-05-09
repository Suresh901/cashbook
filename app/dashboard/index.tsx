import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import BalanceCard from "./components/BalanceCard";
import Buttons from "./components/Button";
import TransactionCard from "./components/TransactionCard";

const transactions = [
  {
    id: 1,
    purpose: "Salary",
    type: "Bank Transfer",
    amount: 5000,
    remarks: "April Salary",
    date: "2025-05-09",
  },
  {
    id: 2,
    purpose: "fooding",
    type: "Cash",
    amount: -500,
    remarks: "Food",
    date: "2025-05-10",
  },
];

export default function Dashboard() {
  const { title } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
        <Text className="px-4 py-2 font-bold text-xl">Welcome, {title}</Text>

        <BalanceCard />

        <View className="px-4 pb-4">
          <Text className="text-gray-500 text-xs pb-1">Showing entries</Text>
          <View className="bg-gray-100 py-2">
            <Text className="text-gray-600 text-sm">Today</Text>
          </View>

          {transactions.length > 0 ? (
            transactions.map((tx) => (
              <TransactionCard
                key={tx.id}
                purpose={tx.purpose}
                type={tx.type}
                amount={tx.amount}
                remarks={tx.remarks}
              />
            ))
          ) : (
            <View className="bg-white rounded p-4 mt-2">
              <Text className="text-center text-gray-500">
                No entries found
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <Buttons />
    </SafeAreaView>
  );
}
