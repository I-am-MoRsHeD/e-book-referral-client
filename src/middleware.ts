import { NextResponse, NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('accessToken')?.value;
    const url = request.nextUrl.clone();

    if (!accessToken) {
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
    ],
};
