<script setup lang="ts">
import { useGameStore } from '@/stores/game';
import { useUIStore } from '@/stores/ui';


// SVGs inlines pour éviter les dépendances externes dans cet exemple
// Dans ton projet, utilise `lucide-vue-next` ou `heroicons`
const Icons = {
    Home: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>',
    Market: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72m-13.5 8.65h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .415.336.75.75.75Z" /></svg>',
    Chart: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>'
};

const uiStore = useUIStore();
const gameStore = useGameStore();

const navItems = [
    { name: 'Dashboard', icon: Icons.Home, active: true },
    { name: 'Marketplace', icon: Icons.Market, active: false },
    { name: 'Rankings', icon: Icons.Chart, active: false },
];
</script>

<template>
    <aside
        class="fixed top-0 left-0 z-20 h-full transition-all duration-300 ease-in-out glass-panel border-r border-white/10 flex flex-col"
        :class="[
            uiStore.isSidebarOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:w-20 md:translate-x-0'
        ]" @mouseenter="uiStore.isSidebarExpanded = true" @mouseleave="uiStore.isSidebarExpanded = false">
        <!-- Brand -->
        <div class="h-20 flex items-center justify-center border-b border-white/5 relative">
            <div
                class="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0 z-10">
                <span class="text-slate-900 font-bold text-lg">B</span>
            </div>

            <!-- Text Expansion (Desktop) -->
            <transition name="fade">
                <span v-if="uiStore.isSidebarOpen || uiStore.isSidebarExpanded"
                    class="absolute left-20 font-bold text-xl tracking-wide text-white">
                    BloomScape
                </span>
            </transition>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 py-6 px-3 flex flex-col gap-2">
            <a v-for="item in navItems" :key="item.name" href="#"
                class="group flex items-center p-3 rounded-lg transition-all duration-200"
                :class="item.active ? 'bg-emerald-500/10 text-emerald-400' : 'hover:bg-white/5 text-gray-400 hover:text-white'">
                <div class="w-6 h-6 shrink-0" v-html="item.icon"></div>

                <span class="ml-4 whitespace-nowrap font-medium transition-opacity duration-200"
                    :class="(uiStore.isSidebarOpen || uiStore.isSidebarExpanded) ? 'opacity-100' : 'opacity-0 md:hidden'">
                    {{ item.name }}
                </span>
            </a>
        </nav>

        <!-- Economy Status -->
        <div class="p-4 mt-auto border-t border-white/5">
            <div class="bg-slate-800/50 rounded-lg p-3 overflow-hidden">
                <p class="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Balance</p>
                <div class="flex items-center gap-2 text-emerald-400 font-mono text-sm md:text-lg">
                    <span>⟠</span>
                    <span>{{ gameStore.playerBalance.toLocaleString() }}</span>
                </div>
            </div>
        </div>
    </aside>

    <!-- Overlay for Mobile only -->
    <div v-if="uiStore.isSidebarOpen" class="fixed inset-0 bg-black/50 z-10 md:hidden backdrop-blur-sm"
        @click="uiStore.closeSidebar"></div>
</template>

<style scoped>
.glass-panel {
    background: rgba(15, 23, 42, 0.85);
    /* Slate 900 */
    backdrop-filter: blur(12px);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>