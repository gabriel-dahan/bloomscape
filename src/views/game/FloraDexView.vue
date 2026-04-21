<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { GameController } from '@/server/controllers/GameController'
import { DiscoverySource, FlowerAvailability, FlowerRarity } from '@/shared/types'
import FlowerImage from '@/components/FlowerImage.vue'
import PixelatedImage from '@/components/icons/PixelImageViewer.vue'

// Updated Interface
interface FloradexEntry {
    id: string
    name: string
    slugName: string
    description: string
    rarity: FlowerRarity
    discovered: boolean
    discoveryDate?: string
    discoverySource?: typeof DiscoverySource[keyof typeof DiscoverySource]
    availability?: FlowerAvailability
    initialQuality?: number
    family?: { id: string, name: string, color?: string }
    attributes?: any
}

const floradex = ref<FloradexEntry[]>([])
const isLoading = ref(true)
const searchQuery = ref('')
const sortOption = ref<'RARITY_DESC' | 'RARITY_ASC' | 'NAME_ASC' | 'DISCOVERED' | 'DATE_DESC'>('RARITY_DESC')
const groupByFamily = ref(false)
const collapsedFamilies = ref<Set<string>>(new Set(JSON.parse(localStorage.getItem('floradex_collapsed') || '[]')))

const toggleFamily = (name: string) => {
    if (collapsedFamilies.value.has(name)) {
        collapsedFamilies.value.delete(name)
    } else {
        collapsedFamilies.value.add(name)
    }
    localStorage.setItem('floradex_collapsed', JSON.stringify([...collapsedFamilies.value]))
}

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

    list = list.filter(f => {
        if (f.availability === 'EVENT_ONLY' && !f.discovered) return false
        return true
    })

    return list.sort((a, b) => {
        switch (sortOption.value) {
            case 'NAME_ASC':
                return a.name.localeCompare(b.name)
            case 'RARITY_ASC':
                return (RARITY_WEIGHT[a.rarity] - RARITY_WEIGHT[b.rarity]) || a.name.localeCompare(b.name)
            case 'RARITY_DESC':
                return (RARITY_WEIGHT[b.rarity] - RARITY_WEIGHT[a.rarity]) || a.name.localeCompare(b.name)
            case 'DISCOVERED':
                if (a.discovered === b.discovered) return 0;
                return a.discovered ? -1 : 1;
            case 'DATE_DESC':
                const dateA = a.discoveryDate ? new Date(a.discoveryDate).getTime() : 0;
                const dateB = b.discoveryDate ? new Date(b.discoveryDate).getTime() : 0;
                return dateB - dateA;
            default: return 0
        }
    })
})

const groupedFloradex = computed(() => {
    if (!groupByFamily.value) return []

    const groups: Record<string, FloradexEntry[]> = {}
    processedFloradex.value.forEach(f => {
        const familyName = f.family?.name || 'No family'
        if (!groups[familyName]) groups[familyName] = []
        groups[familyName].push(f)
    })

    return Object.keys(groups).sort((a, b) => {
        if (a === 'No family') return 1;
        if (b === 'No family') return -1;
        return a.localeCompare(b);
    }).map(key => {
        const firstWithFamily = groups[key].find(f => f.family);
        const color = firstWithFamily?.family?.color || '#334155';
        const totalCount = groups[key].length;
        const discoveredCount = groups[key].filter(f => f.discovered).length;

        return {
            name: key,
            items: groups[key],
            color,
            totalCount,
            discoveredCount
        }
    })
})

const fetchFloradex = async () => {
    isLoading.value = true
    try {
        floradex.value = await GameController.getFloradex() as any
    } catch (e) {
        console.error(e)
    } finally {
        isLoading.value = false
    }
}

onMounted(fetchFloradex)

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

// Helper to format source nicely
const getSourceLabel = (source?: string) => {
    switch (source) {
        case 'WILD': return 'Found in Wild';
        case 'BREEDING': return 'Cross-Bred';
        case 'MARKET': return 'Bought';
        case 'GIFT': return 'Gifted';
        default: return 'Unknown';
    }
}

const getAvailabilityColor = (availability?: string) => {
    switch (availability) {
        case 'WILD': return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
        case 'BREEDING_ONLY': return 'text-purple-400 border-purple-500/30 bg-purple-500/10'
        case 'EVENT_ONLY': return 'text-amber-400 border-amber-500/30 bg-amber-500/10'
        case 'SHOP_ONLY': return 'text-blue-400 border-blue-500/30 bg-blue-500/10'
        default: return 'text-slate-400 border-slate-700 bg-slate-800/50'
    }
}

const getAvailabilityLabel = (availability?: string) => {
    switch (availability) {
        case 'WILD': return 'Wild'
        case 'BREEDING_ONLY': return 'Breeding'
        case 'EVENT_ONLY': return 'Event'
        case 'SHOP_ONLY': return 'Shop'
        default: return 'Unknown'
    }
}

const getAvailabilityDescription = (availability?: string) => {
    switch (availability) {
        case 'WILD': return 'Naturally occurring species. Can be found randomly during adventures or in the wild surroundings of your island.'
        case 'BREEDING_ONLY': return 'Hybrid species created through cross-pollination. These cannot be found in the wild and must be bred manually.'
        case 'SHOP_ONLY': return 'Exclusive species available for direct purchase. These are typically consistent stock in the BloomScape shop.'
        case 'EVENT_ONLY': return 'Rare species limited to special occasions or unique claim links. They do not appear in the wild or the regular shop.'
        default: return 'Source information for this species is currently unknown.'
    }
}
</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 p-6 pb-20">

        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row items-end lg:items-center justify-between mb-8 gap-6">
                <div class="w-full lg:w-auto ml-5">
                    <h1
                        class="page-title text-4xl font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-3">
                        FloraDex
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
                        <option value="DATE_DESC">Date Discovered</option>
                        <option value="DISCOVERED">Discovered Status</option>
                    </select>

                    <label
                        class="label cursor-pointer flex items-center gap-2 bg-slate-950 px-3 py-1 rounded-md border border-slate-700">
                        <span class="label-text text-slate-300 text-sm whitespace-nowrap">As families</span>
                        <input v-model="groupByFamily" type="checkbox"
                            class="checkbox checkbox-sm checkbox-primary border-slate-600" />
                    </label>
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

            <div v-else>

                <!-- Render when Group by Family is Active -->
                <div v-if="groupByFamily" class="space-y-12">
                    <div v-for="group in groupedFloradex" :key="group.name">
                        <h2 @click="toggleFamily(group.name)"
                            class="text-xl font-bold text-white mb-6 pb-2 border-b flex items-center gap-3 cursor-pointer select-none transition-all group/header h-12"
                            :style="{ borderColor: group.color + '44' }">
                            <span class="text-xl transition-transform duration-300"
                                :class="{ '-rotate-90 opacity-40': collapsedFamilies.has(group.name) }"
                                :style="{ color: group.color }">
                                ❖
                            </span>
                            <span class="flex-1 flex items-baseline gap-3">
                                {{ group.name }}
                                <span class="text-[10px] sm:text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/5"
                                    :style="{ color: group.color }">
                                    {{ group.discoveredCount }} / {{ group.totalCount }}
                                </span>
                            </span>
                            <span class="text-[10px] text-slate-500 uppercase tracking-widest opacity-0 group-hover/header:opacity-100 transition-opacity">
                                {{ collapsedFamilies.has(group.name) ? 'Expand' : 'Collapse' }}
                            </span>
                        </h2>

                        <div v-show="!collapsedFamilies.has(group.name)"
                            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 transition-all">
                            <div v-for="flower in group.items" :key="flower.id"
                                class="group relative bg-slate-900 rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                :class="flower.discovered ? getRarityBg(flower.rarity) + ' ' + getRarityColor(flower.rarity) : 'border-slate-800 bg-slate-900'">

                                <div v-if="flower.discovered"
                                    class="absolute top-3 right-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur border border-white/10 shadow-sm">
                                    {{ flower.rarity }}
                                </div>

                                <div
                                    class="aspect-square relative p-6 flex items-center justify-center bg-slate-950/30">
                                    <FlowerImage :slug="flower.slugName"
                                        :status="(flower.attributes as any)?.maxStatus || 'GROWING2'" type="icon"
                                        size="100%" class="transition-all duration-500"
                                        :class="flower.discovered
                                            ? 'drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] group-hover:scale-110'
                                            : 'brightness-0 opacity-20 grayscale blur-[2px] group-hover:blur-0 group-hover:opacity-40'" />

                                    <div v-if="!flower.discovered"
                                        class="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div
                                            class="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur flex items-center justify-center text-slate-500 border border-slate-700">
                                            <PixelatedImage src="/lock.png" width="20px" height="20px" class="opacity-80" />
                                        </div>
                                    </div>
                                </div>

                                <div class="p-4 border-t border-white/5 flex flex-col h-full">
                                    <div v-if="flower.discovered">
                                        <h3 class="font-bold text-white truncate">{{ flower.name }}</h3>
                                        <p class="text-xs text-white/50 line-clamp-2 mt-1 mb-2 min-h-[2.5em]">{{
                                            flower.description
                                        }}</p>

                                        <div class="mt-auto pt-2 border-t border-white/5 space-y-1">
                                            <div class="flex justify-between items-center text-[10px] text-slate-400">
                                                <span class="uppercase tracking-wider">Date</span>
                                                <span class="font-mono text-slate-200">
                                                    {{ flower.discoveryDate ? new
                                                        Date(flower.discoveryDate).toLocaleDateString() :
                                                        '-' }}
                                                </span>
                                            </div>
                                            <div class="flex justify-between items-center text-[10px] text-slate-400">
                                                <span class="uppercase tracking-wider">Source</span>
                                                <span class="text-emerald-400 font-bold">
                                                    {{ getSourceLabel(flower.discoverySource) }}
                                                </span>
                                            </div>
                                            <div class="flex justify-between items-center text-[10px] text-slate-400">
                                                <span class="uppercase tracking-wider">Availability</span>
                                                <div class="group/availability relative">
                                                    <span
                                                        class="px-1.5 py-0.5 rounded border leading-none font-bold text-[9px] uppercase tracking-tighter cursor-help transition-colors"
                                                        :class="getAvailabilityColor(flower.availability)">
                                                        {{ getAvailabilityLabel(flower.availability) }}
                                                    </span>
                                                    <!-- Tooltip -->
                                                    <div
                                                        class="absolute bottom-full right-0 mb-2 w-48 p-2 rounded-lg bg-slate-900 border border-slate-700 shadow-2xl backdrop-blur-md opacity-0 translate-y-1 group-hover/availability:opacity-100 group-hover/availability:translate-y-0 transition-all duration-200 pointer-events-none z-[100] text-[10px] text-slate-300 leading-normal font-normal normal-case tracking-normal">
                                                        {{ getAvailabilityDescription(flower.availability) }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <h3 class="font-bold text-slate-600">Unknown Species</h3>
                                        <p class="text-xs text-slate-700 mt-1">Discover this flower to unlock its data.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Render when Group by Family is NOT Active (Default flat list) -->
                <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                    <div v-for="flowerData in processedFloradex" :key="flowerData.id"
                        class="group relative bg-slate-900 rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        :class="flowerData.discovered ? getRarityBg(flowerData.rarity) + ' ' + getRarityColor(flowerData.rarity) : 'border-slate-800 bg-slate-900'">

                        <div v-if="flowerData.discovered"
                            class="absolute top-3 right-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur border border-white/10 shadow-sm">
                            {{ flowerData.rarity }}
                        </div>

                        <div class="aspect-square relative p-6 flex items-center justify-center bg-slate-950/30">
                            <FlowerImage :slug="flowerData.slugName"
                                :status="(flowerData.attributes as any)?.maxStatus || 'GROWING2'" type="icon"
                                size="100%" class="transition-all duration-500"
                                :class="flowerData.discovered
                                    ? 'drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] group-hover:scale-110'
                                    : 'brightness-0 opacity-20 grayscale blur-[2px] group-hover:blur-0 group-hover:opacity-40'" />

                            <div v-if="!flowerData.discovered"
                                class="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div
                                    class="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur flex items-center justify-center text-slate-500 border border-slate-700">
                                    <PixelatedImage src="/lock.png" width="20px" height="20px" class="opacity-80" />
                                </div>
                            </div>
                        </div>

                        <div class="p-4 border-t border-white/5 flex flex-col h-full">
                            <div v-if="flowerData.discovered">
                                <h3 class="font-bold text-white truncate">{{ flowerData.name }}</h3>
                                <p class="text-xs text-white/50 line-clamp-2 mt-1 mb-2 min-h-[2.5em]">{{
                                    flowerData.description
                                }}</p>

                                <div class="mt-auto pt-2 border-t border-white/5 space-y-1">
                                    <div class="flex justify-between items-center text-[10px] text-slate-400">
                                        <span class="uppercase tracking-wider">Date</span>
                                        <span class="font-mono text-slate-200">
                                            {{ flowerData.discoveryDate ? new
                                                Date(flowerData.discoveryDate!).toLocaleDateString() :
                                                '-' }}
                                        </span>
                                    </div>
                                    <div class="flex justify-between items-center text-[10px] text-slate-400">
                                        <span class="uppercase tracking-wider">Source</span>
                                        <span class="text-emerald-400 font-bold">
                                            {{ getSourceLabel(flowerData.discoverySource) }}
                                        </span>
                                    </div>
                                    <div class="flex justify-between items-center text-[10px] text-slate-400">
                                        <span class="uppercase tracking-wider">Availability</span>
                                        <div class="group/availability relative">
                                            <span
                                                class="px-1.5 py-0.5 rounded border leading-none font-bold text-[9px] uppercase tracking-tighter cursor-help transition-colors"
                                                :class="getAvailabilityColor(flowerData.availability)">
                                                {{ getAvailabilityLabel(flowerData.availability) }}
                                            </span>
                                            <!-- Tooltip -->
                                            <div
                                                class="absolute bottom-full right-0 mb-2 w-48 p-2 rounded-lg bg-slate-900 border border-slate-700 shadow-2xl backdrop-blur-md opacity-0 translate-y-1 group-hover/availability:opacity-100 group-hover/availability:translate-y-0 transition-all duration-200 pointer-events-none z-[100] text-[10px] text-slate-300 leading-normal font-normal normal-case tracking-normal">
                                                {{ getAvailabilityDescription(flowerData.availability) }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                class="mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                                <PixelatedImage src="/dna.png" width="96px" height="96px" class="mx-auto" />
                            </div>
                        </div>
                        <div class="relative z-10">
                            <h3 class="font-bold text-slate-500 group-hover:text-purple-400 transition-colors">Secret
                                Variations</h3>
                            <p class="text-xs text-slate-600 mt-2 group-hover:text-slate-400 transition-colors">
                                Rare mutations & event exclusives hide in the shadows.
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="(!groupByFamily && processedFloradex.length === 0 && searchQuery) || (groupByFamily && processedFloradex.length === 0 && searchQuery)"
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