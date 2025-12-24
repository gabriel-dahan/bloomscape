import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { Chat } from './Chat'

@Entity('chat_participants', {
  allowApiCrud: false,
})
export class ChatParticipant {
  @Fields.uuid()
  id!: string

  @Fields.string()
  chatId!: string

  @Relations.toOne(() => Chat, 'chatId')
  chat?: Chat

  @Fields.string()
  userId!: string

  @Relations.toOne(() => User, 'userId')
  user?: User

  @Fields.createdAt()
  joinedAt?: Date

  @Fields.date()
  lastReadAt?: Date
}
