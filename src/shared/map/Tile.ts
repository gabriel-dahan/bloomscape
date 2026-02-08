import { Entity, Fields, Relations } from 'remult'
import { Island } from './Island'
import { TileType } from '../types'
import { UserFlower } from '../flowers/UserFlower'

@Entity('tiles', {
  allowApiCrud: 'admin',
})
export class Tile {
  @Fields.uuid()
  id!: string

  @Fields.integer()
  x!: number

  @Fields.integer()
  z!: number

  @Fields.string()
  type: TileType = 'land'

  @Fields.createdAt()
  createdAt?: Date

  @Fields.string()
  islandId!: string

  @Relations.toOne(() => Island, { field: 'islandId' })
  island?: Island

  @Fields.string()
  flowerId?: string

  @Relations.toOne(() => UserFlower, { field: 'flowerId' })
  flower?: UserFlower
}
