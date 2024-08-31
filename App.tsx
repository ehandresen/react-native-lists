import { StyleSheet, Text, View, ScrollView } from 'react-native';
import List from './components/List';
import FlatListComponent from './components/FlatListComponent';
import Touchable from './components/Touchable';

export default function App() {
  return (
    <View style={styles.container}>
      <Touchable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
