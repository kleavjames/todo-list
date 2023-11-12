import React, { useCallback, useMemo } from "react";
import {
  FlatList,
  ListRenderItem,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "expo-router";
import { colors, globalStyles, normalize } from "@/constants";
import { Todo } from "@/types";
import { Text, Container, Button, Header, Checkbox } from "@/components";
import { formattedDate } from "@/utils";
import { useTodos } from "@/hooks/useTodos";

const Todos = () => {
  const [todos, updateTodo] = useTodos((state) => [
    state.todos,
    state.updateTodo,
  ]);

  const sortTodosByCompleted = (items: Todo[]) => {
    return items.sort((a, b) => {
      if (a.completed === b.completed) {
        return 0;
      }
      // Move todo with completed:true to the end
      return a.completed ? 1 : -1;
    });
  };

  const newTodos = useMemo(() => {
    // sort the todos by date
    const sortedTodos = todos
      .slice()
      .sort(
        (todoA, todoB) =>
          new Date(todoB.dueDate).getTime() - new Date(todoA.dueDate).getTime()
      );
    // sort by completed
    return sortTodosByCompleted(sortedTodos);
  }, [todos]);

  const onCompleteTodo = useCallback((item: Todo) => {
    const copyTodo = { ...item };
    copyTodo.completed = item.completed ? false : true;
    updateTodo(copyTodo);
  }, []);

  const renderTodoItems = useCallback<ListRenderItem<Todo>>(
    ({ item }) => {
      return (
        <View
          style={[
            styles.todoWrapper,
            item.completed ? globalStyles.bgDark : globalStyles.bgForeground,
          ]}
        >
          <Link
            href={{
              pathname: "/todos/[id]",
              params: {
                id: item.id,
              },
            }}
            asChild
          >
            <TouchableOpacity style={globalStyles.flex}>
              <Text variant="titleMedium" style={globalStyles.textWhite}>
                {item.title}
              </Text>
              <Text variant="bodySmall" style={globalStyles.textLabel}>
                {formattedDate(item.dueDate)}
              </Text>
            </TouchableOpacity>
          </Link>
          <Checkbox
            onPress={() => onCompleteTodo(item)}
            styles={Platform.OS === 'ios' ? styles.check : undefined}
            status={item.completed ? "checked" : "unchecked"}
          />
        </View>
      );
    },
    [onCompleteTodo]
  );

  const renderSeparator = () => <View style={styles.separator} />;

  const renderEmptyComponent = () => (
    <View>
      <Text style={styles.empty}>No tasks to display.</Text>
    </View>
  );

  return (
    <Container>
      <Header />
      <View style={styles.todoList}>
        <FlatList
          data={newTodos as Todo[]}
          keyExtractor={(todo) => todo.id.toString()}
          renderItem={renderTodoItems}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={renderEmptyComponent}
        />
      </View>
      <Link href={"/todos/add"} asChild>
        <Button onPress={() => {}} mode="contained">
          Add Todo
        </Button>
      </Link>
    </Container>
  );
};

const styles = StyleSheet.create({
  todoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: normalize(10),
  },
  check: {
    borderWidth: 1,
    borderColor: colors.primary,
    maxHeight: normalize(40, "height"),
    alignSelf: "center",
  },
  separator: {
    marginTop: normalize(15, "height"),
  },
  todoList: {
    marginTop: normalize(50, "height"),
    flex: 1,
  },
  empty: {
    textAlign: "center",
    color: colors.foreground,
  },
});

export default Todos;
