export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/Profile', '/Shop', '/Products/:path*', '/Products'],
}
