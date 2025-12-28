<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { remult } from 'remult'
import { useModalStore } from '@/stores/modal'
import { FlowerRarity } from '@/shared/types'
import { FlowerSpecies, MarketListing, MarketStats, FlowerDTO } from '@/shared'
import { MarketController } from '@/server/controllers/MarketController'
import { GameController } from '@/server/controllers/GameController'
import FlowerImage from '@/components/FlowerImage.vue'
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
import { PRICES } from '@/server/ext'

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

type ViewMode = 'BUY' | 'SELL'
const activeMode = ref<ViewMode>('BUY')

const speciesList = ref<FlowerSpecies[]>([])
const listings = ref<MarketListing[]>([])
const stats = ref<MarketStats[]>([])

const selectedSpeciesId = ref<string | null>(null)
const isLoading = ref(true)
const buyingId = ref<string | null>(null)
const timeFilter = ref<'7d' | '30d' | '1y'>('7d')
const rarityFilter = ref<FlowerRarity | 'ALL'>('ALL')
const initialPrice = ref(0)

const myInventory = ref<FlowerDTO[]>([])
const selectedSellItems = ref<FlowerDTO[]>([])
const sellPrice = ref<number>(0)
const recommendedPrice = ref<number>(0)
const isListing = ref(false)

const fetchData = async () => {
    isLoading.value = true
    try {
        const { listings: l, speciesList: sL } = await MarketController.getMarketplaceData()

        speciesList.value = sL
        listings.value = l

        // RESPONSIVE LOGIC: Only auto-select first item on Desktop.
        // On mobile, we want the user to see the list first.
        if (!selectedSpeciesId.value && speciesList.value.length > 0 && window.innerWidth >= 768) {
            selectedSpeciesId.value = speciesList.value[0].id
        }

        if (remult.user) {
            await fetchInventory()
        }
    } catch (error) {
        console.error(error)
    } finally {
        isLoading.value = false
    }
}

const fetchInventory = async () => {
    const seeds = await GameController.getAvailableSeeds()
    const listedIds = new Set(listings.value.map(l => l.flowerId))
    myInventory.value = seeds.filter(s => !listedIds.has(s.id))
}

const updateChartData = async () => {
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
}

watch([selectedSpeciesId, timeFilter], async () => {
    if (!selectedSpeciesId.value || activeMode.value !== 'BUY') return
    await updateChartData()
})

watch(selectedSellItems, async (items) => {
    if (items.length === 0) {
        sellPrice.value = 0
        recommendedPrice.value = 0
        return
    }

    const sample = items[0]
    const rec = await MarketController.getRecommendedPrice(sample.species.id, sample.quality)
    recommendedPrice.value = rec

    if (sellPrice.value === 0) sellPrice.value = rec
}, { deep: true })

const taxAmount = computed(() => Math.floor(sellPrice.value * selectedSellItems.value.length * PRICES.TAX_RATE))
const netProfit = computed(() => (sellPrice.value * selectedSellItems.value.length) - taxAmount.value)

onMounted(fetchData)

// --- RESPONSIVE HELPERS ---

// Helps determine if we should hide the sidebar on mobile (because we are looking at details)
const isMobileDetailView = computed(() => {
    if (activeMode.value === 'BUY') return !!selectedSpeciesId.value
    if (activeMode.value === 'SELL') return selectedSellItems.value.length > 0
    return false
})

const goBackToMobileList = () => {
    if (activeMode.value === 'BUY') selectedSpeciesId.value = null
    if (activeMode.value === 'SELL') selectedSellItems.value = []
}

// --- EXISTING COMPUTED ---

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

        if (listing.flower?.speciesId === selectedSpeciesId.value) {
            updateChartData()
        }

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

const toggleSelection = (item: FlowerDTO) => {
    const index = selectedSellItems.value.findIndex(i => i.id === item.id)
    if (index === -1) {
        if (selectedSellItems.value.length > 0 && selectedSellItems.value[0].species.id !== item.species.id) {
            selectedSellItems.value = [item]
        } else {
            selectedSellItems.value.push(item)
        }
    } else {
        selectedSellItems.value.splice(index, 1)
    }
}

const selectAllOfSpecies = (speciesId: string) => {
    const allOfSpecies = myInventory.value.filter(i => i.species.id === speciesId)
    const allSelected = allOfSpecies.every(i => selectedSellItems.value.find(s => s.id === i.id))

    if (allSelected) {
        selectedSellItems.value = []
    } else {
        selectedSellItems.value = allOfSpecies
    }
}

const handleBulkSell = async () => {
    if (selectedSellItems.value.length === 0) return
    if (sellPrice.value <= 0) return

    isListing.value = true
    try {
        const ids = selectedSellItems.value.map(i => i.id)
        const result = await MarketController.addBulkListing(ids, sellPrice.value)

        myInventory.value = myInventory.value.filter(inv => !ids.includes(inv.id))

        selectedSellItems.value = []
        sellPrice.value = 0

        const { listings: l } = await MarketController.getMarketplaceData()
        listings.value = l

        useModalStore().open({
            title: 'Listed!',
            message: result.message,
            type: 'success',
        })

    } catch (e: any) {
        useModalStore().open({
            title: 'Error',
            message: e.message,
            type: 'error',
        })
    } finally {
        isListing.value = false
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

const getRarityTextColorClass = (rarity?: string) => {
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
    <div class="flex flex-col md:flex-row w-full h-full text-slate-200">

        <div class="w-full md:w-1/3 border-r border-slate-700/50 flex flex-col bg-slate-900/30"
            :class="{ 'hidden md:flex': isMobileDetailView }">

            <div class="flex border-b border-slate-700/50 shrink-0">
                <button @click="activeMode = 'BUY'"
                    class="flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-colors"
                    :class="activeMode === 'BUY' ? 'bg-slate-800 text-white border-b-2 border-emerald-500' : 'text-slate-500 hover:text-slate-300'">
                    Market
                </button>
                <button @click="activeMode = 'SELL'"
                    class="flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-colors"
                    :class="activeMode === 'SELL' ? 'bg-slate-800 text-white border-b-2 border-emerald-500' : 'text-slate-500 hover:text-slate-300'">
                    Sell
                </button>
            </div>

            <div v-if="activeMode === 'BUY'" class="flex-1 flex flex-col min-h-0">
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

                        <div class="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center transition-all duration-300 border border-transparent shrink-0"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="flex-1 flex flex-col min-h-0">
                <div class="p-3 text-xs text-slate-500 bg-slate-900/50 border-b border-slate-700/50">
                    Select seeds to sell. Click multiple to bulk list.
                </div>

                <div class="overflow-y-auto flex-1 custom-scrollbar">
                    <div v-if="myInventory.length === 0" class="p-6 text-center text-slate-500 text-sm italic">
                        No tradeable seeds found.
                    </div>

                    <div v-for="item in myInventory" :key="item.id" @click="toggleSelection(item)"
                        class="p-3 cursor-pointer hover:bg-white/5 transition-colors border-b border-slate-800/50 flex items-center gap-3 group relative select-none">

                        <div class="absolute inset-y-0 left-0 w-1 bg-emerald-500 transition-opacity"
                            :class="selectedSellItems.find(i => i.id === item.id) ? 'opacity-100' : 'opacity-0'"></div>

                        <div
                            class="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-700 shrink-0">
                            <FlowerImage :slug="item.species.slugName" status="MATURE" type="icon" size="32px" />
                        </div>

                        <div class="flex-1 min-w-0">
                            <div class="font-bold truncate text-sm text-slate-200">
                                {{ item.species.name }}
                            </div>
                            <div class="text-xs flex gap-2 mt-0.5">
                                <span :class="getRarityTextColorClass(item.species.rarity)">{{ item.species.rarity
                                }}</span>
                                <span :class="getQualityColor(item.quality)">Q: {{ Math.round(item.quality * 100)
                                }}%</span>
                            </div>
                        </div>

                        <div class="w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0"
                            :class="selectedSellItems.find(i => i.id === item.id) ? 'bg-emerald-500 border-emerald-500' : 'border-slate-600 bg-slate-900'">
                            <span v-if="selectedSellItems.find(i => i.id === item.id)"
                                class="text-white text-xs font-bold">✓</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full md:w-2/3 flex flex-col bg-slate-900/50" :class="{ 'hidden md:flex': !isMobileDetailView }">

            <template v-if="activeMode === 'BUY' && selectedSpecies">
                <div class="md:hidden p-4 border-b border-slate-700/50 bg-slate-800/50 flex items-center gap-2"
                    @click="goBackToMobileList">
                    <span class="text-slate-400">← Back to List</span>
                </div>

                <div
                    class="p-6 border-b border-slate-700/50 flex flex-col md:flex-row items-start justify-between gap-4">
                    <div class="flex gap-4">
                        <div class="w-20 h-20 bg-slate-900/50 rounded-xl p-2 border shadow-lg transition-all duration-300 shrink-0"
                            :style="getRarityGlowStyle(selectedSpecies.rarity)">
                            <FlowerImage :slug="selectedSpecies.slugName" status="MATURE" type="sprite" size="100%"
                                class="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-1 flex-wrap">
                                <h2 class="text-2xl font-bold text-white">{{ selectedSpecies.name }}</h2>
                                <span class="text-xs px-2 py-0.5 rounded border uppercase font-bold tracking-wider"
                                    :class="getRarityTextColorClass(selectedSpecies.rarity)">
                                    {{ selectedSpecies.rarity }}
                                </span>
                            </div>
                            <p class="text-sm text-slate-400 max-w-md">{{ selectedSpecies.description }}</p>
                        </div>
                    </div>

                    <div class="flex flex-col items-end gap-2 w-full md:w-auto">
                        <div class="text-right w-full md:w-auto flex justify-between md:block items-center">
                            <div class="text-xs text-slate-400 mb-0.5 uppercase tracking-wide md:text-right">Lowest Ask
                            </div>
                            <div>
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
                </div>

                <div
                    class="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4 border-b border-slate-700/50 bg-slate-800/20">
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

                <div class="overflow-y-auto flex-1 custom-scrollbar">
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
                            class="w-full flex-1 bg-slate-800/20 rounded-lg relative overflow-hidden border border-slate-700/30 p-2 min-h-[200px]">
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

                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse min-w-[300px]">
                                <thead
                                    class="text-xs uppercase text-slate-500 sticky top-0 bg-slate-900/90 backdrop-blur pb-2">
                                    <tr>
                                        <th class="pb-3 pl-2">Seller</th>
                                        <th class="pb-3">Quality</th>
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
                                        <td class="py-3 text-right font-mono text-emerald-400 font-bold">
                                            {{ listing.price }}
                                        </td>
                                        <td class="py-3 text-right pr-2">
                                            <button @click="handleBuy(listing)" :disabled="!!buyingId"
                                                class="btn btn-xs btn-primary opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span v-if="buyingId === listing.id"
                                                    class="loading loading-spinner loading-xs"></span>
                                                <span v-else>Buy</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div v-if="activeListingsForSelected.length === 0"
                                class="flex h-20 items-center justify-center">
                                <span class="text-slate-500 italic">
                                    No one is selling this flower currently.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-if="activeMode === 'SELL'">
                <div class="md:hidden p-4 border-b border-slate-700/50 bg-slate-800/50 flex items-center gap-2 cursor-pointer"
                    @click="goBackToMobileList">
                    <span class="text-slate-400">← Back to Inventory</span>
                </div>

                <div v-if="selectedSellItems.length > 0" class="flex flex-col h-full overflow-y-auto">
                    <div
                        class="p-8 flex flex-col md:flex-row gap-8 items-center border-b border-slate-700/50 bg-slate-800/20">
                        <div class="w-32 h-32 bg-slate-900 rounded-2xl p-4 border-2 shadow-xl flex items-center justify-center relative shrink-0"
                            :style="getRarityGlowStyle(selectedSellItems[0].species.rarity)">

                            <div
                                class="absolute -top-3 -right-3 bg-emerald-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center border-4 border-slate-800 z-10">
                                {{ selectedSellItems.length }}
                            </div>

                            <FlowerImage :slug="selectedSellItems[0].species.slugName" status="MATURE" type="sprite"
                                size="100%" class="drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]" />
                        </div>

                        <div class="flex-1 text-center md:text-left">
                            <div class="flex items-center justify-center md:justify-start gap-3 mb-2 flex-wrap">
                                <h2 class="text-3xl font-bold text-white">
                                    {{ selectedSellItems.length > 1 ? 'Bulk Listing' : selectedSellItems[0].species.name
                                    }}
                                </h2>
                            </div>

                            <div class="text-slate-400 text-sm">
                                Listing <span class="text-white font-bold">{{ selectedSellItems.length }}</span> items
                                of
                                <span class="text-emerald-400">{{ selectedSellItems[0].species.name }}</span>
                            </div>

                            <button @click="selectAllOfSpecies(selectedSellItems[0].species.id)"
                                class="mt-4 btn btn-xs btn-outline btn-ghost text-slate-400">
                                Select all {{ selectedSellItems[0].species.name }}
                            </button>
                        </div>
                    </div>

                    <div class="p-8 flex-1 flex flex-col max-w-lg mx-auto md:mx-0 w-full justify-center">

                        <div
                            class="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm shadow-xl">

                            <h3 class="text-lg font-bold text-slate-300 mb-6 flex items-center justify-between">
                                <span>Set Unit Price</span>
                                <span class="text-xs font-normal text-slate-500 uppercase tracking-wider">Market
                                    Listing</span>
                            </h3>

                            <div class="flex flex-col gap-2 mb-8">
                                <div class="relative group">
                                    <div
                                        class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </div>

                                    <input type="number" v-model.number="sellPrice" min="1" step="1" placeholder="0"
                                        class="input input-lg w-full bg-slate-950/50 border-2 border-slate-700 text-center font-mono text-3xl text-emerald-400 focus:border-emerald-500 focus:outline-none transition-all h-20 placeholder:text-slate-700" />

                                    <div
                                        class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm pointer-events-none">
                                        SAP
                                    </div>
                                </div>

                                <div class="flex justify-center">
                                    <button @click="sellPrice = recommendedPrice"
                                        class="text-xs text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1 group/rec">
                                        <span>Recommended: {{ recommendedPrice }} Sap</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="opacity-0 -translate-x-2 group-hover/rec:opacity-100 group-hover/rec:translate-x-0 transition-all">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="bg-slate-900/50 rounded-lg p-4 mb-6 border border-white/5 space-y-3">
                                <div class="flex justify-between text-sm text-slate-400">
                                    <span>Quantity</span>
                                    <span class="font-mono text-slate-200">x {{ selectedSellItems.length }}</span>
                                </div>
                                <div class="flex justify-between text-sm text-slate-400">
                                    <span>Unit Price</span>
                                    <span class="font-mono text-slate-200">{{ sellPrice || 0 }} Sap</span>
                                </div>

                                <div class="flex justify-between text-xs text-rose-400">
                                    <span>Market Tax (10%)</span>
                                    <span class="font-mono">- {{ taxAmount }} Sap</span>
                                </div>

                                <div class="h-px bg-slate-700/50 my-2"></div>

                                <div class="flex justify-between items-center">
                                    <span class="text-sm font-bold text-slate-300 uppercase tracking-wide">Net
                                        Profit</span>
                                    <div class="text-right">
                                        <div class="text-2xl font-mono font-bold text-emerald-400 leading-none">
                                            {{ netProfit }}
                                        </div>
                                        <div class="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Sap
                                            Total</div>
                                    </div>
                                </div>
                            </div>

                            <button @click="handleBulkSell" :disabled="isListing || sellPrice <= 0"
                                class="btn w-full btn-lg border-none bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-900/30 group relative overflow-hidden">

                                <span v-if="isListing" class="loading loading-spinner"></span>
                                <span v-else class="relative z-10 flex items-center gap-2">
                                    List Items on Market
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>

                <div v-else class="flex-1 flex items-center justify-center flex-col text-slate-600 gap-4">
                    <div class="text-6xl opacity-20">🌱</div>
                    <p>Select items from your inventory to sell.</p>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
:deep(.select:focus),
:deep(.btn:focus),
:deep(.input:focus) {
    outline: none;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>