import { Dispatch } from 'redux';
import { BookTypes } from '@interfaces/book';
import { getBookList } from '@services/BookService';
import Reactotron from '@config/reactotronConfig';

export const actionCreator = {
  getBooks: () => async (dispatch: Dispatch) => {
    dispatch({ type: BookTypes.BOOK_LIST_REQUEST });
    const response = await getBookList();
    if (__DEV__) {
      Reactotron.apisauce(response);
    }
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
