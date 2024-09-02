import { FlatList, StyleSheet, View, Alert } from 'react-native';
import Header from './todoApp/Header';
import TodoItem from './todoApp/TodoItem';
import AddTodo from './todoApp/AddTodo';
import Sandbox from './components/sandbox';
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
    setTodos(
      (prevTodos) => prevTodos.filter((todo) => todo.key != key) // returning a new array
    );
  };

  const addTodo = (todoText: string): void => {
    if (!todoText) {
      Alert.alert('oops!', 'please add a todo', [
        {
          text: 'understood',
          onPress: () => console.log('alert closed'),
        },
      ]);
      return;
    }

    const newTodo: Todo = {
      text: todoText,
      key: Math.random().toString(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  return (
    <Sandbox />
    // {<View style={styles.container}>
    //   <Header />
    //   <View style={styles.content}>
    //     <AddTodo addTodo={addTodo} />
    //     <View style={styles.list}>
    //       <FlatList
    //         data={todos}
    //         renderItem={({ item }) => (
    //           <TodoItem item={item} pressHandler={pressHandler} />
    //         )}
    //       />
    //     </View>
    //   </View>
    // </View>}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
