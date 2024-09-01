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
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});

export default TodoItem;
