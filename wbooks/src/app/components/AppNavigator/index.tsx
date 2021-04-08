import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Screens, { ScreenTitles } from '@constants/screens';
import { LibraryStackParamList } from '@interfaces/navigatorParamList';
import BookDetail from '@screens/BookDetail';
import Library from '@screens/Library';
import Search from '@screens/Search';
import SearchHeader from '@components/SearchHeader';
import IconNotifications from '@assets/images/ic_notifications.png';
import IconSearch from '@assets/images/ic_search.png';
import IconBack from '@assets/images/ic_back.png';

import ButtonHeader from './buttonHeader';
import customHeader from './customHeader';
import styles from './styles';

const LibraryStackNavigator = createStackNavigator<LibraryStackParamList>();

function AppNavigator() {
  return (
    <LibraryStackNavigator.Navigator screenOptions={customHeader}>
      <LibraryStackNavigator.Screen
        name={Screens.LIBRARY}
        component={Library}
        options={{
          title: ScreenTitles.LIBRARY,
          headerLeft: () => <ButtonHeader image={IconNotifications} />,
          headerRight: () => <ButtonHeader screenNavigate={Screens.SEARCH} image={IconSearch} />
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
      <LibraryStackNavigator.Screen
        name={Screens.SEARCH}
        component={Search}
        options={{
          headerLeft: () => null,
          headerTitle: () => <SearchHeader />
        }}
      />
    </LibraryStackNavigator.Navigator>
  );
}

export default AppNavigator;
