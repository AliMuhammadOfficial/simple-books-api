import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { protectedRoutes } from './router/routes';

// eslint-disable-next-line consistent-return
export function middleware(request: NextRequest) {
  let val;
  const isProtectedRoute = protectedRoutes.some((route) => {
    if (typeof route === 'string') {
      val = request.nextUrl.pathname === route;
    }
    if (route instanceof RegExp) {
      val = route.test(request.nextUrl.pathname);
    }
    return val;
  });

  if (isProtectedRoute) {
    const response = NextResponse.json({
      error: 'Missing Authorization header.',
    });
    return response;
  }
}
