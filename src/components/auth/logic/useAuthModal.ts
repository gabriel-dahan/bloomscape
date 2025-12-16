import { ref } from 'vue'

// Global state for the modal
const isOpen = ref(false)
const mode = ref<'login' | 'signup'>('login')
const onSuccessCallback = ref<((user: any) => void) | null>(null)

export function useAuthModal() {
  /**
   * Opens the authentication modal.
   * @param newMode - 'login' or 'signup'
   * @param onSuccess - Optional callback function to run after successful auth
   */
  function openAuthModal(newMode: 'login' | 'signup' = 'login', onSuccess?: (user: any) => void) {
    mode.value = newMode
    isOpen.value = true
    // Store the callback to be executed later
    onSuccessCallback.value = onSuccess || null
  }

  function closeAuthModal() {
    isOpen.value = false
    onSuccessCallback.value = null
  }

  /**
   * Called by AuthModal.vue upon successful login/signup
   */
  function handleSuccess(user: any) {
    if (onSuccessCallback.value) {
      onSuccessCallback.value(user)
      onSuccessCallback.value = null // Reset after execution
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
