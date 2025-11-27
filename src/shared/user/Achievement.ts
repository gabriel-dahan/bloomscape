import { Entity, Fields } from 'remult'

@Entity('achievements', { allowApiCrud: 'admin' }) // Admin managed only
export class Achievement {
  @Fields.uuid()
  id!: string

  @Fields.string()
  slug!: string // e.g. "first_planting"

  @Fields.string()
  name!: string

  @Fields.string()
  description!: string

  @Fields.integer()
  rewardSap: number = 0
}
