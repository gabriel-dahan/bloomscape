import { Entity, Fields } from 'remult'

@Entity('user_claims', { allowApiCrud: 'admin' })
export class UserClaim {
  @Fields.uuid()
  id!: string

  @Fields.string()
  userId!: string

  @Fields.string()
  claimLinkId!: string

  @Fields.createdAt()
  claimedAt?: Date
}
