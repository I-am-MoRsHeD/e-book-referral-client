import Sidebar from "@/components/modules/Dashboard/Sidebar";
import React from "react";

interface IProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
    return (
        <div className="min-h-screen flex bg-gray-50">
            <aside className="w-64 bg-white border-r shadow-sm hidden md:flex flex-col">
                <Sidebar />
            </aside>

            <main className="flex-1 p-6 overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
