import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens, { ScreenTitles } from '@constants/screens';
import { LibraryStackParamList } from '@interfaces/navigatorParamList';
import BookDetail from '@screens/BookDetail';
import Library from '@screens/Library';

const LibraryStackNavigator = createStackNavigator<LibraryStackParamList>();

function AppNavigator() {
  return (
    <LibraryStackNavigator.Navigator>
      <LibraryStackNavigator.Screen
        name={Screens.LIBRARY}
        component={Library}
        options={{ title: ScreenTitles.LIBRARY }}
      />
      <LibraryStackNavigator.Screen
        name={Screens.BOOK_DETAIL}
        component={BookDetail}
        options={{ title: ScreenTitles.BOOK_DETAIL }}
      />
    </LibraryStackNavigator.Navigator>
  );
}

export default AppNavigator;
