/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {View, Text,Dimensions } from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import "./src/gesture-handler.native"
import Orientation from 'react-native-orientation-locker';
import Index from './src/Index';

// 隐藏系统的导航栏
SystemNavigationBar.stickyImmersive();
function App() {
  const [showTodos, setShowTodos] = useState(false);

  useEffect(() => {
    // 锁定屏幕为横向
    Orientation.lockToLandscape();
   
    setTimeout(() => {
      setShowTodos(true);
    }, 1000);    

    // 在组件卸载时解锁屏幕方向
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return <View  style={{flex: 1,height:'100%'}}>{showTodos && <Index />}</View>;
}

export default App;
