'use server';

import { cookies } from "next/headers";

interface PurchasePayload {
    bookName: string;
    price: number;
};

export const purchaseAction = async (payload: PurchasePayload) => {
    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get('accessToken')?.value;
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/purchase`, {
            method: "POST",
            headers: {
                Cookie: `accessToken=${accessToken ?? ""}`,
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(payload),
        });

        const result = await res.json();
        return result;
    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to create project" };
    }
}