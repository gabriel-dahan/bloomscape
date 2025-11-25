import { Entity, Fields } from "remult";

@Entity("market_history", { allowApiCrud: false })
export class MarketHistory {
    @Fields.uuid()
    id!: string;

    @Fields.string()
    speciesId!: string;

    @Fields.integer()
    price!: number;

    @Fields.createdAt()
    soldAt?: Date;
}