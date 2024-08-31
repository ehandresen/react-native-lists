import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';

const List = () => {
  const [people, setPeople] = useState([
    { name: 'yoshi', key: 1 },
    { name: 'mario', key: 2 },
    { name: 'luigi', key: 3 },
    { name: 'peach', key: 4 },
    { name: 'toad', key: 5 },
    { name: 'bowser', key: 6 },
    { name: 'wario', key: 7 },
    { name: 'waluigi', key: 8 },
    { name: 'daisy', key: 9 },
    { name: 'rosalina', key: 10 },
  ]);

  return (
    <ScrollView>
      {people.map((item) => (
        <View key={item.key}>
          <Text style={styles.item}>{item.name.toUpperCase()}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default List;
