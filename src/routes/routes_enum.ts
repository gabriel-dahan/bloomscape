import { useAuthStore } from '@/stores/auth'
import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router'

interface Routes {
  [identifier: string]: {
    name: string
    path: string
    pathDyn?: (...args: any) => string
    windowTitle?: string
    windowTitleDyn?: (...args: any) => string
    viewPath?: string
    beforeEnter?: (
      to: RouteLocationNormalizedGeneric,
      fro: RouteLocationNormalizedLoadedGeneric,
      next: NavigationGuardNext,
    ) => any
    requiresAuth?: boolean
  }
}

export const ROUTES_ENUM = {
  HOME: {
    name: 'home',
    path: '/',
    windowTitle: 'Explore',
    viewPath: 'HomeView.vue',
  },

  ABOUT: {
    name: 'about',
    path: '/about',
    windowTitle: 'About',
    viewPath: 'AboutView.vue',
  },

  CONTACT: {
    name: 'contact',
    path: '/contact',
    windowTitle: 'Contact',
    viewPath: 'ContactView.vue',
  },

  FAQ: {
    name: 'faq',
    path: '/faq',
    windowTitle: 'F.A.Q.',
    viewPath: 'FAQView.vue',
  },

  // User routes
  LOGIN: {
    name: 'login',
    path: '/login',
    windowTitle: 'Login',
    viewPath: 'user/LoginView.vue',
  },
  SIGNUP: {
    name: 'signup',
    path: '/signup',
    windowTitle: 'Sign Up',
    viewPath: 'user/SignupView.vue',
  },
  LOGOUT: {
    name: 'logout',
    path: '/logout',
    windowTitle: 'Logout',
    beforeEnter: async (_, __, next) => {
      const auth = useAuthStore()
      await auth.logout()
      next(ROUTES_ENUM.HOME.path)
    },
  },
  CURRENT_USER: {
    name: 'current_profile',
    path: '/p',
    viewPath: 'user/ProfileView.vue',
  },
  USER: {
    name: 'profile',
    path: '/p/:tag',
    pathDyn: (tag: string) => `/p/${tag}`,
    viewPath: 'user/ProfileView.vue',
  },

  SETTINGS: {
    name: 'userSettings',
    path: '/p/:tag/settings',
    pathDyn: (tag: string) => `/p/${tag}/settings`,
    viewPath: 'user/SettingsView.vue',
  },

  // GAME

  LAND: {
    name: 'land',
    path: '/land',
    windowTitle: 'My Land',
    viewPath: 'game/LandView.vue',
  },

  USER_LAND: {
    name: 'userLand',
    path: '/land/:tag',
    windowTitleDyn: (tag: string) => `${tag}'s Land`,
    viewPath: 'game/LandView.vue',
  },

  // Error routes
  NOT_FOUND: {
    name: 'notFound',
    path: '/:pathMatch(.*)*',
    windowTitle: 'Page Not Found',
    viewPath: 'errors/404View.vue',
  },
} as Routes
