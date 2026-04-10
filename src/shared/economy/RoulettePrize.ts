import { Entity, Fields, IdEntity } from 'remult'

@Entity('rouletteprizes', {
  allowApiCrud: 'admin',
  allowApiRead: true
})
export class RoulettePrize extends IdEntity {
  @Fields.string()
  type!: string // 'SAP', 'RUBY', 'TOKEN', 'FLOWER'

  @Fields.string()
  value!: string // amount or slug

  @Fields.integer()
  amount!: number

  @Fields.number()
  probability!: number

  @Fields.integer()
  dailyLimit!: number // -1 for unlimited
}
