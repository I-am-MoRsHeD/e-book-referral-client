/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from "react";
import Link from "next/link";
import { dashboardNavInfo } from "@/static/navbarInfo";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { logOut } from "@/actions/auth";

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const logout = async () => {
        const toastId = toast.loading('Logging out...');
        try {
            const res = await logOut();
            if (res?.success) {
                toast.success(res?.message, { id: toastId });
                router.push('/');
            }
        } catch (error: any) {
            toast.error(error?.response?.message || 'Something went wrong!', { id: toastId });
            console.log(error);
        }
    };

    return (
        <nav className="flex flex-col p-4 gap-2 h-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Dashboard</h2>

            <div className="flex-1">
                {dashboardNavInfo?.map((data) => {
                    const isActive =
                        data.href === "/" ? pathname === "/" : pathname.startsWith(data.href);

                    return (
                        <div key={data?.href}>
                            <Link
                                href={data.href}
                                className={`font-medium transition-all
                                        ${isActive
                                        ? "text-orange-700"
                                        : "text-black"}`}
                            >
                                <span>{data.label}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>

            <button
                onClick={logout}
                className="mt-3 w-full bg-orange-700 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition-colors"
            >
                Logout
            </button>
        </nav>
    );
};

export default Sidebar;
