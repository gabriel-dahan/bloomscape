import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'

@Entity('moderation_logs', {
  allowApiCrud: 'admin',
})
export class ModerationLog {
  @Fields.uuid()
  id!: string

  @Fields.string()
  targetUserId!: string

  @Relations.toOne(() => User, 'targetUserId')
  targetUser?: User

  @Fields.string()
  moderatorId!: string

  @Relations.toOne(() => User, 'moderatorId')
  moderator?: User

  @Fields.string()
  action!: 'BAN' | 'WARN' | 'KICK' | 'UNBAN'

  @Fields.string()
  reason!: string

  @Fields.createdAt()
  createdAt?: Date
}
