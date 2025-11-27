import { defineStore } from 'pinia'

export const useBreakpoints = defineStore('breakpoints', {
  state: () => ({
    phone: '' as string,
    sm: '' as string,
    md: '' as string,
    lg: '' as string,
    xl: '' as string,
  }),
  actions: {
    getBreakpoints() {
      const styles = getComputedStyle(document.documentElement)
      this.phone = styles.getPropertyValue('--breakpoint-phone').trim()
      this.sm = styles.getPropertyValue('--breakpoint-sm').trim()
      this.md = styles.getPropertyValue('--breakpoint-md').trim()
      this.lg = styles.getPropertyValue('--breakpoint-lg').trim()
      this.xl = styles.getPropertyValue('--breakpoint-xl').trim()
    },
  },
})
