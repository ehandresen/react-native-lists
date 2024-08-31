import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';

const Touchable = () => {
  const [people, setPeople] = useState([
    { name: 'yoshi', id: '1' },
    { name: 'mario', id: '2' },
    { name: 'luigi', id: '3' },
    { name: 'peach', id: '4' },
    { name: 'toad', id: '5' },
    { name: 'bowser', id: '6' },
    { name: 'wario', id: '7' },
    { name: 'waluigi', id: '8' },
    { name: 'daisy', id: '9' },
    { name: 'rosalina', id: '10' },
  ]);

  const pressHandler = (id: string): void => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name.toUpperCase()}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default Touchable;
