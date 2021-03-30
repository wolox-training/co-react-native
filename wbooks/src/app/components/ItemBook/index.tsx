import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import placeholderImage from '@assets/images/img_book_placeholder.png';

import styles from './styles';

interface Props {
  image: string | null;
  title: string;
  author: string;
  onPress?: () => void;
}

function ItemBook({ image, title, author, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} resizeMode="contain" source={image ? { uri: image } : placeholderImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ItemBook;
