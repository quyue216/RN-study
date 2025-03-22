import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {fitScreen} from '../../utils/fitScreen';
import useCurrentTime from '../../hooks/useCurrentTime';
import globalStyles from '../../assets/styles/globalStyles';

/* 
   内容没有全部展现,这点很让人恼火

*/
export default function LeftSide() {
  const times = useCurrentTime();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/index/left_bg2.png')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <View style={[globalStyles.fCenter, {height: 33}]}>
          <Text style={{color: '#fff', marginTop: 10}}>{times[0].trim()}</Text>
          <Text style={{color: '#fff'}}>{times[1]}</Text>
        </View>
        <View style={[globalStyles.fCenter, styles.leftBtm]}>
          <View style={globalStyles.fCenter}>
            <Image
              style={styles.menuImg}
              source={require('../../assets/images/index/left_icon_1.png')}
            />
            <Text style={globalStyles.text}>上班考勤</Text>
          </View>
          <View style={globalStyles.fCenter}>
            <Image
              style={styles.menuImg}
              source={require('../../assets/images/index/left_icon_2.png')}
            />
            <Text style={globalStyles.text}>下班考勤</Text>
          </View>
          <View style={globalStyles.fCenter}>
            <Image
              style={styles.menuImg}
              source={require('../../assets/images/index/left_icon_3.png')}
            />
            <Text style={globalStyles.text}>车载视频</Text>
          </View>
          <View style={globalStyles.fCenter}>
            <Image
              style={styles.menuImg}
              source={require('../../assets/images/index/left_icon_4.png')}
            />
            <Text style={globalStyles.text}>通话接听</Text>
          </View>
          <View style={globalStyles.fCenter}>
            <Image
              style={styles.menuImg}
              source={require('../../assets/images/index/left_icon_5.png')}
            />
            <Text style={globalStyles.text}>紧急呼叫</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
    position: 'absolute',
    left: 0,
    top: 0,
    width: fitScreen(100),
    height:'100%'
    // height: fitScreen(453),
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  leftBtm: {
    flex: 1,
    justifyContent: 'space-between',
    flexGrow: 1,
    marginTop: fitScreen(10),
  },
  menuImg: {
    width: fitScreen(46),
    height: fitScreen(46),
    marginBottom: fitScreen(6),
  },
});
