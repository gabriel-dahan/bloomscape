import { Entity, Fields, Relations } from 'remult'
import { Island } from './Island'
import { TileType } from '../types'

@Entity('tiles', {
  allowApiCrud: true, // TODO: Restrict logic later
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

  // Relation : Une tuile appartient à une île
  @Fields.string()
  islandId!: string

  @Relations.toOne(() => Island, { field: 'islandId' })
  island?: Island
}
