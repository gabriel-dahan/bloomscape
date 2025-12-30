<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useUIStore } from '@/stores/ui';
import { computed, onMounted } from 'vue';

import HomeIcon from '../icons/navbar/HomeIcon.vue';
import MarketIcon from '../icons/navbar/MarketIcon.vue';
import InventoryIcon from '../icons/navbar/InventoryIcon.vue';
import SettingsIcon from '../icons/navbar/SettingsIcon.vue';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';
import { useModalStore } from '@/stores/modal';
import { router } from '@/routes';
import MarketInModal from './modal_features/MarketInModal.vue';
import InventoryInModal from './modal_features/InventoryInModal.vue';
import { useBreakpoints } from '@/stores/breakpoints';
import { useWindowSize } from '@vueuse/core'
import { useGameStore } from '@/stores/game';


const uiStore = useUIStore();

const auth = useAuthStore();
const game = useGameStore();

const userBalance = computed(() => auth.user?.sap ?? 0);

const navigationArray = [
    { name: 'Home', icon: HomeIcon, link: ROUTES.HOME.path },
    {
        name: 'Market', icon: MarketIcon,
        action: async () => {
            const modal = useModalStore();
            modal.open({
                title: 'Marketplace',
                component: MarketInModal,
                size: 'fullscreen',
                path: ROUTES.LAND_MARKET.path,
                sideBarMargin: true,
            });
        }
    },
    {
        name: 'Inventory', icon: InventoryIcon,
        action: () => {
            const modal = useModalStore();
            modal.open({
                title: 'Inventory',
                component: InventoryInModal,
                size: 'fullscreen',
                path: ROUTES.INVENTORY.path,
                sideBarMargin: true,
            })
        }
    },
    { name: 'Settings', icon: SettingsIcon, link: ROUTES.SETTINGS.pathDyn(auth.user?.tag) },
];

const { width: winWidth, height: _ } = useWindowSize()

onMounted(async () => {
    await auth.fetchSessionUser();

})
</script>

<template>
    <teleport to="body">
        <button v-if="!uiStore.isSidebarOpen" @click="uiStore.toggleSidebar"
            class="fixed top-4 right-4 z-[100] p-2 bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-full text-white shadow-lg md:hidden hover:bg-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <transition name="fade">
            <div v-if="uiStore.isSidebarOpen" @click="uiStore.toggleSidebar"
                class="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm md:hidden"></div>
        </transition>

        <aside v-ui-block
            class="fixed top-5 left-5 h-[calc(100%-40px)] transition-all duration-300 ease-in-out glass-panel flex flex-col z-[101] pointer-events-auto rounded-2xl overflow-hidden isolate"
            :class="[
                uiStore.isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full md:w-20 md:translate-x-0'
            ]" @mouseenter="uiStore.isSidebarHovered = true" @mouseleave="uiStore.isSidebarHovered = false"
            @click="uiStore.toggleSidebar">

            <button
                class="h-20 flex items-center border-b border-white/5 relative transition-all duration-300 cursor-pointer"
                :class="uiStore.isSidebarOpen ? 'px-6' : 'justify-center px-0'"
                @click.stop.prevent="router.push(ROUTES.HOME.path)">

                <div>
                    <img src="/bloomscape_logo.png" alt="Logo" width="50" height="50" />
                </div>

                <transition name="fade">
                    <span v-if="uiStore.isSidebarOpen" class="absolute left-20 font-bold tracking-wide w-40">
                        <img src="/bloomscape_text.png" alt="BloomScape">
                    </span>
                </transition>
            </button>

            <nav class="flex-1 py-6 px-3 flex flex-col gap-2">
                <a v-for="(item, index) in navigationArray" :key="index" :href="!item.action ? (item.link || '#') : '#'"
                    @click.stop="() => {
                        const bp = useBreakpoints()
                        if (item.action) item.action();
                        if (winWidth < bp.md) uiStore.toggleSidebar();
                    }"
                    class="group flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-white/5 text-gray-400 hover:text-white relative overflow-hidden"
                    :class="uiStore.isSidebarOpen ? '' : 'justify-center'">
                    <div class="w-6 h-6 shrink-0 transition-transform duration-300">
                        <component v-if="item.icon" :is="item.icon" />
                        <div v-else class="w-6 h-6 bg-white/10 rounded-lg"></div>
                    </div>

                    <div class="overflow-hidden transition-all duration-300 ease-in-out"
                        :class="uiStore.isSidebarOpen ? 'max-w-[150px] opacity-100 ml-4' : 'max-w-0 opacity-0 ml-0'">
                        <span class="whitespace-nowrap font-medium">
                            {{ item.name }}
                        </span>
                    </div>
                </a>
            </nav>

            <div class="p-4 mt-auto border-t border-white/5 overflow-hidden transition-all duration-300"
                :class="uiStore.isSidebarOpen ? 'opacity-100' : 'opacity-0 max-h-0 py-0'" v-if="auth.user">
                <div class="rounded-lg p-3 overflow-hidden">
                    <p class="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">LEVEL <span
                            class="text-amber-500/70">{{
                                auth.user?.level }}</span>
                    </p>
                    <div class="flex items-center gap-2 text-emerald-400 font-mono text-sm md:text-lg">
                        <span>{{ game.xpProgress.current }} XP <span>/ {{ game.xpProgress.max }}</span></span>
                    </div>
                </div>
                <div class="rounded-lg p-3 overflow-hidden">
                    <p class="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Balance</p>
                    <div class="flex items-center gap-2 text-emerald-400 font-mono text-sm md:text-lg">
                        <span>⟠</span>
                        <span>{{ userBalance }}</span>
                    </div>
                </div>
            </div>
        </aside>
    </teleport>

</template>

<style scoped>
.glass-panel {
    background: rgba(15, 23, 42, 0.85);
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