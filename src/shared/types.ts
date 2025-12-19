export const Role = {
  USER: 'user',
  ADMIN: 'admin',
} as const

export type Role = (typeof Role)[keyof typeof Role]

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
