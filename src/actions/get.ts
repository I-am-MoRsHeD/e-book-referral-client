'use server';

import { User } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";


export const getMe = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;
    let decodedToken = null;

    if (accessToken) {
        decodedToken = jwtDecode(accessToken) as User;
        return decodedToken;
    } else {
        return null;
    }
};

