<script setup lang="ts">
import { router } from '@/routes';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';
import { useAuthModal } from './auth/logic/useAuthModal';

</script>

<template>
    <nav class="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div class="flex items-center gap-2 cursor-pointer">
                <div>
                    <img src="/bloomscape_logo.png" alt="Logo" width="50" height="50" />
                </div>
                <span class="font-bold tracking-wide w-40">
                    <img src="/bloomscape_text.png" alt="BloomScape">
                </span>
            </div>

            <div class="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                <a href="#" class="hover:text-white transition-colors">Marketplace</a>
                <a href="#" class="hover:text-white transition-colors">Wiki</a>
                <a href="#" class="hover:text-white transition-colors">Leaderboard</a>
            </div>

            <div class="flex gap-4">
                <button class="btn btn-sm btn-ghost text-slate-300 hover:text-bloom-dark" @click="() => {
                    const authModal = useAuthModal()
                    authModal.openAuthModal('login')
                }">Login</button>
                <button
                    class="btn btn-sm bg-emerald-500 hover:bg-emerald-400 border-none text-slate-900 font-bold px-6 shadow-lg shadow-emerald-500/20"
                    @click="router.push(ROUTES.LAND)">
                    Play Now
                </button>
            </div>
        </div>
    </nav>
</template>
