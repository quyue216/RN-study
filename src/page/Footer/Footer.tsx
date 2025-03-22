import React from 'react'
import { View,StyleSheet} from "react-native";
import { fitScreen } from '../../utils/fitScreen';

export default function Footer() {
  return (
    <View style={styles.footer}>
        
    </View>
  )
}


const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: fitScreen(16),
    }
})