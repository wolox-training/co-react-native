import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book, BookState } from '@interfaces/book';
import { AppState } from '@interfaces/appState';
import actionCreators from '@redux/book/actions';

function SearchBooks() {
  const dispatch = useDispatch();
  const { books, searchBooks } = useSelector<AppState, BookState>(state => state);

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  const filteredBooks: Book[] = useMemo(() => {
    return books.filter(item => item.title.toLowerCase().includes(searchBooks.toLowerCase()));
  }, [books, searchBooks]);

  return { searchBooks, filteredBooks };
}

export default SearchBooks;
