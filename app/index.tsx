import React from 'react';
import {Image, View, Dimensions, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import { Container, Text, Button } from '@/components';
import { globalStyles, normalize } from '@/constants';
import { useInitialize } from '@/hooks/useInitialize';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const imageHeight = SCREEN_HEIGHT / 2.5;

const Welcome = () => {
  const setFirstTime = useInitialize(state => state.setFirstTime);

  return (
    <Container>
      <View style={globalStyles.flex}>
        <Image
          style={styles.logo}
          source={require('@/assets/images/logo.png')}
          resizeMode="center"
        />
        <Image
          style={styles.welcomeImg}
          source={require('@/assets/images/welcome.png')}
          resizeMode="contain"
        />
        <Text variant="displayMedium" style={globalStyles.textWhite}>
          Manage your Task with
        </Text>
        <Text variant="displayMedium" style={globalStyles.textPrimary}>
          DayTask
        </Text>
      </View>
      <Link href={'/todos/'} asChild>
        <Button mode="contained" onPress={setFirstTime}>
          Let's Start
        </Button>
      </Link>
    </Container>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: normalize(100),
    width: normalize(100),
  },
  welcomeImg: {
    width: '100%',
    height: normalize(imageHeight, 'height'),
  },
});

export default Welcome;
