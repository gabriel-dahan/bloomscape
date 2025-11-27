import type { RouteLocationNormalized, RouterScrollBehavior } from "vue-router"

export const scrollBehavior: RouterScrollBehavior = (to: RouteLocationNormalized) => {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth'
        }
    } else {
        return { top: 0 }
    }
}