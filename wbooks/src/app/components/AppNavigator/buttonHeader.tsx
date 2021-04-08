import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  image: ImageSourcePropType;
  routeName?: string | null;
}

function ButtonHeader({ image, routeName }: Props) {
  const navigation = useNavigation();

  function handleNavigation() {
    if (routeName) {
      navigation.navigate(routeName);
    }
  }

  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.headerButtons}>
      <Image source={image} />
    </TouchableOpacity>
  );
}

export default ButtonHeader;
