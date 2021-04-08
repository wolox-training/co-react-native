import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
}

function ViewText({ text }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default ViewText;
