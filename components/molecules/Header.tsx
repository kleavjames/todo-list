import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../atom/Text";
import { colors, globalStyles, normalize } from "@/constants";
import { formattedDate } from "@/utils";

const Header: FC = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text variant="titleMedium" style={styles.name}>
          Welcome back!
        </Text>
        <Text style={globalStyles.textPrimary} variant="labelMedium">
          Today is {formattedDate(new Date())}
        </Text>
      </View>
      <Image
        style={styles.image}
        source={require("@/assets/images/prof-pic.png")}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: normalize(20),
  },
  image: {
    height: normalize(40, "height"),
    width: normalize(40),
  },
  name: {
    fontFamily: "pilat",
    color: colors.white,
  },
});

export default Header;
