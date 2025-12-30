<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useSocketStore } from '@/stores/socket'
import MailIcon from '../icons/MailIcon.vue'

const socketStore = useSocketStore()
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const alignRight = ref(true)

function toggle() {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
        socketStore.markAllRead()
        adjustPosition()
    }
}

async function adjustPosition() {
    await nextTick()
    if (!dropdownRef.value) return

    const rect = dropdownRef.value.getBoundingClientRect()
    const spaceRight = window.innerWidth - rect.right

    alignRight.value = spaceRight < 400
}

function close(e: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        isOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('click', close)
    window.addEventListener('resize', () => { if (isOpen.value) adjustPosition() })
})

onUnmounted(() => {
    window.removeEventListener('click', close)
})

function formatTime(date: Date) {
    return new Date(date).toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}
</script>

<template>
    <div ref="dropdownRef" class="relative inline-block text-left z-50">
        <button @click.stop="toggle"
            class="relative p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none">
            <MailIcon class="w-5 h-5" />

            <span v-if="socketStore.unreadCount > 0" class="absolute top-1 right-1 flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
        </button>

        <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] sm:hidden">
        </div>

        <Transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <div v-if="isOpen" ref="contentRef" class="
                    /* Mobile Styles: Fixed center screen */
                    fixed left-4 right-4 top-20 z-[70] 
                    max-h-[60vh] overflow-hidden flex flex-col
                    
                    /* Desktop Styles: Absolute positioned */
                    sm:absolute sm:top-full sm:mt-2 sm:w-96 sm:max-h-[500px]
                    
                    /* Common Styles */
                    origin-top-right rounded-xl bg-slate-900 border border-slate-700 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none
                " :class="alignRight ? 'sm:right-0' : 'sm:left-0'">
                <div
                    class="px-4 py-3 border-b border-slate-800 bg-slate-950 flex justify-between items-center shrink-0">
                    <h3 class="text-sm font-bold text-white">Notifications</h3>
                    <button v-if="socketStore.history.length > 0" @click="socketStore.clearHistory"
                        class="text-[10px] uppercase font-bold text-slate-500 hover:text-red-400 transition-colors">
                        Clear All
                    </button>
                </div>

                <div class="overflow-y-auto custom-scrollbar flex-1 p-2 space-y-1">
                    <div v-if="socketStore.history.length === 0" class="py-10 text-center opacity-50">
                        <p class="text-xs text-slate-500">No notifications yet</p>
                    </div>

                    <div v-for="note in socketStore.history" :key="note.id"
                        class="flex gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group">

                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-baseline mb-0.5">
                                <p class="text-sm font-bold text-slate-200 truncate pr-2">
                                    {{ note.title }}
                                </p>
                                <span class="text-[10px] text-slate-600 whitespace-nowrap">
                                    {{ formatTime(note.timestamp) }}
                                </span>
                            </div>
                            <p class="text-xs text-slate-400 leading-relaxed break-words">
                                {{ note.message }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
</style>