import { Entity, Fields } from 'remult'

export const GLOBAL_BANK_ID = 'global-bank-0000'

@Entity('global_bank', { allowApiCrud: 'admin' })
export class GlobalBank {
  @Fields.string()
  id: string = GLOBAL_BANK_ID

  @Fields.number()
  sap: number = 0

  @Fields.number()
  rubies: number = 0

  @Fields.number()
  rouletteCoins: number = 0
}
