'use client';
import useTrigger from '@/store';
import { Menu } from 'lucide-react';
import React from 'react';

const Trigger = () => {
    const { setIsSidebarOpen } = useTrigger();

    return (
        <div className='md:hidden'>
            <Menu onClick={() => setIsSidebarOpen()} />
        </div>
    );
};

export default Trigger;