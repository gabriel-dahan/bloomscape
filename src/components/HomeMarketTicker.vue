<script setup lang="ts">

import type { MarketTickerItem } from '@/server/controllers/MarketController'

defineProps<{
    items: MarketTickerItem[]
}>()
</script>

<template>
    <div class="w-full bg-slate-900/50 border-y border-slate-800 overflow-hidden py-3 backdrop-blur-sm relative z-20">
        <div class="flex gap-12 animate-marquee whitespace-nowrap">
            <div v-for="(item, i) in [...items, ...items, ...items]" :key="i"
                class="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                <span class="font-bold text-slate-300 text-sm">{{ item.name }}</span>
                <span class="font-mono text-white text-sm">{{ item.price }} S</span>
                <span class="text-xs px-1.5 py-0.5 rounded font-mono"
                    :class="item.up ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'">
                    {{ item.change }}
                </span>
                <div class="w-1 h-1 rounded-full bg-slate-700 mx-2"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-marquee {
    animation: marquee 40s linear infinite;
}

.animate-marquee:hover {
    animation-play-state: paused;
}
</style>