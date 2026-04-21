<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { GameController } from '@/server/controllers/GameController'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import { useAuthStore } from '@/stores/auth'
import type { PatchNote } from '@/shared'
import { Role } from '@/shared/types'

const props = defineProps<{
    initialNote?: PatchNote
}>()

const emit = defineEmits(['close'])
const auth = useAuthStore()

const currentNote = ref<PatchNote | null>(props.initialNote || null)
const history = ref<PatchNote[]>([])
const viewMode = ref<'content' | 'history'>('content')
const isLoading = ref(false)

const loadHistory = async () => {
    isLoading.value = true
    try {
        history.value = await GameController.getPatchNoteHistory() as any
    } finally {
        isLoading.value = false
    }
}

const selectNote = (note: PatchNote) => {
    currentNote.value = note
    viewMode.value = 'content'
}

onMounted(async () => {
    if (!currentNote.value) {
        currentNote.value = await GameController.getLatestPatchNote() as any
    }
})

onUnmounted(async () => {
    // Automatically mark the latest note as seen when the modal closes
    if (props.initialNote) {
        await GameController.markPatchNoteAsSeen(props.initialNote.id)
        if (auth.user) auth.user.lastSeenPatchNoteId = props.initialNote.id
    }
})
</script>

<template>
    <div class="flex flex-col h-[70vh] bg-slate-900 text-slate-200 overflow-hidden">
        <!-- Header -->
        <div class="m-6 p-6 bg-slate-950/50 rounded-2xl border border-white/5 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-4">
                <div>
                    <h2 class="text-xl font-black text-white leading-tight">
                        {{ viewMode === 'content' ? (currentNote?.title || 'Bloomscape Update') : 'Update History' }}
                    </h2>
                    <p class="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">
                        {{ viewMode === 'content' ? `Version ${currentNote?.version || 'Unknown'}` : 'Past botanical improvements' }}
                    </p>
                </div>
            </div>
            <button
                @click="viewMode = viewMode === 'content' ? 'history' : 'content'; if (viewMode === 'history') loadHistory()"
                class="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold transition-colors border border-slate-700">
                {{ viewMode === 'content' ? 'View History' : 'Back to Latest' }}
            </button>
        </div>

        <!-- Content Area -->
        <div class="flex-1 overflow-y-auto p-8 custom-scrollbar bg-slate-900/40">
            <div v-if="viewMode === 'content' && currentNote">
                <MarkdownRenderer :content="currentNote.content" :roles="[Role.ADMIN]" :allow-images="true" />
            </div>

            <div v-else-if="viewMode === 'history'" class="space-y-4">
                <div v-if="isLoading" class="flex flex-col gap-4 animate-pulse">
                    <div v-for="i in 3" :key="i" class="h-24 bg-slate-800 rounded-xl"></div>
                </div>
                <div v-else v-for="note in history" :key="note.id" @click="selectNote(note)"
                    class="group p-5 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all cursor-pointer">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-bold text-white group-hover:text-emerald-400 transition-colors">{{ note.title }}
                        </h3>
                        <span
                            class="text-[10px] font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-700 text-slate-400">{{
                                note.version }}</span>
                    </div>
                    <p class="text-xs text-slate-500 line-clamp-2">
                        {{ note.content.replace(/[#*`_]/g, '').slice(0, 150) }}...
                    </p>
                    <div class="mt-3 text-[10px] text-slate-600 font-bold uppercase tracking-tighter">
                        Published on {{ new Date(note.createdAt!).toLocaleDateString() }}
                    </div>
                </div>
            </div>

            <div v-else-if="!currentNote && !isLoading"
                class="flex flex-col items-center justify-center h-full opacity-50">
                <p>No patch notes found yet.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #1e293b;
    border-radius: 10px;
}

.custom-scrollbar:hover::-webkit-scrollbar-thumb {
    background: #334155;
}
</style>
