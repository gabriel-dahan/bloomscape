import { useUIStore } from '@/stores/ui'
import { type Directive } from 'vue'

export const vUiBlock: Directive = {
  mounted(el) {
    const store = useUIStore()

    // When entering a UI element, tell the game to stop controls
    el.addEventListener('mouseenter', () => store.setHovering(true))
    el.addEventListener('mouseleave', () => store.setHovering(false))

    // Also block touch events for mobile
    el.addEventListener('touchstart', () => store.setHovering(true))
    el.addEventListener('touchend', () => store.setHovering(false))
  },
  unmounted(el) {
    // Cleanup to prevent getting stuck in "hover" state if component vanishes
    const store = useUIStore()
    store.setHovering(false)
  },
}
