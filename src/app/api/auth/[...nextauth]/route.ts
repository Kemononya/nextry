import NextAuth, { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SIGN_IN_API, SIGN_UP_API } from "@/api";

const authConfig: AuthOptions = {
  providers: [
    Credentials({
      id: "signin",
      name: "signin",
      credentials: {
        login: { label: "login", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials.password) return null;

        /*
        const users = [
  {
    id: "0",
    login: "qwerty",
    password: "123456",
  },
];
        
        const currentUser = users.find(
          (user) => user.login === credentials.login
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPassword } = currentUser;

          return userWithoutPassword as User;
        }
        return null;
      },*/
        try {
          const res = await fetch(SIGN_IN_API, {
            method: "POST",
            body: JSON.stringify({
              login: credentials?.login,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();

          if (user.access_token) {
            return user as User;
          }

          if (res.status === 422) {
            throw new Error("422");
          }

          if (res.status === 400) {
            throw new Error("400");
          }

          return null;
        } catch (error: any) {
          if (error.message === "422") {
            throw new Error(
              "invalid email or password, password should have from 8 to 36 characters"
            );
          }

          if (error.message === "400") {
            throw new Error("invalid email or password");
          }

          return null;
        }
      },
    }),
    Credentials({
      id: "signup",
      name: "signup",
      credentials: {
        login: { label: "login", type: "text" },
        password: { label: "password", type: "password" },
        email: { label: "email", type: "email" },
        name: { label: "name", type: "text" },
      },
      async authorize(credentials) {
        if (
          !credentials?.login ||
          !credentials.password ||
          !credentials.email ||
          !credentials.name
        )
          return null;
        try {
          const res = await fetch(SIGN_UP_API, {
            method: "POST",
            body: JSON.stringify({
              login: credentials?.login,
              password: credentials?.password,
              email: credentials?.email,
              name: credentials?.name,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();

          if (user.access_token) {
            return user as User;
          }

          if (res.status === 422) {
            throw new Error("422");
          }

          if (res.status === 400) {
            throw new Error("400");
          }

          return null;
        } catch (error: any) {
          if (error.message === "422") {
            throw new Error(
              "invalid email or password, password should have from 8 to 36 characters"
            );
          }

          if (error.message === "400") {
            throw new Error("email already exist");
          }

          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
};
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
