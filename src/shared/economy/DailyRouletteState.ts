import { Entity, Fields, Allow } from 'remult'

@Entity('daily_roulette_state', { 
  allowApiRead: true,
  allowApiInsert: Allow.authenticated,
  allowApiUpdate: 'admin',
  allowApiDelete: 'admin'
})
export class DailyRouletteState {
  @Fields.string()
  id!: string // YYYY-MM-DD format (UTC)

  @Fields.json()
  prizesRemaining: any = {}
}
