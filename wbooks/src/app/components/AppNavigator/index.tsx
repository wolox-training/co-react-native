import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS, { SCREEN_TITLES } from '@constants/screens';
import { LibraryStackParamList } from '@interfaces/navigatorParamList';
import BookDetail from '@screens/BookDetail';
import Library from '@screens/Library';

const LibraryStackNavigator = createStackNavigator<LibraryStackParamList>();

function AppNavigator() {
  return (
    <LibraryStackNavigator.Navigator>
      <LibraryStackNavigator.Screen
        name={SCREENS.LIBRARY}
        component={Library}
        options={{ title: SCREEN_TITLES.LIBRARY }}
      />
      <LibraryStackNavigator.Screen
        name={SCREENS.BOOK_DETAIL}
        component={BookDetail}
        options={{ title: SCREEN_TITLES.BOOK_DETAIL }}
      />
    </LibraryStackNavigator.Navigator>
  );
}

export default AppNavigator;
