import { ref } from 'vue'

const isOpen = ref(false)
const mode = ref<'login' | 'signup'>('login')
const onSuccessCallback = ref<null | ((user: any) => void)>(null)

export function useAuthModal() {
  function openAuthModal(newMode: 'login' | 'signup' = 'login', onSuccess?: (user: any) => void) {
    mode.value = newMode
    isOpen.value = true
    onSuccessCallback.value = onSuccess ?? null
  }

  function closeAuthModal() {
    isOpen.value = false
  }

  function handleSuccess(user: any) {
    if (onSuccessCallback.value) {
      onSuccessCallback.value(user) // Success function called...
      onSuccessCallback.value = null // ... and reset
    }
  }

  return {
    isOpen,
    mode,
    openAuthModal,
    closeAuthModal,
    handleSuccess,
  }
}
