<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { GameController } from '@/server/controllers/GameController'
import { FlowerRarity } from '@/shared/types'

interface FloradexEntry {
    id: string
    name: string
    slugName: string
    description: string
    rarity: FlowerRarity
    discovered: boolean
}

const floradex = ref<FloradexEntry[]>([])
const isLoading = ref(true)
const searchQuery = ref('')
const sortOption = ref<'RARITY_DESC' | 'RARITY_ASC' | 'NAME_ASC' | 'DISCOVERED'>('RARITY_DESC')

// Rarity Weight for Sorting
const RARITY_WEIGHT: Record<string, number> = {
    'LEGENDARY': 5,
    'EPIC': 4,
    'RARE': 3,
    'UNCOMMON': 2,
    'COMMON': 1
}

const stats = computed(() => {
    const total = floradex.value.length
    const found = floradex.value.filter(f => f.discovered).length
    return { total, found, percent: total > 0 ? Math.round((found / total) * 100) : 0 }
})

const processedFloradex = computed(() => {
    let list = [...floradex.value]

    if (searchQuery.value) {
        const q = searchQuery.value.toLowerCase()
        list = list.filter(f => f.name.toLowerCase().includes(q))
    }

    return list.sort((a, b) => {
        switch (sortOption.value) {
            case 'NAME_ASC':
                return a.name.localeCompare(b.name)

            case 'RARITY_ASC':
                return (RARITY_WEIGHT[a.rarity] - RARITY_WEIGHT[b.rarity]) || a.name.localeCompare(b.name)

            case 'RARITY_DESC':
                return (RARITY_WEIGHT[b.rarity] - RARITY_WEIGHT[a.rarity]) || a.name.localeCompare(b.name)

            case 'DISCOVERED':
                if (a.discovered === b.discovered) {
                    return (RARITY_WEIGHT[b.rarity] - RARITY_WEIGHT[a.rarity])
                }
                return a.discovered ? -1 : 1

            default: return 0
        }
    })
})

const fetchFloradex = async () => {
    isLoading.value = true
    try {
        floradex.value = await GameController.getFloradex()
    } catch (e) {
        console.error(e)
    } finally {
        isLoading.value = false
    }
}

onMounted(fetchFloradex)

// Helper for Rarity Colors
const getRarityColor = (rarity: FlowerRarity) => {
    const colors: Record<string, string> = {
        'COMMON': 'text-slate-400 border-slate-700',
        'UNCOMMON': 'text-emerald-400 border-emerald-500/50',
        'RARE': 'text-blue-400 border-blue-500/50',
        'EPIC': 'text-purple-400 border-purple-500/50',
        'LEGENDARY': 'text-amber-400 border-amber-500/50'
    }
    return colors[rarity] || colors['COMMON']
}

const getRarityBg = (rarity: FlowerRarity) => {
    const colors: Record<string, string> = {
        'COMMON': 'bg-slate-800/50',
        'UNCOMMON': 'bg-emerald-900/20',
        'RARE': 'bg-blue-900/20',
        'EPIC': 'bg-purple-900/20',
        'LEGENDARY': 'bg-amber-900/20'
    }
    return colors[rarity] || 'bg-slate-800/50'
}
</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 p-6 pb-20">

        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row items-end lg:items-center justify-between mb-8 gap-6">
                <div class="w-full lg:w-auto ml-5">
                    <h1
                        class="text-4xl font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-3">
                        Floradex
                    </h1>
                    <p class="text-slate-400 flex justify-center lg:justify-start">Track your botanical discoveries.</p>
                </div>

                <div
                    class="w-full lg:w-auto flex flex-col sm:flex-row gap-4 bg-slate-900/80 p-2 rounded-xl border border-slate-800 backdrop-blur-sm">
                    <div class="relative flex-1 sm:w-100">
                        <span class="absolute left-3 top-2.5 text-slate-500 text-xs">🔍</span>
                        <input v-model="searchQuery" type="text" placeholder="Search species..."
                            class="input input-sm w-full min-w-20 bg-slate-950 border-slate-700 focus:border-emerald-500 text-slate-200" />
                    </div>

                    <select v-model="sortOption"
                        class="select select-sm bg-slate-950 border-slate-700 text-slate-200 focus:border-emerald-500">
                        <option value="RARITY_DESC">Rarity (High to Low)</option>
                        <option value="RARITY_ASC">Rarity (Low to High)</option>
                        <option value="NAME_ASC">Name (A-Z)</option>
                        <option value="DISCOVERED">Discovered First</option>
                    </select>
                </div>
            </div>

            <div class="bg-slate-900/50 p-4 rounded-xl border border-slate-800 w-full mb-8">
                <div class="flex justify-between text-sm mb-2">
                    <span class="text-slate-400 font-medium">Collection Progress</span>
                    <span class="text-emerald-400 font-bold font-mono">{{ stats.found }} / {{ stats.total }}</span>
                </div>
                <div class="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-1000 ease-out"
                        :style="{ width: `${stats.percent}%` }"></div>
                </div>
            </div>

            <div v-if="isLoading" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                <div v-for="i in 10" :key="i" class="h-64 bg-slate-900 rounded-xl animate-pulse"></div>
            </div>

            <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                <div v-for="flower in processedFloradex" :key="flower.id"
                    class="group relative bg-slate-900 rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    :class="flower.discovered ? getRarityBg(flower.rarity) + ' ' + getRarityColor(flower.rarity) : 'border-slate-800 bg-slate-900'">

                    <div v-if="flower.discovered"
                        class="absolute top-3 right-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur border border-white/10 shadow-sm">
                        {{ flower.rarity }}
                    </div>

                    <div class="aspect-square relative p-6 flex items-center justify-center bg-slate-950/30">
                        <img :src="GameController.getFlowerAssetUrl(flower.slugName, 'MATURE', 'sprite')"
                            class="w-full h-full object-contain transition-all duration-500"
                            :class="flower.discovered
                                ? 'drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] group-hover:scale-110'
                                : 'brightness-0 opacity-20 grayscale blur-[2px] group-hover:blur-0 group-hover:opacity-40'" />

                        <div v-if="!flower.discovered"
                            class="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div
                                class="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur flex items-center justify-center text-slate-500 border border-slate-700">
                                🔒
                            </div>
                        </div>
                    </div>

                    <div class="p-4 border-t border-white/5">
                        <div v-if="flower.discovered">
                            <h3 class="font-bold text-white truncate">{{ flower.name }}</h3>
                            <p class="text-xs text-white/50 line-clamp-2 mt-1">{{ flower.description }}</p>
                        </div>
                        <div v-else>
                            <h3 class="font-bold text-slate-600">Unknown Species</h3>
                            <p class="text-xs text-slate-700 mt-1">Discover this flower to unlock its data.</p>
                        </div>
                    </div>
                </div>

                <div v-if="!searchQuery"
                    class="relative bg-slate-950 rounded-xl border border-slate-800 border-dashed flex flex-col items-center justify-center text-center p-6 group cursor-help overflow-hidden min-h-[250px]">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    </div>

                    <div class="relative z-10 transform transition-transform group-hover:scale-110 duration-500">
                        <div
                            class="text-6xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity filter blur-[1px] group-hover:blur-0">
                            🧬
                        </div>
                    </div>

                    <div class="relative z-10">
                        <h3 class="font-bold text-slate-500 group-hover:text-purple-400 transition-colors">Secret
                            Variations</h3>
                        <p class="text-xs text-slate-600 mt-2 group-hover:text-slate-400 transition-colors">
                            Rare mutations & event exclusives hide in the shadows.
                        </p>
                    </div>

                    <div
                        class="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-500/30 transition-all">
                    </div>
                </div>

                <div v-if="processedFloradex.length === 0 && searchQuery"
                    class="col-span-full py-12 text-center text-slate-500 italic">
                    No flowers found matching "{{ searchQuery }}"
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.brightness-0 {
    filter: brightness(0);
}
</style>