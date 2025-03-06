import {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';

type Todo = {
  id: number;
  content: string;
  checked: boolean;
};

export default function Header({addTodo}: {addTodo: (todo: Todo) => void}) {
  const [text, setText] = useState('');

  const handleAddTodo = (e: any) => {
    let content = text.trim();

    if (!content) {
      Alert.alert('输入内容不能为空');
      setText('');
      return;
    }

    addTodo({
      id: Date.now(),
      content,
      checked: false,
    });

    setText('');
  };

  return (
    <View style={styles.header}>
      <TextInput
        style={styles.headerInput}
        value={text}
        onChangeText={text => setText(text)}
        onSubmitEditing={handleAddTodo}
        placeholder="请输入你的任务，按回车键确认"/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
  },
  headerInput: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 7,
    // flex:1
  },
});
