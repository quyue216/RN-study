import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, PanResponder} from 'react-native';
import {fitScreen, screenHeight, screenWidth} from '../../utils/fitScreen';
export default function RightSide({rgtHidden}: {rgtHidden: boolean}) {
  // 设置元素是否可见

  return (
    <View
      style={[
        styles.container,
        {
          display: rgtHidden ? 'none' : 'flex',
        },
      ]}
    >
      <Text>你好世界</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: screenHeight() - fitScreen(16), //减去底部的高度
    position: 'absolute',
    width: fitScreen(250),
    right: 0,
    top: 0,
    display: 'none',
  },
});
