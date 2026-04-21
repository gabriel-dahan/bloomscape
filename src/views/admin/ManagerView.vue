<script setup lang="ts">

import AdminSideBar from '@/components/admin/AdminSideBar.vue'
import type { MenuItem } from '@/components/admin/AdminSideBar.vue'

import AdminConfig from '@/components/admin/integrated_views/AdminConfig.vue'
import AdminDatabase from '@/components/admin/integrated_views/AdminDatabase.vue'
import AdminLogs from '@/components/admin/integrated_views/AdminLogs.vue'
import AdminOverview from '@/components/admin/integrated_views/AdminOverview.vue'
import AdminReports from '@/components/admin/integrated_views/AdminReports.vue'
import AdminUsers from '@/components/admin/integrated_views/AdminUsers.vue'
import AdminBank from '@/components/admin/integrated_views/AdminBank.vue'
import AdminCasino from '@/components/admin/integrated_views/AdminCasino.vue'
import AdminPatchNotes from '@/components/admin/integrated_views/AdminPatchNotes.vue'

import { ref, computed } from 'vue'

// --- NAVIGATION CONFIG ---
const activeTabId = ref('OVERVIEW')

const menuItems: MenuItem[] = [
{ id: 'OVERVIEW', label: 'Stats & Analytics' },
    { id: 'REPORTS', label: 'Player Reports' },
    { id: 'USERS', label: 'User Management' },
    { id: 'BANK', label: 'Global Bank' },
    { id: 'CASINO', label: 'Casino & Prizes' },
    { id: 'DATABASE', label: 'Database Editor' },
    { id: 'CONFIG', label: 'Game Config' },
    { id: 'PATCHNOTES', label: 'Patch & Update' },
    { id: 'LOGS', label: 'System Logs' }
]

// Dynamic Component Lookup
const currentView = computed(() => {
    switch (activeTabId.value) {
        case 'OVERVIEW': return AdminOverview
        case 'REPORTS': return AdminReports
        case 'USERS': return AdminUsers
        case 'BANK': return AdminBank
        case 'CASINO': return AdminCasino
        case 'DATABASE': return AdminDatabase
        case 'CONFIG': return AdminConfig
        case 'PATCHNOTES': return AdminPatchNotes
        case 'LOGS': return AdminLogs
        default: return AdminOverview
    }
})

const activeTitle = computed(() =>
    menuItems.find(i => i.id === activeTabId.value)?.label ?? 'Admin'
)
</script>

<template>
    <div class="w-full min-h-screen bg-slate-950 text-slate-200 font-sans">

        <AdminSideBar :active-tab="activeTabId" :menu-items="menuItems" @update:tab="(id) => activeTabId = id" />

        <main class="ml-64 p-8 bg-slate-950 min-h-screen min-w-0 flex flex-col">
            <header class="flex justify-between items-center mb-8 pb-4 border-b border-slate-800 shrink-0">
                <h1 class="page-title text-2xl font-bold text-white">
                    {{ activeTitle }}
                </h1>
            </header>

            <Transition name="fade" mode="out-in">
                <component :is="currentView" />
            </Transition>
        </main>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>