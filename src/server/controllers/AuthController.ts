import { BackendMethod, Controller, remult, type FindOptions } from 'remult'
import type express from 'express'

import { sanitizeUser, User } from '@/shared/user/User'
import { Role } from '@/shared'

declare module 'remult' {
  export interface RemultContext {
    request?: express.Request
  }
}

@Controller('auth')
export class AuthController {
  @BackendMethod({ allowed: true })
  static async login(tagOrEmail: string, passwd: string, rememberMe: boolean = false) {
    const users = remult.repo(User)
    const user = await users.findFirst({
      $or: [{ tag: tagOrEmail }, { email: tagOrEmail }],
    })
    if (!user) throw 'Invalid tag or email'

    if (user.googleUser) {
      throw 'Connect using the Google Authentification.'
    } else {
      const bcrypt = await import('bcrypt')
      const match = await bcrypt.compare(passwd, user.passwordHash!)

      if (!match) throw 'Invalid password'
    }

    await users.update(user.id, {
      lastLogin: new Date(),
    })
    await users.save(user)

    remult.user = sanitizeUser(user)

    const req = remult.context.request!
    req.session!['user'] = remult.user

    if (rememberMe) {
      req.session!.maxAge = 1000 * 60 * 60 * 24 * 30 // 30 days
    } else {
      req.session!.expires = undefined // session cookie
    }

    return {
      success: true,
      user: req?.session!.user,
    }
  }

  @BackendMethod({ allowed: true })
  static async signup(tag: string, email: string, passwd: string, passwdConfirm: string) {
    const users = remult.repo(User)

    if (await users.findFirst({ tag: tag })) throw 'A user with this tag already exists.'
    if (await users.findFirst({ email: email })) throw 'A user with this email already exists.'
    if (passwd !== passwdConfirm) throw 'Passwords do not match.'
    if (passwd.length < 6) throw 'Password must be at least 6 characters.'

    const bcrypt = await import('bcrypt')
    const hashedPassword = await bcrypt.hash(passwd, 10)
    const newUser = await users.insert({
      tag: tag,
      email: email,
      passwordHash: hashedPassword,
    })

    const req = remult.context!.request!
    req.session!.user = sanitizeUser(newUser)

    return {
      success: true,
      user: req?.session!.user,
    }
  }

  @BackendMethod({ allowed: true })
  static async googleSignUp(tag: string, email: string) {
    const users = remult.repo(User)

    if (await users.findFirst({ tag: tag })) throw 'A user with this tag already exists.'
    if (await users.findFirst({ email: email })) throw 'A user with this email already exists.'

    const newUser = await users.insert({
      tag: tag,
      email: email,
      googleUser: true,
    })

    const req = remult.context!.request!
    req.session!.user = sanitizeUser(newUser)

    return {
      success: true,
      user: req?.session!.user,
    }
  }

  @BackendMethod({ allowed: true })
  static async logout() {
    const req = remult.context!.request
    if (req?.session?.user) {
      const user = await remult.repo(User).findId(req.session.user.id)
      if (user) {
        await remult.repo(User).save(user)
      }
      req.session = null
    }
  }

  @BackendMethod({ allowed: true })
  static async getSessionUser() {
    return remult.user ?? null
  }

  @BackendMethod({
    allowed: () => {
      const r = remult.user?.roles ?? []
      return r.includes(Role.ADMIN) ?? false
    },
  })
  static async listUsers(options: FindOptions<User>) {
    const users = await remult.repo(User).find(options)
    return users
  }
}
