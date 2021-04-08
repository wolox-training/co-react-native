import React from 'react';
import { Image, Text, View } from 'react-native';
import searchIcon from '@assets/images/ic_search_placeholder.png';

import styles from './styles';

function SearchEmpty() {
  return (
    <View style={styles.container}>
      <Image style={styles.searchIcon} source={searchIcon} />
      <Text style={styles.title}>Search in Wbooks</Text>
      <Text style={styles.subtitle}>Find your favorite writers and books!</Text>
    </View>
  );
}

export default SearchEmpty;
