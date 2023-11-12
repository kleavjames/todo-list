import React, { FC, useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Button, Text } from "../atom";
import { colors, normalize } from "@/constants";
import { formattedDate } from "@/utils";

interface Props {
  inputLabel?: string;
  value: Date;
  showPicker: boolean;
  setShowPicker: () => void;
  onChange: (event: DateTimePickerEvent, selectedDate: any) => void;
}

const DateTimePicker: FC<Props> = ({
  inputLabel,
  onChange,
  value,
  showPicker,
  setShowPicker,
}) => {
  return (
    <>
      {showPicker && (
        <RNDateTimePicker
          value={value}
          accentColor={colors.primary}
          display="spinner"
          textColor={colors.primary}
          onChange={onChange}
          style={styles.datePicker}
          minimumDate={new Date()}
        />
      )}
      <View style={styles.wrapper}>
        {Platform.OS === "android" || !showPicker ? (
          <>
            <View>
              {inputLabel && (
                <Text variant="bodyMedium" style={styles.label}>
                  {inputLabel}
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.dateWrapper}
              onPress={setShowPicker}
            >
              <Text variant="bodyMedium" style={styles.dateValue}>
                {formattedDate(value)}
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <Button onPress={setShowPicker}>Done</Button>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: normalize(10, "height"),
  },
  dateWrapper: {
    backgroundColor: colors.foreground,
    padding: normalize(8),
    height: normalize(50, "height"),
    flex: 1,
    justifyContent: "center",
    paddingLeft: normalize(15),
  },
  datePicker: {
    height: normalize(120, "height"),
    marginBottom: normalize(-10),
  },
  label: {
    color: colors.label,
    marginBottom: normalize(10, "height"),
  },
  dateValue: {
    color: colors.white,
    fontSize: normalize(16),
  },
});

export default DateTimePicker;
