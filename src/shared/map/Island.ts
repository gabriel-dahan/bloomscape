import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { Tile } from './Tile'

@Entity('islands', {
  allowApiCrud: 'admin',
})
export class Island {
  @Fields.uuid()
  id!: string

  @Fields.string()
  name: string = 'New Island'

  @Fields.number()
  monthScore: number = 0

  @Relations.toMany(() => Tile, { field: 'islandId' })
  tiles?: Tile[]

  @Fields.createdAt()
  createdAt?: Date

  @Fields.string()
  ownerId!: string

  @Relations.toOne(() => User, { field: 'ownerId' })
  owner?: User
}
