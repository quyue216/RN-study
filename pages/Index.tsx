import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from './Header/Header';
import TodoList from './List/LIst';
import Footer from './Footer/Footer';
import { useState} from 'react';

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

  const completedCount = todos.filter(todo => todo.checked).length;

  const addTodo = (todo: Todo) => {
    const nextTodos = [todo, ...todos];
    setTodos(nextTodos);
  };

  const deleteTodo = (id: number) => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  const toggleTodo = (id: number) => {
    const nextTodos = todos.slice();

    const todo = nextTodos.find(todo => todo.id === id);

    if (todo) {
      todo.checked = !todo.checked;
    }

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
        <Header addTodo={addTodo}></Header>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}></TodoList>
        <Footer completedCount={completedCount} {...footerProps}></Footer>
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
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});
