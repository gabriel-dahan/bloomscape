import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { scrollBehavior } from './scroll'
import { ROUTES_ENUM } from './routes_enum'
import { useAuthStore } from '@/stores/auth'
import { useAuthModal } from '@/components/auth/logic/useAuthModal'

declare global {
  interface ImportMeta {
    glob: (pattern: string) => Record<string, () => Promise<unknown>>
  }
}

const viewModules = import.meta.glob('../views/**/*.vue')

const routes = [] as RouteRecordRaw[]

for (const r of Object.values(ROUTES_ENUM)) {
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
    next()
  } else {
    next()
  }
})
