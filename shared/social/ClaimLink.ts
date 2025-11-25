import { Entity, Fields } from "remult";

@Entity("claim_links", { allowApiCrud: false })
export class ClaimLink {
    @Fields.uuid()
    id!: string;

    @Fields.string()
    code!: string; // Unique code for URL

    @Fields.string()
    rewardSpeciesId!: string; // The flower given

    @Fields.integer()
    maxUses: number = 1;

    @Fields.integer()
    currentUses: number = 0;

    @Fields.date()
    expirationDate?: Date;
}