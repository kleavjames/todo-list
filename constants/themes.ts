import { StyleSheet } from "react-native";

export const colors = {
  primary: "#FFD56B",
  foreground: "#455A64",
  background: "#212832",
  backgroundDark: "#263238",
  label: "#8CAAB9",
  text: "#BCCFD8",
  white: "#FFFFFF",
  icon: "#617D8A",
  black: "#000000",
};

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  textWhite: {
    color: colors.white,
  },
  textPrimary: {
    color: colors.primary,
  },
  textLabel: {
    color: colors.label,
  },
  bgForeground: {
    backgroundColor: colors.foreground,
  },
  bgDark: {
    backgroundColor: colors.backgroundDark,
  },
  relative: {
    position: "relative",
  },
  textAlignAuto: {
    textAlign: "auto",
  },
});
