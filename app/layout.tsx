import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="emerald">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <SessionProvider>
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
              {children}
            </main>
            {/* Footer... */}
        </SessionProvider>
      </body>
    </html>
  );
}