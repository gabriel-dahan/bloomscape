import { BackendMethod, Controller, remult } from 'remult'
import express from 'express'

import { User } from '@/shared/user/User'

declare module 'remult' {
  export interface RemultContext {
    request?: express.Request
  }
}

@Controller('user')
export class UserController {
  @BackendMethod({ allowed: true })
  static async getUserByTag(tag: string) {
    if (!tag) return

    const userRepo = remult.repo(User)

    const user = await userRepo.findFirst({ tag: tag })

    if (!user) throw 'User could not be found.'

    return {
      success: true,
      user: user,
    }
  }
}
