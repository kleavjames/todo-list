import React, {FC} from 'react';
import {Image, View, Dimensions, StyleSheet} from 'react-native';
import { Container, Text, Button } from '@/components';
import { colors, normalize } from '@/constants';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const imageHeight = SCREEN_HEIGHT / 2.5;

const Welcome = () => {

  return (
    <Container>
      <View style={styles.container}>
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
        <Text variant="displayMedium" style={styles.header}>
          Manage your Task with
        </Text>
        <Text variant="displayMedium" style={styles.title}>
          DayTask
        </Text>
      </View>
      <Button mode="contained" onPress={() => {}}>
        Let's Start
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: normalize(100),
    width: normalize(100),
  },
  welcomeImg: {
    width: '100%',
    height: normalize(imageHeight, 'height'),
  },
  header: {
    color: colors.white,
  },
  title: {
    color: colors.primary,
  },
});

export default Welcome;
