/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Orientation from 'react-native-orientation-locker';
import Index from './src/Index';

// console.log(SystemNavigationBar,"------");

function App() {
  const [showTodos, setShowTodos] = useState(true);

  useEffect(() => {
    // 锁定屏幕为横向
    Orientation.lockToLandscape();
   
    setTimeout(() => {
      setShowTodos(true);
    }, 1000);
   
    console.log('SystemNavigationBar',SystemNavigationBar);
    

    // 在组件卸载时解锁屏幕方向
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return <View style={{flex: 1}}>{showTodos && <Index />}</View>;
}

export default App;
