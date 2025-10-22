'use client';

import { useUser } from '@/hooks/useUser';
import React from 'react';
import { toast } from 'sonner';

const ReferralSection = () => {
    const { user } = useUser();
    
    const handleCopyLink = async () => {
        if (!user?.referralCode) {
            toast.error('Referral code not found');
            return;
        }

        const referralLink = `${window.location.origin}/register?r=${user.referralCode}`;

        try {
            await navigator.clipboard.writeText(referralLink);
            toast.success('Referral link copied!');
        } catch (error) {
            toast.error('Failed to copy link');
            console.error(error);
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto mt-6">
            <p className="text-gray-700 text-sm">
                You can refer your friends and earn credits when they make their first purchase.
            </p>

            {user?.referralCode && (
                <div className="mt-3 text-sm text-gray-600 break-all border border-gray-200 rounded-md p-2 bg-gray-50">
                    {`${window.location.origin}/register?r=${user.referralCode}`}
                </div>
            )}
            <button
                onClick={handleCopyLink}
                className="mt-3 w-full bg-orange-700 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition-colors"
            >
                Copy Link
            </button>
        </div>
    );
};

export default ReferralSection;
