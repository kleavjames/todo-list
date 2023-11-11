import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {getHeaderTitle} from '@react-navigation/elements';
import {Appbar} from 'react-native-paper';
import { colors, globalStyles, normalize } from '@/constants';
import ArrowLeftIcon from '@/assets/icons/arrowleft.svg'
import { Text } from '../atom';

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
