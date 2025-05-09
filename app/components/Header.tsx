import { Image, View } from "react-native";

export default function Header() {
  return (
    <View>
      <View className="p-2 rounded-xl shadow-sm bg-white">
        <View className="items-start w-48 h-20">
          <Image
            source={require("../../assets/images/logo.png")}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}
