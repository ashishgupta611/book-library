'use client';

import { usePathname } from 'next/navigation';
import BackToLibrary from "@/src/components/common/BackToLibrary";
import AddBookForm from "@/src/components/book/AddBookForm";
import { useAppSelector } from '@/src/hooks/hooks';

export default function UpdateBook() {
    const pathname = usePathname();
    const { books } = useAppSelector((state) => state.books);

    if (!!pathname) {
        const bookId = pathname.split('/').filter(Boolean).pop();
        const book = books.filter((item) => item.id === bookId);

        return (
            <div className="container mx-auto px-4 py-8">
                <BackToLibrary title="Update Details" />
                <AddBookForm book={book[0]} buttonTitle='UPDATE BOOK' />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <BackToLibrary title="Update Details" />
            <h1>No details available.</h1>
        </div>
    );
};