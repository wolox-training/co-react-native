import { completeTypes, createTypes } from 'redux-recompose';
import { getBookList } from '@services/BookService';

const TARGETS = {
  BOOKS: 'books'
};

export const actions = createTypes(completeTypes({ primaryActions: ['LIST_BOOKS'] }), '@@BOOKS');

export const actionCreator = {
  getBooks: () => ({
    type: actions.LIST_BOOKS,
    target: TARGETS.BOOKS,
    service: getBookList
  })
};
