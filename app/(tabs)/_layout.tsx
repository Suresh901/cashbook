import React from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { COLORS } from "@/constants/theme"; // Ensure this is defined
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle: {
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
          height: 50,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index" 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
