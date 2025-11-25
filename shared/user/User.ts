import { Entity, Fields } from "remult";
import { Role } from "../types";

@Entity("users", {
    allowApiCrud: true // ⚠️ Security: restrict this later to 'allowApiRead: true' only
})
export class User {
    @Fields.uuid()
    id!: string;

    @Fields.string()
    username!: string;

    @Fields.string({ includeInApi: false }) // 🔒 Private
    email!: string;

    // 💰 Economy
    @Fields.number()
    sap: number = 0; 

    // 🏆 Progression
    @Fields.integer()
    level: number = 1;

    @Fields.integer()
    xp: number = 0;

    @Fields.integer()
    score: number = 0; // For Rankings

    @Fields.integer()
    maxPlots: number = 9; // Grid limit (e.g., 3x3)

    // 📣 Ads & Social
    @Fields.boolean()
    enableAds: boolean = false;

    @Fields.date()
    lastAdRevenue?: Date;

    @Fields.createdAt()
    createdAt?: Date;

    @Fields.string()
    role: Role = Role.USER;
}