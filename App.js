import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [getAllTasks, setAllTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTaskHandler = taskTitle => {
    setAllTasks(currentTasks => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle }
    ]);
    setIsAddMode(false)
  };

  const removeTaskHandler = taskId => {
    setAllTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId);
    });
  };

  const cancelTask = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Task" onPress={() => setIsAddMode(true)} />
      <TaskInput visible={isAddMode} onAddTask={addTaskHandler} cancelTask={cancelTask} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={getAllTasks}
        renderItem={itemData => (
          <TaskItem
            id={itemData.item.id}
            onDelete={removeTaskHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
