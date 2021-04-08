import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import closeSearch from '@assets/images/ic_close_search.png';
import searchPlaceholderIcon from '@assets/images/ic_search_placeholder.png';
import useBooks from '@app/hooks/searchHook';
import actionCreators from '@redux/book/actions';

import styles from './styles';

const SearchHeader = () => {
  const dispatch = useDispatch();
  const onSearch = (text: string) => dispatch(actionCreators.searchBooks(text));
  const onCleanInput = () => dispatch(actionCreators.searchBooks(''));
  const { searchBooks } = useBooks();

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.searchIcon} source={searchPlaceholderIcon} />
      <TextInput style={styles.input} onChangeText={onSearch} value={searchBooks} />
      <TouchableOpacity onPress={onCleanInput}>
        <Image
          resizeMode="contain"
          style={[styles.clearIcon, searchBooks.length >= 1 && styles.clearIconActive]}
          source={closeSearch}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;
