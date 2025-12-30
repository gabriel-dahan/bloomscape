<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { PaymentController } from '@/server/controllers/PaymentController';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { ROUTES_ENUM } from '@/routes/routes_enum';
import { StoreCategory, StoreItem } from '@/shared/economy/StoreItem';
import PixelImageViewer from '@/components/icons/PixelImageViewer.vue';

const auth = useAuthStore();
const router = useRouter();

// --- STATE ---
const items = ref<StoreItem[]>([]);
const isLoading = ref(true);
const activeCategory = ref<string>('All');
const processingId = ref<string | null>(null); // Track which item is being bought

// Mock Data (Fallback if backend is empty)
const mockItems: Partial<StoreItem>[] = [
    { id: '1', name: 'Handful of Gems', description: '500 Shiny Gems to spend.', price: 4.99, category: StoreCategory.CURRENCY, imageUrl: '/assets/store/gems_small.png', isPopular: false },
    { id: '2', name: 'Sack of Gems', description: '1200 Gems. Good value!', price: 9.99, category: StoreCategory.CURRENCY, imageUrl: '/assets/store/gems_medium.png', isPopular: true },
    { id: '3', name: 'Chest of Gems', description: '3000 Gems. Best value!', price: 24.99, category: StoreCategory.CURRENCY, imageUrl: '/assets/store/gems_large.png', isPopular: false },
    { id: '4', name: 'Starter Bundle', description: 'Exclusive Planter + 500 Gems', price: 14.99, category: StoreCategory.BUNDLE, imageUrl: '/assets/store/bundle_starter.png', isNew: true },
    { id: '5', name: 'Golden Watering Can', description: 'Water crops instantly.', price: 7.99, category: StoreCategory.COSMETIC, imageUrl: '/assets/store/tool_gold.png', isPopular: false },
];

// --- COMPUTED ---
const categories = computed(() => ['All', ...Object.values(StoreCategory)]);

const filteredItems = computed(() => {
    if (activeCategory.value === 'All') return items.value;
    return items.value.filter(i => i.category === activeCategory.value);
});

// --- ACTIONS ---
async function loadStore() {
    isLoading.value = true;
    try {
        const res = await PaymentController.getStoreItems();
        if (res.length > 0) {
            items.value = res;
        } else {
            // Use mock data for display purposes if DB is empty
            items.value = mockItems as StoreItem[];
        }
    } catch (e) {
        console.error("Failed to load store", e);
    } finally {
        isLoading.value = false;
    }
}

async function buyItem(item: StoreItem) {
    if (!auth.user) {
        // Redirect to login if not authenticated
        // assuming you have a login route or modal logic
        alert("Please login to purchase items.");
        return;
    }

    if (!confirm(`Confirm purchase of ${item.name} for $${item.price}?`)) return;

    processingId.value = item.id;
    try {
        const res = await PaymentController.initiatePurchase(item.id);
        if (res.success) {
            alert(res.message);
            // Optional: Refresh user balance/inventory here
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
                    class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 mb-4 drop-shadow-sm">
                    Premium Store
                </h1>
                <p class="text-slate-400 max-w-2xl mx-auto">
                    Support BloomScape and unlock exclusive cosmetics, bundles, and currency.
                </p>
            </div>

            <div class="flex flex-wrap justify-center gap-2 mb-10">
                <button v-for="cat in categories" :key="cat" @click="activeCategory = cat"
                    class="btn btn-sm md:btn-md rounded-full px-6 transition-all duration-300 border-none" :class="activeCategory === cat
                        ? 'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'">
                    {{ cat }}
                </button>
            </div>

            <div v-if="isLoading" class="flex justify-center py-20">
                <span class="loading loading-dots loading-lg text-amber-500"></span>
            </div>

            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                <div v-for="item in filteredItems" :key="item.id"
                    class="group relative bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-xl">

                    <div class="absolute top-3 left-3 z-20 flex flex-col gap-1">
                        <span v-if="item.isPopular"
                            class="badge badge-warning gap-1 shadow-lg font-bold text-xs uppercase tracking-wider">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="w-3 h-3">
                                <path fill-rule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                    clip-rule="evenodd" />
                            </svg>
                            Best Seller
                        </span>
                        <span v-if="item.isNew"
                            class="badge badge-accent text-slate-900 font-bold text-xs uppercase tracking-wider shadow-lg">
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
                        <h3 class="text-xl font-bold text-slate-100 mb-1">{{ item.name }}</h3>
                        <p class="text-sm text-slate-400 mb-4 line-clamp-2 flex-1">{{ item.description }}</p>

                        <div class="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-slate-800">
                            <div class="flex flex-col">
                                <span class="text-xs text-slate-500 font-bold uppercase">Price</span>
                                <span class="text-xl font-mono text-amber-400 font-bold">${{ item.price.toFixed(2)
                                    }}</span>
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
                <p class="text-slate-600">Check back later for new items.</p>
            </div>

        </div>
    </div>
</template>