import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';

acceptLanguage.languages(['en', 'fr']);

export function middleware(req: NextRequest) {
  let lng;
  if (req.cookies.has('NEXT_LOCALE')) {
    lng = req.cookies.get('NEXT_LOCALE')?.value;
  }
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  }
  if (!lng) lng = 'en';

  if (
    !req.nextUrl.pathname.startsWith(`/${lng}`) &&
    !req.nextUrl.pathname.startsWith('/_next') &&
    !req.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\..*).*)'],
};
