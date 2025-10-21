'use client';

import { useEffect, useState } from 'react';
import { User } from '@/types';
import { getMe } from '@/actions/get';

export function useUser() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const me = await getMe();
                setUser(me);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    return { user, setUser, loading };
}
