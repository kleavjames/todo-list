import React, { FC } from "react";
import {
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Modal, Portal } from "react-native-paper";

import { Text } from "../atom";

import { colors, globalStyles, normalize } from "@/constants";

interface Props {
  visible: boolean;
  onDismiss: () => void;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  okText?: string;
  dismissText?: string;
  children: React.ReactNode;
}

const width = Dimensions.get("window").width;

const Alert: FC<Props> = ({
  visible,
  onDismiss,
  containerStyle,
  onPress,
  okText = "Ok",
  dismissText = "Cancel",
  children,
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        dismissableBackButton={false}
        contentContainerStyle={[styles.container, containerStyle]}
      >
        {children}
        <View style={styles.buttons}>
          {onPress && (
            <TouchableOpacity onPress={onPress}>
              <Text style={globalStyles.textPrimary}>{okText}</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={onDismiss}>
            <Text style={globalStyles.textWhite}>{dismissText}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.foreground,
    width: normalize(width / 1.3),
    alignSelf: "center",
    padding: normalize(20),
    minHeight: normalize(150, "height"),
  },
  buttons: {
    flex: 1,
    gap: normalize(20),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default Alert;
