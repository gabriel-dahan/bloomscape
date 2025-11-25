import { Entity, Fields, Relations } from "remult";
import { User } from "../user/User";
import { FriendshipStatus } from "../types";

@Entity("friendships", { allowApiCrud: true })
export class Friendship {
    @Fields.uuid()
    id!: string;

    @Fields.string()
    requesterId!: string;
    @Relations.toOne(() => User, "requesterId")
    requester?: User;

    @Fields.string()
    receiverId!: string;
    @Relations.toOne(() => User, "receiverId")
    receiver?: User;

    @Fields.string()
    status: FriendshipStatus = FriendshipStatus.PENDING;

    @Fields.createdAt()
    since?: Date;
}