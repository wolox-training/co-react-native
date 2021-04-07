import { completeReducer, completeState, createReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { BookState } from '@interfaces/book';

import { actions } from './actions';

export const initialState: BookState = completeState({
  books: []
});

const reducerDescription = {
  primaryActions: [actions.LIST_BOOKS]
};

const completedReducer = completeReducer(reducerDescription);

export default createReducer(Immutable(initialState), completedReducer);
