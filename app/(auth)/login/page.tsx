"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const signedUp = searchParams.get("signedUp");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Call NextAuth signIn
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false, // We handle redirect ourselves
        });

        if (res?.error) {
            setError("Invalid email or password");
        } else {
            router.push("/play"); // Redirect to the game on success
            router.refresh(); // Refresh auth state
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-xl">
             <h1 className="text-2xl font-bold mb-4">Login to BloomScape</h1>
            {signedUp && <div className="alert alert-success mb-4">Account created! Please login.</div>}
            {error && <div className="alert alert-error mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input input-bordered" required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input input-bordered" required />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
             <p className="mt-4 text-center">New gardener? <Link href="/signup" className="link">Create account</Link></p>
        </div>
    );
}