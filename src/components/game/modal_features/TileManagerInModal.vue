<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { GameController } from '@/server/controllers/GameController'
import { FlowerRarity, Tile, PreferredSeasons, FlowerDTO, FlowerStatus } from '@/shared';
import FlowerImage from '@/components/FlowerImage.vue';

const props = defineProps<{
    x: number,
    z: number,
    islandId: string
}>()

// --- STATE ---
const tile = ref<Tile | null>(null)
const flower = ref<FlowerDTO | null>(null)
const availableSeeds = ref<FlowerDTO[]>([])

const isLoading = ref(false)
const isPlanting = ref(false)
const selectedSeedId = ref<string>('')
const activeTab = ref<'status' | 'info'>('status')
const errorMsg = ref('')

// --- LOGIC ---
const growthProgress = ref(0)
let timer: any = null

const hasTile = computed(() => !!tile.value)
const hasFlower = computed(() => !!flower.value)

// Define the growth stages in order
const GROWTH_STAGES = [
    'SEED',
    'SPROUT1',
    'SPROUT2',
    'GROWING1',
    'GROWING2',
    'MATURE'
]

// Compute current stage index to determine what is unlocked/shadowed
const currentStageIndex = computed(() => {
    if (!flower.value) return -1
    // We assume flower.status matches the uppercase strings in GROWTH_STAGES
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

// --- DATA FETCHING & ACTIONS ---
const loadData = async () => {
    isLoading.value = true
    errorMsg.value = ''
    tile.value = null
    flower.value = null
    selectedSeedId.value = ''
    growthProgress.value = 0
    try {
        const data = await GameController.getTileData(props.x, props.z, props.islandId)

        if (!data) {
            errorMsg.value = "Land not owned."
            return
        }

        tile.value = data.tile

        if (data.flower) {
            flower.value = data.flower
            startGrowthTimer()
        } else {
            availableSeeds.value = await GameController.getAvailableSeeds()
        }

    } catch (e: any) {
        errorMsg.value = e.message
    } finally {
        isLoading.value = false
    }
}

const handlePlant = async () => {
    if (!selectedSeedId.value || !tile.value) return
    isPlanting.value = true
    try {
        await GameController.plantSeed(tile.value.id, selectedSeedId.value)
        await loadData()
    } catch (e: any) {
        errorMsg.value = e.message
    } finally {
        isPlanting.value = false
    }
}

const handleWater = async () => {
    if (!tile.value || !flower.value) return
    try {
        const res = await GameController.waterFlower(tile.value.id)
        if (flower.value) flower.value.waterLevel = res.level
    } catch (e: any) {
        errorMsg.value = e.message
    }
}

const calculateGrowth = () => {
    if (!flower.value?.species || !flower.value.plantedAt) return 0
    const start = new Date(flower.value.plantedAt).getTime()
    const now = new Date().getTime()
    const durationMs = flower.value.species.growthDuration * 1000
    growthProgress.value = Math.min(100, ((now - start) / durationMs) * 100)
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
                <div class="badge badge-neutral font-mono text-xs">X: {{ x }}</div>
                <div class="badge badge-neutral font-mono text-xs">Z: {{ z }}</div>
            </div>
            <div class="text-xs uppercase font-bold tracking-wider text-slate-500">
                {{ isLoading ? 'Scanning...' : (tile?.type || 'Unknown') }}
            </div>
        </div>

        <div class="flex-1 overflow-y-auto p-4 relative scrollbar-thin scrollbar-thumb-slate-700">

            <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-10"><span
                    class="loading loading-spinner loading-lg text-primary"></span></div>
            <div v-if="errorMsg" class="alert alert-error shadow-lg my-4"><span>{{ errorMsg }}</span><button
                    @click="loadData" class="btn btn-xs btn-ghost">Retry</button></div>

            <div v-else-if="hasTile && !hasFlower" class="flex flex-col h-full animate-in fade-in duration-300">
                <div class="text-center py-4 shrink-0">
                    <div
                        class="w-16 h-16 rounded-full bg-slate-800/50 mx-auto flex items-center justify-center border-2 border-dashed border-slate-700 mb-2">
                        <div class="w-4 h-4 rounded-full bg-slate-700"></div>
                    </div>
                    <h3 class="text-md font-bold text-slate-200">Fertile Soil</h3>
                    <p class="text-[11px] text-slate-400">Select a seed to plant.</p>
                </div>

                <div class="flex-1 overflow-y-auto mt-2 space-y-2">
                    <div v-if="availableSeeds.length === 0" class="text-center text-sm text-slate-500 py-4">No seeds
                        available.</div>
                    <div class="grid grid-cols-2 gap-2 pb-2">
                        <button v-for="seed in availableSeeds" :key="seed.id" @click="selectedSeedId = seed.id"
                            class="relative p-2 rounded-lg border text-left transition-all duration-200 group"
                            :class="selectedSeedId === seed.id ? 'bg-primary/20 border-primary shadow-[0_0_10px_rgba(var(--p),0.3)]' : 'bg-slate-800 border-slate-700 hover:border-slate-500'">
                            <div class="flex items-center gap-2">
                                <FlowerImage :slug="seed.species?.slugName || ''" status="SEED" type="icon"
                                    size="28px" />
                                <div class="overflow-hidden">
                                    <div class="font-bold text-xs text-slate-200 truncate">{{ seed.species?.name }}
                                    </div>
                                    <div class="text-[10px] text-slate-400 truncate">{{ seed.species?.rarity }}</div>
                                </div>
                            </div>
                            <div v-if="selectedSeedId === seed.id"
                                class="absolute -top-1 -right-1 bg-primary text-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                                L</div>
                        </button>
                    </div>
                </div>
                <div class="mt-auto pt-3 border-t border-slate-800 shrink-0">
                    <button @click="handlePlant" :disabled="!selectedSeedId || isPlanting"
                        class="btn btn-primary btn-sm w-full shadow-lg shadow-primary/20">{{ isPlanting ? 'Planting...'
                            : 'Plant Seed' }}</button>
                </div>
            </div>

            <div v-else-if="flower && flower.species" class="flex flex-col sm:flex-row h-full gap-4">


                <div class="flex-1">
                    <div class="flex gap-4 items-start animate-in slide-in-from-left duration-300 shrink-0">
                        <div
                            class="relative w-32 h-32 shrink-0 bg-gradient-to-br from-slate-800 to-black rounded-xl border border-slate-700 flex items-center justify-center overflow-hidden shadow-inner group">
                            <div class="absolute inset-0 opacity-20 bg-radial-gradient blur-xl"
                                :class="currentRarityColor">
                            </div>
                            <FlowerImage :slug="flower.species.slugName" :status="flower.status" type="icon"
                                size="110px"
                                class="drop-shadow-2xl z-10 group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute bottom-1 right-1 text-[9px] uppercase font-bold z-10 px-1.5 py-0.5 rounded border bg-slate-900/80 backdrop-blur-md"
                                :class="currentRarityColor">
                                {{ flower.species.rarity }}
                            </div>
                            <div v-if="flower.isShiny"
                                class="absolute top-1 left-1 text-[10px] font-bold bg-yellow-500/20 text-yellow-200 px-1 rounded animate-pulse border border-yellow-500/50">
                                SHINY</div>
                        </div>

                        <div class="flex-1 pt-1 flex flex-col justify-center">
                            <h2 class="text-xl font-black text-white tracking-tight leading-tight break-words">{{
                                flower.species.name }}</h2>
                            <div class="flex gap-0.5 my-1 text-yellow-500 text-xs font-mono">
                                Quality: {{ Math.round(flower.quality * 100) }}%
                            </div>
                            <div class="text-xs font-mono mt-1">
                                <span class="opacity-50">Status:</span> <span class="font-bold"
                                    :class="growthProgress >= 100 ? 'text-primary' : 'text-slate-300'">{{ flower.status
                                    }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5 flex-1 flex flex-col animate-in slide-in-from-bottom duration-300 delay-75">
                        <div
                            class="tabs tabs-boxed bg-slate-800 p-0.5 shrink-0 mb-3 rounded-xl border border-slate-400">
                            <a @click="activeTab = 'status'" class="tab tab-sm flex-1 rounded-xl font-bold"
                                :class="{ 'tab-active bg-slate-900': activeTab === 'status' }">Status &
                                Actions</a>
                            <a @click="activeTab = 'info'" class="tab tab-sm flex-1 rounded-xl font-bold"
                                :class="{ 'tab-active bg-slate-900': activeTab === 'info' }">Botanics</a>
                        </div>

                        <div class="flex-1 overflow-y-auto">
                            <div v-if="activeTab === 'status'" class="space-y-5 py-1">
                                <div class="space-y-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                                    <div class="space-y-1">
                                        <div class="flex justify-between text-xs font-bold text-slate-400">
                                            <span>Growth</span><span>{{ growthProgress.toFixed(0) }}%</span>
                                        </div>
                                        <progress class="progress w-full h-2 bg-slate-900"
                                            :class="growthProgress >= 100 ? 'progress-primary' : 'progress-secondary'"
                                            :value="growthProgress" max="100"></progress>
                                    </div>
                                    <div class="space-y-1">
                                        <div class="flex justify-between text-xs font-bold"><span
                                                class="text-slate-400">Water</span><span :class="waterStatus.color">{{
                                                    waterStatus.label }} ({{ flower.waterLevel }}%)</span></div>
                                        <progress class="progress w-full h-2 bg-slate-900" :class="waterStatus.bar"
                                            :value="flower.waterLevel" max="100"></progress>
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-3">
                                    <button @click="handleWater" :disabled="flower.waterLevel >= 100"
                                        class="btn btn-sm btn-info btn-outline w-full">Water</button>
                                    <button v-if="growthProgress >= 100"
                                        class="btn btn-sm btn-primary w-full shadow-[0_0_15px_rgba(var(--p),0.4)] animate-pulse">Harvest</button>
                                    <button v-else disabled
                                        class="btn btn-sm btn-disabled btn-ghost border-slate-800 w-full opacity-50">Wait</button>
                                </div>
                            </div>

                            <div v-else class="space-y-3 py-1 text-sm text-slate-400">
                                <div
                                    class="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 min-h-[60px] flex items-center">
                                    <p class="italic text-xs leading-relaxed">"{{ flower.species.description_lore ||
                                        flower.species.description || 'A mysterious plant...' }}"</p>
                                </div>

                                <div class="grid grid-cols-2 gap-2 text-xs">
                                    <div class="flex flex-col bg-slate-900 p-2 rounded border border-slate-800"><span
                                            class="text-slate-500">Water Needs</span><span
                                            class="font-bold text-blue-300">{{ flower.species.waterNeeds }}</span></div>
                                    <div class="flex flex-col bg-slate-900 p-2 rounded border border-slate-800"><span
                                            class="text-slate-500">Time</span><span class="font-bold text-slate-300">{{
                                                (flower.species.growthDuration / 60).toFixed(0) }} min</span></div>
                                    <div
                                        class="flex flex-col bg-slate-900 p-2 rounded border border-slate-800 col-span-2">
                                        <span class="text-slate-500">Preferred Season</span>
                                        <div class="flex items-center gap-2 mt-1"><span
                                                class="font-bold uppercase tracking-wide"
                                                :class="seasonDisplay.color">{{
                                                    seasonDisplay.label }}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex justify-center items-center">
                    <div class="flex sm:flex-col items-center gap-1 bg-slate-800 p-1.5 rounded-lg border h-fit w-fit">
                        <div v-for="(stage, index) in GROWTH_STAGES" :key="stage"
                            class="relative w-10 h-10 sm:w-15 sm:h-15 flex items-center justify-center transition-all duration-300"
                            :title="stage">
                            <div class="w-full h-full flex items-center justify-center" :class="{
                                'filter brightness-0 invert-100 opacity-20': index > currentStageIndex,
                                'border rounded-lg border-emerald-500': index === currentStageIndex
                            }">
                                <FlowerImage :slug="flower.species.slugName" :status="stage" type="icon" size="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
    width: 4px;
}

.scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: #334155;
    border-radius: 20px;
}

.break-words {
    word-break: break-word;
}
</style>