import BookCard from '@/components/shared/BookCard';
import { books } from '@/static/bookLists';
import { IBook } from '@/types';
import React from 'react';

const Books = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='flex flex-row justify-center my-5'>
                <div className="inline-block border-b-2 border-orange-700 mb-8 rounded-b-2xl px-4 mx-auto">
                    <h1 className="text-base lg:text-3xl font-bold text-orange-700">All Books</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-10 justify-items-center overflow-hidden px-4 xl:px-0 w-full'>
                {
                    books?.map((book: IBook) => (
                        <BookCard key={book.id} book={book} />
                    ))
                }
            </div>
        </div>
    );
};

export default Books;