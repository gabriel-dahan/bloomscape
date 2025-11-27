import { Entity, Fields } from 'remult'
import { FlowerAvailability, FlowerRarity } from '../types'

@Entity('flower_species', { allowApiCrud: 'admin' })
export class FlowerSpecies {
  @Fields.uuid()
  id!: string

  @Fields.string()
  name!: string

  @Fields.string()
  description: string = ''

  @Fields.string() // Enum
  rarity: FlowerRarity = FlowerRarity.COMMON

  @Fields.string() // Enum
  availability: FlowerAvailability = FlowerAvailability.WILD

  // 🧬 Attributes (Color, resistance, etc.)
  @Fields.json()
  attributes = {}

  @Fields.integer()
  growthDuration: number = 60 * 60 // In seconds (default 1h)

  // 🎨 Assets
  @Fields.string()
  assetUrl: string = '/assets/seeds/default.png' // Inventory Icon

  @Fields.string()
  spriteUrl: string = '/assets/sprites/default.png' // Isometric Sprite
}
