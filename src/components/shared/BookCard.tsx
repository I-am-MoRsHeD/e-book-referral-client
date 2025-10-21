import React from "react";
import Image from "next/image";
import { IBook } from "@/types";


const BookCard = ({ book, onBuy }: { book: IBook, onBuy?: () => void; }) => {
    return (
        <div className="w-full max-w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="relative w-full h-56">
                <Image
                    src={book.imageUrl}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                />
            </div>

            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{book.title}</h3>
                <p className="text-sm text-gray-600">Price: <span className="font-semibold">${book.price}</span></p>

                <button
                    onClick={onBuy}
                    className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default BookCard;
