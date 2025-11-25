import { Entity, Fields } from "remult";

@Entity("market_stats", { 
    allowApiCrud: false,
    defaultOrderBy: { date: "desc" }
})
export class MarketStats {
    // works by the day

    @Fields.uuid()
    id!: string;

    @Fields.string()
    speciesId!: string;

    @Fields.dateOnly() 
    date!: Date;

    @Fields.number()
    averagePrice: number = 0;

    @Fields.integer()
    minPrice: number = 0;

    @Fields.integer()
    maxPrice: number = 0;

    @Fields.integer()
    volume: number = 0; // nb of sells today
}