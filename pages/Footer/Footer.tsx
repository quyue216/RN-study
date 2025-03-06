import {View, Text, StyleSheet} from 'react-native';
import {CheckBox, Button} from '@rneui/themed';

export default function Footer({
  completedCount,
  deleteAllChecked,
  toggleAll,
  todoCount,
}: {
  completedCount: number;
  deleteAllChecked: () => void;
  toggleAll: (result: boolean) => void;
  todoCount: number;
}) {
  let todoDoneInfo = `已完成${completedCount}项任务 / 全部${todoCount}项任务`;

  let checked = completedCount === todoCount && completedCount + todoCount > 0;

  let clearBtn =
    completedCount > 0 ? (
      <Button
        color="error"
        size="md"
        onPress={() => deleteAllChecked()}
        containerStyle={{
          width: 140,
        }}>
        清除已完成任务
      </Button>
    ) : null;

  return (
    <View style={footer.wrap}>
      <View style={footer.doneInfo}>
        <CheckBox
          checked={checked}
          onPress={() => {
            toggleAll(!checked);
          }}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
          containerStyle={{marginLeft: -10}}
        />
        <Text style={{marginLeft: -10}}>{todoDoneInfo}</Text>
      </View>
      {clearBtn}
    </View>
  );
}

const footer = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  doneInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
