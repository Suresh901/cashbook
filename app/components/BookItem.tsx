import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

type Props = {
  title: string;
  createdAt: string;
};

export default function BookItem({ title, createdAt }: Props) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/pages/dashboard",
          params: { title, createdAt },
        })
      }
    >
      <View className="flex flex-row items-center gap-6 border-b border-gray-300">
        <Ionicons name="book-outline" size={28} color="black" />
        <View className="flex flex-col gap-1 pb-3">
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-sm">Created at: {createdAt}</Text>
        </View>
      </View>
    </Pressable>
  );
}
