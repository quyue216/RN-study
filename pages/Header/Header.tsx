import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';



export default function Header() {
  return (
    <View style={styles.header}>
      <TextInput style={styles.headerInput}  placeholder='请输入你的任务，按回车键确认'></TextInput>
    </View>
  )
}



const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:40,
        borderColor:'#ccc',
        borderWidth: 2,
    },
    headerInput:{
        width:'100%',
        height:40,
        borderRadius:10,
        paddingVertical:4,
        paddingHorizontal:7
        // fontSize:15,
    }
})