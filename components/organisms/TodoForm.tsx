import React, { FC, useCallback, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Field, FieldProps, Formik } from "formik";
import * as Yup from "yup";
import { Todo } from "@/types";
import { Button, Checkbox, Input, Text } from "../atom";
import { colors, normalize } from "@/constants";
import { DateTimePicker } from "../molecules";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

interface Props {
  data: Todo;
  onSubmit: (values: Todo) => void;
  onDelete?: (value: React.SetStateAction<boolean>) => void;
  type: "add" | "edit";
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title must not be empty"),
  completed: Yup.bool().required(),
});

const AddTodoForm: FC<Props> = ({ data, onSubmit, onDelete, type = "add" }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  }

  return (
    <Formik
      initialValues={data}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
        setFieldValue,
      }) => (
        <>
          <Input
            inputLabel="Title"
            onChangeText={handleChange("title")}
            onBlur={handleBlur("title")}
            value={values.title}
            autoCapitalize="none"
            renderError={!!errors.title && !!touched.title}
            errorMessage={errors.title}
          />
          <Field name="dueDate">
            {({ field, form }: FieldProps) => (
              <DateTimePicker
                inputLabel="Due Date"
                value={field.value}
                showPicker={showDatePicker}
                setShowPicker={toggleDatePicker}
                onChange={(event, selectedDate) => {
                  if (event.type === 'set') {
                    form.setFieldValue(field.name, selectedDate)

                    if (Platform.OS === 'android') {
                      toggleDatePicker();
                    }
                  } else {
                    toggleDatePicker();
                  }
                }}
              />
            )}
          </Field>
          <View style={styles.checkbox}>
            <Checkbox
              status={values.completed ? "checked" : "indeterminate"}
              onPress={() => setFieldValue("completed", !values.completed)}
            >
              {values.completed ? (
                <Text variant="bodyMedium" style={styles.isCompleted}>
                  todo is completed!
                </Text>
              ) : (
                <Text variant="bodyMedium" style={styles.isCompleted}>
                  Is todo completed?
                </Text>
              )}
            </Checkbox>
          </View>
          {type === "edit" && (
            <Button
              mode="outlined"
              onPress={() => onDelete && onDelete(true)}
              style={styles.delete}
            >
              Delete
            </Button>
          )}
          <Button mode="contained" onPress={() => handleSubmit()}>
            {type === "edit" ? "Update Task" : "Create Task"}
          </Button>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  isCompleted: {
    color: colors.white,
  },
  checkbox: {
    marginTop: 5,
    marginBottom: normalize(50, "height"),
  },
  description: {
    maxHeight: normalize(150, "height"),
  },
  delete: {
    marginBottom: normalize(10, "height"),
  },
});

export default AddTodoForm;
