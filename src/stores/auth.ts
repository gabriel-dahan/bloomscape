import { AuthController } from '@/server/controllers/AuthController'
import { defineStore } from 'pinia'
import { User } from '@/shared/user/User' // On importe l'entité complète, pas juste UserInfo
import { router } from '@/routes' // Importe ton instance de routeur exportée (pas le hook)
import { remult } from 'remult'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // On type avec User pour avoir accès à .sap, .level, etc.
    user: null as null | User,
    returnURL: null as string | null,
  }),
  actions: {
    async login(tagOrEmail: string, password: string, rememberMe: boolean) {
      const res = await AuthController.login(tagOrEmail.toLowerCase(), password, rememberMe)

      // On caste le résultat car le Controller renvoie l'objet complet
      this.user = res.user as User

      if (this.returnURL) {
        // On utilise l'instance importée directement
        router.push(this.returnURL)
        this.returnURL = null
      }
    },

    async logout() {
      await AuthController.logout()
      this.user = null
      router.push('/login')
    },

    async signUp(tag: string, email: string, password: string, passwordConfirm: string) {
      const res = await AuthController.signup(
        tag.toLowerCase(),
        email.toLowerCase(),
        password,
        passwordConfirm,
      )
      this.user = res.user as User
    },

    async googleLogin(googleId: string) {
      const res = await AuthController.googleLogin(googleId)
      this.user = res.user as User
    },

    // Cette fonction sert maintenant de "Refresh" universel
    async fetchSessionUser() {
      // Appelle le AuthController modifié qui va chercher les données fraîches en DB
      const freshUser = await AuthController.getSessionUser()
      remult.user = freshUser as User
      this.user = freshUser as User
    },
  },
})
