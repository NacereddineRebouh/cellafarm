import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: 'cred',
      name: 'Credentials',
      async authorize(credentials) {
        try {
          // @ts-ignore
          const { name, password } = credentials
          console.log(name, password)
          const result = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_API + '/api/login',
            {
              method: 'POST',
              body: JSON.stringify({ name, password }),
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            }
          )
          let user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }
          const result2 = await result.json()
          console.log('logged in ? :', result2.success, ' res:', result2.status)
          // Add logic here to look up the user from the credentials supplied
          if (result2.success) {
            user.id = String(result2.success.id)
            user.name = result2.success.name
            user.email = result2.success.email
          } else if (result2.error) {
            return null
          }

          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        } catch (e) {
          return null
        }
      },
      credentials: {
        name: { label: 'name', type: 'text ', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
    }),
  ],
  pages: {
    signIn: '/Login',
    error: '/Login',
  },
  callbacks: {
    // @ts-ignore
    // async signIn({ account, profile }) {
    //   if (account.provider === "facebook") {
    //     // we can do DB queries here
    //     console.log({
    //       verified: profile.password,
    //       name: profile.name,
    //       email: profile.email,
    //       lastName: account.password,
    //     });
    //     return true;
    //   }
    // },
  },
}
// @ts-ignore
export default NextAuth(authOptions)
