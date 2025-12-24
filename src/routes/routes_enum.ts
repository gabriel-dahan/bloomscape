import InventoryInModal from '@/components/game/modal_features/InventoryInModal.vue'
import MarketInModal from '@/components/game/modal_features/MarketInModal.vue'
import TileManagerInModal from '@/components/game/modal_features/TileManagerInModal.vue'
import { useAuthStore } from '@/stores/auth'
import { useModalStore } from '@/stores/modal'
import { remult } from 'remult'
import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router'

interface RouteConfig {
  name: string
  path: string
  pathDyn?: (...args: any[]) => string
  windowTitle?: string
  windowTitleDyn?: (...args: any[]) => string
  viewPath?: string
  beforeEnter?: (
    to: RouteLocationNormalizedGeneric,
    fro: RouteLocationNormalizedLoadedGeneric,
    next: NavigationGuardNext,
  ) => any
  requiresAuth?: boolean
  hideLayout?: boolean
}

export const ROUTES_ENUM = {
  HOME: {
    name: 'home',
    path: '/',
    windowTitle: 'Explore',
    viewPath: 'HomeView.vue',
  },

  WIKI: {
    name: 'wiki',
    path: '/wiki',
    windowTitle: 'Wiki',
    viewPath: 'WikiView.vue',
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

  // GAME

  LAND: {
    name: 'land',
    path: '/land',
    windowTitle: 'My Land',
    viewPath: 'game/LandView.vue',
    hideLayout: true,
    requiresAuth: true,
  },

  USER_LAND: {
    name: 'userLand',
    path: '/land/:tag',
    pathDyn: (tag: string) => `/land/${tag}`,
    windowTitleDyn: (tag: string) => `${tag}'s Land`,
    viewPath: 'game/LandView.vue',
    hideLayout: true,
  },

  TILE_MANAGER: {
    name: 'tileManager',
    path: '/land/tile/:x/:z',
    pathDyn: (x: number, z: number) => `/land/tile/${x}/${z}`,
    beforeEnter: async (_, __, next) => {
      const modal = useModalStore()
      modal.open({
        title: 'Tile Manager',
        component: TileManagerInModal,
        size: 'large',
        closingPath: ROUTES_ENUM.LAND.path,
      })

      next()
    },
    viewPath: 'game/LandView.vue',
    hideLayout: true,
  },

  CURRENT_USER_PROFILE: {
    name: 'currentUserProfile',
    path: '/p',
    windowTitle: 'My Profile',
    viewPath: 'game/UserProfileView.vue',
  },

  USER_PROFILE: {
    name: 'userProfile',
    path: '/p/:tag',
    pathDyn: (tag: string) => `/p/${tag}`,
    windowTitleDyn: (tag: string) => `${tag}'s Profile`,
    viewPath: 'game/UserProfileView.vue',
  },

  SETTINGS: {
    name: 'userSettings',
    path: '/p/:tag/settings',
    pathDyn: (tag: string) => `/p/${tag}/settings`,
    viewPath: 'user/SettingsView.vue',
  },

  MARKET: {
    name: 'market',
    path: '/market',
    viewPath: 'game/MarketView.vue',
  },

  LAND_MARKET: {
    name: 'landMarket',
    path: '/land/market',
    beforeEnter: async (_, __, next) => {
      const modal = useModalStore()
      modal.open({
        title: 'Marketplace',
        component: MarketInModal,
        size: 'fullscreen',
        fullscreenSideBarMargin: true,
        closingPath: ROUTES_ENUM.LAND.path,
      })

      next()
    },
    viewPath: 'game/LandView.vue',
    hideLayout: true,
  },

  INVENTORY: {
    name: 'inventory',
    path: '/land/inventory',
    hideLayout: true,
    beforeEnter: async (_, __, next) => {
      const modal = useModalStore()
      modal.open({
        title: 'Inventory',
        component: InventoryInModal,
        size: 'fullscreen',
        fullscreenSideBarMargin: true,
        closingPath: ROUTES_ENUM.LAND.path,
      })

      next()
    },
    viewPath: 'game/LandView.vue',
  },

  FLORADEX: {
    name: 'floradex',
    path: '/floradex',
    windowTitle: 'FloraDex',
    viewPath: 'game/FloraDexView.vue',
  },

  SUPPORT: {
    name: 'support',
    path: '/support',
    windowTitle: 'Support',
    viewPath: 'user/SupportView.vue',
  },

  ADMIN_DB_MANAGER: {
    name: 'adminDBFuncs',
    path: '/admin/db',
    windowTitle: 'Admin DB Manager',
    viewPath: 'admin/DBManagerView.vue',
  },

  ADMIN_MANAGER: {
    name: 'adminManager',
    path: '/admin/...',
    windowTitle: 'Admin | Manager',
    viewPath: 'admin/ManagerView.vue',
    beforeEnter: (to, _, next) => {
      if (!remult.isAllowed('admin')) {
        next({
          name: 'notFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          replace: true,
        })
      } else {
        next()
      }
    },
  },

  // Error routes
  NOT_FOUND: {
    name: 'notFound',
    path: '/:pathMatch(.*)*',
    windowTitle: 'Page Not Found',
    viewPath: 'errors/404View.vue',
  },
} satisfies Record<string, RouteConfig>
