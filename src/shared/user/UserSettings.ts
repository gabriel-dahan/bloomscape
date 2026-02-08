import { Allow, Entity, Fields } from 'remult'

@Entity('userSettings', {
  allowApiCrud: Allow.authenticated,
})
export class UserSettings {
  @Fields.uuid()
  id!: string

  @Fields.number()
  volume: number = 0.5

  @Fields.boolean()
  isMuted: boolean = false

  @Fields.boolean()
  notificationsEnabled: boolean = true

  @Fields.string()
  language: string = 'en'
}
