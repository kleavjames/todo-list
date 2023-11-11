import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../atom/Text';
import { useNavigation } from 'expo-router';
import { colors, globalStyles, normalize } from '@/constants';

const Header: FC = () => {
  // const fullName = useUserStore(state => state.fullName);
  const navigation = useNavigation();

  const navigateToProfile = () => {
    // navigation.navigate();
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={globalStyles.textPrimary} variant="labelMedium">
          Welcome back!
        </Text>
        <Text variant="titleMedium" style={styles.name}>
          Kleavant James
        </Text>
      </View>
      <TouchableOpacity onPress={navigateToProfile}>
        <Image
          style={styles.image}
          source={require('@/assets/images/prof-pic.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(20),
  },
  image: {
    height: normalize(40, 'height'),
    width: normalize(40),
  },
  name: {
    fontFamily: 'pilat',
    color: colors.white,
  },
});

export default Header;
