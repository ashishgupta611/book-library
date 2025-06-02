'use client';

import AddBookForm from '../../features/books/components/AddBookForm';
import Link from 'next/link';

export default function AddBookPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Add New Book</h1>
        <Link
          href="/library"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back to Library
        </Link>
      </div>
      <AddBookForm />
    </div>
  );
}