"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthController } from "@/lib/controllers/AuthController";

export default function SignUpPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            // Call the secure backend method via Remult
            await AuthController.signUp(username, email, password);
            // Redirect to login on success
            router.push("/login?signedUp=true");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-xl">
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            {error && <div className="alert alert-error mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="input input-bordered" required />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input input-bordered" required />
                <input type="password" placeholder="Password (6+ chars)" value={password} onChange={e => setPassword(e.target.value)} className="input input-bordered" required />
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <p className="mt-4 text-center">Already have an account? <Link href="/auth/login" className="link">Login here</Link></p>
        </div>
    );
}