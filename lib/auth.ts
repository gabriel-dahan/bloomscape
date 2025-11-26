import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { remult } from "remult";
import { createPostgresDataProvider } from "remult/postgres";
import { User } from "@/shared/user/User";
import { Role } from "@/shared/types";

// 1. Server-side Database connection for Auth calls
// We need a direct connection because Auth happens outside the standard API context.
const authDataProvider = createPostgresDataProvider({
  connectionString: process.env.DATABASE_URL,
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // 2. Configure Email/Password login
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // This function runs when someone clicks "Login"
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Initialize remult context for server-side use
        remult.dataProvider = authDataProvider;
        const userRepo = remult.repo(User);

        // a. Find user in Postgres
        const user = await userRepo.findOne({
             where: { email: String(credentials.email) }
        });

        if (!user || !user.passwordHash) {
             // User not found or has no password set (e.g. Google account)
             return null; 
        }

        // b. Compare plain text password with the stored hash using bcrypt
        const passwordMatch = await compare(
            String(credentials.password),
            user.passwordHash
        );

        if (!passwordMatch) return null; // Wrong password

        // c. Return the user info suitable for the session token (no sensitive data!)
        // We cast to 'any' briefly to satisfy NextAuth types, but we control the data.
        return {
          id: user.id,
          name: user.username,
          email: user.email,
          role: user.role,
        } as any;
      },
    }),
  ],
  callbacks: {
    // 3. Customize the JWT token
    // When the token is created, add our custom User ID and Role to it.
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    // 4. Customize the Session object available in the React frontend
    // Make the ID and Role available in `useSession()` hooks.
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        (session.user as any).role = token.role as Role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login', // Redirect here if auth fails
  },
  session: {
    strategy: "jwt", // Use secure JSON Web Tokens
  },
  secret: process.env.AUTH_SECRET,
});