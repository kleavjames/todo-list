import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Todo } from '@/types';
import { Button, Checkbox, Input, Text } from '../atom';
import { colors, normalize } from '@/constants';

interface Props {
  data: Todo;
  onSubmit: (values: Todo) => void;
  onDelete: (value: React.SetStateAction<boolean>) => void;
  type: 'add' | 'edit';
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title must not be empty'),
  description: Yup.string().required('Description must not be empty'),
  completed: Yup.bool().required(),
});

const AddTodoForm: FC<Props> = ({data, onSubmit, onDelete, type = 'add'}) => {
  return (
    <Formik
      initialValues={data}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
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
            inputLabel="Task Title"
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
            autoCapitalize="none"
            renderError={!!errors.title && !!touched.title}
            errorMessage={errors.title}
          />
          {/* <Input
            inputLabel="Task Description"
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
            autoCapitalize="none"
            multiline
            contentStyle={styles.description}
            renderError={!!errors.description && !!touched.description}
            errorMessage={errors.description}
          /> */}
          <View style={styles.checkbox}>
            <Checkbox
              status={values.completed ? 'checked' : 'indeterminate'}
              onPress={() => setFieldValue('completed', !values.completed)}>
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
          {type === 'edit' && (
            <Button
              mode="outlined"
              onPress={() => onDelete(true)}
              style={styles.delete}>
              Delete
            </Button>
          )}
          <Button mode="contained" onPress={() => handleSubmit()}>
            {type === 'edit' ? 'Update Task' : 'Create Task'}
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
    marginBottom: normalize(50, 'height'),
  },
  description: {
    maxHeight: normalize(150, 'height'),
  },
  delete: {
    marginBottom: normalize(10, 'height'),
  },
});

export default AddTodoForm;
