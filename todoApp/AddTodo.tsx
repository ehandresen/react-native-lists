import { SetStateAction, useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { Todo } from '../App';

type AddTodoProps = {
  addTodo: (todoText: string) => void;
};

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [text, setText] = useState('');

  const changeHandler = (val: SetStateAction<string>) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button onPress={() => addTodo(text)} title="ADD TODO" color="coral" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default AddTodo;
