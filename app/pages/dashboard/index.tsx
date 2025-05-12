import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BalanceCard from "./components/BalanceCard";
import Buttons from "./components/Button";
import CurrentBalance from "./components/CurrentBalance";
import TransactionCard from "./components/TransactionCard";

const transactions = [
  {
    id: 1,
    purpose: "Salary",
    type: "Bank Transfer",
    amount: 5000,
    remarks: "Salary",
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
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Custom Header */}
      <View className="flex-row items-center px-4 py-3 bg-white shadow">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Welcome, {title}</Text>
      </View>

      <ScrollView className="flex-1">
        <BalanceCard />
        <CurrentBalance />

        <View className="px-4 pb-4">
          <Text className="text-gray-500 text-xs pb-1">Showing entries</Text>

          {transactions.length > 0 ? (
            transactions.map((tx) => (
              <TransactionCard
                key={tx.id}
                purpose={tx.purpose}
                type={tx.type}
                amount={tx.amount}
                remarks={tx.remarks}
                date={tx.date}
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

      <Buttons setModalVisible={setModalVisible} />
    </SafeAreaView>
  );
}
