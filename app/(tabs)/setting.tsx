import { useAuth } from "@clerk/clerk-expo";
import React from "react";
import { Text, View } from "react-native";
import LogoutButton from "../components/button/LogOutBtn";
import DataManagementCard from "../components/card/DataManagementCard";
import SmartFeaturesCard from "../components/card/SmartFeaturesCard";

const profile = () => {
  const { signOut } = useAuth();
  return (
    <View className="flex gap-5">
      <View className="p-4 bg-white shadow-sm">
        <Text className="text-lg font-semibold">Setting</Text>
      </View>
      <SmartFeaturesCard />
      <DataManagementCard />
      <LogoutButton />
    </View>
  );
};

export default profile;
