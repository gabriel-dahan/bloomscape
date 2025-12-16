import { Entity, Fields, Relations } from 'remult'
import { FlowerSpecies } from '../flowers/FlowerSpecies'

@Entity('claim_links', { allowApiCrud: 'admin' })
export class ClaimLink {
  @Fields.uuid()
  id!: string

  @Fields.string()
  code!: string

  @Fields.string()
  rewardSpeciesId!: string

  @Relations.toOne(() => FlowerSpecies, 'rewardSpeciesId')
  rewardSpecies: FlowerSpecies

  @Fields.integer()
  maxUses: number = 1

  @Fields.integer()
  currentUses: number = 0

  @Fields.date()
  expirationDate?: Date
}
