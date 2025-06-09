'use client';

import { QuickStatusProps } from '../../interfaces';
import { useAppSelector } from '@/src/hooks/hooks';

const QuickStatus = ({ children }: QuickStatusProps) => {
  const { books } = useAppSelector((state) => state.books);
  const readCount = books.filter((book) => book.read).length;

  if (!books) {
    return (
      <div>
        <h1>No books available in the library.</h1>
      </div>
    );
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-medium text-gray-800 mb-3">{'Quick Status'}</h3>
      <div className="flex justify-center space-x-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-indigo-600">{books.length}</div>
          <div className="text-sm text-gray-500">Total Books</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">{readCount}</div>
          <div className="text-sm text-gray-500">Books Read</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-600">{books.length - readCount}</div>
          <div className="text-sm text-gray-500">To Read</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default QuickStatus;
