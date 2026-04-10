import { Entity, Fields, IdEntity } from 'remult'

@Entity('casinogameresults', {
  allowApiCrud: 'admin',
  allowApiInsert: true,
  allowApiRead: true
})
export class CasinoGameResult extends IdEntity {
  @Fields.string()
  userId!: string
  
  @Fields.string()
  userTag!: string

  @Fields.string()
  game!: string // 'BlackAndRed', 'PrizesRoulette' etc.

  @Fields.number()
  betAmount!: number

  @Fields.number()
  winAmount!: number

  @Fields.boolean()
  won!: boolean

  @Fields.string()
  resultPayload!: string // For Black & Red logic e.g., 'red', 'black'

  @Fields.createdAt()
  createdAt = new Date()
}
