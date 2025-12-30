<script setup lang="ts">
import { useGameStore } from '@/stores/game';

const { getMonthScore } = useGameStore();

</script>

<template>
    <div v-ui-block class="fixed top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none cursor-default w-fit px-2">
        <div
            class="bg-slate-900/80 backdrop-blur-md border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)] rounded-full px-6 py-2 flex items-center justify-between gap-4 pointer-events-auto transition-all duration-300 hover:scale-105 hover:bg-slate-800/90 hover:border-amber-500/60">

            <div class="flex items-center gap-3">
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase tracking-widest text-amber-200/60 font-bold leading-none">Island
                        Score</span>
                    <span
                        class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-400 font-mono tracking-tight leading-none mt-1">
                        {{ getMonthScore().toLocaleString() }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>