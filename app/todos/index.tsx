import React, { useCallback } from "react";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "expo-router";
import { colors, globalStyles, normalize } from "@/constants";
import { Todo } from "@/types";
import { Text, Container, Button, Header } from "@/components";

const Todos = () => {
  const renderTodoItems = useCallback<ListRenderItem<Todo>>(({ item }) => {
    return (
      <View style={styles.todoWrapper}>
        <TouchableOpacity style={globalStyles.flex} onPress={() => {}}>
          <Text variant="titleMedium" style={globalStyles.textWhite}>
            {item.title}
          </Text>
        </TouchableOpacity>
        {/* <Checkbox
            onPress={() => onCompleteTask(item)}
            styles={styles.check}
            status={item.completed ? 'checked' : 'unchecked'}
          /> */}
      </View>
    );
  }, []);

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
          data={[] as Todo[]}
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
    backgroundColor: colors.foreground,
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
