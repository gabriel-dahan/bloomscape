<script setup lang="ts">
import { useAudioStore } from '@/stores/audio'

const store = useAudioStore()
</script>

<template>
    <div class="fixed top-21 left-30 sm:top-auto sm:bottom-25 sm:left-10 md:left-40 z-20">
        <button @click="store.toggleMute"
            class="btn btn-circle btn-sm btn-ghost bg-slate-800/50 hover:bg-slate-700/80 border border-slate-600 backdrop-blur-sm transition-all duration-300 group shadow-lg"
            :title="store.isMuted ? 'Unmute Music' : 'Mute Music'">

            <svg v-if="!store.isMuted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-emerald-400 group-hover:text-emerald-300">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5 text-slate-500 group-hover:text-red-400">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>

            <span v-if="!store.isMuted"
                class="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping opacity-75"></span>
        </button>
    </div>
</template>