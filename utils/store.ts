import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Store {
  
  // 获取todos
  static async getTodos(key:string) {
    try {
      const todos = await AsyncStorage.getItem(key);
      return todos ? JSON.parse(todos) : [];
    } catch (error) {
      console.log(error);
    }
  }
//  设置todos
  static async setTodos(key:string,todos: any[]) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(todos))
    }catch(error){
        console.log(error);
    }
  }
}