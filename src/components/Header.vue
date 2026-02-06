<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';
import { useAuthModal } from './auth/logic/useAuthModal';
import { RouterLink, useRouter } from 'vue-router';
import { remult } from 'remult';
import { useAuthStore } from '@/stores/auth';
import { useChatStore } from '@/stores/chat';
import NotificationDropdown from './notifications/NotificationDropdown.vue';

// --- Types ---
interface MenuLink {
    name: string;
    path?: string; // Optional if it has children
    children?: MenuLink[];
    btnClass?: string;
}

const router = useRouter()
const isMenuOpen = ref(false)
// Track which mobile sub-menu is open
const openMobileSubmenu = ref<string | null>(null);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    openMobileSubmenu.value = null; // Reset mobile submenus on close
}

const toggleMobileSubmenu = (name: string) => {
    if (openMobileSubmenu.value === name) {
        openMobileSubmenu.value = null;
    } else {
        openMobileSubmenu.value = name;
    }
}

const handleLinkClick = (path?: string) => {
    if (!path) return;
    isMenuOpen.value = false;
    router.push(path);
}

// --- Menu Configuration ---
// Updated structure to support nesting
const menuLinks: MenuLink[] = [
    {
        name: 'Community',
        children: [
            { name: 'Leaderboard', path: ROUTES.LEADERBOARD.path },
            { name: 'Wiki', path: ROUTES.WIKI.path },
        ]
    },
    {
        name: 'Game',
        children: [
            { name: 'Marketplace', path: ROUTES.MARKET.path },
            { name: 'Inventory', path: ROUTES.INVENTORY.path },
            { name: 'FloraDex', path: ROUTES.FLORADEX.path },
            { name: 'Rewards Road', path: ROUTES.REWARDS_ROAD.path }
        ]
    },
    {
        name: 'Store',
        path: ROUTES.STORE.path,
        btnClass: 'text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400'
    }
]

const chat = useChatStore()
const auth = useAuthStore()

onMounted(async () => {
    await auth.fetchSessionUser()
})
</script>

<template>
    <nav class="sticky top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

            <button class="flex items-center gap-2 cursor-pointer z-50" @click="handleLinkClick(ROUTES.HOME.path)">
                <div>
                    <img src="/bloomscape_logo.png" alt="Logo" width="45" height="45" />
                </div>
                <span class="font-bold tracking-wide w-40 hidden phone:block">
                    <img src="/bloomscape_text.png" alt="BloomScape">
                </span>
            </button>

            <div class="hidden md:flex gap-8 text-sm font-medium text-slate-400 items-center">
                <template v-for="link in menuLinks" :key="link.name">

                    <RouterLink v-if="!link.children" :to="link.path!" class="hover:text-white transition-colors"
                        :class="link.btnClass">
                        {{ link.name }}
                    </RouterLink>

                    <div v-else class="dropdown dropdown-hover dropdown-bottom dropdown-end">
                        <label tabindex="0"
                            class="group flex items-center gap-1 cursor-pointer hover:text-white transition-colors py-4">
                            {{ link.name }}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-3 h-3 group-hover:rotate-180 transition-transform">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </label>
                        <ul tabindex="0"
                            class="dropdown-content z-[1] menu p-2 shadow-xl bg-slate-800 rounded-lg w-48 border border-slate-700">
                            <li v-for="child in link.children" :key="child.name">
                                <RouterLink :to="child.path!"
                                    class="text-slate-300 hover:text-white hover:bg-slate-700/50"
                                    :class="child.btnClass">
                                    {{ child.name }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>

                </template>
            </div>

            <div class="flex items-center gap-4">

                <NotificationDropdown />

                <div v-if="auth.user" class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar online placeholder">
                        <div class="w-8 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
                            <img :src="`https://ui-avatars.com/api/?name=${auth.user.tag}&background=10b981&color=fff`"
                                :alt="auth.user.tag" />
                        </div>
                    </label>

                    <ul tabindex="0"
                        class="mt-3 p-2 shadow-lg menu menu-compact dropdown-content bg-slate-800 rounded-box w-52 border border-slate-700 text-slate-200">
                        <li class="menu-title">
                            <span class="text-emerald-400">{{ auth.user.tag }}</span>
                        </li>
                        <li>
                            <RouterLink class="justify-between" :to="ROUTES.CURRENT_USER_PROFILE.path">
                                Profile
                            </RouterLink>
                        </li>

                        <li>
                            <button class="justify-between" @click="chat.toggle">
                                Messages
                            </button>
                        </li>

                        <li v-if="remult.isAllowed('admin')">
                            <RouterLink :to="ROUTES.ADMIN_MANAGER.path">Admin Panel</RouterLink>
                        </li>

                        <div class="divider my-0"></div>

                        <li><a @click="router.push(ROUTES.LOGOUT.path)"
                                class="text-red-400 hover:text-red-300">Logout</a></li>
                    </ul>
                </div>

                <button v-else class="btn btn-sm btn-ghost text-slate-300" @click="() => {
                    const authModal = useAuthModal()
                    authModal.openAuthModal('login')
                }">Login</button>

                <button
                    class="btn btn-sm bg-emerald-500 hover:bg-emerald-400 border-none text-slate-900 font-bold px-6 shadow-lg shadow-emerald-500/20"
                    @click="router.push(ROUTES.LAND.path)">
                    Play
                </button>

                <button @click="toggleMenu" class="md:hidden btn btn-square btn-ghost btn-sm text-slate-300 bg-none">
                    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <transition enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform -translate-y-4 opacity-0">

            <div v-if="isMenuOpen"
                class="md:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
                <div class="flex flex-col p-4 space-y-2 text-slate-300 font-medium">

                    <template v-for="link in menuLinks" :key="link.name">
                        <RouterLink v-if="!link.children" :to="link.path!" :class="link.btnClass"
                            class="block py-3 px-4 rounded-lg hover:bg-slate-800 hover:text-emerald-400 transition-colors"
                            @click="handleLinkClick()">
                            {{ link.name }}
                        </RouterLink>

                        <div v-else class="rounded-lg overflow-hidden transition-colors"
                            :class="openMobileSubmenu === link.name ? 'bg-slate-800/50' : 'hover:bg-slate-800/30'">
                            <button @click="toggleMobileSubmenu(link.name)"
                                class="w-full flex items-center justify-between py-3 px-4 text-left">
                                <span :class="openMobileSubmenu === link.name ? 'text-emerald-400' : ''">{{ link.name
                                    }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="w-4 h-4 transition-transform duration-200"
                                    :class="openMobileSubmenu === link.name ? 'rotate-180 text-emerald-400' : 'text-slate-500'">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            <transition enter-active-class="transition-all duration-300 ease-in-out"
                                enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-40 opacity-100"
                                leave-active-class="transition-all duration-200 ease-in-out"
                                leave-from-class="max-h-40 opacity-100" leave-to-class="max-h-0 opacity-0">

                                <div v-show="openMobileSubmenu === link.name"
                                    class="bg-slate-900/50 border-t border-slate-700/50">
                                    <RouterLink v-for="child in link.children" :key="child.name" :to="child.path!"
                                        :class="link.btnClass"
                                        class="block py-3 pl-8 pr-4 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 border-l-2 border-transparent hover:border-emerald-500/50 transition-colors"
                                        @click="handleLinkClick()">
                                        {{ child.name }}
                                    </RouterLink>
                                </div>
                            </transition>
                        </div>
                    </template>

                </div>
            </div>
        </transition>
    </nav>
</template>