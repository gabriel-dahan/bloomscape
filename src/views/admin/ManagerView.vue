<script setup lang="ts">

import AdminSideBar from '@/components/admin/AdminSideBar.vue'
import type { MenuItem } from '@/components/admin/AdminSideBar.vue'

import AdminConfig from '@/components/admin/integrated_views/AdminConfig.vue'
import AdminDatabase from '@/components/admin/integrated_views/AdminDatabase.vue'
import AdminLogs from '@/components/admin/integrated_views/AdminLogs.vue'
import AdminModeration from '@/components/admin/integrated_views/AdminModeration.vue'
import AdminOverview from '@/components/admin/integrated_views/AdminOverview.vue'
import AdminReports from '@/components/admin/integrated_views/AdminReports.vue'
import AdminUsers from '@/components/admin/integrated_views/AdminUsers.vue'

import { ref, computed } from 'vue'

// --- NAVIGATION CONFIG ---
const activeTabId = ref('OVERVIEW')

const menuItems: MenuItem[] = [
    { id: 'OVERVIEW', label: 'Stats & Analytics' },
    { id: 'MODERATION', label: 'Moderation Queue' },
    { id: 'REPORTS', label: 'Player Reports' },
    { id: 'USERS', label: 'User Management' },
    { id: 'DATABASE', label: 'Database Editor' },
    { id: 'CONFIG', label: 'Game Config' },
    { id: 'LOGS', label: 'System Logs' }
]

// Dynamic Component Lookup
const currentView = computed(() => {
    switch (activeTabId.value) {
        case 'OVERVIEW': return AdminOverview
        case 'MODERATION': return AdminModeration
        case 'REPORTS': return AdminReports
        case 'USERS': return AdminUsers
        case 'DATABASE': return AdminDatabase
        case 'CONFIG': return AdminConfig
        case 'LOGS': return AdminLogs
        default: return AdminOverview
    }
})

const activeTitle = computed(() =>
    menuItems.find(i => i.id === activeTabId.value)?.label ?? 'Admin'
)
</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 flex font-sans">

        <AdminSideBar :active-tab="activeTabId" :menu-items="menuItems" @update:tab="(id) => activeTabId = id" />

        <main class="flex-1 ml-64 p-8 bg-slate-950 min-h-screen">
            <header class="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
                <h1 class="text-2xl font-bold text-white">
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