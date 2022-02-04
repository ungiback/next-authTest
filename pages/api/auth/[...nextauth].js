import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                url: 'https://accounts.google.com/o/oauth2/v2/auth',
                params: {
                    redirect_uri: 'http://localhost:3000',
                    response_type: 'code',
                    scope: 'https://www.googleapis.com/auth/userinfo.email',
                }
            }
        })
    ],
    callbacks:{
        async signIn({ account, profile }) {
          if (account.provider === "google") {
            return profile.email_verified && profile.email.endsWith("@example.com")
          }
          return true // Do different verification for other providers that don't have `email_verified`
        },
      }
})