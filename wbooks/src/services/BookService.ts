import { BOOKS_MOCK } from '@constants/mockBooks';
import { BookServiceMockedResponse } from '@interfaces/booksServiceMock';

export function getBookList() {
  return new Promise<BookServiceMockedResponse>((resolve, reject) => {
    const data = { ok: true, data: BOOKS_MOCK };
    resolve(data);

    const error = { ok: false, error: 'Something went wrong' };
    reject(error);
  });
}
