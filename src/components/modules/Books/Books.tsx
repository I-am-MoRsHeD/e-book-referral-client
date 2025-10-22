'use client';
import { purchaseAction } from '@/actions/post';
import BookCard from '@/components/shared/BookCard';
import { useUser } from '@/hooks/useUser';
import { books } from '@/static/bookLists';
import { IBook } from '@/types';
import React from 'react';
import { toast } from 'sonner';

const Books = () => {
    const { user } = useUser();
    const handlePurchase = async (book: IBook) => {
        const toastId = toast.loading('Please wait....');

        if (!user) {
            toast.error("Please login to purchase...!");
        }

        try {
            const payload = {
                bookName: book?.title,
                price: Number(book?.price)
            };
            const res = await purchaseAction(payload);
            if (res.success) {
                toast.success(res?.message, { id: toastId });
            } else {
                toast.error(res?.message, { id: toastId });
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                        <BookCard key={book.id} book={book} onBuy={handlePurchase} />
                    ))
                }
            </div>
        </div>
    );
};

export default Books;