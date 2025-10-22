import React from 'react';

interface OverviewCardProps {
    title: string;
    value: number;
};

const OverviewCard = ({ title, value }: OverviewCardProps) => {
    return (
        <div className="bg-white p-3 rounded-lg border border-orange-700 w-full my-1 lg:my-0 text-center h-24 flex flex-col justify-between items-center">
            <h1 className="text-lg text-orange-700 font-semibold self-start">Total {title}</h1>
            <p className="self-end"><span className="font-semibold">{value}</span></p>
        </div>
    );
};

export default OverviewCard;