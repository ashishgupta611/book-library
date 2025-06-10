'use client';

import BackToLibrary from '../../components/common/BackToLibrary';
import AddBookForm from '../../components/book/AddBookForm';

export default function AddBookPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BackToLibrary title='Add New Book'/>
      <AddBookForm buttonTitle='Add Book'/>
    </div>
  );
}