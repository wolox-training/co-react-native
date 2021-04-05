import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  image: ImageSourcePropType;
  handleTouch?: () => void;
}

function ButtonHeader({ image, handleTouch }: Props) {
  return (
    <TouchableOpacity onPress={handleTouch} style={styles.headerButtons}>
      <Image source={image} />
    </TouchableOpacity>
  );
}

export default ButtonHeader;
