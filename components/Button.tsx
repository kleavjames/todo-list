import React, {FC} from 'react';
import {Button as PaperButton, ButtonProps} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import { colors, fontConfig, normalize } from '@/constants';

const Button: FC<ButtonProps> = props => {
  return (
    <PaperButton
      {...props}
      style={[styles.border, props.style]}
      contentStyle={[styles.padding, props.contentStyle]}
      textColor={props.mode === 'contained' ? colors.black : colors.white}
      theme={{
        fonts: {
          default: fontConfig.default,
        },
      }}>
      {props.children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  border: {
    borderRadius: 0,
  },
  padding: {
    paddingVertical: normalize(5, 'height'),
  },
});

export default Button;
