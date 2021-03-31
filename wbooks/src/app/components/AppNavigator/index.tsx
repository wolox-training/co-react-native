import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Screens, { ScreenTitles } from '@constants/screens';
import { LibraryStackParamList } from '@interfaces/navigatorParamList';
import BookDetail from '@screens/BookDetail';
import Library from '@screens/Library';
import IconNotifications from '@assets/images/ic_notifications.png';
import IconSearch from '@assets/images/ic_search.png';
import IconBack from '@assets/images/ic_back.png';

import customHeader from './customHeader';
import styles from './styles';

const LibraryStackNavigator = createStackNavigator<LibraryStackParamList>();

function AppNavigator() {
  return (
    <LibraryStackNavigator.Navigator screenOptions={customHeader as object}>
      <LibraryStackNavigator.Screen
        name={Screens.LIBRARY}
        component={Library}
        options={{
          title: ScreenTitles.LIBRARY,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerButtons}>
              <Image source={IconNotifications} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerButtons}>
              <Image source={IconSearch} />
            </TouchableOpacity>
          )
        }}
      />
      <LibraryStackNavigator.Screen
        name={Screens.BOOK_DETAIL}
        component={BookDetail}
        options={{
          title: ScreenTitles.BOOK_DETAIL,
          headerBackTitleVisible: false,
          headerBackImage: () => <Image source={IconBack} style={styles.headerButtons} />
        }}
      />
    </LibraryStackNavigator.Navigator>
  );
}

export default AppNavigator;
