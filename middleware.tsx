export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/Products', '/Profile', '/Shop', '/Products/:path'],
  //   '/Products/:path*', '/Products'
}
