import { Text, TouchableOpacity, View } from "react-native";
import { Minus, Plus } from "react-native-feather";

export default function Buttons() {
  return (
    <View className="flex-row justify-between px-4 pb-4">
      <TouchableOpacity className="flex-1 bg-green-600 mr-2 rounded-md py-3 flex-row justify-center items-center">
        <Plus width={20} height={20} stroke="#ffffff" />
        <Text className="text-white font-medium ml-1">CASH IN</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-1 bg-red-500 ml-2 rounded-md py-3 flex-row justify-center items-center">
        <Minus width={20} height={20} stroke="#ffffff" />
        <Text className="text-white font-medium ml-1">CASH OUT</Text>
      </TouchableOpacity>
    </View>
  );
}
