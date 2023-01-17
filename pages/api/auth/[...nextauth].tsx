import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
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
          const { email, password } = credentials
          const result = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_API + '/api/login',
            {
              method: 'POST',
              body: JSON.stringify({ email, password }),
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            }
          )
          let user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }
          const result2 = await result.json()
          if (result2.error) {
            console.log('error')
          }
          // Add logic here to look up the user from the credentials supplied
          if (result2.success) {
            console.log('Success')
            user.id = String(result2.success.id)
            user.name = result2.success.name
            user.email = result2.success.email
            return user
          } else {
            return null
          }
        } catch (e) {
          return null
        }
      },
      credentials: {
        username: {
          label: 'email',
          type: 'text',
          placeholder: 'guest@gmail.com',
        },
        password: { label: 'password', type: 'password' },
      },
    }),
  ],
  pages: {
    signIn: '/Login',
    error: '/Login',
  },
}

// @ts-ignore
export default NextAuth(authOptions)
