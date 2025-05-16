import { useAuth } from "@clerk/clerk-expo";
import { Text, TouchableOpacity } from "react-native";

const LogoutButton = () => {
  const { signOut } = useAuth();

  return (
    <TouchableOpacity
      onPress={signOut}
      className="flex items-center justify-center"
    >
      <Text className="text-white bg-red-500 font-semibold p-5 w-[95%] text-xl text-center rounded-lg">
        Log Out
      </Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
