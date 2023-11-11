import React, { useMemo, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AddTodoForm, Alert, Container, Text } from "@/components";
import { Todo } from "@/types";
import { colors, globalStyles } from "@/constants";

const TaskDetail = () => {
  const [onDelete, setOnDelete] = useState(false);

  const taskData = useMemo<Todo>(() => {
    return {
      id: "",
      title: "",
      dueDate: new Date(),
      completed: false,
    };
    // if (type === 'edit') {
    //   return task as ITask;
    // } else {
    //   return {
    //     title: '',
    //     description: '',
    //     completed: false,
    //     id: '',
    //   };
    // }
  }, []);

  const onSubmitTask = (values: Todo) => {
    // if (type === 'edit') {
    //   collection.doc(values.id).set(values);
    // } else {
    //   const taskObj = {
    //     ...values,
    //     id: uuid(),
    //   };
    //   collection.doc(taskObj.id).set(taskObj);
    // }
    // navigation.goBack();
  };

  const onDeleteTodo = () => {
    // collection.doc(taskData.id).delete();
    // setOnDelete(false);
    // navigation.goBack();
  };

  return (
    <>
      <Alert
        visible={onDelete}
        onDismiss={() => setOnDelete(false)}
        onPress={onDeleteTodo}
        okText="Delete"
        dismissText="Cancel"
      >
        <Text style={globalStyles.textWhite}>
          Are you sure you want to delete this task?
        </Text>
      </Alert>
      <KeyboardAwareScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <View style={globalStyles.flex}>
              <AddTodoForm
                data={taskData}
                onSubmit={onSubmitTask}
                type={"add"} // TODO: temporary
                onDelete={setOnDelete}
              />
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});

export default TaskDetail;
