import { Ionicons } from "@expo/vector-icons"; // Make sure expo/vector-icons is installed
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CashIn from "./CashIn";
import Cashout from "./Cashout";

export default function Index() {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Custom Header */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold ml-4 items-center">
          Add Transaction
        </Text>
      </View>

      {/* Tab Navigator */}
      <Tab.Navigator>
        <Tab.Screen name="Cash In" component={CashIn} />
        <Tab.Screen name="Cash Out" component={Cashout} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
