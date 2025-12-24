import { Entity, Fields } from 'remult'

@Entity('chats', {
  allowApiCrud: false,
})
export class Chat {
  @Fields.uuid()
  id!: string

  @Fields.createdAt()
  createdAt?: Date

  @Fields.date()
  lastMessageAt?: Date

  @Fields.string()
  lastMessagePreview: string = ''
}
