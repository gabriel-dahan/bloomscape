import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { scrollBehavior } from './scroll'
import { ROUTES_ENUM } from './routes_enum'
import { useAuthStore } from '@/stores/auth'
import { useAuthModal } from '@/components/auth/logic/useAuthModal'

const viewModules = import.meta.glob('../views/**/*.vue')

const routes = [] as RouteRecordRaw[]

for (const rawRoute of Object.values(ROUTES_ENUM)) {
  const r = rawRoute as any
  routes.push({
    path: r.path,
    name: r.name,
    meta: {
      title: r.windowTitle || null,
      requiresAuth: r.requiresAuth || false,
      hideLayout: r.hideLayout || false,
    },
    component: r.viewPath
      ? viewModules[`../views/${r.viewPath}`]
      : viewModules['../views/errors/404View.vue'],
    beforeEnter: r.beforeEnter,
  })
}

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

router.beforeEach(async (to, _, next) => {
  const auth = useAuthStore()
  await auth.fetchSessionUser()

  if (to.meta.requiresAuth && !auth.user) {
    const authModal = useAuthModal()
    authModal.openAuthModal('login')
    return next()
  }

  // Ban Restrictions
  if (auth.user?.banned) {
    const restrictedPrefixes = ['/land', '/market', '/inventory', '/floradex', '/p/settings', '/store', '/leaderboard', '/levels-road', '/roulette']
    if (restrictedPrefixes.some(prefix => to.path.startsWith(prefix))) {
      return next(ROUTES_ENUM.HOME.path)
    }
  }

  next()
})
