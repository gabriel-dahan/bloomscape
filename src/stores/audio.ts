import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useAudioStore = defineStore('audio', () => {
  const isMuted = ref(localStorage.getItem('bloomscape_muted') === 'true')
  const volume = ref(parseFloat(localStorage.getItem('bloomscape_volume') || '0.3'))

  function toggleMute() {
    isMuted.value = !isMuted.value
  }

  function setVolume(val: number) {
    volume.value = Math.max(0, Math.min(1, val))
  }

  watch(isMuted, (val) => {
    localStorage.setItem('bloomscape_muted', String(val))
  })

  watch(volume, (val) => {
    localStorage.setItem('bloomscape_volume', String(val))
  })

  return {
    isMuted,
    volume,
    toggleMute,
    setVolume,
  }
})
