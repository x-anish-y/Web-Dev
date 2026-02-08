import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.json({messsage: 'Hello I am the GOD'})
  return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
  matcher: '/about/:path*',
}


// Rewrite - URL will be the same the content of the page will be of RewritedURL 
// Redirect - URL will automatically redirect to the redirected page