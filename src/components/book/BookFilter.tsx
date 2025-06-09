import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setFilter } from '../../reducers';
import type { BookFilter } from '../../types/book';

export default function BookFilter() {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.books);

  return (
    <div className="flex space-x-2 mb-6">
      {(['all', 'read', 'unread'] as BookFilter[]).map((filterOption) => (
        <button
          key={filterOption}
          onClick={() => dispatch(setFilter(filterOption))}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            filter === filterOption
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
        </button>
      ))}
    </div>
  );
}