import {View,Text,StyleSheet} from 'react-native'
import { fitScreen } from "./utils/fitScreen";
import Map from "./page/Map/Map";
import LeftSide from "./page/LeftSide/LeftSide";
import Footer from "./page/Footer/Footer";

export default function Index() {
  
  return (
    <View style={style.container}>
        <LeftSide></LeftSide>
        <Map></Map>
       <Footer></Footer>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
      width: "100%",
      flex:1,
      // backgroundColor: 'red',
      // flexDirection: 'row-reverse',
    }
})