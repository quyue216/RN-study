import React from 'react';
import {View,  StyleSheet} from 'react-native';
import Header from './Header/Header';
import TodoList from './List/List';
import Footer from './Footer/Footer';
import {useState} from 'react';

type Todo = {
  id: number;
  content: string;
  checked: boolean;
};

export default function Index() {
  // 保存todo列表
  const [todos, setTodos] = useState<Todo[]>([
    {id: 1, content: 'todo1', checked: false},
    {id: 2, content: 'todo2', checked: true},
    {id: 3, content: 'todo3', checked: false},
  ]);
  //!基于状态计算得变量不能定义为props
  const completedCount = todos.filter(todo => todo.checked).length;
  // 添加todo
  const addTodo = (todo: Todo) => {
    const nextTodos = [todo, ...todos];
    setTodos(nextTodos);
  };
  // 删除todo
  const deleteTodo = (id: number) => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };
  // 切换todo状态
  const toggleTodo = (todo:Todo) => {
      todo.checked = !todo.checked;
      
      const nextTodos = todos.slice();
     
     setTodos(nextTodos);
  };

  //全选
  const toggleAll = (result: true | false) => {
    const nextTodos = todos.map(todo => {
      todo.checked = result;
      return todo;
    });
    setTodos(nextTodos);
  };

  const deleteAllChecked = () => {
    const nextTodos = todos.filter(todo => !todo.checked);
    setTodos(nextTodos);
  };

  let footerProps = {
    toggleAll,
    deleteAllChecked,
    todoCount: todos.length,
  };

  return (
    <View style={styles.app}>
      <View style={styles.todosContainer}>
        <Header addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <Footer completedCount={completedCount} {...footerProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todosContainer: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 5,
    padding: 10,
    borderColor: '#ccc',
  },
});