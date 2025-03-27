import {View, StyleSheet, PanResponder} from 'react-native';
import {fitScreen, screenWidth} from './utils/fitScreen';
import Map from './page/Map/Map';
import LeftSide from './page/LeftSide/LeftSide';
import Footer from './page/Footer/Footer';
import {useState, useRef} from 'react';
import RightSide from './page/RightSide/RightSide';
function Home() {
  const [rgtHidden, setRgtHidden] = useState(false);
  
  // 保存初始坐标
  let startPoint = {x: 0, y: 0};
  // 判断是否触摸右边缘
  const isTouchRightScreenEdge = (startPoint: number): boolean => {
    return startPoint > screenWidth() - fitScreen(30);
  };


  // 是否触摸右边缘
  const isTouchLeftEdge = (distance: number) =>
    screenWidth() - fitScreen(250) < distance &&
    distance < screenWidth() - fitScreen(250) + fitScreen(30);

  // 创建手势
  const panResponder = useRef(
    PanResponder.create({
      
      // 是否接管事件
      onMoveShouldSetPanResponder: (_, gesture) => {        
        return isTouchRightScreenEdge(gesture.moveX) ||isTouchLeftEdge(gesture.moveX);
      },
      // 允许子组件在滑动超出边缘时接管事件
      onPanResponderTerminationRequest (){
        return true;
      },
      onPanResponderGrant: (evt, g) => {
        console.log('grant',g);
        //保存初始坐标信息
        startPoint = {x: g.x0, y: g.y0}; //保存起始坐标
      },
      onPanResponderRelease: (e, g) => {
        if (!rgtHidden) {
        
          // 触摸右边缘是否关闭盒子
          const IsTouchLeftCloseBox = (startPoint: number, distance: number) =>
            isTouchLeftEdge(startPoint) && distance > fitScreen(50);

          const isCloseRightSide = IsTouchLeftCloseBox(startPoint.x, g.dx);

          setRgtHidden(isCloseRightSide);
        } else {
         
          const isTouchRightOpenBox = (
            startPoint: number,
            distance: number,
          ): boolean => {
            return (
              isTouchRightScreenEdge(startPoint) && distance > fitScreen(50)
            );
          };

          const isShowRightSide = isTouchRightOpenBox(startPoint.x, g.dx);

          setRgtHidden(!isShowRightSide);
        }
      },
    }),
  ).current;

  return (
    <View style={style.container} {...panResponder.panHandlers}>
      <LeftSide></LeftSide>
      <Map></Map>
      <Footer></Footer>
      <View>
        <RightSide rgtHidden={rgtHidden}></RightSide>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
});

function App() {
  return <Home></Home>;
}
/* 
drawer 使用未满足需求,使用这个过程磕磕绊绊
花费接近两个小时时间
1. RN安装插件不停报错(文档有部分没有阅读，有些插件没有安装)
2. 报一些诡异错误通过yarn start --reset-cache 解决文档上看的
总结: 做事情要有个试探的过程,先不要直接去研究(避免方向错),需要判断是否正确
*/
export default App;
