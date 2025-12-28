import { defineStore } from 'pinia'
import { ref, onUnmounted } from 'vue'
import { calculateGameTime, type GameTime } from '@/shared/gameTime'

export const useTimeStore = defineStore('time', () => {
  const now = ref<GameTime>(calculateGameTime())
  let rafId: number | null = null

  function update() {
    now.value = calculateGameTime()
    rafId = requestAnimationFrame(update)
  }

  function start() {
    if (rafId) return
    update()
  }

  function stop() {
    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  onUnmounted(() => {
    stop()
  })

  return {
    now,
    start,
    stop,
  }
})
