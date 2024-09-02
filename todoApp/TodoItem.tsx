import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Todo } from '../App';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type TodoItemProps = {
  item: Todo;
  pressHandler: (key: string) => void;
};

const TodoItem = ({ item, pressHandler }: TodoItemProps) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
  },
});

export default TodoItem;
