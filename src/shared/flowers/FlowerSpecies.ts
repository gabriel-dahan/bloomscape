import { Entity, Fields } from 'remult'
import {
  FlowerAvailability,
  FlowerRarity,
  FlowerWaterConsumption,
  PreferredSeasons,
} from '../types'
import type { FlowerAttributes } from '../types'

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

  @Fields.string()
  preferredSeason: PreferredSeasons = PreferredSeasons.NO

  @Fields.string()
  descriptionLore: string = ''

  @Fields.string()
  rarity: FlowerRarity = FlowerRarity.COMMON

  @Fields.string()
  availability: FlowerAvailability = FlowerAvailability.WILD

  @Fields.json()
  attributes: FlowerAttributes = {
    baseXpReward: 10,
    baseScoreReward: 5,
  }

  @Fields.integer()
  growthDuration: number = 3600

  @Fields.string()
  waterNeeds: FlowerWaterConsumption = FlowerWaterConsumption.NORMAL
}
