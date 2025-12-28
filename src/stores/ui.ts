import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const isSidebarOpen = ref(false)
  const isSidebarHovered = ref(false)

  const isHoveringUI = ref(false) // to check whether the threejs canvas hover event should be trigger or not

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function closeSidebar() {
    isSidebarOpen.value = false
  }

  function setHovering(value: boolean) {
    isHoveringUI.value = value
  }

  return {
    isSidebarOpen,
    isSidebarHovered,
    toggleSidebar,
    closeSidebar,

    isHoveringUI,
    setHovering,
  }
})
