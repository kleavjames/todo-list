import {normalize} from './size';

export const fontConfig: any = {
  displayLarge: {
    fontFamily: 'pilat',
    fontSize: normalize(57),
    letterSpacing: 0,
    lineHeight: 64,
  },
  displayMedium: {
    fontFamily: 'pilat',
    fontSize: normalize(45),
    letterSpacing: 0,
    lineHeight: 52,
  },
  displaySmall: {
    fontFamily: 'pilat',
    fontSize: normalize(36),
    letterSpacing: 0,
    lineHeight: 44,
  },
  headlineLarge: {
    fontFamily: 'inter',
    fontSize: normalize(32),
    letterSpacing: 0,
    lineHeight: 40,
  },
  headlineMedium: {
    fontFamily: 'inter',
    fontSize: normalize(28),
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineSmall: {
    fontFamily: 'inter',
    fontSize: normalize(24),
    letterSpacing: 0,
    lineHeight: 32,
  },
  titleLarge: {
    fontFamily: 'interMedium',
    fontSize: normalize(22),
    letterSpacing: 0,
    lineHeight: 28,
  },
  titleMedium: {
    fontFamily: 'interMedium',
    fontSize: normalize(16),
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleSmall: {
    fontFamily: 'interMedium',
    fontSize: normalize(14),
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelLarge: {
    fontFamily: 'interMedium',
    fontSize: normalize(14),
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily: 'interMedium',
    fontSize: normalize(12),
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelSmall: {
    fontFamily: 'interMedium',
    fontSize: normalize(11),
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  bodyLarge: {
    fontFamily: 'inter',
    fontSize: normalize(16),
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: 'inter',
    fontSize: normalize(14),
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: 'inter',
    fontSize: normalize(12),
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  default: {
    fontFamily: 'inter',
    letterSpacing: 0,
  },
};

export type CustomTexts = 'normal' | 'header';
