import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from '@utils/database'
import User from '@models/user'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session }) {
            // store the user id from MongoDB to session
            const sessionUser = await User.findOne({
                email: session.user.email,
            })
            session.user.id = sessionUser._id.toString()

            return session
        },
        async signIn({ profile }) {
            try {
                console.log({ profile })
                await connectToDB()
                // Check if user already exists
                const userExists = await User.findOne({
                    email: profile.email,
                })

                // if not create a new user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name
                            .replace(' ', '')
                            .toLocaleLowerCase(),
                        image: profile.picture,
                    })
                }

                // finally
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        },
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
