<script setup lang="ts">
import { GameController } from '@/server/controllers/GameController';
import { useAuthStore } from '@/stores/auth';
import { useUIStore } from '@/stores/ui';
import { onMounted, ref } from 'vue';
import HomeIcon from '../icons/navbar/HomeIcon.vue';

const uiStore = useUIStore();

const auth = useAuthStore();
const userBalance = ref(0);

onMounted(async () => {
    await auth.fetchSessionUser();

    if (auth.user) {
        userBalance.value = await GameController.getUserBalance(auth.user.tag)
    }
})
</script>

<template>
    <aside
        class="fixed top-0 left-0 z-999 h-full transition-all duration-300 ease-in-out glass-panel border-r border-white/10 flex flex-col"
        :class="[
            uiStore.isSidebarOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:w-20 md:translate-x-0'
        ]" @mouseenter="uiStore.isSidebarExpanded = true" @mouseleave="uiStore.isSidebarExpanded = false">

        <!-- Brand -->
        <div class="h-20 flex items-center justify-center border-b border-white/5 relative">
            <div class="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0 z-10"
                @click="uiStore.toggleSidebar">
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
            <a href="#"
                class="group flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-white/5 text-gray-400 hover:text-white">

                <div class="w-6 h-6 shrink-0">
                    <HomeIcon />
                </div>

                <span class="ml-4 whitespace-nowrap font-medium transition-opacity duration-200"
                    :class="(uiStore.isSidebarOpen || uiStore.isSidebarExpanded) ? 'opacity-100' : 'opacity-0 md:hidden'">
                    Home
                </span>
            </a>
        </nav>

        <!-- Economy Status -->
        <div class="p-4 mt-auto border-t border-white/5" v-if="auth.user">
            <div class="bg-slate-800/50 rounded-lg p-3 overflow-hidden">
                <p class="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Balance</p>
                <div class="flex items-center gap-2 text-emerald-400 font-mono text-sm md:text-lg">
                    <span>⟠</span>
                    <span>{{ userBalance }}</span>
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