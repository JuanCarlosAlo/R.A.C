import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyles } from './styles/globalStyles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text>React native template J.C.A.M</Text>
      <StatusBar style="auto" />
    </View>
  );
}

