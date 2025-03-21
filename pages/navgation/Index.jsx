// In App.js in a new project

import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { createStaticNavigation ,useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen(rest) {

    console.log(rest,"-----");
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>我是Home页面</Text>
      <Button title="跳转" onPress={()=>{
          navigation.navigate('Profile',{
              name: 'Home',
              params: { user: 'quyue' },
          })
      }}> </Button>
    </View>
  );
}


function ProfileScreen({route}) {

    const navigation = useNavigation();

    React.useEffect(()=>{
       console.log(route,"----- 更新或者挂载");
    },[route.params])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>我是个人中心页面</Text>
        <Button title="跳转" onPress={()=>{
            navigation.navigate('Home',{
                name: 'Profile',
                params: { user: 'jane' },
            })
        }}> </Button>
        </View>
    );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Profile',
  screens: {
    Profile: {
        screen: ProfileScreen,
        options: {
          title: '个人中心',
        },
    },
    Home: {
        screen:HomeScreen ,
        options: {
          title: 'Home',
        },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default  Navigation;
