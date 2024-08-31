import { StyleSheet, Text, View, ScrollView } from 'react-native';
import List from './components/List';
import FlatListComponent from './components/FlatListComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListComponent />
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
