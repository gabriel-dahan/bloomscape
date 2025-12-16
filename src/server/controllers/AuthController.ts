import { BackendMethod, Controller, remult, type FindOptions } from 'remult'
import express from 'express'
import { sanitizeUser, User } from '@/shared/user/User' // Assure-toi du chemin
import { Role } from '@/shared'
import slugify from 'slugify'

declare module 'remult' {
  export interface RemultContext {
    request?: express.Request
  }
}

@Controller('auth')
export class AuthController {
  // ... (login, signup, googleLogin restent identiques à ton code, je ne les répète pas pour être concis) ...
  @BackendMethod({ allowed: true })
  static async login(tagOrEmail: string, passwd: string, rememberMe: boolean = false) {
    // ... Ton code existant ...
    // Juste un rappel : assure-toi que sanitizeUser renvoie bien tout l'objet User sans le mot de passe
    // pour que le frontend ait accès aux 'sap'.
    const users = remult.repo(User)
    const user = await users.findFirst({
      $or: [{ tag: tagOrEmail }, { email: tagOrEmail }],
    })
    if (!user) throw 'Invalid tag or email'
    const bcrypt = await import('bcrypt')
    const match = await bcrypt.compare(passwd, user.passwordHash!)
    if (!match) throw 'Invalid password'

    // Mise à jour date login
    user.lastLogin = new Date()
    await users.save(user) // Save déclenchera les triggers s'il y en a

    remult.user = sanitizeUser(user)
    const req = remult.context.request!
    req.session!['user'] = remult.user

    // Gestion cookie...
    if (rememberMe) {
      req.session!.maxAge = 1000 * 60 * 60 * 24 * 30
    } else {
      req.session!.expires = undefined
    }

    return { success: true, user: req?.session!.user }
  }

  // ... (signup, googleLogin, logout ... restent identiques) ...
  @BackendMethod({ allowed: true })
  static async signup(tag: string, email: string, passwd: string, passwdConfirm: string) {
    // ... Ton code existant ...
    // Je le remets pour le contexte si besoin, mais pas de changement de logique
    const users = remult.repo(User)
    if (await users.findFirst({ tag: tag })) throw 'A user with this tag already exists.'
    if (await users.findFirst({ email: email })) throw 'A user with this email already exists.'
    if (passwd !== passwdConfirm) throw 'Passwords do not match.'
    if (passwd.length < 6) throw 'Password must be at least 6 characters.'

    const bcrypt = await import('bcrypt')
    const hashedPassword = await bcrypt.hash(passwd, 10)
    const newUser = await users.insert({ tag, email, passwordHash: hashedPassword })

    const req = remult.context!.request!
    req.session!.user = sanitizeUser(newUser)
    return { success: true, user: req?.session!.user }
  }

  @BackendMethod({ allowed: true })
  static async googleLogin(idToken: string) {
    // ... Ton code existant ...
    const { OAuth2Client } = await import('google-auth-library')
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
      }
    }
    const req = remult.context!.request!
    req.session!.user = sanitizeUser(user)
    return { success: true, user: req.session!.user }
  }

  @BackendMethod({ allowed: true })
  static async logout() {
    // ... Ton code existant ...
    const req = remult.context!.request
    if (req?.session) req.session = null
  }

  // --- LE CHANGEMENT IMPORTANT EST ICI ---
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
