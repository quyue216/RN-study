import {Dimensions } from "react-native";



// 根据宽度去适配屏幕
export const fitScreen = (value: number):number => {
     
    const { height,width } = Dimensions.get('screen'); //screen包含屏幕底部导航栏
    //  终端始终是以长度大的一遍作为宽度进行适配
    return value * (Math.max(height,width) / 750);
}