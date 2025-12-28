import { BackendMethod, Controller, remult, Allow } from 'remult' // Import Allow
import express from 'express'
import { User } from '@/shared/user/User'

// Define the threshold for being "online" (e.g., seen in the last 2 minutes)
const ONLINE_THRESHOLD_MS = 2 * 60 * 1000

declare module 'remult' {
  export interface RemultContext {
    request?: express.Request
  }
}

@Controller('user')
export class UserController {
  @BackendMethod({ allowed: Allow.authenticated })
  static async heartbeat() {
    const userRepo = remult.repo(User)
    const currentUser = await userRepo.findId(remult.user!.id)

    if (currentUser) {
      currentUser.lastOnline = new Date()
      await userRepo.save(currentUser)
    }
  }

  @BackendMethod({ allowed: true })
  static async getUserByTag(tag: string) {
    if (!tag) return

    const userRepo = remult.repo(User)
    const user = await userRepo.findFirst({ tag: tag })

    if (!user) throw 'User could not be found.'

    const now = new Date().getTime()
    const lastSeen = user.lastOnline ? user.lastOnline.getTime() : 0
    const isOnline = now - lastSeen < ONLINE_THRESHOLD_MS

    return {
      success: true,
      user: user,
      isOnline: isOnline,
    }
  }
}
