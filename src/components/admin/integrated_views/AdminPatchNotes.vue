<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { remult } from 'remult'
import { PatchNote } from '@/shared'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import { Role } from '@/shared/types'

const patchNotes = ref<PatchNote[]>([])
const repo = remult.repo(PatchNote)
const isLoading = ref(true)

const isEditing = ref(false)
const editingNote = ref<Partial<PatchNote>>({})
const showModal = ref(false)

const loadPatchNotes = async () => {
    isLoading.value = true
    try {
        patchNotes.value = await repo.find()
    } finally {
        isLoading.value = false
    }
}

const openCreate = () => {
    isEditing.value = false
    editingNote.value = {
        title: '',
        version: 'v1.0.0',
        content: '',
        isPublished: false
    }
    showModal.value = true
}

const openEdit = (note: PatchNote) => {
    isEditing.value = true
    editingNote.value = { ...note }
    showModal.value = true
}

const save = async () => {
    try {
        if (isEditing.value) {
            await repo.save(editingNote.value)
        } else {
            await repo.insert(editingNote.value)
        }
        showModal.value = false
        loadPatchNotes()
    } catch (e: any) {
        alert(e.message)
    }
}

const deleteNote = async (note: PatchNote) => {
    if (!confirm('Are you sure you want to delete this patch note?')) return
    await repo.delete(note)
    loadPatchNotes()
}

onMounted(loadPatchNotes)
</script>

<template>
    <div class="space-y-6">
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-xl font-bold text-white">Patch & Update Notes</h2>
                <p class="text-slate-400 text-sm">Communicate botanical improvements to your players.</p>
            </div>
            <button @click="openCreate" class="btn bg-emerald-600 hover:bg-emerald-500 text-white border-none">
                + Create Release Note
            </button>
        </div>

        <div v-if="isLoading" class="flex justify-center p-12">
            <span class="loading loading-spinner loading-lg text-emerald-500"></span>
        </div>

        <div v-else class="grid grid-cols-1 gap-4">
            <div v-for="note in patchNotes" :key="note.id" 
                class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center justify-between group hover:border-slate-700 transition-colors">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center text-xl">
                        {{ note.isPublished ? '🚀' : '📝' }}
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="font-bold text-white">{{ note.title }}</h3>
                            <span class="text-[10px] font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-slate-500">{{ note.version }}</span>
                            <span v-if="note.isPublished" class="badge badge-xs badge-success">Published</span>
                            <span v-else class="badge badge-xs badge-warning">Draft</span>
                        </div>
                        <p class="text-xs text-slate-500 mt-1">Created on {{ new Date(note.createdAt!).toLocaleString() }}</p>
                    </div>
                </div>
                <div class="flex gap-2">
                    <button @click="openEdit(note)" class="btn btn-sm btn-ghost text-blue-400">Edit</button>
                    <button @click="deleteNote(note)" class="btn btn-sm btn-ghost text-red-400">Delete</button>
                </div>
            </div>
        </div>

        <!-- Create/Edit Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] backdrop-blur-sm p-4">
            <div class="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
                <div class="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/50">
                    <h3 class="text-xl font-bold text-white">{{ isEditing ? 'Edit Release Note' : 'New Release Note' }}</h3>
                    <button @click="showModal = false" class="text-slate-500 hover:text-white transition-colors text-2xl">×</button>
                </div>

                <div class="flex-1 overflow-hidden flex flex-col md:flex-row">
                    <!-- Editor -->
                    <div class="flex-1 p-6 border-r border-slate-800 flex flex-col space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="form-control">
                                <label class="label text-xs uppercase font-bold text-slate-500">Title</label>
                                <input v-model="editingNote.title" type="text" class="input input-bordered bg-slate-950" placeholder="A Huge Botanical Update!" />
                            </div>
                            <div class="form-control">
                                <label class="label text-xs uppercase font-bold text-slate-500">Version</label>
                                <input v-model="editingNote.version" type="text" class="input input-bordered bg-slate-950" placeholder="v1.2.0" />
                            </div>
                        </div>

                        <div class="form-control flex-1">
                            <label class="label text-xs uppercase font-bold text-slate-500">Markdown Content</label>
                            <textarea v-model="editingNote.content" class="textarea textarea-bordered bg-slate-950 flex-1 font-mono text-sm resize-none" placeholder="# New Features..."></textarea>
                        </div>

                        <div class="form-control">
                            <label class="label cursor-pointer flex items-center gap-3">
                                <input v-model="editingNote.isPublished" type="checkbox" class="checkbox checkbox-emerald border-slate-600" />
                                <span class="label-text text-white">Publish this note immediately</span>
                            </label>
                        </div>
                    </div>

                    <!-- Preview -->
                    <div class="flex-1 p-6 bg-slate-950/20 overflow-y-auto custom-scrollbar">
                        <label class="label text-xs uppercase font-bold text-slate-500 mb-4">Live Preview</label>
                        <div class="p-6 bg-slate-900 rounded-xl border border-slate-800">
                            <h1 class="text-2xl font-black text-white mb-2">{{ editingNote.title || 'Untitled Update' }}</h1>
                            <p class="text-xs text-emerald-400 font-mono mb-6 pb-2 border-b border-white/5">Version {{ editingNote.version || '0.0.0' }}</p>
                            <MarkdownRenderer :content="editingNote.content || '_No content yet..._'" :roles="[Role.ADMIN]" :allow-images="true" />
                        </div>
                    </div>
                </div>

                <div class="p-6 border-t border-slate-800 bg-slate-950/50 flex justify-end gap-3">
                    <button @click="showModal = false" class="btn btn-ghost text-slate-400">Discard</button>
                    <button @click="save" class="btn bg-emerald-600 hover:bg-emerald-500 text-white border-none px-8">
                        {{ isEditing ? 'Update & Save' : 'Create Note' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
</style>
