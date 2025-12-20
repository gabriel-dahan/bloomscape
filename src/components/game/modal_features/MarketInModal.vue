<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { remult } from 'remult'
import { useModalStore } from '@/stores/modal'
import { FlowerRarity } from '@/shared/types'
import { FlowerSpecies, MarketListing, MarketStats } from '@/shared'
import { MarketController } from '@/server/controllers/MarketController'

import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import FlowerImage from '@/components/FlowerImage.vue'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const speciesList = ref<FlowerSpecies[]>([])
const listings = ref<MarketListing[]>([])
const stats = ref<MarketStats[]>([])

const selectedSpeciesId = ref<string | null>(null)
const isLoading = ref(true)
const buyingId = ref<string | null>(null)
const timeFilter = ref<'7d' | '30d' | '1y'>('7d')
const rarityFilter = ref<FlowerRarity | 'ALL'>('ALL')

const initialPrice = ref(0)

const fetchData = async () => {
    isLoading.value = true
    try {
        const { listings: l, speciesList: sL } = await MarketController.getMarketplaceData()

        speciesList.value = sL
        listings.value = l

        if (!selectedSpeciesId.value && speciesList.value.length > 0) {
            selectedSpeciesId.value = speciesList.value[0].id
        }
    } catch (error) {
        console.error(error)
    } finally {
        isLoading.value = false
    }
}

watch([selectedSpeciesId, timeFilter], async () => {
    if (!selectedSpeciesId.value) return

    const date = new Date()
    date.setHours(0, 0, 0, 0)

    if (timeFilter.value === '7d') date.setDate(date.getDate() - 7)
    if (timeFilter.value === '30d') date.setDate(date.getDate() - 30)
    if (timeFilter.value === '1y') date.setFullYear(date.getFullYear() - 1)

    const currentStats = await MarketController.getSpeciesMarketStats(
        selectedSpeciesId.value,
        { after: date }
    )
    stats.value = currentStats

    const prevStat = await MarketController.getLastSaleStat(selectedSpeciesId.value, date)
    initialPrice.value = prevStat ? prevStat.averagePrice : 0
})

onMounted(fetchData)

const marketOverview = computed(() => {
    const map = new Map<string, { count: number, minPrice: number }>()
    listings.value.forEach(l => {
        if (!l.flower) return
        const sid = l.flower.speciesId
        const current = map.get(sid) || { count: 0, minPrice: Infinity }
        map.set(sid, {
            count: current.count + 1,
            minPrice: Math.min(current.minPrice, l.price)
        })
    })
    return map
})

const filteredSpecies = computed(() => {
    let list = speciesList.value
    if (rarityFilter.value !== 'ALL') {
        list = list.filter(s => s.rarity === rarityFilter.value)
    }
    return list
})

const selectedSpecies = computed(() =>
    speciesList.value.find(s => s.id === selectedSpeciesId.value)
)

const activeListingsForSelected = computed(() =>
    listings.value
        .filter(l => l.flower?.speciesId === selectedSpeciesId.value)
        .sort((a, b) => a.price - b.price)
)

const latestStat = computed(() => stats.value.length > 0 ? stats.value[stats.value.length - 1] : null)

const chartData = computed(() => {
    const isYearly = timeFilter.value === '1y';

    const endDate = new Date()
    endDate.setHours(0, 0, 0, 0)
    const startDate = new Date(endDate)

    if (timeFilter.value === '7d') startDate.setDate(startDate.getDate() - 7)
    else if (timeFilter.value === '30d') startDate.setDate(startDate.getDate() - 30)
    else startDate.setFullYear(startDate.getFullYear() - 1)

    const statsMap = new Map<string, number>()
    stats.value.forEach(s => {
        const d = new Date(s.date)
        d.setHours(0, 0, 0, 0)
        statsMap.set(d.toISOString(), s.averagePrice)
    })

    const labels: string[] = []
    const prices: number[] = []

    let lastKnownPrice = initialPrice.value

    const stepDays = isYearly ? 7 : 1;

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + stepDays)) {

        labels.push(d.toLocaleDateString(undefined, { day: 'numeric', month: 'numeric' }))

        if (isYearly) {
            const weekEnd = new Date(d);
            weekEnd.setDate(weekEnd.getDate() + 7);

            let sum = 0;

            const weekStats = stats.value.filter(s => {
                const sDate = new Date(s.date);
                return sDate >= d && sDate < weekEnd;
            });

            if (weekStats.length > 0) {
                weekStats.forEach(ws => sum += ws.averagePrice);
                const avg = Math.round(sum / weekStats.length);
                prices.push(avg);
                lastKnownPrice = avg;
            } else {
                prices.push(lastKnownPrice);
            }

        } else {
            const iso = d.toISOString()
            if (statsMap.has(iso)) {
                const price = statsMap.get(iso)!
                prices.push(price)
                lastKnownPrice = price
            } else {
                prices.push(lastKnownPrice)
            }
        }
    }

    return {
        labels,
        datasets: [
            {
                label: 'Average Price',
                data: prices,
                borderColor: '#34d399',
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, 'rgba(52, 211, 153, 0.5)');
                    gradient.addColorStop(1, 'rgba(52, 211, 153, 0)');
                    return gradient;
                },
                borderWidth: 2,
                pointRadius: (ctx: any) => {
                    const index = ctx.dataIndex;
                    const val = ctx.dataset.data[index];
                    const prev = ctx.dataset.data[index - 1];
                    return (index === 0 || index === ctx.dataset.data.length - 1 || val !== prev) ? 3 : 0;
                },
                pointHoverRadius: 6,
                pointBackgroundColor: '#10b981',
                fill: true,
                spanGaps: true,
                tension: 0.4
            }
        ]
    }
})

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#e2e8f0',
            bodyColor: '#34d399',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            displayColors: false,
            callbacks: {
                label: (context: any) => `${context.parsed.y} Sap`
            }
        }
    },
    scales: {
        x: {
            grid: { display: false, drawBorder: false },
            ticks: { color: '#64748b', maxTicksLimit: 8 }
        },
        y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
            ticks: { color: '#64748b' },
            beginAtZero: true
        }
    },
    interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
    }
}

const handleBuy = async (listing: MarketListing) => {
    if (!confirm(`Buy this flower for ${listing.price} Sap?`)) return
    buyingId.value = listing.id
    try {
        const result = await MarketController.buyListing(listing.id)
        listings.value = listings.value.filter(l => l.id !== listing.id)
        useModalStore().open({
            title: 'Success!',
            message: result.message,
            type: 'success',
            size: 'standard'
        })
    } catch (e: any) {
        alert(e.message)
    } finally {
        buyingId.value = null
    }
}

const getRarityGlowStyle = (rarity?: FlowerRarity) => {
    const colors: Record<FlowerRarity, string> = {
        'COMMON': '#94a3b8',
        'UNCOMMON': '#34d399',
        'RARE': '#60a5fa',
        'EPIC': '#c084fc',
        'LEGENDARY': '#fbbf24'
    };

    const color = colors[rarity || 'COMMON'];

    return {
        boxShadow: `inset 0 0 12px ${color}40, 0 0 20px ${color}60`,
        borderColor: `${color}80`
    };
};

const getRarityTextColorClass = (rarity?: FlowerRarity) => {
    switch (rarity) {
        case 'COMMON': return 'text-slate-400 border-slate-400/30';
        case 'UNCOMMON': return 'text-emerald-400 border-emerald-400/30';
        case 'RARE': return 'text-blue-400 border-blue-400/30';
        case 'EPIC': return 'text-purple-400 border-purple-400/30';
        case 'LEGENDARY': return 'text-amber-400 border-amber-400/30';
        default: return 'text-slate-400 border-slate-400/30';
    }
}

const getQualityColor = (quality: number = 0) => {
    if (quality >= 0.9) return 'text-amber-400';
    if (quality >= 0.7) return 'text-purple-400';
    if (quality >= 0.5) return 'text-blue-400';
    return 'text-slate-400';
}
</script>

<template>
    <div class="flex w-full h-full text-slate-200">

        <div class="w-1/3 border-r border-slate-700/50 flex flex-col bg-slate-900/30">
            <div class="p-4 border-b border-slate-700/50">
                <select v-model="rarityFilter"
                    class="select select-sm select-bordered w-full bg-slate-800 text-slate-200">
                    <option value="ALL">All Rarities</option>
                    <option v-for="r in Object.values(FlowerRarity)" :key="r" :value="r">{{ r }}</option>
                </select>
            </div>

            <div class="overflow-y-auto flex-1 custom-scrollbar">
                <div v-for="species in filteredSpecies" :key="species.id" @click="selectedSpeciesId = species.id"
                    class="p-4 cursor-pointer hover:bg-white/5 transition-colors border-b border-slate-800/50 flex items-center gap-3 group"
                    :class="{ 'bg-slate-800': selectedSpeciesId === species.id }">

                    <div class="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center transition-all duration-300 border border-transparent"
                        :style="selectedSpeciesId === species.id ? getRarityGlowStyle(species.rarity) : {}">
                        <FlowerImage :slug="species.slugName" status="MATURE" type="icon" size="32px"
                            class="opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div class="flex-1 min-w-0">
                        <div class="font-bold truncate text-sm"
                            :class="selectedSpeciesId === species.id ? 'text-white' : 'text-slate-300'">
                            {{ species.name }}
                        </div>

                        <div class="text-xs opacity-60 flex justify-between mt-1">
                            <span>Stock: {{ marketOverview.get(species.id)?.count || 0 }}</span>

                            <span v-if="marketOverview.get(species.id)?.count" class="text-emerald-400">
                                {{ marketOverview.get(species.id)?.minPrice }} Sap
                            </span>
                            <span v-else class="text-slate-500 italic">
                                No stock
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-2/3 flex flex-col bg-slate-900/50" v-if="selectedSpecies">

            <div class="p-6 border-b border-slate-700/50 flex items-start justify-between">
                <div class="flex gap-4">
                    <div class="w-20 h-20 bg-slate-900/50 rounded-xl p-2 border shadow-lg transition-all duration-300"
                        :style="getRarityGlowStyle(selectedSpecies.rarity)">
                        <FlowerImage :slug="selectedSpecies.slugName" status="MATURE" type="sprite" size="100%"
                            class="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <h2 class="text-2xl font-bold text-white">{{ selectedSpecies.name }}</h2>
                            <span class="text-xs px-2 py-0.5 rounded border uppercase font-bold tracking-wider"
                                :class="getRarityTextColorClass(selectedSpecies.rarity)">
                                {{ selectedSpecies.rarity }}
                            </span>
                        </div>
                        <p class="text-sm text-slate-400 max-w-md">{{ selectedSpecies.description }}</p>
                    </div>
                </div>

                <div class="flex flex-col items-end gap-2">
                    <div class="text-right">
                        <div class="text-xs text-slate-400 mb-0.5 uppercase tracking-wide">Lowest Ask</div>

                        <div v-if="marketOverview.get(selectedSpecies.id)?.count"
                            class="text-3xl font-mono font-bold text-emerald-400 leading-none">
                            {{ marketOverview.get(selectedSpecies.id)?.minPrice }}
                            <span class="text-sm text-emerald-600">Sap</span>
                        </div>
                        <div v-else class="text-xl font-mono text-slate-500 font-bold">
                            --
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-4 gap-4 px-6 py-4 border-b border-slate-700/50 bg-slate-800/20">
                <div>
                    <div class="text-xs text-slate-500 uppercase">24h Vol</div>
                    <div class="font-mono text-white text-lg">{{ latestStat?.volume || 0 }}</div>
                </div>
                <div>
                    <div class="text-xs text-slate-500 uppercase">24h Avg</div>
                    <div class="font-mono text-white text-lg">{{ latestStat?.averagePrice || '--' }} <span
                            class="text-xs text-slate-500">Sap</span></div>
                </div>
                <div>
                    <div class="text-xs text-slate-500 uppercase">24h High</div>
                    <div class="font-mono text-white text-lg">{{ latestStat?.maxPrice || '--' }} <span
                            class="text-xs text-slate-500">Sap</span></div>
                </div>
                <div>
                    <div class="text-xs text-slate-500 uppercase">24h Low</div>
                    <div class="font-mono text-emerald-400 text-lg">{{ latestStat?.minPrice || '--' }} <span
                            class="text-xs text-slate-500">Sap</span></div>
                </div>
            </div>

            <div class="p-6 min-h-[200px] border-b border-slate-700/50 flex flex-col">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="font-bold text-slate-300">Average Price History</h3>
                    <div class="flex gap-2 bg-slate-800 p-1 rounded-lg">
                        <button v-for="t in ['7d', '30d', '1y']" :key="t" @click="timeFilter = t as any"
                            class="px-3 py-1 text-xs rounded transition-colors"
                            :class="timeFilter === t ? 'bg-blue-600 text-white' : 'hover:text-white text-slate-400'">
                            {{ t }}
                        </button>
                    </div>
                </div>

                <div
                    class="w-full flex-1 bg-slate-800/20 rounded-lg relative overflow-hidden border border-slate-700/30 p-2">
                    <div v-if="stats.length === 0 && initialPrice === 0"
                        class="flex h-full items-center justify-center text-slate-500 text-sm">
                        No trade history available ever.
                    </div>
                    <Line v-else :data="chartData" :options="chartOptions as any" />
                </div>
            </div>

            <div class="flex-1 overflow-hidden flex flex-col p-6">
                <h3 class="font-bold text-slate-300 mb-4 flex items-center gap-2">
                    Active Listings
                    <span class="bg-slate-700 text-white text-xs px-2 py-0.5 rounded-full">
                        {{ activeListingsForSelected.length }}
                    </span>
                </h3>

                <div class="overflow-y-auto flex-1 custom-scrollbar pr-2">
                    <table class="w-full text-left border-collapse">
                        <thead class="text-xs uppercase text-slate-500 sticky top-0 bg-slate-900/90 backdrop-blur pb-2">
                            <tr>
                                <th class="pb-3 pl-2">Seller</th>
                                <th class="pb-3">Quality</th>
                                <th class="pb-3">Listed At</th>
                                <th class="pb-3 text-right">Price</th>
                                <th class="pb-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="listing in activeListingsForSelected" :key="listing.id"
                                class="border-b border-slate-800/50 hover:bg-white/5 transition-colors group">
                                <td class="py-3 pl-2 text-sm text-slate-300">
                                    {{ listing.seller?.tag || 'Unknown' }}
                                </td>
                                <td class="py-3 text-sm font-bold">
                                    <span :class="getQualityColor(listing.flower?.quality)">{{
                                        Math.round((listing.flower?.quality || 0) * 100) }}</span>%
                                </td>
                                <td class="py-3 text-xs text-slate-500">
                                    {{ new Date(listing.listedAt || '').toLocaleDateString() }}
                                </td>
                                <td class="py-3 text-right font-mono text-emerald-400 font-bold">
                                    {{ listing.price }}
                                </td>
                                <td class="py-3 text-right pr-2">
                                    <button @click="handleBuy(listing)" :disabled="!!buyingId"
                                        class="btn btn-xs btn-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span v-if="buyingId === listing.id"
                                            class="loading loading-spinner loading-xs"></span>
                                        <span v-else>Buy</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div v-if="activeListingsForSelected.length === 0" class="flex h-[50%] items-center justify-center">
                        <span class="text-slate-500 italic">
                            No one is selling this flower currently.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
:deep(.select:focus),
:deep(.btn:focus) {
    outline: none;
}
</style>