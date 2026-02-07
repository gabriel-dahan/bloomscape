<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { GameController } from '@/server/controllers/GameController'
import { FlowerRarity, Tile, PreferredSeasons, FlowerDTO } from '@/shared';
import FlowerImage from '@/components/FlowerImage.vue';

const props = defineProps<{
    x: number,
    z: number,
    islandId: string
}>()

const tile = ref<Tile | null>(null)
const flower = ref<FlowerDTO | null>(null)
const availableSeeds = ref<FlowerDTO[]>([])

const isLoading = ref(false)
const isPlanting = ref(false)
const isHarvesting = ref(false)
const selectedSeedId = ref<string>('')
const activeTab = ref<'status' | 'info'>('status')
const errorMsg = ref('')

const growthProgress = ref(0)
let timer: any = null

const hasTile = computed(() => !!tile.value)
const hasFlower = computed(() => !!flower.value)

const GROWTH_STAGES = ['SEED', 'SPROUT1', 'SPROUT2', 'GROWING1', 'GROWING2', 'MATURE']

const currentStageIndex = computed(() => {
    if (!flower.value) return -1
    return GROWTH_STAGES.indexOf(flower.value.status as string)
})

const rarityColors: Record<string, string> = {
    [FlowerRarity.COMMON]: 'border-slate-400 text-slate-400 bg-slate-400/10',
    [FlowerRarity.UNCOMMON]: 'border-emerald-400 text-emerald-400 bg-emerald-400/10',
    [FlowerRarity.RARE]: 'border-blue-400 text-blue-400 bg-blue-400/10',
    [FlowerRarity.EPIC]: 'border-purple-400 text-purple-400 bg-purple-400/10',
    [FlowerRarity.LEGENDARY]: 'border-amber-400 text-amber-400 bg-amber-400/10 shadow-[0_0_15px_rgba(251,191,36,0.3)]',
}

const currentRarityColor = computed(() => {
    if (!flower.value?.species) return rarityColors['COMMON']
    return rarityColors[flower.value.species.rarity] || rarityColors['COMMON']
})

const waterStatus = computed(() => {
    if (!flower.value) return { label: 'Unknown', color: 'text-slate-500', bar: 'bg-slate-700' }
    const w = flower.value.waterLevel
    if (w > 80) return { label: 'Hydrated', color: 'text-blue-400', bar: 'progress-info' }
    if (w > 30) return { label: 'Thirsty', color: 'text-warning', bar: 'progress-warning' }
    return { label: 'Critical', color: 'text-error', bar: 'progress-error' }
})

const seasonDisplay = computed(() => {
    const s = flower.value?.species?.preferredSeason
    switch (s) {
        case PreferredSeasons.SPRING: return { label: 'Spring', color: 'text-pink-300' }
        case PreferredSeasons.SUMMER: return { label: 'Summer', color: 'text-yellow-300' }
        case PreferredSeasons.AUTUMN: return { label: 'Autumn', color: 'text-orange-300' }
        case PreferredSeasons.WINTER: return { label: 'Winter', color: 'text-cyan-300' }
        default: return { label: 'Any', color: 'text-slate-300' }
    }
})

const activeBuffs = computed(() => {
    if (!flower.value?.activeModifiers) return []
    const mods = flower.value.activeModifiers
    const list = []
    if (mods.growthSpeedMultiplier > 1) list.push({ label: 'Growth Surge', val: `+${Math.round((mods.growthSpeedMultiplier - 1) * 100)}% Speed`, color: 'text-emerald-400' })
    if (mods.waterRetention !== 1) {
        if (mods.waterRetention > 1) list.push({ label: 'Absorbent', val: `+${Math.round((mods.waterRetention - 1) * 100)}% Water Eff.`, color: 'text-blue-400' })
    }
    if (mods.xpMultiplier > 1) list.push({ label: 'Wisdom', val: `+${Math.round((mods.xpMultiplier - 1) * 100)}% XP`, color: 'text-purple-400' })
    if (mods.qualityBonus > 0) list.push({ label: 'Pristine', val: `+${mods.qualityBonus}% Quality`, color: 'text-yellow-400' })
    return list
})

const loadData = async () => {
    isLoading.value = true
    errorMsg.value = ''
    tile.value = null
    flower.value = null
    selectedSeedId.value = ''
    growthProgress.value = 0
    try {
        const data = await GameController.getTileData(props.x, props.z, props.islandId)
        if (!data) { errorMsg.value = "Land not owned."; return }
        tile.value = data.tile
        if (data.flower) {
            flower.value = data.flower
            startGrowthTimer()
        } else {
            availableSeeds.value = await GameController.getAvailableSeeds()
        }
    } catch (e: any) { errorMsg.value = e.message }
    finally { isLoading.value = false }
}

const handlePlant = async () => {
    if (!selectedSeedId.value || !tile.value) return
    isPlanting.value = true
    try { await GameController.plantSeed(tile.value.id, selectedSeedId.value); await loadData() }
    catch (e: any) { errorMsg.value = e.message }
    finally { isPlanting.value = false }
}

const handleWater = async () => {
    if (!tile.value || !flower.value) return
    try { const res = await GameController.waterFlower(tile.value.id); if (flower.value) flower.value.waterLevel = res.level }
    catch (e: any) { errorMsg.value = e.message }
}

const handleHarvest = async () => {
    if (!tile.value) return
    isHarvesting.value = true
    try {
        const res = await GameController.harvestFlower(tile.value.id)
        if (res.success) {
            alert(`Harvest Complete!\n+${res.rewards.xp} XP\n+${res.rewards.score} Score`)
            await loadData()
        }
    } catch (e: any) { errorMsg.value = e.message }
    finally { isHarvesting.value = false }
}

const calculateGrowth = () => {
    if (!flower.value?.species || !flower.value.plantedAt) return 0
    const start = new Date(flower.value.plantedAt).getTime()
    const now = new Date().getTime()
    const multiplier = flower.value.activeModifiers?.growthSpeedMultiplier || 1
    const baseDurationMs = flower.value.species.growthDuration * 1000
    const realDurationMs = baseDurationMs / multiplier
    growthProgress.value = Math.min(100, ((now - start) / realDurationMs) * 100)
}

const startGrowthTimer = () => {
    if (timer) clearInterval(timer)
    calculateGrowth()
    timer = setInterval(calculateGrowth, 1000)
}

watch(() => [props.x, props.z], loadData, { immediate: true })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<template>
    <div
        class="h-full flex flex-col bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-0 rounded-xl overflow-hidden shadow-2xl border border-slate-700/50">

        <div
            class="bg-slate-950/50 backdrop-blur-md p-3 border-b border-slate-800 flex justify-between items-center shrink-0">
            <div class="flex items-center gap-2">
                <div class="badge badge-neutral font-mono text-xs border-slate-700 bg-slate-800">X: {{ x }}</div>
                <div class="badge badge-neutral font-mono text-xs border-slate-700 bg-slate-800">Z: {{ z }}</div>
            </div>
            <div class="text-[10px] uppercase font-bold tracking-widest text-emerald-500/80">
                {{ isLoading ? 'SCANNING...' : (tile?.type || 'UNKNOWN') }}
            </div>
        </div>

        <div class="flex-1 overflow-y-auto p-4 relative scrollbar-thin scrollbar-thumb-slate-700 mb-5">

            <div v-if="isLoading"
                class="absolute inset-0 flex items-center justify-center bg-slate-900/90 z-20 backdrop-blur-sm">
                <div class="flex flex-col items-center gap-3">
                    <span class="loading loading-ring loading-lg text-emerald-500"></span>
                    <span class="text-xs text-emerald-500/50 font-mono animate-pulse">Analyzing Soil Data...</span>
                </div>
            </div>

            <div v-if="errorMsg" class="alert alert-error shadow-lg my-4 border-l-4 border-red-500">
                <div class="flex flex-col gap-1 w-full">
                    <div class="flex justify-between items-center w-full">
                        <span class="font-bold text-xs uppercase tracking-wider">Error</span>
                        <button @click="loadData" class="btn btn-xs btn-circle btn-ghost"><svg
                                xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg></button>
                    </div>
                    <span class="text-xs opacity-90">{{ errorMsg }}</span>
                </div>
            </div>

            <div v-else-if="hasTile && !hasFlower" class="flex flex-col h-full animate-in fade-in duration-500">
                <div
                    class="text-center py-6 shrink-0 bg-slate-800/30 rounded-xl border border-dashed border-slate-700 mb-4">
                    <div
                        class="w-20 h-20 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center border-4 border-slate-700 mb-3 shadow-inner">
                        <div class="w-12 h-12 text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-full h-full">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-lg font-bold text-slate-200">Fertile Soil</h3>
                    <p class="text-xs text-slate-400 mt-1">Ready for planting</p>
                </div>

                <div class="flex justify-between items-center mb-2 px-1">
                    <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Inventory Seeds</span>
                    <span
                        class="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-400 border border-slate-700">{{
                            availableSeeds.length }}</span>
                </div>

                <div class="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                    <div v-if="availableSeeds.length === 0"
                        class="flex flex-col items-center justify-center h-32 text-slate-600 bg-slate-900/50 rounded-lg border border-slate-800">
                        <span class="text-2xl mb-2">🎒</span>
                        <span class="text-xs">No seeds in inventory.</span>
                        <span class="text-[10px] mt-1 text-slate-500">Visit the Market to buy some!</span>
                    </div>

                    <div class="grid grid-cols-2 gap-3 pb-2">
                        <button v-for="seed in availableSeeds" :key="seed.id" @click="selectedSeedId = seed.id"
                            class="relative p-3 rounded-xl border text-left transition-all duration-200 group flex flex-col gap-2 h-full"
                            :class="selectedSeedId === seed.id ? 'bg-emerald-900/20 border-emerald-500/50 ring-1 ring-emerald-500/50' : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600'">

                            <div class="flex items-start justify-between w-full">
                                <FlowerImage :slug="seed.species?.slugName || ''" status="SEED" type="icon" size="32px"
                                    class="filter drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
                                <div class="badge badge-xs text-[9px] border-none font-bold"
                                    :class="seed.species ? rarityColors[seed.species.rarity].replace('bg-', 'text-').split(' ')[1] : 'text-slate-500'">
                                    {{ Math.round(seed.quality * 100) }}% Q
                                </div>
                            </div>

                            <div class="mt-auto">
                                <div class="font-bold text-xs text-slate-200 truncate leading-tight">{{
                                    seed.species?.name }}</div>
                                <div class="text-[10px] text-slate-500 truncate mt-0.5">{{ seed.species?.rarity }}</div>
                            </div>

                            <div v-if="selectedSeedId === seed.id"
                                class="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                            </div>
                        </button>
                    </div>
                </div>
                <div class="mt-auto pt-4 border-t border-slate-800/50 shrink-0">
                    <button @click="handlePlant" :disabled="!selectedSeedId || isPlanting"
                        class="btn btn-primary w-full shadow-lg shadow-emerald-900/20 border-t border-white/10 relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"
                            v-if="!isPlanting"></div>
                        <span v-if="isPlanting" class="loading loading-spinner loading-xs mr-2"></span>
                        {{ isPlanting ? 'Sowing Seeds...' : 'Confirm Planting' }}
                    </button>
                </div>
            </div>

            <div v-else-if="flower && flower.species"
                class="flex flex-col sm:flex-row h-full gap-6 animate-in zoom-in-95 duration-500">

                <div class="flex-1 flex flex-col h-full overflow-hidden">
                    <div
                        class="flex gap-4 items-center shrink-0 mb-4 bg-slate-900/50 p-3 rounded-2xl border border-slate-800">
                        <div
                            class="relative w-24 h-24 shrink-0 bg-gradient-to-br from-slate-800 to-black rounded-xl border border-slate-700 flex items-center justify-center overflow-hidden shadow-inner group cursor-help">

                            <div class="absolute inset-0 opacity-30 bg-radial-gradient blur-xl transition-opacity duration-700 group-hover:opacity-50"
                                :class="currentRarityColor"></div>

                            <FlowerImage :slug="flower.species.slugName" :status="flower.status" type="icon" size="80px"
                                class="drop-shadow-2xl z-10 group-hover:scale-110 transition-transform duration-500 ease-out" />

                            <div
                                class="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-black/80 to-transparent z-0">
                            </div>

                            <div v-if="flower.isShiny" class="absolute top-1 right-1">
                                <span class="relative flex h-2 w-2">
                                    <span
                                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                                </span>
                            </div>
                        </div>

                        <div class="flex-1 flex flex-col justify-center min-w-0">
                            <div class="flex items-center gap-2 mb-1">
                                <span
                                    class="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border bg-slate-900/80 backdrop-blur-md tracking-wider"
                                    :class="currentRarityColor">{{ flower.species.rarity }}</span>
                                <span v-if="flower.isShiny"
                                    class="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border bg-yellow-500/10 border-yellow-500/30 text-yellow-300">Shiny</span>
                            </div>

                            <h2 class="text-xl font-black text-white tracking-tight leading-none break-words truncate"
                                :title="flower.species.name">{{ flower.species.name }}</h2>

                            <div class="flex items-center gap-3 mt-2 text-xs">
                                <div class="flex flex-col">
                                    <span class="text-[9px] text-slate-500 uppercase font-bold">Quality</span>
                                    <span class="font-mono text-yellow-500 font-bold">{{ Math.round(flower.quality *
                                        100) }}%</span>
                                </div>
                                <div class="w-px h-6 bg-slate-700"></div>
                                <div class="flex flex-col">
                                    <span class="text-[9px] text-slate-500 uppercase font-bold">Stage</span>
                                    <span class="font-bold"
                                        :class="growthProgress >= 100 ? 'text-emerald-400' : 'text-slate-300'">{{
                                            flower.status }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex justify-center mb-4 shrink-0">
                        <div class="bg-slate-900 p-1 rounded-xl border border-slate-700 inline-flex shadow-sm">
                            <button @click="activeTab = 'status'"
                                class="px-6 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-2"
                                :class="activeTab === 'status' ? 'bg-slate-700 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clip-rule="evenodd" />
                                </svg>
                                Status
                            </button>
                            <button @click="activeTab = 'info'"
                                class="px-6 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-2"
                                :class="activeTab === 'info' ? 'bg-slate-700 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd" />
                                </svg>
                                Botanics
                            </button>
                        </div>
                    </div>

                    <div class="flex-1 overflow-y-auto pr-1 custom-scrollbar">
                        <div v-if="activeTab === 'status'" class="space-y-6 h-full flex flex-col">

                            <div v-if="activeBuffs.length > 0" class="grid grid-cols-2 gap-2">
                                <div v-for="(buff, i) in activeBuffs" :key="i"
                                    class="bg-slate-900/80 border border-slate-700/50 p-2 rounded-lg flex items-center gap-2 shadow-sm">
                                    <div class="w-1.5 h-full rounded-full" :class="buff.color.replace('text-', 'bg-')">
                                    </div>
                                    <div class="flex flex-col min-w-0">
                                        <span class="text-[9px] uppercase font-bold text-slate-500 truncate">{{
                                            buff.label }}</span>
                                        <span class="text-xs font-mono font-bold truncate" :class="buff.color">{{
                                            buff.val.split(' ')[0] }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 bg-slate-800/30 p-4 rounded-xl border border-slate-700/30">

                                <div class="space-y-1.5">
                                    <div class="flex justify-between items-end">
                                        <span class="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-emerald-500"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            Growth Progress
                                        </span>
                                        <span
                                            class="text-xs font-mono text-emerald-400 font-bold bg-emerald-900/30 px-1.5 rounded">{{
                                                Math.floor(growthProgress) }}%</span>
                                    </div>
                                    <div
                                        class="h-3 w-full bg-slate-900 rounded-full overflow-hidden shadow-inner border border-slate-700/50 relative">
                                        <div class="absolute inset-0 bg-slate-800 w-full h-full"
                                            style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px);">
                                        </div>
                                        <div class="h-full transition-all duration-1000 ease-out relative"
                                            :class="growthProgress >= 100 ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' : 'bg-emerald-600'"
                                            :style="{ width: `${Math.min(100, growthProgress)}%` }">
                                            <div class="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between text-[10px] text-slate-500 font-mono">
                                        <span>Planted</span>
                                        <span>{{ growthProgress >= 100 ? 'Ready' : 'Growing...' }}</span>
                                    </div>
                                </div>

                                <div class="space-y-1.5">
                                    <div class="flex justify-between items-end">
                                        <span class="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-500"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            Hydration
                                        </span>
                                        <span class="text-xs font-bold px-1.5 rounded bg-slate-900"
                                            :class="waterStatus.color">{{ waterStatus.label }}</span>
                                    </div>
                                    <div
                                        class="h-3 w-full bg-slate-900 rounded-full overflow-hidden shadow-inner border border-slate-700/50">
                                        <div class="h-full transition-all duration-500 ease-out"
                                            :class="waterStatus.bar.replace('progress-', 'bg-')"
                                            :style="{ width: `${Math.min(100, flower.waterLevel)}%` }">
                                        </div>
                                    </div>
                                    <div class="text-right text-[10px] text-slate-500 font-mono">{{
                                        Math.round(flower.waterLevel) }} / 100</div>
                                </div>
                            </div>

                            <div class="mt-auto grid grid-cols-2 gap-3 pt-2">
                                <button @click="handleWater" :disabled="flower.waterLevel >= 100"
                                    class="btn btn-info bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30 hover:border-blue-400 h-12 relative overflow-hidden group">
                                    <div
                                        class="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-150 transition-transform duration-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 22c4.97 0 9-1.88 9-5c0-1.8-1.74-3.32-4.17-5.32L12 2l-4.83 9.68C4.74 13.68 3 15.2 3 17c0 3.12 4.03 5 9 5z" />
                                        </svg>
                                    </div>
                                    <div class="relative z-10 flex flex-col items-center leading-none gap-1">
                                        <span class="font-bold">Water</span>
                                        <span class="text-[9px] opacity-70 font-normal">+25% Hydro</span>
                                    </div>
                                </button>

                                <button v-if="growthProgress >= 100" @click="handleHarvest" :disabled="isHarvesting"
                                    class="btn btn-primary bg-emerald-600 hover:bg-emerald-500 text-white border-none shadow-[0_0_20px_rgba(16,185,129,0.3)] h-12 relative overflow-hidden group">
                                    <div
                                        class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    </div>
                                    <div class="relative z-10 flex flex-col items-center leading-none gap-1">
                                        <span class="font-black tracking-wide uppercase">{{ isHarvesting ?
                                            'Harvesting...' : 'HARVEST' }}</span>
                                        <span class="text-[9px] opacity-90 font-mono bg-black/20 px-2 rounded-full"
                                            v-if="!isHarvesting">Ready!</span>
                                    </div>
                                </button>

                                <button v-else disabled
                                    class="btn btn-ghost bg-slate-800/50 text-slate-600 border border-slate-700/50 h-12 cursor-not-allowed">
                                    <div class="flex flex-col items-center leading-none gap-1">
                                        <span class="font-bold">Growing</span>
                                        <span class="text-[9px] opacity-50">Wait for maturity</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div v-else
                            class="space-y-4 py-1 text-sm text-slate-400 h-full flex flex-col animate-in fade-in duration-300">

                            <div
                                class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 min-h-[60px] flex items-center relative overflow-hidden">
                                <div class="absolute top-0 right-0 p-2 text-slate-700 opacity-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <p class="italic text-xs leading-relaxed text-slate-300 relative z-10 font-serif">
                                    "{{ flower.species.descriptionLore || "A mysterious plant..." }}"
                                </p>
                            </div>

                            <div class="space-y-3">
                                <h4
                                    class="text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-800 pb-1 flex justify-between items-end">
                                    <span>Genetic Traits</span>
                                    <span class="text-[9px] normal-case bg-slate-800 px-1.5 rounded">Gen {{
                                        Math.floor(Math.random() * 5) + 1 }}</span>
                                </h4>

                                <div class="grid grid-cols-2 gap-2 text-xs">
                                    <div
                                        class="flex justify-between items-center bg-slate-900 p-2.5 rounded border border-slate-800">
                                        <span class="text-slate-400">XP Yield</span> <span
                                            class="text-purple-400 font-mono font-bold">{{
                                                flower.species.attributes?.baseXpReward || 10 }}</span>
                                    </div>
                                    <div
                                        class="flex justify-between items-center bg-slate-900 p-2.5 rounded border border-slate-800">
                                        <span class="text-slate-400">Score</span> <span
                                            class="text-amber-400 font-mono font-bold">{{
                                                flower.species.attributes?.baseScoreReward || 5 }}</span>
                                    </div>
                                </div>

                                <div v-if="flower.species.attributes?.synergies?.length"
                                    class="bg-emerald-900/10 p-3 rounded-xl border border-emerald-900/30">
                                    <div
                                        class="text-[10px] font-bold text-emerald-500 mb-2 uppercase flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                        </svg>
                                        Combo Synergies
                                    </div>
                                    <ul class="space-y-2">
                                        <li v-for="(syn, i) in flower.species.attributes.synergies" :key="i"
                                            class="text-xs flex flex-col bg-slate-900/50 p-1.5 rounded border border-slate-800/50">
                                            <div class="flex justify-between w-full">
                                                <span class="text-slate-400">Requires Neighbor</span>
                                                <span class="text-emerald-200 font-bold">{{ syn.targetSlug }}</span>
                                            </div>
                                            <div class="flex flex-wrap justify-end gap-1 mt-0.5">
                                                <span v-for="(mod, mIdx) in syn.modifiers" :key="mIdx"
                                                    class="text-[10px] font-mono"
                                                    :class="mod.value < 0 ? 'text-red-400 font-bold' : 'text-emerald-500/70'">
                                                    {{ mod.value > 0 ? '+' : '' }}{{ mod.value }} {{
                                                    mod.stat.split('_')[0] }}<span
                                                        v-if="mIdx < syn.modifiers.length - 1"
                                                        class="text-slate-600">,</span>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div v-else class="text-center p-4 border border-dashed border-slate-800 rounded-xl">
                                    <span class="text-xs text-slate-600">No known synergies.</span>
                                </div>
                            </div>

                            <div class="mt-auto grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-800">
                                <div class="flex flex-col bg-slate-900 p-2 rounded border border-slate-800/50">
                                    <span class="text-[10px] text-slate-500 uppercase font-bold">Consumption</span>
                                    <span class="font-bold text-blue-300 mt-0.5">{{ flower.species.waterNeeds }}</span>
                                </div>
                                <div class="flex flex-col bg-slate-900 p-2 rounded border border-slate-800/50">
                                    <span class="text-[10px] text-slate-500 uppercase font-bold">Season</span>
                                    <span class="font-bold mt-0.5" :class="seasonDisplay.color">{{ seasonDisplay.label
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="flex sm:flex-col justify-center items-center w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-4">
                    <div
                        class="flex sm:flex-col items-center gap-2 bg-slate-900/50 p-2 rounded-2xl border border-slate-800 shadow-inner">
                        <div v-for="(stage, index) in GROWTH_STAGES" :key="stage"
                            class="relative w-12 h-12 flex items-center justify-center transition-all duration-300"
                            :class="index === currentStageIndex ? 'scale-110 z-10' : 'opacity-50 grayscale hover:grayscale-0'"
                            :title="stage">

                            <div v-if="index < GROWTH_STAGES.length - 1"
                                class="hidden sm:block absolute h-4 w-0.5 bg-slate-800 -bottom-3 left-1/2 -translate-x-1/2 z-0">
                            </div>

                            <div class="w-full h-full flex items-center justify-center rounded-xl bg-slate-800 border z-10 relative overflow-hidden"
                                :class="index <= currentStageIndex
                                    ? (index === currentStageIndex ? 'border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] bg-emerald-900/20' : 'border-emerald-800/50 bg-slate-800')
                                    : 'border-slate-800'">

                                <FlowerImage :slug="flower.species.slugName" :status="stage" type="icon" size="80%" />

                                <div v-if="index === currentStageIndex"
                                    class="absolute inset-0 bg-emerald-400/10 animate-pulse"></div>
                                <div v-if="index < currentStageIndex"
                                    class="absolute bottom-0 right-0 p-0.5 text-emerald-500 bg-slate-900 rounded-tl-md border-t border-l border-slate-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden sm:block mt-3 text-[10px] text-center font-mono text-slate-500">
                        STAGE<br>
                        <span class="text-emerald-400 font-bold text-xs">{{ currentStageIndex + 1 }}/{{
                            GROWTH_STAGES.length }}</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>