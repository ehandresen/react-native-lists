import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

// FlatList has good performance, because if the list expands beyond the screen size, it will not load all the items, the load as the user scrolls down

const FlatListComponent = () => {
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

  return (
    <View>
      {/* FlatList automatically checks for 'key' prop in the list */}
      {/* if the key prop is named something like 'id' we add keyExtractor property to FlatList to specify that */}
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name.toUpperCase()}</Text>
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

export default FlatListComponent;
