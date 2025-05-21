import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import Navigators from './components/Navigators';
import Register from './components/RegistrationForm/Screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigators />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',

  },
});
