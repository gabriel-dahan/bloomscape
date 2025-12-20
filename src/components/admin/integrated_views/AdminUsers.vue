<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { remult } from 'remult'
import { User } from '@/shared/user/User'
import { Item, FlowerSpecies, Achievement } from '@/shared'
import { AdminController } from '@/server/controllers/AdminController'
import { Role } from '@/shared/types'

// --- REPOSITORIES ---
const userRepo = remult.repo(User)

// --- STATE: LIST ---
const users = ref<User[]>([])
const totalCount = ref(0)
const loading = ref(false)
const searchQuery = ref('')
const page = ref(1)
const pageSize = 20

// --- STATE: DRAWER / ACTIONS ---
const selectedUser = ref<User | null>(null)
const isActionLoading = ref(false)

// --- STATE: BAN MODAL ---
const showBanModal = ref(false)
const banTargetUser = ref<User | null>(null)
const banReason = ref('')

// Catalogs for Dropdowns
const catalogItems = ref<Item[]>([])
const catalogSpecies = ref<FlowerSpecies[]>([])
const catalogAchievements = ref<Achievement[]>([])

// Forms
const giveItemForm = ref({ slug: '', quantity: 1 })
const giveFlowerForm = ref({ slug: '', quality: 0.5 })
const giveAchieveForm = ref({ slug: '' })

// --- FETCHING ---

async function fetchUsers() {
    loading.value = true
    try {
        const where: any = {}
        if (searchQuery.value) {
            where.tag = { $contains: searchQuery.value }
        }

        totalCount.value = await userRepo.count(where)
        users.value = await userRepo.find({
            where,
            limit: pageSize,
            page: page.value,
            orderBy: { createdAt: 'desc' }
        })
    } catch (e) {
        console.error(e)
    } finally {
        loading.value = false
    }
}

async function loadCatalogs() {
    if (catalogItems.value.length > 0) return

    const [items, flowers, ach] = await Promise.all([
        remult.repo(Item).find({ orderBy: { name: 'asc' } }),
        remult.repo(FlowerSpecies).find({ orderBy: { name: 'asc' } }),
        remult.repo(Achievement).find({ orderBy: { name: 'asc' } })
    ])
    catalogItems.value = items
    catalogSpecies.value = flowers
    catalogAchievements.value = ach
}

// --- USER ACTIONS ---

async function openUser(user: User) {
    selectedUser.value = user
    await loadCatalogs()
    if (catalogItems.value.length) giveItemForm.value.slug = catalogItems.value[0].slug
    if (catalogSpecies.value.length) giveFlowerForm.value.slug = catalogSpecies.value[0].slugName
    if (catalogAchievements.value.length) giveAchieveForm.value.slug = catalogAchievements.value[0].slug
}

async function closeUser() {
    selectedUser.value = null
}

// --- BAN LOGIC ---

function openBanModal(user: User) {
    banTargetUser.value = user
    banReason.value = ''
    showBanModal.value = true
}

async function confirmBan() {
    if (!banTargetUser.value || !banReason.value) return
    isActionLoading.value = true

    try {
        const res = await AdminController.banUser(banTargetUser.value.id, banReason.value)
        alert(res.message)
        showBanModal.value = false
        // Refresh list to show ban status if visualized
        await fetchUsers()
        if (selectedUser.value?.id === banTargetUser.value.id) {
            closeUser()
        }
    } catch (e: any) {
        alert(e.message)
    } finally {
        isActionLoading.value = false
    }
}

// --- GIVE LOGIC ---

async function performGiveItem() {
    if (!selectedUser.value) return
    isActionLoading.value = true
    try {
        const res = await AdminController.giveItem(
            selectedUser.value.id,
            giveItemForm.value.slug,
            giveItemForm.value.quantity
        )
        alert(res.message)
    } catch (e: any) {
        alert(e.message)
    } finally {
        isActionLoading.value = false
    }
}

async function performGiveFlower() {
    if (!selectedUser.value) return
    isActionLoading.value = true
    try {
        const res = await AdminController.giveFlower(
            selectedUser.value.id,
            giveFlowerForm.value.slug,
            giveFlowerForm.value.quality
        )
        alert(res.message)
    } catch (e: any) {
        alert(e.message)
    } finally {
        isActionLoading.value = false
    }
}

async function performGiveAchievement() {
    if (!selectedUser.value) return
    isActionLoading.value = true
    try {
        const res = await AdminController.giveAchievement(
            selectedUser.value.id,
            giveAchieveForm.value.slug
        )
        alert(res.message)
    } catch (e: any) {
        alert(e.message)
    } finally {
        isActionLoading.value = false
    }
}

// Watchers
watch([page, searchQuery], () => fetchUsers())
onMounted(fetchUsers)

// Helper
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize) || 1)
</script>

<template>
    <div class="h-[calc(100vh-8rem)] flex flex-col relative">

        <div class="flex justify-between items-center mb-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
            <div class="relative w-96">
                <input v-model.lazy="searchQuery" type="text" placeholder="Search by tag..."
                    class="input input-sm w-full bg-slate-950 border-slate-700 focus:border-emerald-500" />
            </div>
            <div class="flex items-center gap-4 text-sm text-slate-400">
                <span>Total Users: {{ totalCount }}</span>
                <div class="flex gap-2">
                    <button @click="page--" :disabled="page === 1" class="btn btn-xs btn-ghost">«</button>
                    <span>{{ page }} / {{ totalPages }}</span>
                    <button @click="page++" :disabled="page >= totalPages" class="btn btn-xs btn-ghost">»</button>
                </div>
            </div>
        </div>

        <div
            class="flex-1 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col min-h-0 relative">
            <div v-if="loading"
                class="absolute inset-0 z-10 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
                <span class="loading loading-spinner text-emerald-500"></span>
            </div>

            <div class="overflow-y-auto custom-scrollbar flex-1">
                <table class="table table-sm w-full">
                    <thead class="bg-slate-950 text-slate-400 sticky top-0 z-10">
                        <tr>
                            <th>User</th>
                            <th>Info</th>
                            <th>Economy</th>
                            <th>Roles</th>
                            <th>Joined</th>
                            <th class="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id"
                            class="hover:bg-slate-800/50 border-slate-800 transition-colors group">

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar placeholder">
                                        <div class="bg-slate-800 text-slate-300 rounded-full w-8">
                                            <span>{{ user.tag.slice(0, 2).toUpperCase() }}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold flex items-center gap-2">
                                            {{ user.tag }}
                                            <span v-if="user.banned" class="badge badge-xs badge-error">BANNED</span>
                                        </div>
                                        <div class="text-[10px] text-slate-500 font-mono">{{ user.id }}</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="flex flex-col text-xs text-slate-400">
                                    <span>Lvl {{ user.level }}</span>
                                    <span>{{ user.xp }} XP</span>
                                </div>
                            </td>

                            <td>
                                <div class="font-mono text-emerald-400">{{ user.sap }} <span
                                        class="text-xs text-slate-500">Sap</span></div>
                            </td>

                            <td>
                                <div class="flex gap-1">
                                    <span v-if="user.roles.includes(Role.ADMIN)"
                                        class="badge badge-error badge-xs text-white">ADMIN</span>
                                    <span v-else class="badge badge-ghost badge-xs">USER</span>
                                </div>
                            </td>

                            <td class="text-xs text-slate-500">
                                {{ new Date(user.createdAt!).toLocaleDateString() }}
                            </td>

                            <td class="text-right">
                                <button @click="openUser(user)" class="btn btn-xs btn-ghost text-blue-400">
                                    Manage
                                </button>
                                <button @click="openBanModal(user)"
                                    class="btn btn-xs btn-ghost text-red-400 opacity-50 hover:opacity-100"
                                    title="Quick Ban">
                                    Ban
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <Transition name="slide">
            <div v-if="selectedUser"
                class="absolute inset-y-0 right-0 w-[500px] bg-slate-900 border-l border-slate-700 shadow-2xl z-20 flex flex-col">

                <div class="p-6 border-b border-slate-800 bg-slate-950 flex justify-between items-start">
                    <div>
                        <h2 class="text-xl font-bold text-white mb-1">Manage User</h2>
                        <p class="text-emerald-400 font-mono text-sm">{{ selectedUser.tag }}</p>
                    </div>
                    <button @click="closeUser" class="btn btn-circle btn-sm btn-ghost">✕</button>
                </div>

                <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">

                    <div class="space-y-4">
                        <h3
                            class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Moderation Actions
                        </h3>
                        <div class="grid grid-cols-2 gap-3">
                            <button @click="openBanModal(selectedUser)" class="btn btn-outline btn-error btn-sm w-full">
                                Ban User
                            </button>
                            <button class="btn btn-outline btn-warning btn-sm w-full">
                                Warn
                            </button>
                            <button class="btn btn-outline btn-ghost btn-sm w-full col-span-2">
                                View Logs
                            </button>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3
                            class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Give Items
                        </h3>
                        <div class="bg-slate-800/30 p-4 rounded-lg border border-slate-800 space-y-3">
                            <div>
                                <label class="label text-xs">Item</label>
                                <select v-model="giveItemForm.slug"
                                    class="select select-sm w-full bg-slate-900 border-slate-700">
                                    <option v-for="item in catalogItems" :key="item.id" :value="item.slug">
                                        {{ item.name }} ({{ item.type }})
                                    </option>
                                </select>
                            </div>
                            <div class="flex gap-2">
                                <div class="flex-1">
                                    <label class="label text-xs">Amount</label>
                                    <input type="number" v-model="giveItemForm.quantity"
                                        class="input input-sm w-full bg-slate-900 border-slate-700" min="1" />
                                </div>
                                <div class="flex items-end">
                                    <button @click="performGiveItem" :disabled="isActionLoading"
                                        class="btn btn-sm btn-primary">
                                        Give
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3
                            class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Give Seed/Flower
                        </h3>
                        <div class="bg-slate-800/30 p-4 rounded-lg border border-slate-800 space-y-3">
                            <div>
                                <label class="label text-xs">Species</label>
                                <select v-model="giveFlowerForm.slug"
                                    class="select select-sm w-full bg-slate-900 border-slate-700">
                                    <option v-for="s in catalogSpecies" :key="s.id" :value="s.slugName">
                                        {{ s.name }} ({{ s.rarity }})
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label class="label text-xs">Quality: {{ Math.round(giveFlowerForm.quality * 100)
                                }}%</label>
                                <input type="range" min="0" max="1" step="0.01" v-model.number="giveFlowerForm.quality"
                                    class="range range-xs range-accent" />
                            </div>
                            <button @click="performGiveFlower" :disabled="isActionLoading"
                                class="btn btn-sm btn-accent w-full">
                                Generate Seed
                            </button>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3
                            class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Unlock Achievement
                        </h3>
                        <div class="bg-slate-800/30 p-4 rounded-lg border border-slate-800 flex gap-2">
                            <select v-model="giveAchieveForm.slug"
                                class="select select-sm flex-1 bg-slate-900 border-slate-700">
                                <option v-for="a in catalogAchievements" :key="a.id" :value="a.slug">
                                    {{ a.name }}
                                </option>
                            </select>
                            <button @click="performGiveAchievement" :disabled="isActionLoading"
                                class="btn btn-sm btn-secondary">
                                Unlock
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </Transition>

        <div v-if="selectedUser" @click="closeUser"
            class="absolute inset-0 z-10 bg-slate-950/60 backdrop-blur-sm transition-opacity">
        </div>

        <div v-if="showBanModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div class="bg-slate-900 border border-red-500/30 rounded-xl w-full max-w-md shadow-2xl p-6">
                <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span class="text-red-500">🚫</span> Ban User
                </h3>
                <p class="text-slate-400 text-sm mb-4">
                    Are you sure you want to ban <span class="font-bold text-white">{{ banTargetUser?.tag }}</span>?
                    This action will restrict their access to the game.
                </p>

                <div class="form-control mb-6">
                    <label class="label pt-0">
                        <span class="label-text text-xs uppercase font-bold text-slate-500">Reason</span>
                    </label>
                    <textarea v-model="banReason"
                        class="textarea textarea-bordered bg-slate-950 border-slate-700 focus:border-red-500 w-full"
                        placeholder="Violation of TOS, harassment..."></textarea>
                </div>

                <div class="flex justify-end gap-3">
                    <button @click="showBanModal = false" class="btn btn-sm btn-ghost text-slate-400">Cancel</button>
                    <button @click="confirmBan" :disabled="!banReason || isActionLoading"
                        class="btn btn-sm btn-error text-white">
                        <span v-if="isActionLoading" class="loading loading-spinner"></span>
                        <span v-else>Confirm Ban</span>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #0f172a;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
</style>