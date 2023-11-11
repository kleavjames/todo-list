import React, {FC} from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from './Text';
import {Appbar} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import { colors, globalStyles, normalize } from '@/constants';
import ArrowLeftIcon from '@/assets/icons/arrowleft.svg'

const CustomHeader: FC<NativeStackHeaderProps> = ({
  navigation,
  route,
  options,
}) => {
  const title = getHeaderTitle(options, route.name);

  const goBack = () => {
    navigation.pop();
  };

  return (
    <Appbar.Header style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={globalStyles.textWhite}>{title}</Text>
        </View>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    paddingHorizontal: normalize(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    ...globalStyles.flex,
    marginLeft: normalize(20),
  },
});

export default CustomHeader;
