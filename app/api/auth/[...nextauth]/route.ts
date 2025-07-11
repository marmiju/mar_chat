import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LogIn } from "../../../../lib/Authentication";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) return null;
                const { email, password } = credentials;

                const user = await LogIn({ email, password });
               
                console.log("✔️ Authorized user:", user);

                if (user?.message) return null;

                return {
                    id: user?._id,
                    name: user?.username,
                    email: user?.email,
                    isAdmin: user?.isAdmin,
                    token: user.token,
                };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
           
            if (user) {
                token.isAdmin = user.isAdmin || false;
                token.token = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            const customToken = token as {
                isAdmin?: boolean;
                token: string;
            };

            session.user.isAdmin = customToken.isAdmin;
            session.user.token = customToken.token;
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
