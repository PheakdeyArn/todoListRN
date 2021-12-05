import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
        {/* To do task */}

        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Todo Task</Text>

          <View style={styles.taskItems}>
              {/* Task container  */}
              <Task 
                title="Task 1" 
                // isDone={false}
              />
              <Task 
                title="Task 2" 
                // isDone={false}
              />

          </View>

        </View>
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
});
 