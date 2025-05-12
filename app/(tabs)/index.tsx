import { useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";
import TransactionHeader from "../components/TransactionHeader";
import BalanceCard from "../pages/dashboard/components/BalanceCard";
import CurrentBalance from "../pages/dashboard/components/CurrentBalance";

export default function Index() {
  const [transaction, setTransaction] = useState([]);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header />

        <View className="mx-5 flex flex-col gap-5 mb-20">
          {/* Home Welcome */}
          <Text className="text-xl font-bold mt-4">📚 Welcome!</Text>

          <BalanceCard />
          <CurrentBalance />

          <TransactionHeader />

          {transaction.length === 0 && (
            <Text className="text-center text-gray-400 mt-10">
              No transaction found.
            </Text>
          )}
        </View>
      </ScrollView>

      <View className="absolute bottom-20 right-5">
        <Button onPress={() => router.push("/pages/entry")} />
      </View>
    </SafeAreaView>
  );
}
