import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {AMapSdk, MapView} from 'react-native-amap3d';

// AMapSdk
AMapSdk.init(
  Platform.select({
    android: '9506c73ed67acb0a09f1aabf88df4819',
    // ios: "186d3464209b74effa4d8391f441f14d",
  }),
);
// Map地图组件
export default function Map() {
  return (
    <View style={styles.mapWrapper}>
      <MapView
        onLoad={() => console.log('onLoad')}
        compassEnabled={false}
        zoomControlsEnabled={false}
        scaleControlsEnabled={false}
        myLocationButtonEnabled={false}
        onPress={({nativeEvent}) => console.log(nativeEvent)}
        onCameraIdle={({nativeEvent}) => console.log(nativeEvent)}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  mapWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
});
