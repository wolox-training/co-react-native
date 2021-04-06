import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, ListRenderItem, Text } from 'react-native';
import Config from 'react-native-config';
import { StackNavigationProp } from '@react-navigation/stack';
import { LibraryStackParamList } from '@interfaces/navigatorParamList';
import Screens from '@constants/screens';
import ItemBook from '@components/ItemBook';
import { Book } from '@interfaces/book';
import { AppState } from '@interfaces/appState';
import { trimLineBreak } from '@utils/stringUtils';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '@redux/book/actions';

import styles from './styles';

interface Props {
  navigation: StackNavigationProp<LibraryStackParamList>;
}

function Library({ navigation }: Props) {
  const dispatch = useDispatch();

  const books = useSelector<AppState, Book[]>((state: AppState) => state.books);

  useEffect(() => {
    dispatch(actionCreator.getBooks());
  }, [dispatch]);

  const handleTouch = () => navigation.navigate(Screens.BOOK_DETAIL);
  const renderBooks: ListRenderItem<Book> = ({ item }) => {
    const { imageUrl, title, author } = item;
    return <ItemBook image={imageUrl} onPress={handleTouch} title={trimLineBreak(title)} author={author} />;
  };
  const keyExtractor = ({ id }: Book) => String(id);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<Text>{Config.SECRET_VARIABLE}</Text>}
        data={books}
        renderItem={renderBooks}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
}

export default Library;
