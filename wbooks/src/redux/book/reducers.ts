import { BookActions, BookState, BookTypes } from '@interfaces/book';

const initialState: BookState = {
  isLoading: false,
  books: []
};

function bookReducer(state: BookState = initialState, action: BookActions): BookState {
  switch (action.type) {
    case BookTypes.BOOK_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case BookTypes.BOOK_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        books: action.payload,
        isLoading: false
      };

    case BookTypes.BOOK_LIST_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}

export default bookReducer;
