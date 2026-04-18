import { BackendMethod, Controller, remult, type FindOptions } from 'remult'
import type { Request } from 'express'
import { sanitizeUser, User } from '@/shared/user/User' // Assure-toi du chemin
import { Role, FlowerSpecies, UserFlower, FlowerStatus, DiscoverySource } from '@/shared'
import slugify from 'slugify'
import { FlowerDiscovery } from '@/shared/analytics/FlowerDiscovery'
import { LoggerService } from '../services/LoggerService'
import { LogSource } from '@/shared/analytics/SystemLog'

declare module 'remult' {
  export interface RemultContext {
    request?: Request
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
    const lib = '@' + 'bcrypt'
    const bcrypt = await import(lib.substring(1))
    const match = await bcrypt.compare(passwd, user.passwordHash!)
    if (!match) throw 'Invalid password'

    user.lastLogin = new Date()
    await users.save(user)

    remult.user = sanitizeUser(user)
    const req = remult.context.request!
    req.session!['user'] = remult.user

    if (rememberMe) {
      req.session!.maxAge = 1000 * 60 * 60 * 24 * 30
    } else {
      req.session!.expires = undefined
    }

    return { success: true, user: req?.session!.user }
  }

  @BackendMethod({ allowed: true })
  static async signup(tag: string, email: string, passwd: string, passwdConfirm: string) {
    const users = remult.repo(User)
    if (await users.findFirst({ tag: tag })) throw 'A user with this tag already exists.'
    if (await users.findFirst({ email: email })) throw 'A user with this email already exists.'
    if (passwd !== passwdConfirm) throw 'Passwords do not match.'
    if (passwd.length < 6) throw 'Password must be at least 6 characters.'

    const lib = '@' + 'bcrypt'
    const bcrypt = await import(lib.substring(1))
    const hashedPassword = await bcrypt.hash(passwd, 10)
    const newUser = await users.insert({ tag, email, passwordHash: hashedPassword })

    const req = remult.context!.request!
    req.session!.user = sanitizeUser(newUser)

    await LoggerService.success(LogSource.AUTH, `New user registered via email: ${tag}`, newUser.id)

    return { success: true, user: req?.session!.user }
  }

  @BackendMethod({ allowed: true })
  static async googleLogin(idToken: string) {
    const lib = '@' + 'google-auth-library'
    const { OAuth2Client } = await import(lib.substring(1)) /* @vite-ignore */
    const client = new OAuth2Client(process.env.VITE_GOOGLE_CLIENT_ID)
    const userRepo = remult.repo(User)
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.VITE_GOOGLE_CLIENT_ID,
    })
    const payload = ticket.getPayload()
    if (!payload || !payload.email || !payload.sub) throw new Error('Invalid Google Token')

    const email = payload.email.toLowerCase()
    const googleId = payload.sub
    const name = payload.name || email.split('@')[0]

    let user = await userRepo.findFirst({ googleId })
    if (!user) {
      user = await userRepo.findFirst({ email })
      if (user) {
        user.googleId = googleId
        await userRepo.save(user)
      } else {
        let tag = slugify(name, { lower: true, strict: true })
        let counter = 1
        while (await userRepo.findFirst({ tag })) {
          tag = `${slugify(name, { lower: true, strict: true })}${counter}`
          counter++
        }
        user = await userRepo.insert({ tag, email, googleId, roles: [Role.USER] })

        await LoggerService.success(
          LogSource.AUTH,
          `New user registered via Google: ${tag}`,
          user.id,
        )
      }
    }
    const req = remult.context!.request!
    req.session!.user = sanitizeUser(user)
    return { success: true, user: req.session!.user }
  }

  @BackendMethod({ allowed: true })
  static async logout() {
    const req = remult.context!.request
    if (req?.session) req.session = null
  }

  @BackendMethod({ allowed: true })
  static async getSessionUser() {
    if (!remult.user) return null

    const user = await remult.repo(User).findId(remult.user.id)
    return user ? sanitizeUser(user) : null
  }

  @BackendMethod({
    allowed: () => {
      const r = remult.user?.roles ?? []
      return r.includes(Role.ADMIN) ?? false
    },
  })
  static async listUsers(options: FindOptions<User>) {
    return await remult.repo(User).find(options)
  }
}
