import { Text, View, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Test</Text>
      <Button
        title="Login"
        onPress={() => router.push('/screens/loginScreen')}
      />
    </View>
  );
}
