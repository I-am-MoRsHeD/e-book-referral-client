import Sidebar from "@/components/modules/Dashboard/Sidebar";
import Trigger from "@/components/modules/Dashboard/Trigger";
import React from "react";

interface IProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
    return (
        <div className="min-h-screen flex bg-gray-50">
            <Sidebar />

            <main className="flex-1 p-6 overflow-y-auto">
                <Trigger />
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
