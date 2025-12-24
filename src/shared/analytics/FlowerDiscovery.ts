import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { FlowerSpecies } from '../flowers/FlowerSpecies'
import { DiscoverySource } from '../types'

@Entity('flower_discoveries', {
  allowApiCrud: false,
  defaultOrderBy: { discoveredAt: 'desc' },
})
export class FlowerDiscovery {
  @Fields.uuid()
  id!: string

  @Fields.string()
  userId!: string

  @Relations.toOne(() => User, 'userId')
  user?: User

  @Fields.string()
  speciesId!: string

  @Relations.toOne(() => FlowerSpecies, 'speciesId')
  species?: FlowerSpecies

  @Fields.createdAt()
  discoveredAt?: Date

  @Fields.string()
  source: DiscoverySource = DiscoverySource.UNKNOWN

  @Fields.number()
  initialQuality: number = 0
}
