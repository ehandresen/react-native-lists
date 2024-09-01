import { FlatList, StyleSheet, View } from 'react-native';
import Header from './todoApp/Header';
import TodoItem from './todoApp/TodoItem';
import { useState } from 'react';

export type Todo = {
  text: string;
  key: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'go gym', key: '3' },
  ]);

  const pressHandler = (key: string): void => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  list: {
    paddingLeft: 20,
    paddingTop: 20,
  },
});
