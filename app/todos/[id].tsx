import React, { useMemo, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Alert, Container, Text, TodoForm } from "@/components";
import { Todo } from "@/types";
import { colors, globalStyles } from "@/constants";
import { generateId } from "@/utils";
import { useLocalSearchParams, useRouter } from "expo-router";

const EditTodo = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [onDelete, setOnDelete] = useState(false);

  const todoData = useMemo<Todo>(() => {
    return {
      id: generateId(),
      title: '',
      dueDate: new Date(),
      completed: false,
    };
  }, []);

  const onSubmitTask = (values: Todo) => {
    console.log(values);
    router.back();
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
          Are you sure you want to delete this todo?
        </Text>
      </Alert>
      <KeyboardAwareScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <View style={globalStyles.flex}>
              <TodoForm
                data={todoData}
                onSubmit={onSubmitTask}
                type={"edit"}
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

export default EditTodo;
