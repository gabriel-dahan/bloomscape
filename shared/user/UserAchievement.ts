import { Entity, Fields, Relations } from "remult";
import { User } from "./User";
import { Achievement } from "./Achievement";

@Entity("user_achievements", { allowApiCrud: true })
export class UserAchievement {
    @Fields.uuid()
    id!: string;

    @Fields.string()
    userId!: string;
    @Relations.toOne(() => User, "userId")
    user?: User;

    @Fields.string()
    achievementId!: string;
    @Relations.toOne(() => Achievement, "achievementId")
    achievement?: Achievement;

    @Fields.createdAt()
    unlockedAt?: Date;
}