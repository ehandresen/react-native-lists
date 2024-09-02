import { Text, StyleSheet, View } from 'react-native';

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>1</Text>
      <Text style={styles.box2}>2</Text>
      <Text style={styles.box3}>3</Text>
      <Text style={styles.box4}>4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: 40,
    backgroundColor: '#333',
  },
  box1: {
    flex: 2,
    backgroundColor: 'violet',
    padding: 10,
  },
  box2: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 10,
  },
  box3: {
    flex: 1,
    backgroundColor: 'gold',
    padding: 10,
  },
  box4: {
    flex: 2,
    backgroundColor: 'coral',
    padding: 10,
  },
});

export default Sandbox;
