import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { MyJwtPayload } from './types';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;

  //  1. nema token → login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  let decoded: MyJwtPayload;

  try {
    decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!,
    ) as MyJwtPayload;
  } catch {
    //  2. token nevalidan → login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const path = request.nextUrl.pathname;

  //  3. ROLE PROTECTION (admin ruta)
  if (path.startsWith('/admin')) {
    const hasAdminRole = decoded.UserInfo.roles.includes(500);

    if (!hasAdminRole) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  // ✔ sve OK → nastavi
  return NextResponse.next();
}

//mora ovde, bez njega bi se pokrenuo na svim rutama
export const config = {
  matcher: ['/admin/:path*'],
};
