import { Entity, Fields } from 'remult'

@Entity('daily_roulette_state', { allowApiCrud: 'admin' })
export class DailyRouletteState {
  @Fields.string()
  id!: string // YYYY-MM-DD format (UTC)

  @Fields.json()
  prizesRemaining: any = {}
}
