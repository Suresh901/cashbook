import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Button from "../components/button/Button";
import Header from "../components/header/Header";
import TransactionHeader from "../components/header/TransactionHeader";
import TransactionItem from "../components/items/TransactionItem";
import BalanceCard from "../pages/dashboard/components/BalanceCard";
import CurrentBalance from "../pages/dashboard/components/CurrentBalance";
import { useTransactionStore } from "../store/store";

export default function Index() {
  const transactions = useTransactionStore((state) => state.transactions);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header />

        <View className="mx-5 flex flex-col gap-5 mb-20">
          {/* Welcome Section */}
          <Text className="text-xl font-bold mt-4">📚 Welcome!</Text>

          <BalanceCard />
          <CurrentBalance />

          <TransactionHeader />

          {transactions.length === 0 ? (
            <Text className="text-center text-gray-400 mt-10">
              No transaction found.
            </Text>
          ) : (
            <View className="my-5">
              {transactions.map((txn, index) => (
                <TransactionItem
                  key={index}
                  purpose={txn.purpose}
                  remarks={txn.remarks}
                  amount={txn.amount}
                  date={txn.date}
                  type={txn.type}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      {/* Add Button */}
      <View className="absolute bottom-20 right-5">
        <Button onPress={() => router.push("/pages/entry")} />
      </View>
    </SafeAreaView>
  );
}
