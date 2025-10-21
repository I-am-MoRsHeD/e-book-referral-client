'use server';
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";


export const registerAction = async (data: FieldValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    // if (!res?.ok) {
    //     console.error('User registration failed!', await res.text());
    // };
    const result = await res.json();

    return result;
};


export const login = async (data: FieldValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    // if (!res?.ok) {
    //     console.error('User login failed!', await res.text());
    // };
    const result = await res.json();

    if (result?.success) {
        const cookieStore = await cookies();
        cookieStore.set('accessToken', result?.data?.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/'
        });
        cookieStore.set('refreshToken', result?.data?.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/'
        });
    };

    return result;
};