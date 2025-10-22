import RegisterForm from '@/components/modules/Register/RegisterForm';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Register page',
    description: 'Create your first step to register'
}

const RegisterPage = () => {
    return (
        <div>
            <div className="grid min-h-svh lg:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start">
                        <Link href="/">
                            <h1 className="text-xl font-bold italic">BestBoBuy</h1>
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-md">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:block">
                    <Image
                        src="/book1.webp"
                        alt="Background"
                        fill
                        priority
                        className=""
                    />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;