import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'

export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export enum LogSource {
  SYSTEM = 'SYSTEM',
  AUTH = 'AUTH',
  GAME = 'GAME',
  MARKET = 'MARKET',
  ADMIN = 'ADMIN',
  CHAT = 'CHAT',
}

@Entity('system_logs', {
  allowApiRead: 'admin',
  allowApiInsert: false,
  allowApiUpdate: false,
  allowApiDelete: false,
  defaultOrderBy: { createdAt: 'desc' },
})
export class SystemLog {
  @Fields.uuid()
  id!: string

  @Fields.createdAt()
  createdAt?: Date

  @Fields.string()
  level: LogLevel = LogLevel.INFO

  @Fields.string()
  source: LogSource = LogSource.SYSTEM

  @Fields.string()
  message: string = ''

  @Fields.string({ allowNull: true })
  userId?: string

  @Relations.toOne(() => User, 'userId')
  user?: User

  @Fields.string({ allowNull: true })
  targetId?: string
}
