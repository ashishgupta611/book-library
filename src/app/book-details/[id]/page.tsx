'use client';

import BookDetails from '../../../components/book/BookDetails';
import BackToLibrary from '../../../components/common/BackToLibrary';

export default function BookDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BackToLibrary title='Book Details'/>
      <BookDetails />
    </div>
  );
};
