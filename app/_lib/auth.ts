import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }: any) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }: any) {
      try {
        const existingUser = await getUser(user.email);

        if (!existingUser) {
          await createUser({
            firstName: user.name.split(" ").at(0) || "",
            lastName: user.name.split(" ").at(1) || "",
            email: user.email,
          });
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async session({ session, user }: any) {
      const curUser = await getUser(session.user.email);
      session.user.userId = curUser.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
