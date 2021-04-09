import { completeTypes, createTypes } from 'redux-recompose';
import { getBookList } from '@services/BookService';

export const TARGETS = {
  BOOKS: 'books',
  SEARCH: 'searchBooks'
};

const completedActions = completeTypes({
  primaryActions: ['LIST_BOOKS'],
  ignoredActions: ['SEARCH_BOOKS']
});

export const actions = createTypes(completedActions, '@@BOOKS');

const actionCreator = {
  getBooks: () => ({
    type: actions.LIST_BOOKS,
    target: TARGETS.BOOKS,
    service: getBookList
  }),
  searchBooks: (search: string) => ({
    type: actions.SEARCH_BOOKS,
    target: TARGETS.SEARCH,
    payload: search
  })
};

export default actionCreator;
