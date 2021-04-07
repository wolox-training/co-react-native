import { completeReducer, completeState, createReducer } from 'redux-recompose';
import { BookState } from '@interfaces/book';

import { actions } from './actions';

export const initialState: BookState = completeState({
  description: {
    booksLoading: false,
    books: []
  }
});

const reducerDescription = {
  primaryActions: [actions.LIST_BOOKS]
};

const completedReducer = completeReducer(reducerDescription);

export default createReducer(initialState, completedReducer);
