<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { remult } from 'remult'
import { LandController } from '@/server/controllers/LandController'
import { UserFlower } from '@/shared/flowers/UserFlower'
import { Tile } from '@/shared';
import FlowerImage from '@/components/FlowerImage.vue';

const props = defineProps<{
    x: number,
    z: number
}>()

const tile = ref<Tile | null>(null)
const flower = ref<UserFlower | null>(null)
const availableSeeds = ref<UserFlower[]>([])

const isLoading = ref(false)
const isPlanting = ref(false)
const selectedSeedId = ref<string>('')
const errorMsg = ref('')

const growthProgress = ref(0)
let timer: any = null

const hasTile = computed(() => !!tile.value)
const hasFlower = computed(() => !!tile.value?.flowerId)

const waterColor = computed(() => {
    if (!flower.value) return 'bg-slate-700'
    const w = flower.value.waterLevel
    if (w > 60) return 'progress-info'
    if (w > 30) return 'progress-warning'
    return 'progress-error'
})

const loadData = async () => {
    isLoading.value = true
    errorMsg.value = ''
    tile.value = null
    flower.value = null
    growthProgress.value = 0

    try {
        const fetchedTile = await LandController.getTileAt(props.x, props.z)

        if (!fetchedTile) {
            errorMsg.value = "No land owned at these coordinates."
            return
        }

        tile.value = fetchedTile

        if (fetchedTile.flowerId) {
            flower.value = await remult.repo(UserFlower).findId(fetchedTile.flowerId, {
                include: { species: true }
            })
            startGrowthTimer()
        } else {
            availableSeeds.value = await LandController.getAvailableSeeds()
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
        await LandController.plantSeed(tile.value.id, selectedSeedId.value)
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
        const res = await LandController.waterFlower(tile.value.id)
        flower.value.waterLevel = res.level
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
    <div class="h-full flex flex-col bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 backdrop-blur-md">

        <div class="mb-4 border-b border-slate-700 pb-2">
            <h2 class="text-lg font-bold text-white flex items-center gap-2">
                <span>📍</span> Tile [{{ x }}, {{ z }}]
            </h2>
            <p v-if="isLoading" class="text-xs text-emerald-400 animate-pulse">Scanning...</p>
        </div>

        <div v-if="errorMsg" class="flex-1 flex items-center justify-center p-4">
            <div class="text-center text-red-400 text-sm">
                <p>⚠️ {{ errorMsg }}</p>
                <button @click="loadData" class="btn btn-xs btn-outline btn-error mt-2">Retry</button>
            </div>
        </div>

        <div v-else-if="hasTile" class="flex-1 flex flex-col space-y-4">

            <div v-if="!hasFlower" class="flex-1 flex flex-col justify-center text-center space-y-4">
                <div class="p-6 border-2 border-dashed border-slate-600 rounded-xl bg-slate-800/30">
                    <span class="text-3xl grayscale opacity-50">🌱</span>
                    <p class="text-sm text-slate-400 font-bold mt-2">Empty Plot</p>
                </div>

                <div class="w-full">
                    <select v-model="selectedSeedId"
                        class="select select-sm select-bordered w-full mb-2 bg-slate-950 text-xs">
                        <option disabled value="">Select Seed...</option>
                        <option v-for="s in availableSeeds" :key="s.id" :value="s.id">
                            {{ s.species?.name }}
                        </option>
                    </select>
                    <button @click="handlePlant" :disabled="!selectedSeedId || isPlanting"
                        class="btn btn-sm btn-primary w-full">
                        {{ isPlanting ? 'Planting...' : 'Plant Here' }}
                    </button>
                </div>
            </div>

            <div v-else-if="flower" class="flex-1 space-y-4">

                <div class="relative bg-black/20 rounded-lg p-4 flex justify-center border border-slate-700">
                    <FlowerImage :slug="flower.species?.slugName || ''" :status="flower.status" type="sprite"
                        size="96px" />
                    <span class="absolute top-2 right-2 badge badge-xs badge-neutral">{{ flower.status }}</span>
                </div>

                <div>
                    <h3 class="font-bold text-white">{{ flower.species?.name }}</h3>

                    <div class="mt-3 space-y-1">
                        <div class="flex justify-between text-[10px] text-slate-400 uppercase font-bold">
                            <span>Growth</span>
                            <span>{{ growthProgress.toFixed(0) }}%</span>
                        </div>
                        <progress class="progress progress-success w-full h-1.5 bg-slate-800" :value="growthProgress"
                            max="100"></progress>
                    </div>

                    <div class="mt-3 space-y-1">
                        <div class="flex justify-between text-[10px] text-slate-400 uppercase font-bold">
                            <span>Moisture</span>
                            <span :class="flower.waterLevel < 30 ? 'text-red-400' : 'text-blue-400'">
                                {{ flower.waterLevel }}%
                            </span>
                        </div>
                        <progress class="progress w-full h-1.5 bg-slate-800" :class="waterColor"
                            :value="flower.waterLevel" max="100"></progress>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2 pt-2">
                    <button @click="handleWater" :disabled="flower.waterLevel >= 100"
                        class="btn btn-sm btn-info btn-outline text-xs">
                        Water
                    </button>
                    <button v-if="growthProgress >= 100" class="btn btn-sm btn-primary text-xs">
                        Harvest
                    </button>
                    <button v-else disabled class="btn btn-sm btn-ghost text-xs opacity-50">
                        Wait...
                    </button>
                </div>
            </div>
        </div>

        <div v-else class="flex-1 flex items-center justify-center">
            <span class="loading loading-dots loading-md text-emerald-500"></span>
        </div>

    </div>
</template>