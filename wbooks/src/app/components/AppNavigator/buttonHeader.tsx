import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  image: ImageSourcePropType;
  screenNavigate?: string;
}

function ButtonHeader({ image, screenNavigate }: Props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => screenNavigate && navigation.navigate(screenNavigate)}
      style={styles.headerButtons}>
      <Image source={image} />
    </TouchableOpacity>
  );
}

export default ButtonHeader;
