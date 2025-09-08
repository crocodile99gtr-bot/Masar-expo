import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
      <StatusBar style="dark" />
      <Text style={{ fontSize:22 }}>Masar — Expo</Text>
      <Text>أول نسخة APK ✅</Text>
    </SafeAreaView>
  );
}
