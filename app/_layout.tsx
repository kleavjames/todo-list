import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  configureFonts,
} from 'react-native-paper';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { fontConfig } from '@/constants/fonts';
import Colors from '@/constants/Colors';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    pilat: require('../assets/fonts/PilatExtended-DemiBold.ttf'),
    inter: require('../assets/fonts/Inter-Regular.ttf'),
    interBold: require('../assets/fonts/Inter-Bold.ttf'),
    interSemiBold: require('../assets/fonts/Inter-SemiBold.ttf'),
    interMedium: require('../assets/fonts/Inter-Medium.ttf'), 
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

export const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
  fonts: configureFonts({config: fontConfig}),
};

function RootLayoutNav() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <PaperProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor={Colors.background}
        />
        <Stack screenOptions={{ headerShown: false}} />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
