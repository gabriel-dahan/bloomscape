import { Entity, Fields } from 'remult'

export enum StoreCategory {
  CURRENCY = 'Currency',
  BUNDLE = 'Bundles',
  COSMETIC = 'Cosmetics',
  PREMIUM = 'Premium',
}

@Entity('store_items', { allowApiCrud: 'admin' })
export class StoreItem {
  @Fields.uuid()
  id!: string

  @Fields.string()
  name!: string

  @Fields.string()
  description: string = ''

  @Fields.number()
  price: number = 0.0

  @Fields.string()
  category: StoreCategory = StoreCategory.CURRENCY

  @Fields.string()
  imageUrl: string = ''

  @Fields.boolean()
  isPopular: boolean = false

  @Fields.boolean()
  isNew: boolean = false
}
