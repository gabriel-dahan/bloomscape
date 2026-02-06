<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useGameStore } from '@/stores/game'
import { router } from '@/routes'
import { LEVEL_REWARDS, type LevelReward } from '@/server/ext'
import PixelImageViewer from '@/components/icons/PixelImageViewer.vue'

const auth = useAuthStore()
const game = useGameStore()
const containerRef = ref<HTMLElement | null>(null)

const sortedRewards = computed(() => {
    return [...LEVEL_REWARDS].sort((a, b) => a.level - b.level)
})

const currentLevel = computed(() => auth.user?.level || 1)

function getStatus(level: number) {
    if (level < currentLevel.value) return 'completed'
    if (level === currentLevel.value) return 'current'
    return 'locked'
}

onMounted(async () => {
    await nextTick()
    if (containerRef.value) {
        const currentEl = containerRef.value.querySelector('.level-node-current')
        if (currentEl) {
            currentEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }
})

const getColorClasses = (reward: LevelReward, status: string) => {
    const base = `bg-${reward.color}-500`
    const glow = `shadow-${reward.color}-500/50`

    if (status === 'locked') return 'bg-slate-900 border-slate-800 text-slate-600 grayscale'
    if (status === 'current') return `${base} text-white ring-4 ring-${reward.color}-500/30 ${glow} shadow-xl scale-[1.02]`
    return 'bg-slate-800 text-slate-300 border-slate-600' // Completed
}
</script>

<template>
    <div class="w-screen h-full flex flex-col bg-slate-950 relative overflow-hidden font-sans">

        <div class="absolute inset-0 pointer-events-none z-0">
            <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
            <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
        </div>

        <div
            class="sticky z-1 bg-slate-925 backdrop-blur-xl border-b border-white/5 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
            <div class="flex items-center gap-4 w-full md:w-auto">
                <div class="relative group">
                    <div
                        class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-2xl font-black text-white shadow-lg group-hover:scale-105 transition-transform">
                        {{ currentLevel }}
                    </div>
                    <div
                        class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm border border-emerald-400/50">
                        Level
                    </div>
                </div>
                <div>
                    <h1 class="text-xl md:text-2xl font-bold text-white tracking-tight">Level Road</h1>
                    <p class="text-slate-400 text-xs md:text-sm">Rewards & Unlocks</p>
                </div>
            </div>

            <div class="w-full md:max-w-md flex flex-col gap-1.5">
                <div class="flex justify-between text-xs font-bold px-1">
                    <span class="text-emerald-400">{{ game.xpProgress.current }} XP</span>
                    <span class="text-slate-500">{{ game.xpProgress.max }} XP</span>
                </div>
                <div
                    class="w-full bg-slate-950/50 rounded-full h-3 md:h-4 overflow-hidden border border-white/5 relative">
                    <div class="h-full bg-gradient-to-r from-emerald-600 to-teal-400 relative transition-all duration-700 ease-out"
                        :style="{ width: `${game.xpProgress.percent}%` }">
                        <div class="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                    </div>
                </div>
            </div>
        </div>

        <div ref="containerRef" class="flex-1 overflow-y-auto custom-scrollbar relative z-0 p-4 md:p-8 scroll-smooth">
            <div class="max-w-4xl mx-auto relative min-h-full pb-32">

                <div class="absolute top-0 bottom-0 w-1 bg-slate-800 rounded-full
                            left-8 md:left-1/2 md:-ml-0.5 transition-all duration-300">
                </div>

                <div v-for="(reward, index) in sortedRewards" :key="reward.level"
                    class="relative mb-12 md:mb-24 group transition-all duration-500"
                    :class="{ 'level-node-current': getStatus(reward.level) === 'current' }">

                    <div class="flex items-center w-full" :class="[
                        'md:justify-center',
                        (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')
                    ]">

                        <div class="flex-1 pl-20 md:pl-0 md:w-[45%] md:flex-none relative z-10">

                            <div class="hidden md:block absolute top-1/2 h-0.5 bg-slate-800 -z-10 w-12"
                                :class="index % 2 === 0 ? '-left-12' : '-right-12'">
                            </div>

                            <div class="relative p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 group-hover:-translate-y-1 group-hover:shadow-2xl"
                                :class="getColorClasses(reward, getStatus(reward.level))">

                                <div
                                    class="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center text-2xl shrink-0 shadow-inner">
                                    <PixelImageViewer :src="reward.icon" :class="{
                                        'grayscale opacity-50': getStatus(reward.level) === 'locked'
                                    }" />
                                </div>

                                <div class="min-w-0">
                                    <div class="flex items-center gap-2 mb-1">
                                        <span
                                            class="text-[10px] uppercase font-bold tracking-wider opacity-70 border border-current px-1.5 rounded">
                                            {{ reward.type }}
                                        </span>
                                        <span v-if="reward.amount"
                                            class="text-xs font-mono opacity-90 font-bold bg-white/10 px-1.5 rounded">
                                            x{{ reward.amount }}
                                        </span>
                                    </div>
                                    <h3 class="font-bold text-base md:text-lg leading-tight truncate">{{ reward.title }}
                                    </h3>
                                    <p class="text-xs opacity-70 mt-1 leading-relaxed line-clamp-2">{{
                                        reward.description }}</p>
                                </div>

                                <div v-if="getStatus(reward.level) === 'locked'"
                                    class="absolute top-4 right-4 opacity-30">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-5 h-5">
                                        <path fill-rule="evenodd"
                                            d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="hidden md:block w-24"></div>

                        <div class="absolute
                                    left-8 md:left-1/2 
                                    -ml-4 md:-ml-6
                                    w-8 h-8 md:w-12 md:h-12 
                                    rounded-full border-[1px] md:border-2 z-20 
                                    flex items-center justify-center 
                                    font-bold text-xs md:text-sm 
                                    transition-all duration-300 shadow-md bg-slate-900" :class="[
                                        getStatus(reward.level) === 'completed' ? 'border-emerald-500 text-emerald-400' :
                                            getStatus(reward.level) === 'current' ? 'bg-emerald-500 border-white text-white shadow-[0_0_20px_rgba(16,185,129,0.6)] scale-125' :
                                                'border-slate-700 text-slate-600'
                                    ]">

                            <span v-if="getStatus(reward.level) === 'completed'">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-4 h-4 md:w-5 md:h-5">
                                    <path fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span v-else>{{ reward.level }}</span>

                            <div class="md:hidden absolute top-1/2 left-full w-8 h-0.5 bg-slate-800 -z-10"
                                :class="getStatus(reward.level) === 'current' ? 'bg-emerald-500/50' : ''">
                            </div>
                        </div>

                        <div class="hidden md:block flex-1 md:w-[45%]"></div>

                    </div>
                </div>

                <div class="text-center mt-20 opacity-50 flex flex-col items-center gap-2">
                    <div class="w-1 h-16 bg-gradient-to-b from-slate-800 to-transparent"></div>
                    <span class="text-2xl">🌱</span>
                    <p class="text-sm text-slate-500 font-medium">Keep growing to reveal more...</p>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

/* Scrollbar Styling */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
</style>