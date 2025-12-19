import { Entity, Fields } from 'remult'
import { FlowerAvailability, FlowerRarity, FlowerWaterConsumption } from '../types'

@Entity('flower_species', { allowApiCrud: 'admin' })
export class FlowerSpecies {
  @Fields.uuid()
  id!: string

  @Fields.string()
  name!: string

  @Fields.string()
  slugName!: string

  @Fields.string()
  description: string = ''

  @Fields.string() // Enum
  rarity: FlowerRarity = FlowerRarity.COMMON

  @Fields.string() // Enum
  availability: FlowerAvailability = FlowerAvailability.WILD

  @Fields.json()
  attributes = {}

  @Fields.integer()
  growthDuration: number = 60 * 60 // In seconds (default 1h)

  @Fields.string() // Enum
  waterNeeds: FlowerWaterConsumption = FlowerWaterConsumption.NORMAL
}
