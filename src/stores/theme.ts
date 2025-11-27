import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: localStorage.getItem('theme') || 'light',
  }),
  actions: {
    setTheme(val: 'light' | 'dark') {
      this.theme = val
      document.documentElement.setAttribute('data-theme', val)
      localStorage.setItem('theme', val)
    },
    toggle() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light')
    },
    applyTheme() {
      document.documentElement.setAttribute('data-theme', this.theme)
    },
  },
})
