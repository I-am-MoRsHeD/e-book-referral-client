'use server';
import { cookies } from "next/headers";



export const getMe = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/me`, {
        next: {
            tags: ["USER"]
        },
        headers: {
            Cookie: `accessToken=${accessToken ?? ""}`,
        },
        credentials: 'include',
    });
    const { data } = await res.json();
    return data;
};


export const getStats = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/stats`, {
        next: {
            tags: ["PURCHASED", "USER"]
        },
        headers: {
            Cookie: `accessToken=${accessToken ?? ""}`,
        },
        credentials: 'include',
    });
    const { data } = await res.json();
    return data;
};
