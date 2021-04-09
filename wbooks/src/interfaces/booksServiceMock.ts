import { Book } from '@interfaces/book';

export interface BookServiceMockedResponse {
  data?: Book[];
  ok: boolean;
  error?: string;
}
