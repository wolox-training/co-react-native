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
import Library from '@screens/Library';

const App = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.tron.log('Reactotron Configured');
  }, []);

  return <Library />;
};

export default App;
