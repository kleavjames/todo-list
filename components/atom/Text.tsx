import React, { FC } from "react";
import { TextComponent } from "react-native";
import { Text as PaperText, TextProps } from "react-native-paper";

import { fontConfig } from "@/constants";

const Text: FC<TextProps<TextComponent>> = (props) => {
  return (
    <PaperText
      {...props}
      theme={{
        fonts: {
          default: fontConfig.default,
        },
      }}
    >
      {props.children}
    </PaperText>
  );
};

export default Text;
