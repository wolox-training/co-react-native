import { BookActions, BookState, BookTypes } from '@interfaces/book';

const initialState: BookState = {
  booksLoading: false,
  books: []
};

function bookReducer(state: BookState = initialState, action: BookActions): BookState {
  switch (action.type) {
    case BookTypes.BOOK_LIST_REQUEST:
      return {
        ...state,
        booksLoading: true
      };

    case BookTypes.BOOK_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        books: action.payload,
        booksLoading: false
      };

    case BookTypes.BOOK_LIST_REQUEST_FAILURE:
      return {
        ...state,
        booksLoading: false
      };

    default:
      return state;
  }
}

export default bookReducer;
