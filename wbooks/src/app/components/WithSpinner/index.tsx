import React, { ReactNode, Component } from 'react';
import { ActivityIndicator, View, ViewProps } from 'react-native';
import { BLUE } from '@constants/colors';

import styles from './styles';

interface Props extends ViewProps {
  isLoading: boolean;
  children: ReactNode;
}

const withSpinner = (Node: typeof Component) => ({ isLoading, children, ...props }: Props) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={BLUE} />
      </View>
    );
  }

  return <Node {...props}>{children}</Node>;
};

export default withSpinner;
