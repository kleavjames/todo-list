import React from "react";
import { Stack } from "expo-router";
import { CustomHeader } from "@/components";

const TodosLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: CustomHeader,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="add"
        options={{
          title: "Add Todo",
          headerTitleStyle: {
            fontFamily: "inter",
          },
        }}
      />
    </Stack>
  );
};

export default TodosLayout;
