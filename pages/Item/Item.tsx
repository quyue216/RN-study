import { View ,Text,Button, StyleSheet} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";



export default function Item() {
  return (
     <View style={todoItem.todoItem}>
        <View style={todoItem.todoName}>
            <BouncyCheckbox
                size={25}
                fillColor="#ccc"
                unFillColor="#CCC"
                text="Custom Checkbox"
                iconStyle={{ borderColor: "#ccc" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(isChecked: boolean) => {console.log(isChecked)}}
                    />
        </View>
        
            <View style={todoItem.btnWrap}>
                <Button  title="删除" color="red"/>
            </View>
       
     </View>
  )
}


const todoItem = StyleSheet.create({
    todoItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        width:'100%',
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
    },
    btnWrap:{
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
    },
    todoName:{
        width:'35%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
    }
});
