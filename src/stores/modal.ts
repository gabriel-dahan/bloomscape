import { router } from '@/routes'
import { defineStore } from 'pinia'
import { ref, markRaw, type Component } from 'vue'

export type ModalType = 'info' | 'success' | 'warning' | 'error'
export type ModalSize = 'standard' | 'large' | 'fullscreen'

export interface ModalAction {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
}

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false)
  const type = ref<ModalType>('info')
  const title = ref('')
  const message = ref('')
  const size = ref<ModalSize>('standard')
  const component = ref<Component | null>(null)
  const componentProps = ref<Record<string, any>>({})
  const actions = ref<ModalAction[]>([])
  const sideBarMargin = ref(false)

  const previousPath = ref<string | null>(null)
  const closingPath = ref<string | null>(null)

  function open(payload: {
    title: string
    message?: string
    type?: ModalType
    size?: ModalSize
    component?: Component
    componentProps?: Record<string, any>
    actions?: ModalAction[]
    path?: string // false url shown when the modal is opened
    closingPath?: string // url the modal should return to when closed
    sideBarMargin?: boolean
  }) {
    title.value = payload.title
    message.value = payload.message || ''
    type.value = payload.type || 'info'
    size.value = payload.size || 'standard'
    sideBarMargin.value = payload.sideBarMargin || false
    closingPath.value = payload.closingPath || null

    // Gestion du composant
    if (payload.component) {
      component.value = markRaw(payload.component)
      componentProps.value = payload.componentProps || {}
    } else {
      component.value = null
      componentProps.value = {}
    }

    // Gestion des actions
    if (payload.actions && payload.actions.length > 0) {
      actions.value = payload.actions
    } else {
      actions.value = [
        {
          label: 'Fermer',
          onClick: () => close(),
          variant: 'primary',
        },
      ]
    }

    // --- GESTION DE L'URL (ENDPOINT) ---
    if (payload.path) {
      previousPath.value = window.location.pathname
      window.history.pushState({ modalOpen: true }, '', payload.path)
    } else {
      previousPath.value = null
    }

    isOpen.value = true
  }

  function close() {
    isOpen.value = false

    // --- RESTAURATION DE L'URL ---
    if (previousPath.value) {
      window.history.pushState({}, '', previousPath.value)
      previousPath.value = null
    } else if (closingPath.value) {
      router.push(closingPath.value)
    }

    setTimeout(() => {
      title.value = ''
      message.value = ''
      size.value = 'standard'
      component.value = null
      componentProps.value = {}
      actions.value = []
    }, 300)
  }

  return {
    isOpen,
    type,
    title,
    message,
    size,
    component,
    componentProps,
    sideBarMargin,
    actions,
    open,
    close,
  }
})
