import { defineStore } from 'pinia'
import { ref, onUnmounted } from 'vue'
import { calculateGameTime, type GameTime } from '@/shared/gameTime'

export const useTimeStore = defineStore('time', () => {
  const now = ref<GameTime>(calculateGameTime())
  let intervalId: ReturnType<typeof setInterval> | null = null

  function start() {
    if (intervalId) return
    update()
    intervalId = setInterval(update, 1000)
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  function update() {
    now.value = calculateGameTime()
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
