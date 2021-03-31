import React from 'react';
import { Image } from 'react-native';
import headerBackground from '@assets/images/bc_nav_bar.png';
import { WHITE } from '@constants/colors';

import styles from './styles';

const customHeader = {
  headerStyle: styles.headerStyle,
  headerTintColor: WHITE,
  headerBackground: () => <Image style={styles.headerImage} resizeMode="stretch" source={headerBackground} />,
  headerTitleStyle: styles.headerTitleStyle
};

export default customHeader;
