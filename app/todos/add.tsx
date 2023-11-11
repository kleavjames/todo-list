import React, { useMemo, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TodoForm, Container } from "@/components";
import { Todo } from "@/types";
import { colors, globalStyles } from "@/constants";
import { generateId } from "@/utils";
import { useRouter } from "expo-router";
import { useTodos } from "@/hooks/useTodos";

const AddTodo = () => {
  const router = useRouter();
  const addTodo = useTodos(state => state.addTodo);

  const todoData = useMemo<Todo>(() => {
    return {
      id: generateId(),
      title: '',
      dueDate: new Date(),
      completed: false,
    };
  }, []);

  const onSubmitTask = (values: Todo) => {
    addTodo(values);
    router.back();
  };

  return (
    <>
      <KeyboardAwareScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <View style={globalStyles.flex}>
              <TodoForm
                data={todoData}
                onSubmit={onSubmitTask}
                type={"add"}
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

export default AddTodo;
