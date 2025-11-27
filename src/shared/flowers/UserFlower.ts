import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { FlowerSpecies } from './FlowerSpecies'
import { FlowerStatus } from '../types'

@Entity('user_flowers', { allowApiCrud: 'admin' })
export class UserFlower {
  @Fields.uuid()
  id!: string

  @Fields.string()
  ownerId!: string
  @Relations.toOne(() => User, 'ownerId')
  owner?: User

  @Fields.string()
  speciesId!: string
  @Relations.toOne(() => FlowerSpecies, 'speciesId')
  species?: FlowerSpecies

  @Fields.string()
  status: FlowerStatus = FlowerStatus.SEED

  @Fields.number()
  quality: number = 0.5

  @Fields.date()
  plantedAt?: Date // Null if SEED

  @Fields.number()
  waterLevel: number = 100 // 0-100%

  @Fields.date()
  lastWateredAt?: Date

  // Isometric Grid Position (Null if SEED)
  @Fields.integer()
  gridX?: number

  @Fields.integer()
  gridY?: number

  // Helper to check if it's in inventory
  get isInInventory() {
    return this.status === FlowerStatus.SEED
  }
}
