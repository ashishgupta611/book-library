import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../../hooks/hooks';
import { addBook, updateBook } from '../../reducers';
import { AddBookFormProps } from '../../interfaces';


export default function AddBookForm({book, buttonTitle}: AddBookFormProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book?  book.author : '');
  const [description, setDescription] = useState(book ? book.description : '');
  const [read, setRead] = useState(book ? book.read : false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (book) {
      dispatch(updateBook({ id: book.id, title, author, description, read }));
      router.push('/library');
    }
    else {
      dispatch(addBook({ title, author, description, read }));
      setTitle('');
      setAuthor('');
      setDescription('');
      setRead(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          id="author"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex items-center">
        <input
          id="read"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          checked={read}
          onChange={(e) => setRead(e.target.checked)}
        />
        <label htmlFor="read" className="ml-2 block text-sm text-gray-900">
          Read
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {buttonTitle}
      </button>
    </form>
  );
}