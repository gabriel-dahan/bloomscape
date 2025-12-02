<script setup lang="ts">
import { useUIStore } from '@/stores/ui';

const uiStore = useUIStore();
</script>

<template>
    <div class="absolute top-0 left-0 w-full p-4 pointer-events-none z-20 flex justify-center md:justify-end md:pr-8">

        <!-- Mobile Hamburger (Visible uniquement sur mobile) -->
        <button
            class="btn btn-circle btn-ghost glass absolute top-4 left-4 pointer-events-auto md:hidden text-emerald-400"
            @click="uiStore.toggleSidebar">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
        </button>

        <!-- Floating HUD Capsule -->
        <div
            class="pointer-events-auto glass-panel rounded-full px-6 py-2 flex items-center gap-6 shadow-2xl shadow-black/40 mt-12 md:mt-2">

            <!-- Location Data -->
            <div class="hidden sm:flex flex-col text-right">
                <span class="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Sector</span>
                <span class="text-sm font-bold text-gray-200">Alpha-One</span>
            </div>

            <div class="h-8 w-px bg-white/10 hidden sm:block"></div>

            <!-- Actions -->
            <div class="flex items-center gap-2">
                <div class="tooltip tooltip-bottom" data-tip="Messages">
                    <button class="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-white hover:bg-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="h-8 w-px bg-white/10"></div>

            <!-- User Profile -->
            <div class="flex items-center gap-3 cursor-pointer group">
                <div class="text-right hidden md:block">
                    <div class="text-xs font-bold text-gray-200 group-hover:text-emerald-400 transition-colors">
                        Commander</div>
                    <div class="text-[10px] text-gray-500">Level 42</div>
                </div>
                <div class="avatar online">
                    <div class="w-9 rounded-full ring ring-emerald-500 ring-offset-slate-900 ring-offset-2">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bloom" alt="Avatar" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.glass-panel {
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>