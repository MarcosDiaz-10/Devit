import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware () {
  return NextResponse.redirect('/home')
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/login'
}
