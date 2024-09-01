import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Todo } from '../App';

type TodoItemProps = {
  item: Todo;
  pressHandler: (key: string) => void;
};

const TodoItem = ({ item, pressHandler }: TodoItemProps) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.todo}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default TodoItem;
