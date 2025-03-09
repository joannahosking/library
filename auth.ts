import NextAuth, { Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
      try {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email!,
          },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email!,
              name: user.name!,
            },
          });
        }

        return user;
      } catch (error) {
        console.error("Error signing in user:", error);
        return null;
      }
    },

    async session({ session, token }: { session: Session; token: any }) {
      if (token?.email) {
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, user }: { token: any; user: User }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
  },
  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export const { handlers, signIn, signOut, auth } = handler;
