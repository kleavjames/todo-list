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
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTodos } from "@/hooks/useTodos";

const EditTodo = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [getTodo, updateTodo, deleteTodo] = useTodos((state) => [
    state.getTodo,
    state.updateTodo,
    state.deleteTodo,
  ]);
  const [onDelete, setOnDelete] = useState(false);

  const todoData = useMemo<Todo>(() => {
    const todo = getTodo(id);
    return {
      ...todo,
      dueDate: new Date(todo.dueDate),
    };
  }, []);

  const onSubmitTask = (values: Todo) => {
    updateTodo(values);
    router.back();
  };

  const onDeleteTodo = () => {
    deleteTodo(todoData.id);
    router.back();
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
