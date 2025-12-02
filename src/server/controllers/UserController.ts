import { BackendMethod, Controller, remult } from 'remult'
import express from 'express'

import { User } from '@/shared/user/User'

declare module 'remult' {
  export interface RemultContext {
    request?: express.Request
  }
}

@Controller('auth')
export class UserController {
  @BackendMethod({ allowed: true })
  static async updateUserStats() {
    const users = remult.repo(User)
    const user = await users.findFirst({ id: remult.user!.id })
    if (!user) throw 'User not found'

    return {
      success: true,
    }
  }
}
