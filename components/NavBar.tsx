"use client"; // Must be a client component to use hooks

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  // Hook to get the current session status
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl text-primary">
          🌸 BloomScape
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          {/* Links visible to everyone */}
          <li><Link href="/market">Market</Link></li>

          {isLoading ? (
             <li><button className="btn btn-ghost loading"></button></li>
          ) : session ? (
            /* ---- LOGGED IN USER VIEW ---- */
            <>
              <li><Link href="/inventory">Inventory</Link></li>
              <li>
                <details>
                  <summary>
                    {session.user?.name} | 🌾 {(session.user as any).sap || 0}
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-t-none right-0">
                    <li><Link href="/profile">Profile</Link></li>
                    <li><button onClick={() => signOut()} className="text-error">Logout</button></li>
                  </ul>
                </details>
              </li>
            </>
          ) : (
            /* ---- GUEST VIEW ---- */
            <>
              <li><Link href="/login" className="btn btn-sm btn-ghost">Login</Link></li>
              <li><Link href="/signup" className="btn btn-sm btn-primary">Play Now</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}