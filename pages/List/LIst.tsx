import { View ,StyleSheet,ScrollView} from "react-native";

import TodoItem from "../Item/Item";


export default function List() {
  return (
     <ScrollView style={[styles.todoMain,styles.todoEmpty]}>
        {Array(9).fill(0).map((_,key)=><TodoItem key={key}></TodoItem>)}
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
      maxHeight: 100,
    },
    todoEmpty: {
      minHeight: 40,
      lineHeight: 40, // React Native 中使用 `lineHeight` 时需要小心，因为它不会像在 Web 中那样影响布局
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 2,
      paddingLeft: 5,
      marginTop: 10,
    },
  });