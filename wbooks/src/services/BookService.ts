import { BOOKS_MOCK } from '@constants/mockBooks';
import { BooksResponse } from '@interfaces/book';

export default function getBooksMock() {
  return new Promise<BooksResponse>(resolve => {
    setTimeout(() => resolve({ ok: true, data: BOOKS_MOCK }), 1000);
  });
}
