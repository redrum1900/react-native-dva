import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { scale } from '../utils/methods';

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    // width: screenWidth,
    // height: screenHeight,
  },
  iconArrow: {
    marginLeft: scale(13),
  },
  rightImage: {
    marginLeft: scale(10),
    marginRight: scale(18),
  },
});

export const SplashImage = props => <Image {...props} style={styles.splash} />;

export default SplashImage;
