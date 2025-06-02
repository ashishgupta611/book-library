'use client';

import BookDetails from '../../features/books/components/BookDetails';
import Link from 'next/link';

export default function BookDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/library"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back to Library
        </Link>
      </div>
      <BookDetails />
    </div>
  );
}