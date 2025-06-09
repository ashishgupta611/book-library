import Link from 'next/link';
import { useAppDispatch } from '../../../hooks/hooks';
import { toggleRead } from '../../../reducers';
import { useFilteredBooks } from '../../../hooks/useFilteredBooks';

export default function BookList() {
  const filteredBooks = useFilteredBooks();
  const dispatch = useAppDispatch();

  return (
    <div className="space-y-4">
      {filteredBooks.map((book) => (
        <div key={book.id} className="p-4 border border-gray-200 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                book.read ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {book.read ? 'Read' : 'Unread'}
              </span>
            </div>
            <div className="flex space-x-2">
              <Link
                href={`/book-details/${book.id}`}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Details
              </Link>
              <button
                onClick={() => dispatch(toggleRead(book.id))}
                className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white ${
                  book.read ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  book.read ? 'focus:ring-yellow-500' : 'focus:ring-green-500'
                }`}
              >
                {book.read ? 'Mark Unread' : 'Mark Read'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}