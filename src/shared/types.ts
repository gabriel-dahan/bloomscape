export const Role = {
  USER: 'user',
  ADMIN: 'admin',
  DEVELOPER: 'developer',
} as const

export type Role = (typeof Role)[keyof typeof Role]

export interface FlowerModifiersDTO {
  growthSpeedMultiplier: number
  xpMultiplier: number
  waterRetention: number
  qualityBonus: number
  scoreBonus: number
}

export interface FlowerDTO {
  id: string
  status: FlowerStatus
  waterLevel: number
  quality: number
  plantedAt?: Date
  isShiny: boolean
  activeModifiers?: FlowerModifiersDTO | null

  species: {
    id: string
    name: string
    slugName: string
    rarity: FlowerRarity
    description?: string
    descriptionLore?: string
    waterNeeds: string
    growthDuration: number
    preferredSeason: string

    attributes: FlowerAttributes
  }
}

export const FlowerRarity = {
  COMMON: 'COMMON',
  UNCOMMON: 'UNCOMMON',
  RARE: 'RARE',
  EPIC: 'EPIC',
  LEGENDARY: 'LEGENDARY',
} as const

export type FlowerRarity = (typeof FlowerRarity)[keyof typeof FlowerRarity]

export const FlowerAvailability = {
  WILD: 'WILD', // Can be found randomly
  BREEDING_ONLY: 'BREEDING_ONLY', // Result of fusion
  EVENT_ONLY: 'EVENT_ONLY', // Hidden/Link only
  SHOP_ONLY: 'SHOP_ONLY', // Bought with Sap
} as const

export type FlowerAvailability = (typeof FlowerAvailability)[keyof typeof FlowerAvailability]

export const FlowerStatus = {
  SEED: 'SEED',
  SPROUT1: 'SPROUT1',
  SPROUT2: 'SPROUT2',
  GROWING1: 'GROWING1',
  GROWING2: 'GROWING2',
  MATURE: 'MATURE',
  WITHERED: 'WITHERED',
} as const

export type FlowerStatus = (typeof FlowerStatus)[keyof typeof FlowerStatus]

export const PreferredSeasons = {
  SPRING: 'SPRING',
  SUMMER: 'SUMMER',
  AUTUMN: 'AUTUMN',
  WINTER: 'WINTER',
  NO: null,
} as const

export type PreferredSeasons = (typeof PreferredSeasons)[keyof typeof PreferredSeasons]

export const FlowerWaterConsumption = {
  VERY_LOW: 'VERY_LOW',
  LOW: 'LOW',
  NORMAL: 'NORMAL',
  HIGH: 'HIGH',
  VERY_HIGH: 'VERY_HIGH',
} as const

export type FlowerWaterConsumption =
  (typeof FlowerWaterConsumption)[keyof typeof FlowerWaterConsumption]

export const FriendshipStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  BLOCKED: 'BLOCKED',
} as const

export type FriendshipStatus = (typeof FriendshipStatus)[keyof typeof FriendshipStatus]

export const TileType = {
  LAND: 'land',
  WATER: 'water',
  FOREST: 'forest',
} as const

export type TileType = (typeof TileType)[keyof typeof TileType]

export const ItemType = {
  CONSUMABLE: 'CONSUMABLE', // Fertilizer, potions
  RESOURCE: 'RESOURCE', // Wood, stone (for tool crafting)
  TOOL: 'TOOL', // Improved watering can, shovel, rake
} as const

export type ItemType = (typeof ItemType)[keyof typeof ItemType]

export const ReportType = {
  BUG: 'BUG',
  FEATURE: 'FEATURE',
  PLAYER_REPORT: 'PLAYER_REPORT',
  OTHER: 'OTHER',
} as const
export type ReportType = (typeof ReportType)[keyof typeof ReportType]

export const ReportStatus = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED',
} as const
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]

export const DiscoverySource = {
  WILD: 'WILD',
  BREEDING: 'BREEDING',
  MARKET: 'MARKET',
  GIFT: 'GIFT',
  UNKNOWN: 'UNKNOWN',
} as const

export type DiscoverySource = (typeof DiscoverySource)[keyof typeof DiscoverySource]

// FLOWER ATTRIBUTES TYPES

export type GridModifierType =
  | 'XP_FLAT'
  | 'XP_PERCENT'
  | 'SCORE_FLAT'
  | 'GROWTH_SPEED'
  | 'WATER_RETENTION'
  | 'QUALITY_CHANCE'
  | 'MUTATION_CHANCE'

export type GlobalPlayerModifierType =
  | 'GLOBAL_XP_MULTIPLIER'
  | 'SHOP_PRICE_DISCOUNT'
  | 'MARKET_SELLING_BONUS'
  | 'RARE_FIND_LUCK'

export interface FlowerSynergy {
  targetSlug: string
  modifiers: {
    stat: GridModifierType
    value: number
  }[]
}

export interface FlowerAura {
  range: number
  effect: {
    stat: GridModifierType
    value: number
  }
}

export interface PlayerGlobalEffect {
  stat: GlobalPlayerModifierType
  value: number
  condition: 'WHILE_PLANTED' | 'WHILE_MATURE' | 'PERMANENT_UNLOCK'
}

export interface EnvironmentalTraits {
  nightBloomer?: boolean
  rainLover?: boolean
}

export interface FlowerAttributes {
  baseXpReward: number
  baseScoreReward: number

  synergies?: FlowerSynergy[]
  aura?: FlowerAura
  playerEffects?: PlayerGlobalEffect[]
  environment?: EnvironmentalTraits

  mutationPotential?: {
    canMutate: boolean
    tier: number
  }
}
