import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { useParams } from 'next/navigation';
import { toggleRead } from '../booksSlice';
import Link from 'next/link';

export default function BookDetails() {
  const { id } = useParams();
  const book = useAppSelector((state) =>
    state.books.books.find((book) => book.id === id)
  );
  const dispatch = useAppDispatch();

  if (!book) {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Book not found</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-2xl font-bold text-gray-900">{book.title}</h2>
        <h4 className="text-lg text-gray-500 mt-1">by {book.author}</h4>
        <p className="mt-3 text-gray-700">
          {book.description || 'No description available'}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              book.read ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {book.read ? 'Read' : 'Unread'}
          </span>
          <button
            onClick={() => dispatch(toggleRead(book.id))}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
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
  );
}