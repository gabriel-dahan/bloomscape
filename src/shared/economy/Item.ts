import { Entity, Fields } from 'remult'
import { ItemType } from '../types'

@Entity('item_definitions', { allowApiCrud: 'admin' })
export class Item {
  @Fields.uuid()
  id!: string

  @Fields.string()
  slug!: string // ex: 'fertilizer_basic', 'fence_wood'

  @Fields.string()
  name!: string

  @Fields.string()
  description: string = ''

  @Fields.string()
  type: ItemType = ItemType.RESOURCE

  @Fields.integer()
  basePrice: number = 0

  @Fields.json()
  effects: any = {}

  @Fields.string()
  assetUrl!: string

  @Fields.boolean()
  isTradable: boolean = true

  @Fields.integer()
  maxStackSize: number = 50
}
