import { Entity, Fields, Relations } from "remult";
import { User } from "../user/User";
import { UserFlower } from "../flowers/UserFlower";

@Entity("market_listings", { allowApiCrud: true })
export class MarketListing {
    @Fields.uuid()
    id!: string;

    @Fields.string()
    sellerId!: string;
    @Relations.toOne(() => User, "sellerId")
    seller?: User;

    @Fields.string()
    flowerId!: string;
    @Relations.toOne(() => UserFlower, "flowerId")
    flower?: UserFlower;

    @Fields.integer()
    price: number = 0; // Price in Sap

    @Fields.createdAt()
    listedAt?: Date;

    // TODO: Add backend validation to ensure flower.status === SEED
}