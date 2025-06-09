import { Book, BookFilter} from '../types';

export interface BooksState {
  books: Book[];
  filter: BookFilter;
};