import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { Chat } from './Chat'

@Entity('chat_messages', {
  allowApiCrud: false,
  defaultOrderBy: { createdAt: 'asc' },
})
export class ChatMessage {
  @Fields.uuid()
  id!: string

  @Fields.string()
  chatId!: string

  @Relations.toOne(() => Chat, 'chatId')
  chat?: Chat

  @Fields.string()
  senderId!: string

  @Relations.toOne(() => User, 'senderId')
  sender?: User

  @Fields.string()
  content!: string

  @Fields.createdAt()
  createdAt?: Date
}
