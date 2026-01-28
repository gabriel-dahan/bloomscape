<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { useSocketStore } from '@/stores/socket'
import MailIcon from '../icons/MailIcon.vue'
import { UserNotification } from '@/shared/user/UserNotification'

const socketStore = useSocketStore()
const isOpen = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const dropdownStyle = ref({})
const expandedGroups = ref<Set<string>>(new Set())

const toggleGroup = (senderName: string) => {
    if (expandedGroups.value.has(senderName)) {
        expandedGroups.value.delete(senderName)
    } else {
        expandedGroups.value.add(senderName)
    }
}

const groupedNotifications = computed(() => {
    const categories: Record<string, any[]> = {
        'Messages': [],
        'Social': [],
        'Economy': [],
        'Gameplay': [],
        'System': []
    }

    const chatBuckets: Record<string, UserNotification[]> = {}

    socketStore.history.forEach(note => {
        const text = (note.title + note.message).toLowerCase()
        const chatMatch = note.title.match(/^Message from (.*)$/)

        if (chatMatch) {
            const sender = chatMatch[1]
            if (!chatBuckets[sender]) chatBuckets[sender] = []
            chatBuckets[sender].push(note)
        }
        else if (text.includes('friend') || text.includes('invite')) {
            categories['Social'].push(note)
        }
        else if (text.includes('sold') || text.includes('bought') || text.includes('sap')) {
            categories['Economy'].push(note)
        }
        else if (text.includes('plant') || text.includes('harvest') || text.includes('level')) {
            categories['Gameplay'].push(note)
        }
        else {
            categories['System'].push(note)
        }
    })

    Object.entries(chatBuckets).forEach(([sender, notes]) => {
        if (notes.length === 1) {
            categories['Messages'].push({ type: 'single', data: notes[0] })
        } else {
            categories['Messages'].push({
                type: 'group',
                sender: sender,
                count: notes.length,
                latest: notes[0].createdAt,
                items: notes
            })
        }
    })

    return ['Messages', 'Social', 'Economy', 'Gameplay', 'System']
        .filter(key => categories[key].length > 0)
        .map(key => ({
            name: key,
            items: categories[key]
        }))
})

function toggle() {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
        socketStore.markAllRead()
        adjustPosition()
    }
}

async function adjustPosition() {
    await nextTick()
    if (!containerRef.value) return

    const rect = containerRef.value.getBoundingClientRect()
    const dropdownWidth = 360
    const padding = 16
    let style: any = {}

    if (rect.right + dropdownWidth > window.innerWidth) {
        style.right = '0px'
        style.left = 'auto'
    } else {
        style.left = '0px'
        style.right = 'auto'
    }

    if (window.innerWidth < 640) {
        style.position = 'fixed'
        style.top = '70px'
        style.left = '16px'
        style.right = '16px'
        style.width = 'auto'
        style.maxHeight = '70vh'
    } else {
        const dropdownHeight = 500
        if (rect.bottom + dropdownHeight > window.innerHeight) {
            const remaining = window.innerHeight - rect.bottom - padding
            if (remaining < dropdownHeight) style.maxHeight = `${remaining}px`
        }
    }

    dropdownStyle.value = style
}

function close(e: MouseEvent) {
    if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
        isOpen.value = false
    }
}

function deleteGroup(items: UserNotification[]) {
    items.forEach(n => socketStore.deleteNotification(n.id))
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
        hour: '2-digit',
        minute: '2-digit',
    })
}
</script>

<template>
    <div ref="containerRef" class="relative inline-block text-left z-50">
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
            <div v-if="isOpen" class="
                    fixed z-[70] overflow-hidden flex flex-col
                    sm:absolute sm:top-full sm:mt-2 sm:w-96 sm:max-h-[500px]
                    origin-top-right rounded-xl bg-slate-900 border border-slate-700 shadow-2xl ring-1 ring-black ring-opacity-5
                " :style="dropdownStyle">

                <div
                    class="px-4 py-3 border-b border-slate-800 bg-slate-950 flex justify-between items-center shrink-0">
                    <h3 class="text-sm font-bold text-white">Notifications</h3>
                    <button v-if="socketStore.history.length > 0" @click="socketStore.clearHistory"
                        class="text-[10px] uppercase font-bold text-slate-500 hover:text-red-400 transition-colors">
                        Clear All
                    </button>
                </div>

                <div class="overflow-y-auto custom-scrollbar flex-1 p-2 space-y-4">
                    <div v-if="socketStore.history.length === 0" class="py-10 text-center opacity-50">
                        <p class="text-xs text-slate-500">No notifications yet</p>
                    </div>

                    <div v-for="category in groupedNotifications" :key="category.name" class="space-y-1">

                        <div class="px-2 pb-1 flex items-center gap-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                {{ category.name }}
                            </span>
                            <div class="h-px flex-1 bg-slate-800"></div>
                        </div>

                        <div v-for="(item, index) in category.items" :key="index">

                            <div v-if="item.type !== 'group'"
                                class="relative flex gap-3 p-3 rounded-lg border border-slate-700/50 bg-slate-800/50 hover:bg-slate-800 transition-colors group">

                                <div class="flex-1 min-w-0 pr-6">
                                    <div class="flex justify-between items-baseline mb-0.5">
                                        <p class="text-sm font-bold text-slate-200 truncate pr-2"
                                            v-html="(item.data || item).title"></p>
                                        <span class="text-[10px] text-slate-500 whitespace-nowrap">
                                            {{ formatTime((item.data || item).createdAt) }}
                                        </span>
                                    </div>
                                    <p class="text-xs text-slate-400 leading-relaxed break-words"
                                        v-html="(item.data || item).message"></p>
                                </div>
                                <button @click.stop="socketStore.deleteNotification((item.data || item).id)"
                                    class="absolute top-3 right-2 text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    &times;
                                </button>
                            </div>

                            <div v-else class="rounded-lg border border-slate-700 bg-slate-800/30 overflow-hidden">
                                <div @click="toggleGroup(item.sender)"
                                    class="flex items-center justify-between p-3 cursor-pointer hover:bg-slate-800 transition-colors">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold border border-indigo-500/30">
                                            {{ item.count }}
                                        </div>
                                        <div>
                                            <p class="text-sm font-bold text-slate-200">
                                                {{ item.sender }}
                                            </p>
                                            <p class="text-[10px] text-slate-500">
                                                {{ item.count }} messages &bull; Latest: {{ formatTime(item.latest) }}
                                            </p>
                                        </div>
                                    </div>
                                    <svg class="w-4 h-4 text-slate-500 transform transition-transform"
                                        :class="expandedGroups.has(item.sender) ? 'rotate-180' : ''" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                <div v-if="expandedGroups.has(item.sender)"
                                    class="bg-slate-900/50 border-t border-slate-800">
                                    <div v-for="note in item.items" :key="note.id"
                                        class="p-3 border-b border-slate-800/50 last:border-0 hover:bg-slate-800/50 flex justify-between group">
                                        <div class="text-xs text-slate-400 pr-4">
                                            <span class="block text-[10px] text-slate-600 mb-0.5">{{
                                                formatTime(note.createdAt) }}</span>
                                            {{ note.message }}
                                        </div>
                                        <button @click.stop="socketStore.deleteNotification(note.id)"
                                            class="text-slate-700 hover:text-red-400 opacity-0 group-hover:opacity-100 px-2">
                                            &times;
                                        </button>
                                    </div>
                                    <div class="p-2 text-center bg-slate-950/30">
                                        <button @click.stop="deleteGroup(item.items)"
                                            class="text-[10px] text-red-400 hover:text-red-300 hover:underline">
                                            Dismiss all from {{ item.sender }}
                                        </button>
                                    </div>
                                </div>
                            </div>

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
</style>