'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login } from '@/actions/auth';
import { toast } from 'sonner';

interface LoginInputs {
    email: string;
    password: string;
}

const LoginForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginInputs>();

    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        const toastId = toast.loading('Please wait....');
        try {
            const res = await login(data);

            if (res?.success) {
                toast.success(res?.message, { id: toastId });
                router.push('/');
            } else {
                toast.error(res?.message, { id: toastId });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-12 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-center mb-2">Login</h2>
            <p className="text-center text-gray-500 text-sm mb-6">
                Enter your email and password to continue
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email Field */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-600 focus:outline-none"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email format',
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="********"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-600 focus:outline-none"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters',
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-700 text-white py-2 rounded-lg font-medium hover:bg-orangeF-600 transition-all disabled:opacity-70"
                >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <div className="text-center text-sm mt-5">
                Don&apos;t have an account?{" "}
                <Link href="/register" replace className="underline underline-offset-4 text-blue-600">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
