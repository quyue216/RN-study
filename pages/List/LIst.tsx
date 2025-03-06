import {View, StyleSheet, ScrollView,Text} from 'react-native';
import React from 'react';
import TodoItem from '../Item/Item';

type Todo = {
  id: number;
  content: string;
  checked: boolean;
};

export default function List({
  todos,
  toggleTodo,
  deleteTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
   
  if(todos.length === 0){
    return (
      <ScrollView style={[styles.todoMain]} contentContainerStyle={styles.todoEmpty}>
        <Text>暂无任务</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={[styles.todoMain]}>
      {todos.map((todo, key) => (
        <TodoItem todo={todo} key={key} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  todoMain: {
    marginLeft: 0,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    padding: 0,
    minHeight: 50,
    maxHeight: 150,
  },
  todoEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
