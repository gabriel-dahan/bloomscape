<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { remult } from 'remult';
import { useAuthStore } from '@/stores/auth';
import { FlowerStatus, FlowerRarity, ItemType } from '@/shared/types';
import { UserItem } from '@/shared/user/UserItem';
import { UserFlower } from '@/shared';
import { MarketController } from '@/server/controllers/MarketController';
import { GameController } from '@/server/controllers/GameController';

const auth = useAuthStore();
const flowerRepo = remult.repo(UserFlower);
const itemRepo = remult.repo(UserItem);

const activeTab = ref<'FLOWERS' | 'ITEMS'>('FLOWERS');
const isLoading = ref(true);
const selectedObject = ref<UserFlower | UserItem | null>(null);

const rawFlowers = ref<UserFlower[]>([]);
const rawItems = ref<UserItem[]>([]);

const searchQuery = ref('');
const currentMarketPrice = ref<number | null>(null);
const activeListingCount = ref<number>(0);

type DisplaySize = 'SMALL' | 'MEDIUM' | 'LARGE';
const displaySize = ref<DisplaySize>('SMALL');

type SortOption = 'QUALITY_DESC' | 'QUALITY_ASC' | 'RARITY_DESC' | 'NAME_ASC' | 'QUANTITY_DESC';
const flowerSort = ref<SortOption>('RARITY_DESC');
const itemSort = ref<SortOption>('QUANTITY_DESC');

const fetchInventory = async () => {
    if (!auth.user) return;

    isLoading.value = true;
    try {
        const { flowers, items } = await GameController.getUserInventory()

        rawFlowers.value = flowers

        rawItems.value = items
    } catch (e) {
        console.error(e);
    } finally {
        isLoading.value = false;
    }
};

onMounted(async () => {
    if (!auth.user) await auth.fetchSessionUser();
    fetchInventory();
});

const rarityOrder: { [key in FlowerRarity]: number } = {
    'COMMON': 0,
    'UNCOMMON': 1,
    'RARE': 2,
    'EPIC': 3,
    'LEGENDARY': 4,
};

const flowers = computed(() => {
    let list = [...rawFlowers.value];

    if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase();
        list = list.filter(f => f.species?.name.toLowerCase().includes(q));
    }

    switch (flowerSort.value) {
        case 'QUALITY_DESC':
            return list.sort((a, b) => b.quality - a.quality);
        case 'QUALITY_ASC':
            return list.sort((a, b) => a.quality - b.quality);
        case 'RARITY_DESC':
            return list.sort((a, b) => {
                const rA = rarityOrder[a.species?.rarity || 'COMMON'];
                const rB = rarityOrder[b.species?.rarity || 'COMMON'];
                return rB - rA;
            });
        case 'NAME_ASC':
            return list.sort((a, b) => (a.species?.name || '').localeCompare(b.species?.name || ''));
        default:
            return list;
    }
});

const items = computed(() => {
    let list = [...rawItems.value];

    if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase();
        list = list.filter(i => i.definition?.name.toLowerCase().includes(q));
    }

    switch (itemSort.value) {
        case 'QUANTITY_DESC':
            return list.sort((a, b) => b.quantity - a.quantity);
        case 'NAME_ASC':
            return list.sort((a, b) => (a.definition?.name || '').localeCompare(b.definition?.name || ''));
        default:
            return list;
    }
});

// Logic to fetch live market data using the Backend Controller
watch(selectedObject, async (newVal) => {
    currentMarketPrice.value = null;
    activeListingCount.value = 0;

    if (newVal && isFlower(newVal) && newVal.speciesId) {
        try {
            // Using the new Controller method to bypass "Admin Only" restriction on MarketListing Entity
            const metrics = await MarketController.getFlowerMarketMetrics(newVal.speciesId);

            currentMarketPrice.value = metrics.lowestPrice;
            activeListingCount.value = metrics.count;
        } catch (e) {
            console.error("Error fetching market data", e);
        }
    }
});

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
};

const getItemTypeIcon = (type?: ItemType) => {
    switch (type) {
        case 'CONSUMABLE': return '🧪';
        case 'TOOL': return '🔨';
        case 'RESOURCE': return '🪵';
        default: return '📦';
    }
};

const isFlower = (obj: any): obj is UserFlower => {
    return obj && 'species' in obj;
};

const flowerSortOptions: { value: SortOption, label: string }[] = [
    { value: 'RARITY_DESC', label: 'Rarity (High to Low)' },
    { value: 'QUALITY_DESC', label: 'Quality (High to Low)' },
    { value: 'NAME_ASC', label: 'Name (A-Z)' },
];

const itemSortOptions: { value: SortOption, label: string }[] = [
    { value: 'QUANTITY_DESC', label: 'Quantity (High to Low)' },
    { value: 'NAME_ASC', label: 'Name (A-Z)' },
];

watch(activeTab, () => {
    selectedObject.value = null;
});
</script>

<template>
    <div class="flex h-full w-full text-slate-200 overflow-hidden">

        <div class="flex-1 flex flex-col border-r border-slate-700/50 bg-slate-900/30">

            <div class="flex border-b border-slate-700/50">
                <button @click="activeTab = 'FLOWERS'"
                    class="flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors relative"
                    :class="activeTab === 'FLOWERS' ? 'text-emerald-400 bg-slate-800/50' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/20'">
                    🌱 Seeds Bag
                    <div v-if="activeTab === 'FLOWERS'" class="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400">
                    </div>
                </button>
                <button @click="activeTab = 'ITEMS'"
                    class="flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors relative"
                    :class="activeTab === 'ITEMS' ? 'text-blue-400 bg-slate-800/50' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/20'">
                    🎒 Backpack
                    <div v-if="activeTab === 'ITEMS'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></div>
                </button>
            </div>

            <div class="flex flex-col gap-3 p-3 border-b border-slate-700/50 bg-slate-900/50">

                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text" v-model="searchQuery" placeholder="Search..."
                        class="input input-sm w-full bg-slate-800 border-slate-700 text-slate-200 pl-9 focus:outline-none focus:border-slate-500 placeholder-slate-500 transition-colors" />
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <label class="text-xs text-slate-400 whitespace-nowrap">Sort by:</label>
                        <select v-if="activeTab === 'FLOWERS'" v-model="flowerSort"
                            class="select select-bordered select-xs bg-slate-800 border-slate-700 text-slate-300 focus:outline-none">
                            <option v-for="option in flowerSortOptions" :key="option.value" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>

                        <select v-if="activeTab === 'ITEMS'" v-model="itemSort"
                            class="select select-bordered select-xs bg-slate-800 border-slate-700 text-slate-300 focus:outline-none">
                            <option v-for="option in itemSortOptions" :key="option.value" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>
                    </div>

                    <div v-if="activeTab === 'FLOWERS'"
                        class="flex items-center gap-1 p-1 bg-slate-800 rounded-lg border border-slate-700/50">
                        <button @click="displaySize = 'SMALL'" class="p-1.5 rounded transition-colors"
                            :class="displaySize === 'SMALL' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-500 hover:text-slate-300'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </button>
                        <button @click="displaySize = 'MEDIUM'" class="p-1.5 rounded transition-colors"
                            :class="displaySize === 'MEDIUM' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-500 hover:text-slate-300'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                        </button>
                        <button @click="displaySize = 'LARGE'" class="p-1.5 rounded transition-colors"
                            :class="displaySize === 'LARGE' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-500 hover:text-slate-300'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <rect x="3" y="3" width="14" height="14" rx="2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">

                <div v-if="isLoading" class="flex justify-center items-center h-full">
                    <span class="loading loading-spinner loading-lg text-emerald-500"></span>
                </div>

                <div v-else-if="(activeTab === 'FLOWERS' && flowers.length === 0) || (activeTab === 'ITEMS' && items.length === 0)"
                    class="flex flex-col items-center justify-center h-full text-slate-500 opacity-60">
                    <div class="text-4xl mb-2">🤷‍♂️</div>
                    <p v-if="searchQuery">No results found.</p>
                    <p v-else>This pocket is empty.</p>
                </div>

                <div v-if="activeTab === 'FLOWERS' && !isLoading" class="grid gap-3" :class="{
                    'grid-cols-3 sm:grid-cols-4 md:grid-cols-5': displaySize === 'LARGE',
                    'grid-cols-4 sm:grid-cols-5 md:grid-cols-6': displaySize === 'MEDIUM',
                    'grid-cols-5 sm:grid-cols-6 md:grid-cols-7': displaySize === 'SMALL'
                }">
                    <div v-for="flower in flowers" :key="flower.id" @click="selectedObject = flower"
                        class="aspect-square rounded-xl border cursor-pointer transition-all hover:scale-105 hover:shadow-lg relative group bg-slate-800/40 flex items-center justify-center"
                        :style="selectedObject?.id === flower.id ? getRarityGlowStyle(flower.species?.rarity) : { borderColor: 'rgba(51, 65, 85, 0.5)' }">

                        <div class="w-full h-full p-2 flex items-center justify-center">
                            <img :src="GameController.getFlowerAssetUrl(flower.species?.slugName, 'SEED', 'icon')"
                                class="w-full h-full object-contain drop-shadow-md opacity-90 group-hover:opacity-100" />
                        </div>

                        <div
                            class="absolute top-1 right-1 text-[10px] font-mono bg-black/50 px-1 rounded text-white backdrop-blur-sm">
                            Q{{ Math.round(flower.quality * 100) }}
                        </div>
                    </div>
                </div>

                <div v-if="activeTab === 'ITEMS' && !isLoading"
                    class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    <div v-for="item in items" :key="item.id" @click="selectedObject = item"
                        class="aspect-square rounded-xl border border-slate-700/50 bg-slate-800/40 cursor-pointer transition-all hover:scale-105 hover:bg-slate-700 hover:border-blue-500/50 relative group"
                        :class="{ 'ring-2 ring-blue-400 bg-slate-700': selectedObject?.id === item.id }">
                        <div class="w-full h-full p-2 flex items-center justify-center">
                            <img :src="item.definition?.assetUrl"
                                class="w-full h-full object-contain drop-shadow-md opacity-90 group-hover:opacity-100" />
                        </div>

                        <div
                            class="absolute bottom-1 right-1 bg-slate-900 text-slate-200 text-xs font-bold px-1.5 py-0.5 rounded border border-slate-700">
                            x{{ item.quantity }}
                        </div>

                        <div class="absolute top-1 left-1 opacity-50 text-xs">
                            {{ getItemTypeIcon(item.definition?.type) }}
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="w-80 flex flex-col bg-slate-900/80 backdrop-blur-xl border-l border-slate-700/50 p-6 relative">
            <transition name="fade" mode="out-in">
                <div v-if="!selectedObject"
                    class="flex-1 flex flex-col items-center justify-center text-center text-slate-500">
                    <div
                        class="w-16 h-16 rounded-full bg-slate-800 mb-4 flex items-center justify-center text-2xl animate-pulse">
                        👆
                    </div>
                    <p class="text-sm">Select an item to view details</p>
                </div>

                <div v-else-if="isFlower(selectedObject)" :key="selectedObject.id" class="flex flex-col h-full">
                    <div class="flex justify-center mb-6">
                        <div class="w-32 h-32 rounded-2xl bg-slate-900/50 border shadow-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                            :style="getRarityGlowStyle(selectedObject.species?.rarity)">
                            <img :src="GameController.getFlowerAssetUrl(selectedObject.species?.slugName, 'SEED', 'sprite')"
                                class="w-24 h-24 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] scale-125" />
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex items-center justify-between mb-1">
                            <h2 class="text-xl font-bold text-white">{{ selectedObject.species?.name }}</h2>
                            <span class="text-xs px-2 py-0.5 rounded border uppercase font-bold"
                                :class="getRarityTextColorClass(selectedObject.species?.rarity)">
                                {{ selectedObject.species?.rarity }}
                            </span>
                        </div>
                        <p class="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Seed</p>
                        <p class="text-sm text-slate-400 italic leading-relaxed">
                            {{ selectedObject.species?.description }}
                        </p>
                    </div>

                    <div class="bg-slate-800/40 p-3 rounded-lg border border-slate-700/50 mb-4">
                        <div class="flex justify-between items-center mb-2 pb-2 border-b border-slate-700/30">
                            <span class="text-xs font-bold text-slate-400 uppercase">Market Data</span>
                            <span class="text-xs text-slate-500">{{ activeListingCount }} Listings</span>
                        </div>
                        <div class="flex justify-between items-end">
                            <span class="text-xs text-slate-400">Est. Market Value</span>
                            <div v-if="currentMarketPrice !== null"
                                class="text-lg font-mono text-emerald-400 font-bold">
                                {{ currentMarketPrice }} <span class="text-xs font-normal">Sap</span>
                            </div>
                            <div v-else class="text-sm text-slate-500 italic">
                                Unavailable
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3 mb-auto">
                        <div class="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                            <div class="flex justify-between text-xs mb-1">
                                <span class="text-slate-400">Quality</span>
                                <span class="text-emerald-400 font-mono">{{ Math.round(selectedObject.quality * 100)
                                }}%</span>
                            </div>
                            <progress class="progress progress-success w-full h-1.5"
                                :value="selectedObject.quality * 100" max="100"></progress>
                        </div>

                        <div
                            class="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 flex justify-between items-center">
                            <span class="text-xs text-slate-400">Growth Time</span>
                            <span class="text-sm text-slate-200">
                                {{ Math.round((selectedObject.species?.growthDuration || 0) / 60) }} min
                            </span>
                        </div>
                    </div>

                    <div class="mt-6 space-y-2">
                        <button class="btn btn-primary w-full shadow-lg shadow-emerald-500/20">
                            Plant in Garden
                        </button>
                        <button class="btn btn-ghost btn-sm w-full text-slate-400 hover:text-red-400">
                            Trash
                        </button>
                    </div>
                </div>

                <div v-else :key="`item-${selectedObject.id}`" class="flex flex-col h-full">
                    <div class="flex justify-center mb-6">
                        <div
                            class="w-32 h-32 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center relative overflow-hidden shadow-2xl">
                            <img :src="selectedObject.definition?.assetUrl"
                                class="w-20 h-20 object-contain drop-shadow-lg" />
                        </div>
                    </div>

                    <div class="mb-6">
                        <h2 class="text-xl font-bold text-white mb-1">{{ selectedObject.definition?.name }}</h2>
                        <div class="flex gap-2 mb-3">
                            <span class="badge badge-neutral text-xs font-mono">{{ selectedObject.definition?.type
                            }}</span>
                            <span v-if="selectedObject.definition?.isTradable"
                                class="badge badge-ghost text-xs">Tradable</span>
                        </div>
                        <p class="text-sm text-slate-400 leading-relaxed">
                            {{ selectedObject.definition?.description }}
                        </p>
                    </div>

                    <div class="space-y-3 mb-auto">
                        <div
                            class="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                            <span class="text-sm text-slate-400">Quantity Owned</span>
                            <span class="text-xl font-mono font-bold text-white">{{ selectedObject.quantity }}</span>
                        </div>

                        <div
                            class="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                            <span class="text-sm text-slate-400">Base Value</span>
                            <span class="text-sm font-mono text-emerald-400">
                                {{ (selectedObject.definition?.basePrice || 0) * selectedObject.quantity }} Sap
                            </span>
                        </div>
                    </div>

                    <div class="mt-6 space-y-2">
                        <button v-if="selectedObject.definition?.type === 'CONSUMABLE'"
                            class="btn btn-info w-full text-white">
                            Use Item
                        </button>
                        <button v-else class="btn btn-secondary w-full">
                            Equip / Inspect
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>