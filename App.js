import React from 'react';
import lodash from 'lodash';
import { View, ScrollView, Text } from 'react-native';
import Header from './components/header/index';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import { TASK } from './components/model';
import TextPrompt from './components/text-prompt';
import { style } from './style'


class App extends React.Component {

  state= {
    taskList:[],
    isMenuTaskVisible: false,
    currentTask: {},
    isAddPrompVisible: false,
    isRenamePromptVisible: false,
    idGenerator: 0
  }
  
  toggleMenuTaskVisibility = task => {
    currentTask = task;
    if(this.state.isMenuTaskVisible) {
      currentTask = {};
    }
    this.setState({
    isMenuTaskVisible: !this.state.isMenuTaskVisible, 
    currentTask
  })
  }

  deleteCurrentTask = () => {
    const index = lodash.findIndex(this.state.taskList,{
      id: this.state.currentTask.id
    })
    const list = this.state.taskList;
    list.splice(index, 1);
    this.setState({taskList: list, currentTask: {} }, () => {
      this.toggleMenuTaskVisibility();
    });
  }

  toggleTaskStatus = () => {
    const updatedTask = this.state.currentTask;
    updatedTask.status =  this.state.currentTask.status === TASK.doneStatus 
    ? TASK.todoStatus 
    : TASK.doneStatus;
    const index = lodash.findIndex(this.state.taskList,{
      id: this.state.currentTask.id
    })
    const updatedTaskList = this.state.taskList;
    updatedTaskList[index] = updatedTask;
    this.setState(
      {
        taskList: updatedTaskList,
        isMenuTaskVisible: false, 
        currentTask:{}
      })
  }

  hideAddPrompt = () => {
    this.setState({isAddPrompVisible:false});
  }

  onAddTask = value => {
    const newTask = {
      id: this.state.idGenerator,
      content: value,
      status: TASK.todoStatus
    };
    this.setState(
      {
        taskList: [...this.state.taskList, newTask], 
        isAddPrompVisible: false, 
        idGenerator: this.state.idGenerator +1
    });
  };

  displayAddPrompt = () => {
    this.setState({isAddPrompVisible: true})
  }

  diplayRenameTask = task => {
    this.setState({currentTask: task, isRenamePromptVisible: true });
  }

  hideRenamePrompt = () => {
    this.setState({ isRenamePromptVisible: false, currentTask: {} });
  }

  renameTask = (value)=> {
    const updatedTask = this.state.currentTask;
    updatedTask.content = value;

    const index = lodash.findIndex(this.state.taskList,{
      id: this.state.currentTask.id
    })
    const updatedTaskList = this.state.taskList;
    updatedTaskList[index] = updatedTask;

    this.setState({ taskList: updatedTaskList }, () => {
      this.hideRenamePrompt();
    })
  }

  renderTaskList = () => {
    if (this.state.taskList.length > 0) {
      return ( 
      <TaskList 
        onPressCallBack={this.toggleMenuTaskVisibility} 
        onLongPressCallBack={this.diplayRenameTask}
        taskList={this.state.taskList}
        />
      );
    }
    return <Text>Cliquer sur le bouton ajouter pour créer une tâche</Text>
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header content= "Liste de tâche" />
        <ScrollView>
            <View style={this.state.taskList.length > 0 ? style.noTask : {alignItems:"center", marginTop: 20} }>
              {this.renderTaskList()}
            </View>
        </ScrollView>
        <MenuTask 
        isVisible={this.state.isMenuTaskVisible} 
        onDisaspearCallBack={this.toggleMenuTaskVisibility} 
        onDeleteCallBack={this.deleteCurrentTask}
        onChangeStatusCallBack={this.toggleTaskStatus}
        />
        <TextPrompt 
        isVisible={this.state.isAddPrompVisible} 
        onCancelCallBack={this.hideAddPrompt} 
        onSubmitCallBack={this.onAddTask} 
        title={'Ajouter une nouvelle tâche'}
        placeHolder={'ex: Faire du sport'}
        ValueDefaut={""}
        />
        <TextPrompt 
        isVisible={this.state.isRenamePromptVisible} 
        onCancelCallBack={this.hideRenamePrompt} 
        onSubmitCallBack={this.renameTask} 
        title={'Renommer la tâche'}
        ValueDefaut={this.state.currentTask.content}
        />
        <ButtonAddTask onPressCallBack={this.displayAddPrompt} />
      </View>
    );
  }
}

export default App;