import { Entity, Fields, Allow, BackendMethod, remult } from 'remult'

@Entity('user_notifications', {
  allowApiCrud: Allow.authenticated,
  apiPrefilter: () => ({ userId: remult.user?.id }),
  saving: async (n: UserNotification) => {
    if (remult.user && !n.userId) n.userId = remult.user.id
  },
})
export class UserNotification {
  @Fields.uuid()
  id = ''

  @Fields.string()
  userId = ''

  @Fields.string()
  title = ''

  @Fields.string()
  message = ''

  @Fields.string()
  type: 'success' | 'error' | 'info' | 'warning' = 'info'

  @Fields.createdAt()
  createdAt = new Date()

  @Fields.boolean()
  isRead = false

  @BackendMethod({ allowed: Allow.authenticated })
  static async clearAll() {
    const repo = remult.repo(UserNotification)
    const items = await repo.find()
    for (const item of items) {
      await repo.delete(item)
    }
  }
}
