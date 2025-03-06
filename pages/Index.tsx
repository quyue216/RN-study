import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from './Header/Header';
import TodoList from "./List/LIst"
import Footer from "./Footer/Footer";import { useEffect, useState } from 'react';
;

type Todo ={
  id:number,
  content:string,
  checked:boolean
};

export default function Index(){
  // 保存todo列表
   const [todos,setTodos] =  useState<Todo[]>([]);

    return (
      <View style={styles.app}>
        <View style={styles.todosContainer}>
          <Header></Header>
          <TodoList></TodoList>
          <Footer></Footer>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 20,
  },
  todosContainer:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:5,
    padding:10,
  }
});