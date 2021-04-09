import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LibraryStackParamList } from '@interfaces/navigatorParamList';
import Screens from '@constants/screens';
import ItemBook from '@components/ItemBook';
import WithSpinner from '@components/WithSpinner';
import { Book } from '@interfaces/book';
import { AppState } from '@interfaces/appState';
import { trimLineBreak } from '@utils/stringUtils';
import { useDispatch, useSelector } from 'react-redux';
import actionCreator from '@redux/book/actions';

import styles from './styles';

const ViewWithSpinner = WithSpinner(SafeAreaView);

interface Props {
  navigation: StackNavigationProp<LibraryStackParamList>;
}

function Library({ navigation }: Props) {
  const dispatch = useDispatch();

  const books = useSelector<AppState, Book[]>((state: AppState) => state.books);
  const booksLoading = useSelector<AppState, boolean>((state: AppState) => state.booksLoading);

  useEffect(() => {
    dispatch(actionCreator.getBooks());
  }, [dispatch]);

  const handleTouch = () => navigation.navigate(Screens.BOOK_DETAIL);
  const renderBooks: ListRenderItem<Book> = ({ item }) => {
    const { id, imageUrl, title, author } = item;
    return (
      <ItemBook id={id} image={imageUrl} onPress={handleTouch} title={trimLineBreak(title)} author={author} />
    );
  };
  const keyExtractor = ({ id }: Book) => String(id);

  return (
    <ViewWithSpinner isLoading={booksLoading} style={styles.container}>
      <FlatList data={books} renderItem={renderBooks} keyExtractor={keyExtractor} />
    </ViewWithSpinner>
  );
}

export default Library;
