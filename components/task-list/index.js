import React from 'react';
import { ListItem, Badge } from 'react-native-elements';
import { View } from 'react-native';
import { TASK } from '../../components/model';
import { APP_COLORS } from '../../styles/color'

const TaskList = ({ taskList, onPressCallBack, onLongPressCallBack }) => ( 
<View>
   {taskList.map(task => (
   <ListItem
   key={task.id}
   title={task.content}
   onPress={()=> onPressCallBack(task)}
   onLongPress= {() => onLongPressCallBack(task)}
   rightTitle={task.status}
   badge={{
      element: <Badge value={task.status} 
      containerStyle={
         task.status === TASK.todoStatus 
         ? { backgroundColor: APP_COLORS.accent }
         : { backgroundColor: APP_COLORS.lightPrimaryColor }
      }/>
   }}
   bottomDivider
   chevron
      />
   ))
}
</View>
);

export default TaskList;