<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTimeStore } from '@/stores/time'
import { type Season } from '@/shared/gameTime'

const timeStore = useTimeStore()
const showTooltip = ref(false) // State to control tooltip visibility

const formattedTime = computed(() => {
    const h = timeStore.now.hour.toString().padStart(2, '0')
    const m = timeStore.now.minute.toString().padStart(2, '0')
    return `${h}:${m}`
})

function getSeasonColor(season: Season): string {
    switch (season) {
        case 'Spring': return 'text-emerald-400'
        case 'Summer': return 'text-amber-400'
        case 'Autumn': return 'text-orange-400'
        case 'Winter': return 'text-cyan-400'
        default: return 'text-white'
    }
}
</script>

<template>
    <div class="fixed top-20 left-5 sm:top-auto sm:bottom-6 sm:left-10 md:left-40 z-20">

        <div @click="showTooltip = !showTooltip" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
            class="relative bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-xl flex flex-col items-end cursor-pointer pointer-events-auto transition-colors hover:bg-slate-900/80">

            <div class="absolute left-0 w-max transition-opacity duration-300 pointer-events-none
               top-full mt-3 sm:top-auto sm:bottom-full sm:mb-3 sm:mt-0"
                :class="showTooltip ? 'opacity-100' : 'opacity-0'">
                <div
                    class="bg-slate-950/90 text-white text-xs rounded-xl px-4 py-3 border border-white/20 shadow-2xl backdrop-blur-sm">
                    <div class="font-bold text-sm text-slate-100 whitespace-nowrap">
                        {{ timeStore.now.dayOfWeek }}, {{ timeStore.now.monthName }} {{ timeStore.now.dayOfMonth }}
                    </div>

                    <div class="flex items-center gap-2 mt-1 font-medium">
                        <span class="text-slate-400">Year {{ timeStore.now.year }}</span>
                        <span class="w-1 h-1 rounded-full bg-slate-600"></span>
                        <span :class="getSeasonColor(timeStore.now.season)" class="uppercase tracking-wide text-[10px]">
                            {{ timeStore.now.season }}
                        </span>
                    </div>
                </div>
            </div>

            <span class="sm:text-2xl font-mono font-bold text-white tracking-widest drop-shadow-md">
                {{ formattedTime }}
            </span>
            <span class="text-[10px] uppercase font-bold tracking-wider hidden sm:block"
                :class="timeStore.now.isDay ? 'text-yellow-400' : 'text-blue-400'">
                {{ timeStore.now.isDay ? 'DAY TIME' : 'NIGHT TIME' }}
            </span>
        </div>
    </div>
</template>