import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, fireEvent } from '@testing-library/react-native';
import { Book } from '@interfaces/book';

import ItemBook from './index';

const mockedBook: Book = {
  id: 3,
  author: 'Christopher Pike',
  title: 'Scavenger Hunt',
  genre: 'suspense',
  publisher: 'Pocket Books',
  year: '1989',
  imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg'
};

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockedBook);

const onPress = jest.fn();

const renderItemBook = (
  <Provider store={store}>
    <ItemBook
      image={mockedBook.imageUrl}
      title={mockedBook.title}
      author={mockedBook.author}
      onPress={onPress}
    />
  </Provider>
);

describe('ItemBook component', () => {
  it('onPress itemBook', () => {
    const { getByText } = render(renderItemBook);

    fireEvent.press(getByText(mockedBook.title));
    expect(onPress).toHaveBeenCalled();
  });

  it('show title and author', () => {
    const { getByText } = render(renderItemBook);

    expect(getByText(mockedBook.title)).toBeDefined();
    expect(getByText(mockedBook.author)).toBeDefined();
  });

  it('Do not show gender and publisher', () => {
    const { queryByText } = render(renderItemBook);

    expect(queryByText(mockedBook.genre)).toBeNull();
    expect(queryByText(mockedBook.publisher)).toBeNull();
  });
});
