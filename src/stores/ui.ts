import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const isSidebarOpen = ref(false) // Mobile: Drawer open/close
  const isSidebarExpanded = ref(false) // Desktop: Hover expansion

  function toggleSidebar() {
    console.log('Changed sidebar state.')
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function closeSidebar() {
    isSidebarOpen.value = false
  }

  return {
    isSidebarOpen,
    isSidebarExpanded,
    toggleSidebar,
    closeSidebar,
  }
})
