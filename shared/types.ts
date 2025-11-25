export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export enum FlowerRarity {
    COMMON = 'COMMON',
    UNCOMMON = 'UNCOMMON',
    RARE = 'RARE',
    EPIC = 'EPIC',
    LEGENDARY = 'LEGENDARY'
}

export enum FlowerAvailability {
    WILD = 'WILD',           // Can be found randomly
    BREEDING_ONLY = 'BREEDING_ONLY', // Result of fusion
    EVENT_ONLY = 'EVENT_ONLY', // Hidden/Link only
    SHOP_ONLY = 'SHOP_ONLY'  // Bought with Sap
}

export enum FlowerStatus {
    SEED = 'SEED',           // In Inventory
    PLANTED = 'PLANTED',     // In Garden (Growing)
    MATURE = 'MATURE',       // In Garden (Ready/Decorative)
    WITHERED = 'WITHERED'    // Needs revival
}

export enum FriendshipStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    BLOCKED = 'BLOCKED'
}