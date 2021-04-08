import { completeReducer, completeState, createReducer, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { BookState } from '@interfaces/book';

import { actions } from './actions';

export const initialState: BookState = completeState({
  books: [],
  ignoredTargets: {
    searchBooks: ''
  }
});

const reducerDescription = {
  primaryActions: [actions.LIST_BOOKS],
  override: {
    [actions.SEARCH_BOOKS]: onReadValue()
  }
};

const completedReducer = completeReducer(reducerDescription);

export default createReducer(Immutable(initialState), completedReducer);
