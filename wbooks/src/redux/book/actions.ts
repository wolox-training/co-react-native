import { Dispatch } from 'redux';
import { BookTypes } from '@interfaces/book';
import getBooksMock from '@services/BookService';

export const actionCreator = {
  getBooks: () => async (dispatch: Dispatch) => {
    dispatch({ type: BookTypes.BOOK_LIST_REQUEST });
    const response = await getBooksMock();
    if (response.ok) {
      dispatch({
        type: BookTypes.BOOK_LIST_REQUEST_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: BookTypes.BOOK_LIST_REQUEST_FAILURE
      });
    }
  }
};
