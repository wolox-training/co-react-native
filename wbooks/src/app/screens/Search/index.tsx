import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LibraryStackParamList } from '@interfaces/navigatorParamList';
import ItemBook from '@app/components/ItemBook';
import SearchEmpty from '@app/components/SearchEmpty';
import ViewText from '@app/components/ViewText';
import { trimLineBreak } from '@utils/stringUtils';
import Screens from '@constants/screens';
import { Book } from '@interfaces/book';
import SearchBooks from '@app/hooks/searchHook';

import styles from './styles';

interface Props {
  navigation: StackNavigationProp<LibraryStackParamList>;
}

function Search({ navigation }: Props) {
  const { filteredBooks, searchBooks } = SearchBooks();

  const handleTouch = () => navigation.navigate(Screens.BOOK_DETAIL);
  const renderBooks: ListRenderItem<Book> = ({ item }) => {
    const { imageUrl, title, author } = item;
    return <ItemBook image={imageUrl} onPress={handleTouch} title={trimLineBreak(title)} author={author} />;
  };
  const keyExtractor = ({ id }: Book) => String(id);

  return (
    <View style={styles.container}>
      {searchBooks.length >= 1 ? (
        <FlatList
          data={filteredBooks}
          renderItem={renderBooks}
          keyExtractor={keyExtractor}
          ListEmptyComponent={<ViewText text="No results found" />}
        />
      ) : (
        <SearchEmpty />
      )}
    </View>
  );
}

export default Search;
