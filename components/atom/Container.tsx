import { colors } from '@/constants';
import { normalize } from '@/constants/size';
import React, {FC} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({children}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}>
      {children}
      {Platform.OS === 'android' && <View style={styles.space} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: normalize(20),
  },
  space: {
    marginBottom: normalize(20)
  }
});

export default Container;
