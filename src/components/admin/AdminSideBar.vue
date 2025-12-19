<script setup lang="ts">

// Define the shape of a menu item
export interface MenuItem {
    id: string
    label: string
}

defineProps<{
    activeTab: string
    menuItems: MenuItem[]
}>()

const emit = defineEmits<{
    (e: 'update:tab', id: string): void
}>()
</script>

<template>
    <aside class="w-64 bg-slate-900 border-r border-slate-800 flex flex-col absolute h-full z-10">
        <div class="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-900/50">
            <span class="text-emerald-500 font-bold tracking-wider text-sm uppercase">Admin Managing Tools</span>
        </div>

        <nav class="flex-1 p-4 space-y-1">
            <button v-for="item in menuItems" :key="item.id" @click="emit('update:tab', item.id)"
                class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                :class="activeTab === item.id
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'">
                {{ item.label }}
            </button>
        </nav>

        <div class="p-4 border-t border-slate-800 text-xs text-slate-500">
            <p>Admin Panel v1.0</p>
            <p>Server Status: <span class="text-emerald-500">Online</span></p>
        </div>
    </aside>
</template>