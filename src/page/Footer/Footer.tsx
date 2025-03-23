import React, {useEffect, useState,useRef} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {fitScreen} from '../../utils/fitScreen';
import globalStyles from '../../assets/styles/globalStyles';
import { getCurTFormat } from '../../utils/tools';

export default function Footer() {
  const [dangerTips, setDangerTips] = useState<{id: number; text: string}[]>(
    [],
  );

  const flatListRef = useRef<FlatList>(null); // 创建一个 ref

  const scrollToStart = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({
        animated: true,
        offset: 0,
      });
    }
  };

  // 监听钩子
  useEffect(() => {
    
    setDangerTips([
      {
        id: Date.now(),
        text: `${getCurTFormat().split(" ")[1]}请勿抽烟; `,
      },
      {
        id: Date.now(),
        text: `${getCurTFormat().split(" ")[1]}请勿分神; `,
      },
      {
        id: Date.now(),
        text: `${getCurTFormat().split(" ")[1]}请勿疲劳驾驶; `,
      },
      {
        id: Date.now(),
        text: `${getCurTFormat().split(" ")[1]}请勿抽烟; `,
      },
    ]);

  }, []);

  useEffect(() => {
    scrollToStart();
  }, [dangerTips]);

  return (
    <View style={styles.footer}>
      <View style={styles.footerBtm}>
        <Text
          onPress={()=>{
            // 模拟添加一条消息
            setDangerTips((tips)=>{
              return [
                {
                  id: Date.now(),
                  text: `${getCurTFormat().split(" ")[1]}请勿分心; `,
                },
                ...tips,
              ];
            })
          }}
          style={[
            globalStyles.text,
            {marginTop: -1,  marginRight: 10},
          ]}>
          预警信息记录:{' '}
        </Text>

        <FlatList
          ref={flatListRef}
          style={styles.scrollWrap}
          data={dangerTips}
          renderItem={({item}) => (
            <Text style={[globalStyles.text, styles.scrollItem]}>
              {item.text + ' '}
            </Text>
          )}
          horizontal={true}
          keyExtractor={(_, i) => i + ''}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: fitScreen(16),
    position: 'absolute',
    bottom: 0,
    left: 0,
    color: '#fff',
    zIndex: 99,
    backgroundColor: '#0a3160',
  },
  footerBtm: {
    flex: 1,
    width:'100%',
    height:'100%',
    flexDirection: 'row',
    paddingHorizontal:20
  },
  scrollWrap: {
    flex: 1,
    width: '100%',
    flexGrow:1
  },
  scrollItem: {
    fontSize: 12,
    height: '100%',
    justifyContent: 'center',
    transform: [{translateY: -1}],
  },
});
