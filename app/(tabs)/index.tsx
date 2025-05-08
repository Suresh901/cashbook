import React from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <Text>{item.id}</Text>;
        }}
        ListHeaderComponent={() => {
          return (
            <View className=" ">
              <View className="items-start w-48 h-20 border ">
                <Image
                  source={require("../../assets/images/logo.png")}
                  className="h-full w-full"
                  resizeMode="contain"
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
