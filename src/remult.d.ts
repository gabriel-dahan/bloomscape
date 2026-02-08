import 'remult'
import { User } from './shared/user/User'

declare module 'remult' {
  export interface UserInfo extends Omit<User, 'passwordHash' | 'email'> {}
}
