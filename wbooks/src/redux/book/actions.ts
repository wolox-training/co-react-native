import { completeTypes, createTypes } from 'redux-recompose';
import { getBookList } from '@services/BookService';

const completedActions = completeTypes({
  primaryActions: ['LIST_BOOKS']
});

export const actions = createTypes(completedActions, 'BOOKS');

export const actionCreator = {
  getBooks: () => ({
    type: actions.LIST_BOOKS,
    target: 'books',
    service: getBookList
  })
};
