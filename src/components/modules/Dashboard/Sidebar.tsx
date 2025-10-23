/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from "react";
import Link from "next/link";
import { dashboardNavInfo } from "@/static/navbarInfo";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { logOut } from "@/actions/auth";
import useTrigger from "@/store";
import { X } from "lucide-react";

const Sidebar = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useTrigger();
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
        <>
            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen()}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed md:static top-0 left-0 z-40 h-screen w-64 bg-white border-r shadow-sm transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0`}
            >
                {/* Close button for mobile */}
                <div className="flex items-center justify-between p-4 border-b md:hidden">
                    <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
                    <button
                        onClick={() => setIsSidebarOpen()}
                        className="p-2 rounded-md hover:bg-gray-100"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="flex flex-col p-4 gap-2 h-[calc(100%-60px)]">
                    <h2 className="hidden md:block text-lg font-semibold mb-4 text-gray-800">
                        Dashboard
                    </h2>

                    <div className="flex-1">
                        {dashboardNavInfo?.map((data) => {
                            const isActive =
                                data.href === "/" ? pathname === "/" : pathname.startsWith(data.href);

                            return (
                                <Link
                                    key={data.href}
                                    href={data.href}
                                    onClick={() => setIsSidebarOpen()}
                                    className={`block py-2 font-medium transition-all ${isActive ? "text-orange-700" : "text-black hover:text-orange-600"
                                        }`}
                                >
                                    {data.label}
                                </Link>
                            );
                        })}
                    </div>

                    <button
                        onClick={logout}
                        className="mt-3 w-full bg-orange-700 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition-colors"
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
