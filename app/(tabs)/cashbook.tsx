import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TransactionItem from "../components/items/TransactionItem";
import { useTransactionStore } from "../store/store";

export default function Cashbook() {
  const transactions = useTransactionStore((state) => state.transactions);

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    setSearchQuery("");
  };

  const filteredTransactions = transactions.filter((txn) => {
    const query = searchQuery.toLowerCase();
    return (
      txn.purpose.toLowerCase().includes(query) ||
      txn.remarks.toLowerCase().includes(query) ||
      txn.amount.toString().includes(query)
    );
  });

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="p-4 bg-white shadow-sm flex-row justify-between items-center">
        <View>
          <Text className="text-lg font-semibold">Cash Book</Text>
          <Text className="text-xs text-gray-600">
            {transactions.length} Transactions
          </Text>
        </View>
        <TouchableOpacity onPress={toggleSearch}>
          <Ionicons name="search" size={20} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      {searchVisible && (
        <View className="px-4 py-2 bg-white shadow-sm border border-gray-300 flex-row justify-between items-center m-2 rounded-lg">
          <TextInput
            className="rounded px-1 py-2 flex-1"
            placeholder="Search by purpose, remarks or amount"
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity onPress={toggleSearch}>
            <Ionicons name="close" size={20} />
          </TouchableOpacity>
        </View>
      )}

      {/* Content */}
      <View className="mx-4 mt-4">
        {filteredTransactions.length === 0 ? (
          <Text className="text-center text-gray-400 mt-10">
            No transaction found.
          </Text>
        ) : (
          <FlatList
            data={filteredTransactions}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <TransactionItem
                purpose={item.purpose}
                remarks={item.remarks}
                amount={item.amount}
                date={item.date}
                type={item.type}
              />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </View>
  );
}
