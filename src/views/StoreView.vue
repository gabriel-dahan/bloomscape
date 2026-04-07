<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { PaymentController } from '@/server/controllers/PaymentController';
import { useAuthStore } from '@/stores/auth';
import { StoreCategory, StoreItem, CurrencyType } from '@/shared/economy/StoreItem';
import PixelImageViewer from '@/components/icons/PixelImageViewer.vue';

const auth = useAuthStore();

// --- CONSTANTS ---
const REAL_CURRENCIES = {
    USD: { symbol: '$', rate: 1, name: 'US Dollar' },
    EUR: { symbol: '€', rate: 0.92, name: 'Euro' },
    GBP: { symbol: '£', rate: 0.79, name: 'British Pound' },
    JPY: { symbol: '¥', rate: 151.6, name: 'Japanese Yen' },
    CAD: { symbol: 'C$', rate: 1.35, name: 'Canadian Dollar' },
    AUD: { symbol: 'A$', rate: 1.52, name: 'Australian Dollar' },
} as const;

type RealCurrencyCode = keyof typeof REAL_CURRENCIES;

// --- STATE ---
const items = ref<StoreItem[]>([]);
const isLoading = ref(true);
const activeCategory = ref<string>('All');
const processingId = ref<string | null>(null);
const selectedRealCurrency = ref<RealCurrencyCode>('USD');

// --- COMPUTED ---
const categories = computed(() => ['All', ...Object.values(StoreCategory)]);

const filteredItems = computed(() => {
    if (activeCategory.value === 'All') return items.value;
    return items.value.filter(i => i.category === activeCategory.value.toLowerCase());
});

// --- ACTIONS ---
async function loadStore() {
    isLoading.value = true;
    try {
        const res = await PaymentController.getStoreItems();
        items.value = res;
    } catch (e) {
        console.error("Failed to load store", e);
    } finally {
        isLoading.value = false;
    }
}

function getFormattedPrice(item: StoreItem) {
    if (item.currency === CurrencyType.SAP || item.currency === CurrencyType.RUBY) {
        return item.price.toLocaleString();
    }
    
    // USD conversion
    const config = REAL_CURRENCIES[selectedRealCurrency.value];
    const converted = item.price * config.rate;
    
    if (selectedRealCurrency.value === 'JPY') {
        return `${config.symbol}${Math.round(converted)}`;
    }
    return `${config.symbol}${converted.toFixed(2)}`;
}

function getPriceLabel(item: StoreItem) {
    if (item.currency === CurrencyType.SAP) return 'Sap Price';
    if (item.currency === CurrencyType.RUBY) return 'Ruby Price';
    return `Price (${selectedRealCurrency.value})`;
}

async function buyItem(item: StoreItem) {
    if (!auth.user) {
        alert("Please login to purchase items.");
        return;
    }

    const priceStr = getFormattedPrice(item);
    if (!confirm(`Confirm purchase of ${item.name} for ${priceStr}?`)) return;

    processingId.value = item.id;
    try {
        const res = await PaymentController.initiatePurchase(item.id);
        if (res.success) {
            alert(res.message);
            await auth.fetchSessionUser();
        }
    } catch (e: any) {
        alert("Purchase failed: " + e.message);
    } finally {
        processingId.value = null;
    }
}

onMounted(() => {
    loadStore();
});
</script>

<template>
    <div class="w-screen h-full bg-slate-950 text-slate-200 pt-10 pb-20 relative overflow-hidden">

        <div
            class="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-amber-900/20 to-slate-950 pointer-events-none z-0">
        </div>
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none">
        </div>

        <div class="max-w-7xl mx-auto px-6 py-10 relative z-10">

            <div class="text-center mb-12">
                <h1
                    class="page-title text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 mb-4 drop-shadow-sm">
                    Store
                </h1>
                <p class="text-slate-400 max-w-2xl mx-auto">
                    Support BloomScape and unlock exclusive cosmetics, bundles, and currency.
                </p>
                
                <div v-if="auth.user" class="mt-6 flex flex-wrap justify-center gap-4">
                    <div class="flex items-center gap-2 bg-slate-900/80 px-5 py-2 rounded-full border border-slate-700 shadow-lg">
                        <img src="/game/sap_drop.png" class="w-4 h-4 object-contain" alt="Sap" />
                        <span class="text-emerald-400 font-mono font-bold">{{ auth.user.sap.toLocaleString() }}</span>
                    </div>
                    <div class="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-700 shadow-lg">
                        <img src="/game/ruby.png" class="w-4 h-4 object-contain" alt="Rubies" />
                        <span class="text-rose-400 font-mono font-bold">{{ (auth.user as any).rubies?.toLocaleString() || 0 }}</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                <div class="flex flex-wrap gap-2">
                    <button v-for="cat in categories" :key="cat" @click="activeCategory = cat"
                        class="btn btn-sm rounded-full px-6 transition-all duration-300 border-none capitalize" :class="activeCategory === cat
                            ? 'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)] font-bold'
                            : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'">
                        {{ cat }}
                    </button>
                </div>

                <div class="form-control">
                    <div class="input-group flex items-center bg-slate-900 border border-slate-700 rounded-full px-4 py-1">
                        <span class="text-xs text-slate-500 uppercase font-bold mr-2">Currency:</span>
                        <select v-model="selectedRealCurrency" class="select select-ghost select-xs focus:ring-0 focus:outline-none bg-transparent text-amber-400 font-bold w-24">
                            <option v-for="(v, k) in REAL_CURRENCIES" :key="k" :value="k">{{ k }} ({{ v.symbol }})</option>
                        </select>
                    </div>
                </div>
            </div>

            <div v-if="isLoading" class="flex justify-center py-20">
                <span class="loading loading-dots loading-lg text-amber-500"></span>
            </div>

            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                <div v-for="item in filteredItems" :key="item.id"
                    class="group relative bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-xl">

                    <div class="absolute top-3 left-3 z-20 flex flex-col gap-1">
                        <span v-if="item.isPopular"
                            class="badge badge-warning gap-1 shadow-lg font-bold text-[10px] uppercase tracking-wider h-5">
                            🔥 Popular
                        </span>
                        <span v-if="item.isNew"
                            class="badge badge-accent text-slate-900 font-bold text-[10px] uppercase tracking-wider shadow-lg h-5">
                            New
                        </span>
                    </div>

                    <div
                        class="relative w-full h-48 bg-slate-950 rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-slate-800/50 group-hover:border-amber-500/20 transition-colors">
                        <div
                            class="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors blur-xl">
                        </div>

                        <div class="z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <PixelImageViewer :src="item.imageUrl" :alt="item.name" width="128px" height="128px" />
                        </div>
                    </div>

                    <div class="flex-1 flex flex-col">
                        <h3 class="text-xl font-bold text-slate-100 mb-1 group-hover:text-amber-200 transition-colors">{{ item.name }}</h3>
                        <p class="text-sm text-slate-400 mb-4 line-clamp-2 flex-1">{{ item.description }}</p>

                        <div class="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-slate-800">
                            <div class="flex flex-col">
                                <span class="text-[10px] text-slate-500 font-black uppercase tracking-tighter">{{ getPriceLabel(item) }}</span>
                                <div class="flex items-center gap-1">
                                    <span class="text-xl font-mono font-black" :class="{
                                        'text-amber-400': item.currency === CurrencyType.USD,
                                        'text-emerald-400': item.currency === CurrencyType.SAP,
                                        'text-rose-400': item.currency === CurrencyType.RUBY
                                    }">{{ getFormattedPrice(item) }}</span>
                                    <img v-if="item.currency === CurrencyType.SAP" src="/game/sap_drop.png" class="w-5 h-5 object-contain" alt="Sap" />
                                    <img v-if="item.currency === CurrencyType.RUBY" src="/game/ruby.png" class="w-5 h-5 object-contain" alt="Ruby" />
                                </div>
                            </div>

                            <button @click="buyItem(item)" :disabled="!!processingId"
                                class="btn btn-primary bg-amber-500 hover:bg-amber-400 border-none text-slate-900 px-6 font-bold shadow-lg shadow-amber-900/20 disabled:bg-slate-800 disabled:text-slate-500">
                                <span v-if="processingId === item.id" class="loading loading-spinner loading-xs"></span>
                                <span v-else>Buy</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div v-if="!isLoading && filteredItems.length === 0" class="text-center py-20">
                <div class="text-6xl mb-4">🛒</div>
                <h3 class="text-2xl font-bold text-slate-500">Store is empty</h3>
                <p class="text-slate-600 text-sm">Check back later for new items.</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
.select-ghost:focus {
    background-color: transparent !important;
}
</style>
