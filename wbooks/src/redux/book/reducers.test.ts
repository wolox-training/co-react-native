import { Book } from '@interfaces/book';

import { actions, TARGETS } from './actions';
import booksReducer from './reducers';

const mockedBook: Book[] = [
  {
    id: 2,
    author: 'Lois Duncan',
    title: 'Locked in time',
    genre: 'suspense',
    publisher: 'Little, Brown',
    year: '1985',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'
  }
];

const testActions = {
  getBooks: {
    type: actions.LIST_BOOKS,
    target: TARGETS.BOOKS
  },
  getBooksSuccess: {
    type: actions.LIST_BOOKS_SUCCESS,
    target: TARGETS.BOOKS,
    payload: mockedBook
  },
  getBooksFailure: {
    type: actions.LIST_BOOKS_FAILURE,
    target: TARGETS.BOOKS,
    payload: 'Something went wrong'
  },
  searchBooks: {
    type: actions.SEARCH_BOOKS,
    target: TARGETS.SEARCH,
    payload: 'Locked in t'
  }
};

describe('@@BOOKS/LIST_BOOKS', () => {
  it('LIST_BOOKS', () => {
    expect(booksReducer(undefined, testActions.getBooks)).toMatchObject({
      booksLoading: true
    });
  });

  it('LIST_BOOKS_SUCCESS', () => {
    expect(booksReducer(undefined, testActions.getBooksSuccess)).toMatchObject({
      books: mockedBook,
      booksError: null,
      booksLoading: false
    });
  });

  it('LIST_BOOKS_FAILURE', () => {
    expect(booksReducer(undefined, testActions.getBooksFailure)).toMatchObject({
      booksError: 'Something went wrong',
      booksLoading: false
    });
  });
});

describe('@@BOOKS/SEARCH_BOOKS', () => {
  it('SEARCH_BOOKS', () => {
    expect(booksReducer(undefined, testActions.searchBooks)).toMatchObject({
      searchBooks: 'Locked in t'
    });
  });
});
