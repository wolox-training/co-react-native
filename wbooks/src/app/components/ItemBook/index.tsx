import React, { useEffect, useRef } from 'react';
import { Image, Text, TouchableOpacity, View, Animated } from 'react-native';
import placeholderImage from '@assets/images/img_book_placeholder.png';

import styles from './styles';

interface Props {
  id: number;
  image: string | null;
  title: string;
  author: string;
  onPress?: () => void;
}

function ItemBook({ id, image, title, author, onPress }: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1000,
      delay: id * 400
    }).start();
  }, [fadeAnim, id]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.image} resizeMode="contain" source={image ? { uri: image } : placeholderImage} />
        <View style={styles.bookInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default ItemBook;
