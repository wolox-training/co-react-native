import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LibraryStackParamList } from '@interfaces/navigatorParamList';
import { LibraryType } from '@interfaces/screens';
import SCREENS from '@constants/screens';
import ItemBook from '@components/ItemBook';
import { Book } from '@interfaces/book';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { trimLineBreak } from '@utils/stringUtils';

import styles from './styles';

interface Props {
  navigation: StackNavigationProp<LibraryStackParamList, LibraryType>;
}

function Library({ navigation }: Props) {
  const renderBooks: ListRenderItem<Book> = ({ item }) => {
    const { imageUrl, title, author } = item;
    return (
      <ItemBook
        image={imageUrl}
        onPress={() => navigation.navigate(SCREENS.BOOK_DETAIL)}
        title={trimLineBreak(title)}
        author={author}
      />
    );
  };
  const keyExtractor = ({ id }: Book) => String(id);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={BOOKS_MOCK} renderItem={renderBooks} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default Library;
