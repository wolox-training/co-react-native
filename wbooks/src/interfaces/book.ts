export interface Book {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
}

export interface BookState {
  booksLoading: boolean;
  books: Book[];
  searchBooks: string;
}

export interface BooksResponse {
  ok: boolean;
  data: Book[];
}

export enum BookTypes {
  BOOK_LIST_REQUEST = 'BOOK_LIST_REQUEST',
  BOOK_LIST_REQUEST_SUCCESS = 'BOOK_LIST_REQUEST_SUCCESS',
  BOOK_LIST_REQUEST_FAILURE = 'BOOK_LIST_REQUEST_FAILURE'
}

export type BookActions =
  | { type: BookTypes.BOOK_LIST_REQUEST }
  | { type: BookTypes.BOOK_LIST_REQUEST_SUCCESS; payload: Book[] }
  | { type: BookTypes.BOOK_LIST_REQUEST_FAILURE; payload: string };
