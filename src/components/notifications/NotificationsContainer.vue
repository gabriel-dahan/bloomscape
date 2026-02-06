<script setup lang="ts">
import { useSocketStore } from '@/stores/socket'
import { storeToRefs } from 'pinia'

const socketStore = useSocketStore()
const { notifications } = storeToRefs(socketStore)

function getBgColor(type: string) {
    switch (type) {
        case 'success': return 'bg-emerald-500/90 border-emerald-400/50'
        case 'error': return 'bg-red-500/90 border-red-400/50'
        case 'warning': return 'bg-amber-500/90 border-amber-400/50'
        default: return 'bg-slate-700/90 border-slate-600/50'
    }
}
</script>

<template>
    <div class="fixed bottom-4 right-4 z-9999 flex flex-col gap-2 pointer-events-none">
        <TransitionGroup name="toast">
            <div v-for="note in notifications" :key="note.id"
                class="pointer-events-auto w-80 p-4 rounded-xl border shadow-lg backdrop-blur-sm text-white transform transition-all duration-300"
                :class="getBgColor(note.type)">
                <div class="flex justify-between items-start">
                    <div>
                        <h4 class="font-bold text-sm tracking-wide mb-1" v-html="note.title"></h4>
                        <p class="text-xs opacity-90 leading-relaxed" v-html="note.message"></p>
                    </div>
                    <button @click="socketStore.deleteNotification(note.id)"
                        class="text-white/60 hover:text-white transition-colors">
                        ✕
                    </button>
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
    transition: all 0.4s ease;
}

.toast-enter-from {
    opacity: 0;
    transform: translateX(30px) scale(0.9);
}

.toast-leave-to {
    opacity: 0;
    transform: translateX(30px) scale(0.9);
}
</style>