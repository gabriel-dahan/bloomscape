import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { ReportStatus, ReportType } from '../types'

@Entity('reports', {
  allowApiCrud: 'admin',
})
export class UserReport {
  @Fields.uuid()
  id!: string

  @Fields.string()
  reporterId!: string

  @Relations.toOne(() => User, 'reporterId')
  reporter?: User

  @Fields.string()
  type: ReportType = ReportType.BUG

  @Fields.string()
  title!: string

  @Fields.string()
  description!: string

  @Fields.string()
  status: ReportStatus = ReportStatus.OPEN

  @Fields.createdAt()
  createdAt?: Date

  @Fields.date()
  resolvedAt?: Date
}
