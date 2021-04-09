import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import { Book } from '@interfaces/book';

import actionCreators, { actions, TARGETS } from './actions';
import { initialState } from './reducers';

export interface BookServiceMockedResponse {
  data?: Book[];
  ok: boolean;
  error?: string;
}

const middlewares = [thunk, fetchMiddleware];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

beforeEach(() => store.clearActions());

describe('@@BOOKS', () => {
  it('Action: LIST_BOOKS', () => {
    store.dispatch(actionCreators.getBooks());

    expect(store.getActions()).toEqual([{ type: actions.LIST_BOOKS, target: TARGETS.BOOKS }]);
  });

  it('Action: SEARCH_BOOKS', () => {
    store.dispatch(actionCreators.searchBooks('Locked in t'));

    expect(store.getActions()).toEqual([
      { type: actions.SEARCH_BOOKS, target: TARGETS.SEARCH, payload: 'Locked in t' }
    ]);
  });
});
