'use client';
import { useUser } from '@/hooks/useUser';
import { navigationLinks } from '@/static/navbarInfo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const { user, setUser, loading } = useUser();

    return (
        <div className='container mx-auto rounded-md px-2 bg-gray-200'>
            <div className='flex flex-row justify-between items-center h-14'>
                <Link href="/">
                    <h1 className="text-xl font-bold italic">BestBoBuy</h1>
                </Link>
                <div className="flex flex-row gap-5">
                    {navigationLinks.map((link, index) => {
                        const isActive =
                            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                        return (
                            <div key={index}>
                                <Link
                                    href={link.href}
                                    className={`font-medium transition-all border-b-2
                                        ${isActive
                                            ? "text-orange-700 border-orange-text-orange-700 rounded-xl px-2"
                                            : "text-muted-foreground border-transparent hover:text-orange-700 hover:border-orange-text-orange-700/50"}`}
                                >
                                    {link.label}
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div>
                    {
                        loading ? (
                            <span>
                                Loading...
                            </span>
                        ) : user?.email ? (<Link
                            href="/dashboard"
                            className="w-full bg-orange-700 hover:bg-orange-600 text-white p-2 rounded-lg font-medium transition-colors"
                        >
                            Dashboard
                        </Link>) : (
                            <Link
                                href="/login"
                                className="w-full bg-orange-700 hover:bg-orange-600 text-white p-2 rounded-lg font-medium transition-colors"
                            >
                                Sign In
                            </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;