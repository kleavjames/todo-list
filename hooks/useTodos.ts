import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "@/types";
import { produce } from "immer";

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  getTodo: (id: string) => Todo;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
}

export const useTodos = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (todo) =>
        set(
          produce((state) => {
            state.todos.push(todo);
          })
        ),
      getTodo: (id) => {
        const foundTodo = get().todos.find((todo) => todo.id === id)!;
        return foundTodo;
      },
      updateTodo: (todo) =>
        set(
          produce((state) => {
            state.todos = state.todos.map((sTodo: Todo) => {
              if (sTodo.id !== todo.id) {
                return sTodo;
              }

              return {
                ...sTodo,
                ...todo,
              }
            })
          })
        ),
      deleteTodo: (id) =>
        set(
          produce((state) => {
            state.todos = state.todos.filter((todo: Todo) => todo.id !== id);
          })
        ),
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
