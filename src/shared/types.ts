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
  SEED: 'SEED', // In Inventory
  PLANTED: 'PLANTED', // In Garden (Growing)
  MATURE: 'MATURE', // In Garden (Ready/Decorative)
  WITHERED: 'WITHERED', // Needs revival
} as const

export type FlowerStatus = (typeof FlowerStatus)[keyof typeof FlowerStatus]

export const FriendshipStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  BLOCKED: 'BLOCKED',
} as const

export type FriendshipStatus = (typeof FriendshipStatus)[keyof typeof FriendshipStatus]
