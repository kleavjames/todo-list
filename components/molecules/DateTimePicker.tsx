import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Text } from "../atom";
import { colors, normalize } from "@/constants";

interface Props {
  inputLabel?: string;
  value: Date;
  onChange: (event: DateTimePickerEvent, selectedDate: any) => void;
}

const DateTimePicker: FC<Props> = ({
  inputLabel,
  onChange,
  value,
}) => {
  return (
    <View style={styles.wrapper}>
      <View>
        {inputLabel && (
          <Text variant="bodyMedium" style={styles.label}>
            {inputLabel}
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.foreground,
          padding: normalize(8),
        }}
      >
        <RNDateTimePicker
          value={value}
          accentColor={colors.primary}
          onChange={onChange}
          minimumDate={new Date()}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: normalize(10, "height"),
  },
  label: {
    color: colors.label,
    marginBottom: normalize(10, "height"),
  },
});

export default DateTimePicker;
