import { getStats } from '@/actions/get';
import OverviewCard from '@/components/modules/Dashboard/OverviewCard';
import ReferralSection from '@/components/modules/Dashboard/ReferralSection';
import React from 'react';

const DashboardPage = async () => {
    const data = await getStats();

    return (
        <div className='container mx-auto my-10'>
            <div className='flex flex-row justify-center my-5'>
                <div className="inline-block border-b-2 border-orange-700 mb-8 rounded-b-2xl px-4 mx-auto">
                    <h1 className="text-base lg:text-3xl font-bold text-orange-700">Overview</h1>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-4 w-full'>
                <div className='col-span-12 flex flex-col sm:flex-row w-full gap-4'>
                    <OverviewCard
                        title='Referred Users'
                        value={data?.totalReferredUsers || 0}
                    />
                    <OverviewCard
                        title='Converted Users'
                        value={data?.totalPurchasedUsers || 0}
                    />
                    <OverviewCard
                        title='Credits Earned'
                        value={data?.totalCreditEarned || 0}
                    />
                </div>
            </div>
            <>
                <ReferralSection />
            </>
        </div>
    );
};

export default DashboardPage;