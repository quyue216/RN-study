import {View, Text, Button, StyleSheet} from 'react-native';
<<<<<<< HEAD
=======
import BouncyCheckbox from 'react-native-bouncy-checkbox';
>>>>>>> c840f68d666e2e00d4ffbcf5d6d64fbca92d028e
import {CheckBox} from '@rneui/themed';

type Todo = {
  id: number;
  content: string;
  checked: boolean;
};

export default function Item({
  todo,
  toggleTodo,
  deleteTodo
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
<<<<<<< HEAD
  deleteTodo: (id: number) => void;
=======
    deleteTodo: (id: number) => void;
>>>>>>> c840f68d666e2e00d4ffbcf5d6d64fbca92d028e
}) {

  const checkedView = (
    <View style={todoItem.btnWrap}>
        {/* 添加一个确认的弹框 */}
      <Button title="删除" color="red" onPress={() => deleteTodo(todo.id)}/>
    </View>
  );

  return (
    <View style={todoItem.todoItem}>
      <View style={todoItem.todoName}>
        <CheckBox
          checked={todo.checked}
          onPress={() => {
            toggleTodo(todo.id);
          }}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
          containerStyle={{marginLeft: -10}}
          title={todo.content}
        />
      </View>
      {todo.checked && checkedView}
    </View>
  );
}

const todoItem = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  btnWrap: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoName: {
    width: '35%',
    height: '110%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
