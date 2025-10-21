import React from "react";
import Link from "next/link";
import { dashboardNavInfo } from "@/static/navbarInfo";

const Sidebar = () => {

    return (
        <nav className="flex flex-col p-4 gap-2 h-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Dashboard</h2>

            {dashboardNavInfo?.map((data) => (
                <Link
                    key={data.href}
                    href={data.href}
                    className="flex items-center gap-3 p-2 rounded-lg text-black hover:bg-orange-100 hover:text-orange-700 transition-colors"
                >
                    <span>{data.label}</span>
                </Link>
            ))}
        </nav>
    );
};

export default Sidebar;
