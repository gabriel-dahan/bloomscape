import { Entity, Fields } from 'remult'
import { Role } from '../types'

export const sanitizeUser = (user: User) => {
  const { passwordHash, email, ...sanitized } = user
  return sanitized
}

@Entity('users', {
  allowApiCrud: 'admin',
})
export class User {
  @Fields.uuid()
  id!: string

  @Fields.string()
  tag!: string

  @Fields.string({ includeInApi: false })
  email!: string

  @Fields.string()
  description: string = ''

  @Fields.string({ includeInApi: false })
  passwordHash!: string

  @Fields.number()
  sap: number = 0

  @Fields.integer()
  level: number = 1

  @Fields.integer()
  xp: number = 0

  @Fields.integer()
  maxPlots: number = 9

  @Fields.boolean()
  enableAds: boolean = false

  @Fields.date()
  lastAdRevenue?: Date

  @Fields.date()
  lastLogin?: Date

  @Fields.string()
  googleId: string = ''

  @Fields.createdAt()
  createdAt?: Date

  @Fields.date()
  lastOnline: Date = new Date()

  @Fields.json()
  roles: Role[] = [Role.USER]

  @Fields.boolean()
  banned: boolean = false
}
