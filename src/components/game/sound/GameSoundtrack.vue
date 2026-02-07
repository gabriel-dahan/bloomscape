<script setup lang="ts">
import { onMounted, onUnmounted, watch, ref } from 'vue'
import { useAudioStore } from '@/stores/audio'

const props = withDefaults(defineProps<{
    playlist: string[],
    minSilence?: number,
    maxSilence?: number
}>(), {
    minSilence: 30 * 1000,
    maxSilence: 120 * 1000
})

const store = useAudioStore()
const currentAudio = ref<HTMLAudioElement | null>(null)
const timerId = ref<number | null>(null)
const hasInteracted = ref(false)

onMounted(() => {
    scheduleNextTrack(0)

    window.addEventListener('click', handleUserInteraction, { once: true })
    window.addEventListener('keydown', handleUserInteraction, { once: true })
})

onUnmounted(() => {
    stopCurrentTrack()
    clearTimer()
    window.removeEventListener('click', handleUserInteraction)
    window.removeEventListener('keydown', handleUserInteraction)
})

function handleUserInteraction() {
    hasInteracted.value = true
    if (currentAudio.value && !store.isMuted && currentAudio.value.paused) {
        currentAudio.value.play().catch(e => console.log("Still waiting for interaction", e))
    }
}

function clearTimer() {
    if (timerId.value) {
        clearTimeout(timerId.value)
        timerId.value = null
    }
}

function stopCurrentTrack() {
    if (currentAudio.value) {
        currentAudio.value.pause()
        currentAudio.value.onended = null
        currentAudio.value = null
    }
}

function pickRandomTrack() {
    if (props.playlist.length === 0) return null
    const randomIndex = Math.floor(Math.random() * props.playlist.length)
    return props.playlist[randomIndex]
}

function scheduleNextTrack(delayOverride?: number) {
    clearTimer()

    const delay = delayOverride !== undefined
        ? delayOverride
        : Math.floor(Math.random() * (props.maxSilence - props.minSilence + 1) + props.minSilence)

    console.log(`[Soundtrack] Next track in ${delay / 1000} seconds.`)

    timerId.value = window.setTimeout(() => {
        playNextTrack()
    }, delay)
}

function playNextTrack() {
    const src = pickRandomTrack()
    if (!src) return

    stopCurrentTrack()

    const audio = new Audio(src)
    audio.volume = store.isMuted ? 0 : store.volume

    audio.onended = () => {
        currentAudio.value = null
        scheduleNextTrack()
    }

    currentAudio.value = audio

    if (!store.isMuted) {
        audio.play().catch(() => {
            console.log("Autoplay blocked, waiting for interaction")
        })
    }
}

// --- WATCHERS ---

watch(() => store.isMuted, (muted) => {
    if (muted) {
        fadeAudio(0, () => currentAudio.value?.pause())
    } else {
        if (currentAudio.value) {
            currentAudio.value.volume = 0
            currentAudio.value.play()
            fadeAudio(store.volume)
        }
    }
})

watch(() => store.volume, (newVol) => {
    if (currentAudio.value && !store.isMuted) {
        currentAudio.value.volume = newVol
    }
})

function fadeAudio(targetVolume: number, onComplete?: () => void) {
    if (!currentAudio.value) return

    const audio = currentAudio.value
    const steps = 20
    const stepTime = 20
    const currentVol = audio.volume
    const diff = targetVolume - currentVol
    const stepSize = diff / steps

    let step = 0
    const interval = setInterval(() => {
        if (!audio || audio !== currentAudio.value) {
            clearInterval(interval)
            return
        }

        step++
        const newVol = currentVol + (stepSize * step)
        audio.volume = Math.max(0, Math.min(1, newVol))

        if (step >= steps) {
            clearInterval(interval)
            if (onComplete) onComplete()
        }
    }, stepTime)
}
</script>

<template>
    <div style="display: none;"></div>
</template>