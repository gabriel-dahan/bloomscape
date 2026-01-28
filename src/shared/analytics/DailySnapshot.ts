import { Entity, Fields } from 'remult'

@Entity('daily_snapshots', {
  allowApiCrud: false, // Internal use only
  defaultOrderBy: { date: 'desc' },
})
export class DailySnapshot {
  @Fields.dateOnly()
  date = new Date()

  @Fields.number()
  totalUsers = 0

  @Fields.number()
  activeUsers = 0

  @Fields.number()
  totalSapCirculation = 0

  @Fields.number()
  marketVolume = 0

  @Fields.number()
  newRegistrations = 0
}
