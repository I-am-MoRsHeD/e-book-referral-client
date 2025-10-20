
import React from 'react';

interface IProps {
    children: React.ReactNode;
};

const HomeLayout = ({ children }: IProps) => {
    return (
        <div>
            <h1>This is navbar</h1>
            <div className='min-h-dvh'>
                {children}
            </div>
            <h1>This is footer</h1>
        </div>
    );
};

export default HomeLayout;