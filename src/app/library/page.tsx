'use client';

import BookList from '../../components/book/BookList';
import BookFilter from '../../components/book/BookFilter';
import Link from 'next/link';

export default function LibraryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Library</h1>
        <Link href="/add-book"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add New Book
        </Link>
      </div>
      <BookFilter />
      <BookList />
    </div>
  );
}