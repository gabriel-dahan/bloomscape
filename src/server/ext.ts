export const PRICES = {
  LAND_PLOT: 1000,
  TAX_RATE: 0.1,
}

export interface LevelReward {
  level: number
  title: string
  description: string
  type: 'sap' | 'item' | 'feature' | 'badge'
  amount?: number
  icon: string // emoji or image URL
  color: string
}

export const LEVEL_REWARDS: LevelReward[] = [
  {
    level: 2,
    title: 'First Steps',
    description: 'A small boost to get your garden growing.',
    type: 'sap',
    amount: 500,
    icon: '/game/sap_drop.png',
    color: 'emerald',
  },
  {
    level: 3,
    title: 'Green Thumb',
    description: 'Unlock 5 free Sunflower Seeds.',
    type: 'item',
    amount: 5,
    icon: '/api/images/badges/unknown_white',
    color: 'amber',
  },
  {
    level: 5,
    title: 'Land Expansion',
    description: 'You can now purchase an additional land plot!',
    type: 'feature',
    icon: '🏝️',
    color: 'blue',
  },
  {
    level: 8,
    title: 'Experienced Planter',
    description: 'Unlock the ability to plant Roses.',
    type: 'item',
    icon: '🌹',
    color: 'rose',
  },
  {
    level: 10,
    title: 'Master Gardener',
    description: 'A shiny badge for your profile.',
    type: 'badge',
    icon: '🏆',
    color: 'yellow',
  },
  {
    level: 15,
    title: 'Hydroponics',
    description: 'Watering becomes 20% more effective.',
    type: 'feature',
    icon: '💧',
    color: 'cyan',
  },
  {
    level: 20,
    title: 'Bloom Tycoon',
    description: 'Massive Sap grant for the dedicated.',
    type: 'sap',
    amount: 10000,
    icon: '💰',
    color: 'purple',
  },
]
