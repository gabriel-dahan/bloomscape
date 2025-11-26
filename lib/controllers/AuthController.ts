import { BackendMethod, remult } from "remult";
import { User } from "@/shared/user/User";
import { hash } from "bcryptjs";
import { Role } from "@/shared/types";

export class AuthController {

    @BackendMethod({ allowed: true }) // allowed: true means public access
    static async signUp(username: string, email: string, passwordPlain: string): Promise<User> {
        // 1. Validations
        if (!username || !email || !passwordPlain) {
            throw new Error("All fields are required.");
        }
        if (passwordPlain.length < 6) {
            throw new Error("Password must be at least 6 characters long");
        }

        const userRepo = remult.repo(User);

        // 2. Check for existing user
        const existingUser = await userRepo.count({
            $or: [{ email: email }, { username: username }]
        });
        if (existingUser > 0) {
            throw new Error("Username or Email already exists");
        }

        // 3. Hash password securely
        const passwordHash = await hash(passwordPlain, 10); // 10 salt rounds

        // 4. Create and save the user
        const newUser = await userRepo.insert({
            username,
            email,
            passwordHash,
            role: Role.USER,
            sap: 50, // Starting bonus!
            level: 1,
            createdAt: new Date()
        });

        // Remult will automatically strip the 'passwordHash' before returning thanks to { includeInApi: false }
        return newUser;
    }
}