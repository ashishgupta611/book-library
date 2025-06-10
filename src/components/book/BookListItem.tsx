import { BookListItemProps } from '../../interfaces';
import { useAppDispatch } from '../../hooks/hooks';
import Link from 'next/link';
import { toggleRead, removeBook } from '../../reducers';

interface ListItemDetailProps {
    title: string;
    author: string;
    read: boolean;
};

const ListItemDetail = ({ title, author, read }: ListItemDetailProps) => {
    return (
        <div>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="text-gray-600">by {author}</p>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${read ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                {read ? 'Read' : 'Unread'}
            </span>
        </div>
    );
};

const BookListItem = ({ book }: BookListItemProps) => {
    const dispatch = useAppDispatch();

    const NavigationLink = (title: string, href: string) => {
        return (
            <Link
                href={`/${href}/${book.id}`}
                className="inline-flex justify-center items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {title}
            </Link>
        );
    };

    const statusButton = () => {
        return (
            <button
                onClick={() => dispatch(toggleRead(book.id))}
                className={`inline-flex w-32 justify-center items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white ${book.read ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 ${book.read ? 'focus:ring-yellow-500' : 'focus:ring-green-500'
                    }`}
            >
                {book.read ? 'MARK UNREAD' : 'MARK READ'}
            </button>
        );
    };

    const deleteButton = () => {
        return (
            <button
                onClick={() => dispatch(removeBook(book.id))}
                className={`inline-flex justify-center items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-orange-600 hover:bg-yellow-700 focus:ring-yellow-500 w-32`}
            >
                DELETE
            </button>
        );
    };

    return (
        <div className="flex justify-between items-center">
            <ListItemDetail title={book.title} author={book.author} read={book.read} />
            <div className="flex space-x-2">
                <div className="flex space-y-2 flex-col">
                    {NavigationLink('DETAILS', 'book-details')}
                    {statusButton()}
                </div>
                <div className="flex space-y-2 flex-col">
                    {NavigationLink('MODIFY', 'update-book')}
                    {deleteButton()}
                </div>
            </div>
        </div>
    );
};

export default BookListItem;