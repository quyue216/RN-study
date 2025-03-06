import { View ,Text, StyleSheet} from "react-native";
import { CheckBox ,Button } from '@rneui/themed';

export default function Footer({checked=true,toggleCheckbox=()=>{}}){ 
  
        let todoDoneInfo = `已完成${1}项任务 / 全部${3}项任务`;
   
 return <View style={footer.wrap}>
               <View style={footer.doneInfo}>
               <CheckBox
                        checked={checked}
                        onPress={toggleCheckbox}
                        iconType="material-community"
                        checkedIcon="checkbox-marked"
                        uncheckedIcon="checkbox-blank-outline"
                        checkedColor="red"
                        containerStyle={{marginLeft:-10}}
                />
                <Text style={{marginLeft:-10}}>{todoDoneInfo}</Text>
               </View>
          <Button color="error" size="md" containerStyle={{
                width: 140,
              }}>清除已完成任务</Button>
 </View>

}

const footer = StyleSheet.create({
  wrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // paddingHorizontal:10,
        width:'100%',
        height:60,
  },
  doneInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        // width:'50%',
        alignItems:'center',
  }

});