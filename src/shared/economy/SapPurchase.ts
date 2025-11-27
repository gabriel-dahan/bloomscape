import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'

@Entity('sap_purchases', { allowApiCrud: 'admin' })
export class SapPurchase {
  @Fields.uuid()
  id!: string

  @Fields.string()
  userId!: string
  @Relations.toOne(() => User, 'userId')
  user?: User

  @Fields.integer()
  amountSap!: number

  @Fields.number()
  amountFiat!: number // e.g. 9.99

  @Fields.string()
  currency: string = 'EUR'

  @Fields.string()
  providerTransactionId!: string // Stripe ID

  @Fields.createdAt()
  purchasedAt?: Date
}
