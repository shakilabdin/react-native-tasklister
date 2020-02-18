import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const TaskInput = props => {
  const [getEnteredTask, setEnteredTask] = useState('');

  const taskInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
      props.onAddTask(getEnteredTask);
      setEnteredTask("")
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Input Task"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={getEnteredTask}
        />
        <View style={styles.buttonContainer}>
            <Button title="Cancel"  color="red" onPress={props.cancelTask} />
            <Button title="Add Task" onPress={addTaskHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '40%'
  }
});

export default TaskInput;
