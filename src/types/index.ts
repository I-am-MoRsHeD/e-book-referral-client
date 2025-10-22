

export interface IBook {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
};


export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    credit: number;
    referralCode: string;
    role: "USER";
};