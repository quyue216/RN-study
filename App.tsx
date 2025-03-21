/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {
  View
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Index from "./pages/navgation/Index";

function App(){
  const [showTodos,setShowTodos] = useState(false)

  /* useEffect(() => {
    // 锁定屏幕为横向
    Orientation.lockToLandscape();
    setTimeout(() => {
      setShowTodos(true)
    }, 1000);
    // 在组件卸载时解锁屏幕方向
    return () => {
      Orientation.unlockAllOrientations();
    };
    
  }, []); */


    return (
          <View style={{flex: 1}}>
             
           {/* {showTodos && <Index />} */}
           <Index></Index>
          </View>
    );
  
}


export default App;