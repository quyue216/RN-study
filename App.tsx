/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import {
  View
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Index from "./pages/Index";

function App(){

  useEffect(() => {
    // 锁定屏幕为横向
    Orientation.lockToLandscape();

    // 在组件卸载时解锁屏幕方向
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);
    return (
          <View style={{flex: 1,padding:20}}>
            <Index></Index>
        </View>
    );
  
}

export default App;