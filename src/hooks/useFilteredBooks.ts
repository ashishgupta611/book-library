import { useAppSelector } from './hooks';

export const useFilteredBooks = () => {
  const { books, filter } = useAppSelector((state) => state.books);
  
  switch (filter) {
    case 'read':
      return books.filter((book) => book.read);
    case 'unread':
      return books.filter((book) => !book.read);
    default:
      return books;
  }
};