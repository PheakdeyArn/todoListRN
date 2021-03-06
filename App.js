import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView
} from 'react-native';

import Task from './components/Task';

export default function App() {

  // create task state 
  const [taskItem, setTaskItem] = useState({
    title: null,
    isDone: false
  });

  // create task list 
  const [taskListItems, setTaskListItems] = useState([
    {
      title: "task 1",
      isDone: false,
    },

   {
      title: "task 2",
      isDone: true,
    },
  ]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    taskItem.isDone = false;
    setTaskListItems([...taskListItems, taskItem])
    setTaskItem({
      title: null,
      isDone: false
    });
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskListItems];
    itemsCopy.splice(index, 1);
    setTaskListItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
        {/* To do task */}

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >

        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Todo Task</Text>

          <View style={styles.taskItems}>
              {/* Task container  */}
              {
                taskListItems.map((item, index) => {
                  return (
                    <Task 
                      key={index} 
                      title={item.title} 
                      isDone={item.isDone} 
                      onRemove={async() => {
                        completeTask(index)
                        
                      }}
                    /> 
                  );
                })
              }

          </View>
        </View>
        </ScrollView>

        {/* Create Task Section  */}
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >

          <TextInput 
            style={styles.input} 
            placeholder={'Write a task'} 
            value={taskItem.title} 
            onChangeText={text => {
              setTaskItem({...taskItem, title:text})
              // setTaskItem(text)
            }} 
          />

          <TouchableOpacity 
            onPress={() => handleAddTask()}
          >
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
          
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  taskItems: {
    paddingTop: 30,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },

  addWrapper: {
    width: 45,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
 