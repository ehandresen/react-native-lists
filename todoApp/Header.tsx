import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'coral',
    paddingTop: 70,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Header;
