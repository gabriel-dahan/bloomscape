import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { Item } from '../economy/Item'

@Entity('user_items', { allowApiCrud: 'admin' })
export class UserItem {
  @Fields.uuid()
  id!: string

  @Fields.string()
  userId!: string

  @Relations.toOne(() => User, 'userId')
  owner?: User

  @Fields.string()
  itemDefinitionId!: string

  @Relations.toOne(() => Item, 'itemDefinitionId')
  definition?: Item

  @Fields.integer()
  quantity: number = 0
}
