/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
if (__DEV__) {
  import('@config/reactotronConfig');
}

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@components/AppNavigator';

const App = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.tron.log('Reactotron Configured');
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
