<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { remult, type Repository, type FieldMetadata, type ClassType } from 'remult'

import { Achievement, ClaimLink, FlowerSpecies, Island, Item, SapPurchase, Tile, User } from '@/shared'

type EntityConfig = {
    label: string
    key: string
    entity: ClassType<any>
}

const ENTITY_MAP: EntityConfig[] = [
    { label: 'Flower Species', key: 'flowers', entity: FlowerSpecies },
    { label: 'Items', key: 'items', entity: Item },
    { label: 'Users', key: 'users', entity: User },
    { label: 'Achievements', key: 'achievements', entity: Achievement },
    { label: 'Islands', key: 'islands', entity: Island },
    { label: 'Tiles', key: 'tiles', entity: Tile },
    { label: 'Sap Purchases', key: 'sap', entity: SapPurchase },
    { label: 'Claim Links', key: 'claimlinks', entity: ClaimLink },
]

const activeEntityKey = ref(ENTITY_MAP[0].key)
const items = ref<any[]>([])
const loading = ref(false)
const error = ref('')

// Pagination State
const page = ref(1)
const pageSize = 100
const totalCount = ref(0)

// Modal State
const showModal = ref(false)
const isEditing = ref(false)
const editingItem = ref<any>({})

// --- 4. COMPUTED HELPERS ---
const currentConfig = computed(() => ENTITY_MAP.find(e => e.key === activeEntityKey.value)!)

// Generic Repo Access
const currentRepo = computed((): Repository<any> => remult.repo(currentConfig.value.entity))

const totalPages = computed(() => Math.ceil(totalCount.value / pageSize))

const displayFields = computed(() => {
    if (!currentRepo.value || !currentRepo.value.metadata) return []
    return currentRepo.value.metadata.fields.toArray().filter(f => !['passwordHash'].includes(f.key))
})

const formFields = computed(() => {
    if (!currentRepo.value || !currentRepo.value.metadata) return []
    return currentRepo.value.metadata.fields.toArray().filter(f =>
        !['createdAt', 'updatedAt', 'passwordHash', 'id'].includes(f.key)
    )
})

// --- 5. ACTIONS ---

async function loadData() {
    loading.value = true
    error.value = ''
    try {
        // 1. Get total count for pagination UI
        totalCount.value = await currentRepo.value.count()

        // 2. Get paginated data
        items.value = await currentRepo.value.find({
            limit: pageSize,
            page: page.value
        })
    } catch (err: any) {
        error.value = err.message
    } finally {
        loading.value = false
    }
}

function changePage(delta: number) {
    const newPage = page.value + delta
    if (newPage > 0 && newPage <= totalPages.value) {
        page.value = newPage
        loadData()
    }
}

// Open Create Modal
function openCreate() {
    isEditing.value = false
    editingItem.value = {}
    showModal.value = true
}

// Open Edit Modal
function openEdit(item: any) {
    isEditing.value = true
    editingItem.value = { ...item }
    showModal.value = true
}

// Save (Create or Update)
async function saveItem() {
    try {
        if (isEditing.value) {
            await currentRepo.value.save(editingItem.value)
        } else {
            await currentRepo.value.insert(editingItem.value)
        }
        await loadData()
        showModal.value = false
    } catch (err: any) {
        alert("Error saving: " + err.message)
    }
}

// Delete
async function deleteItem(item: any) {
    if (!confirm(`Are you sure you want to delete this ${currentConfig.value.label}?`)) return

    try {
        await currentRepo.value.delete(item)
        await loadData()
    } catch (err: any) {
        alert("Error deleting: " + err.message)
    }
}

// Helpers for Inputs
function getInputType(field: FieldMetadata) {
    if (field.valueType === Boolean) return 'checkbox'
    if (field.valueType === Number) return 'number'
    if (field.key.toLowerCase().includes('date') || field.valueType === Date) return 'datetime-local'
    return 'text'
}

function formatDateForInput(date: any) {
    if (!date) return ''
    const d = new Date(date)
    if (isNaN(d.getTime())) return ''
    const offset = d.getTimezoneOffset() * 60000
    return (new Date(d.getTime() - offset)).toISOString().slice(0, 16)
}

// Reset page when tab changes
watch(activeEntityKey, () => {
    page.value = 1
    loadData()
})

onMounted(() => {
    loadData()
})
</script>

<template>
    <div class="h-[calc(100vh-8rem)] flex flex-col">

        <div class="flex flex-wrap gap-2 mb-4 p-1 bg-slate-900 rounded-lg border border-slate-800 w-fit shrink-0">
            <button v-for="conf in ENTITY_MAP" :key="conf.key" @click="activeEntityKey = conf.key"
                class="px-4 py-2 rounded-md text-sm font-medium transition-colors" :class="activeEntityKey === conf.key
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'">
                {{ conf.label }}
            </button>
        </div>

        <div
            class="flex justify-between items-center bg-slate-900 p-4 rounded-t-xl border border-slate-800 border-b-0 shrink-0">
            <div>
                <h3 class="font-bold text-white text-lg">{{ currentConfig.label }} Database</h3>
                <p class="text-xs text-slate-500">Manage raw data records directly.</p>
            </div>
            <div class="flex gap-2">
                <button @click="loadData" class="btn btn-sm btn-ghost text-slate-400">Refresh</button>
                <button @click="openCreate"
                    class="btn btn-sm bg-emerald-600 hover:bg-emerald-500 text-white border-none">
                    + New {{ currentConfig.label }}
                </button>
            </div>
        </div>

        <div
            class="flex-1 bg-slate-900 border border-slate-800 rounded-b-xl overflow-scroll flex flex-col min-h-0 relative">

            <div class="overflow-scroll flex-1 custom-scrollbar">

                <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-slate-900/50 z-20">
                    <span class="loading loading-spinner text-emerald-500 loading-lg"></span>
                </div>

                <div v-if="error" class="p-12 text-center text-red-400">
                    {{ error }}
                </div>

                <div v-else-if="items.length === 0 && !loading"
                    class="h-full flex flex-col items-center justify-center text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-12 h-12 mb-2 opacity-20">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3.75h3M12 15.75h3M12 12h3m-3 3.75h-3m-3-3.75H9m0 3.75H9m-3-3.75H5.25m3.75 0h-3m3 3.75h-3" />
                    </svg>
                    <p>No data currently available.</p>
                </div>

                <table v-else class="table table-xs w-full">
                    <thead class="bg-slate-950 text-slate-400 sticky top-0 z-10 shadow-sm">
                        <tr>
                            <th class="bg-slate-950 w-24">Actions</th>
                            <th v-for="field in displayFields" :key="field.key" class="bg-slate-950 capitalize">
                                {{ field.caption || field.key }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.id" class="hover:bg-slate-800/50 border-slate-800 group">
                            <td
                                class="flex gap-2 sticky left-0 bg-slate-900 group-hover:bg-slate-800 transition-colors">
                                <button @click="openEdit(item)" class="text-blue-400 hover:text-blue-300">Edit</button>
                                <button @click="deleteItem(item)" class="text-red-400 hover:text-red-300">Del</button>
                            </td>
                            <td v-for="field in displayFields" :key="field.key"
                                class="whitespace-nowrap max-w-xs truncate">
                                <span v-if="field.valueType === Boolean">
                                    <span v-if="item[field.key]" class="text-emerald-400">Yes</span>
                                    <span v-else class="text-slate-600">No</span>
                                </span>
                                <span v-else-if="field.key.toLowerCase().includes('date') || field.valueType === Date"
                                    class="text-slate-500 font-mono text-xs">
                                    {{ item[field.key] ? new Date(item[field.key]).toLocaleString() : '-' }}
                                </span>
                                <span v-else>
                                    {{ item[field.key] }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div
                class="p-2 border-t border-slate-800 text-xs text-slate-400 bg-slate-950 flex justify-between items-center shrink-0">
                <span>Total Records: <span class="text-white">{{ totalCount }}</span></span>

                <div class="flex items-center gap-2">
                    <button @click="changePage(-1)" :disabled="page === 1"
                        class="btn btn-xs btn-ghost disabled:bg-transparent disabled:text-slate-700">
                        « Prev
                    </button>
                    <span class="font-mono">Page {{ page }} / {{ totalPages || 1 }}</span>
                    <button @click="changePage(1)" :disabled="page >= totalPages"
                        class="btn btn-xs btn-ghost disabled:bg-transparent disabled:text-slate-700">
                        Next »
                    </button>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
            <div
                class="bg-slate-900 border border-slate-700 p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                <h3 class="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">
                    {{ isEditing ? 'Edit' : 'Create' }} {{ currentConfig.label }}
                </h3>

                <form @submit.prevent="saveItem" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="field in formFields" :key="field.key" class="form-control">
                        <label class="label py-1">
                            <span class="label-text text-slate-400 text-xs uppercase font-bold">{{ field.caption ||
                                field.key }}</span>
                        </label>

                        <input v-if="getInputType(field) === 'checkbox'" type="checkbox"
                            v-model="editingItem[field.key]"
                            class="checkbox checkbox-primary checkbox-sm border-slate-600" />

                        <input v-else-if="getInputType(field) === 'datetime-local'" type="datetime-local"
                            :value="formatDateForInput(editingItem[field.key])"
                            @input="e => editingItem[field.key] = new Date((e.target as HTMLInputElement).value)"
                            class="input input-sm input-bordered bg-slate-950 border-slate-700 text-slate-200" />

                        <input v-else :type="getInputType(field)" v-model="editingItem[field.key]"
                            class="input input-sm input-bordered bg-slate-900 border-slate-700 text-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                            :placeholder="field.key" />
                    </div>

                    <div class="col-span-full flex justify-end gap-3 mt-6 pt-4 border-t border-slate-800">
                        <button type="button" @click="showModal = false"
                            class="btn btn-ghost text-slate-400">Cancel</button>
                        <button type="submit" class="btn bg-emerald-600 hover:bg-emerald-500 text-white border-none">
                            Save {{ currentConfig.label }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #0f172a;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
</style>