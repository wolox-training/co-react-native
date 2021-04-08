import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  image: ImageSourcePropType;
  routeName?: string;
}

function ButtonHeader({ image, routeName }: Props) {
  const navigation = useNavigation();

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <TouchableOpacity onPress={() => routeName && handleNavigation(routeName)} style={styles.headerButtons}>
      <Image source={image} />
    </TouchableOpacity>
  );
}

export default ButtonHeader;
