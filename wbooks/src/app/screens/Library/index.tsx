import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import ItemBook from '@componets/ItemBook';
import { Book } from '@interfaces/book';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { trimLineBreak } from '@utils/stringUtils';

import styles from './styles';

function Library() {
  const renderBooks: ListRenderItem<Book> = ({ item }) => {
    const { imageUrl, title, author } = item;
    return <ItemBook image={imageUrl} title={trimLineBreak(title)} author={author} />;
  };
  const keyExtractor = ({ id }: Book) => String(id);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={BOOKS_MOCK} renderItem={renderBooks} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default Library;
