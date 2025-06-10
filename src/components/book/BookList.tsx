import { useFilteredBooks } from '../../hooks/useFilteredBooks';
import BookListItem from './BookListItem';

export default function BookList() {
  const filteredBooks = useFilteredBooks();
  
  return (
    <div className="space-y-4">
      {filteredBooks.map((book) => (
        <div key={book.id} className="p-4 border border-gray-200 rounded-lg shadow-sm">
          <BookListItem book={book}/>
        </div>
      ))}
    </div>
  );
}