import { AuthController } from '@/server/controllers/AuthController'
import { defineStore } from 'pinia'
import { type UserInfo } from 'remult'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | UserInfo,
    returnURL: null,
  }),
  actions: {
    async login(tagOrEmail: string, password: string, rememberMe: boolean) {
      const res = await AuthController.login(tagOrEmail.toLowerCase(), password, rememberMe)

      this.user = res.user // updates current User

      if (this.returnURL) {
        const router = useRouter()
        router.push(this.returnURL)
      }
    },
    async logout() {
      await AuthController.logout()
      this.user = null
    },
    async signUp(tag: string, email: string, password: string, passwordConfirm: string) {
      const res = await AuthController.signup(
        tag.toLowerCase(),
        email.toLowerCase(),
        password,
        passwordConfirm,
      )
      this.user = res.user // updates current User
    },
    async googleSignUp(tag: string, email: string, name: string) {
      const res = await AuthController.googleSignUp(tag.toLowerCase(), email.toLowerCase())
      this.user = res.user // updates current User
    },
    async fetchSessionUser() {
      this.user = await AuthController.getSessionUser()
    },
  },
})
