<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { LeaderboardController } from '@/server/controllers/LeaderboardController';
import { Island } from '@/shared';

const podium = ref<Island[]>([]);
const list = ref<Island[]>([]);
const currentPage = ref(1);
const totalPages = ref(1);
const isLoading = ref(true);
const isListLoading = ref(false);

const orderedPodium = computed(() => {
    if (podium.value.length === 0) return [];
    const first = podium.value[0];
    const second = podium.value[1] || null;
    const third = podium.value[2] || null;

    const res = [];
    if (second) res.push({ ...second, rank: 2 });
    if (first) res.push({ ...first, rank: 1 });
    if (third) res.push({ ...third, rank: 3 });
    return res;
});

const getAvatar = (seed: string) =>
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4`;

const loadPodium = async () => {
    try {
        podium.value = await LeaderboardController.getPodium();
    } catch (e) {
        console.error(e);
    }
};

const loadPage = async (page: number) => {
    isListLoading.value = true;
    try {
        const res = await LeaderboardController.getLeaderboardPage(page);
        list.value = res.items;
        totalPages.value = res.totalPages;
        currentPage.value = page;
    } catch (e) {
        console.error(e);
    } finally {
        isListLoading.value = false;
    }
};

const changePage = (delta: number) => {
    const newPage = currentPage.value + delta;
    if (newPage >= 1 && newPage <= totalPages.value) {
        loadPage(newPage);
    }
};

const calculateRank = (index: number) => {
    return 3 + ((currentPage.value - 1) * 10) + index + 1;
};

onMounted(async () => {
    isLoading.value = true;
    await Promise.all([loadPodium(), loadPage(1)]);
    isLoading.value = false;
});
</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 py-10 px-4 relative overflow-hidden">

        <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none">
        </div>

        <div class="max-w-4xl mx-auto relative z-10">

            <div class="text-center mb-12">
                <h1
                    class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-200 to-emerald-600 uppercase tracking-widest drop-shadow-sm">
                    Seasonal Ranking
                </h1>
                <p class="text-slate-500 text-sm mt-2 font-mono">Top Islands by Month Score</p>
            </div>

            <div v-if="isLoading" class="flex justify-center py-20">
                <span class="loading loading-bars loading-lg text-emerald-500"></span>
            </div>

            <div v-else>
                <div class="flex justify-center items-end gap-4 mb-16 h-64">
                    <div v-for="player in orderedPodium" :key="player.id"
                        class="relative flex flex-col items-center transition-all duration-500 hover:-translate-y-2"
                        :class="{
                            'order-2 z-20 scale-110': player.rank === 1,
                            'order-1 z-10': player.rank === 2,
                            'order-3 z-0': player.rank === 3
                        }">

                        <div v-if="player.rank === 1" class="text-4xl mb-2 animate-bounce">👑</div>

                        <div class="relative mb-3">
                            <div class="w-20 h-20 rounded-full border-4 overflow-hidden bg-slate-800 shadow-xl" :class="{
                                'border-yellow-400 shadow-yellow-500/30 w-24 h-24': player.rank === 1,
                                'border-slate-300 shadow-slate-400/30': player.rank === 2,
                                'border-amber-700 shadow-amber-800/30': player.rank === 3
                            }">
                                <img :src="getAvatar(player.owner?.tag || '')" class="w-full h-full object-cover" />
                            </div>
                            <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 badge badge-lg font-bold shadow-md"
                                :class="{
                                    'bg-yellow-400 text-yellow-900 border-yellow-300': player.rank === 1,
                                    'bg-slate-300 text-slate-800 border-slate-200': player.rank === 2,
                                    'bg-amber-700 text-amber-100 border-amber-600': player.rank === 3
                                }">
                                #{{ player.rank }}
                            </div>
                        </div>

                        <div class="text-center mt-2">
                            <div class="font-bold text-white truncate max-w-[120px]">{{ player.owner?.tag }}</div>
                            <div class="font-mono text-emerald-400 font-bold">{{ player.monthScore }} pts</div>
                        </div>

                        <div class="w-full bg-slate-800/50 backdrop-blur border-t border-white/10 rounded-t-lg mt-2 flex items-end justify-center opacity-50"
                            :class="{
                                'h-32 bg-gradient-to-t from-yellow-500/20 to-transparent': player.rank === 1,
                                'h-20 bg-gradient-to-t from-slate-500/20 to-transparent': player.rank === 2,
                                'h-12 bg-gradient-to-t from-amber-700/20 to-transparent': player.rank === 3
                            }">
                        </div>
                    </div>
                </div>

                <div
                    class="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">

                    <div
                        class="p-4 border-b border-slate-800 bg-slate-950/50 flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <div class="w-16 text-center">Rank</div>
                        <div class="flex-1 px-4">Player & Island</div>
                        <div class="w-32 text-right px-4">Score</div>
                    </div>

                    <div v-if="isListLoading" class="p-10 flex justify-center">
                        <span class="loading loading-spinner text-emerald-500"></span>
                    </div>

                    <div v-else class="divide-y divide-slate-800">
                        <div v-for="(island, index) in list" :key="island.id"
                            class="group flex items-center p-3 hover:bg-white/5 transition-colors">

                            <div class="w-16 text-center font-mono font-bold text-slate-600 group-hover:text-white">
                                {{ calculateRank(index) }}
                            </div>

                            <div class="flex-1 px-4 flex items-center gap-3 overflow-hidden">
                                <img :src="getAvatar(island.owner?.tag || '')"
                                    class="w-10 h-10 rounded-full bg-slate-800" />
                                <div class="min-w-0">
                                    <div
                                        class="font-bold text-slate-200 truncate group-hover:text-emerald-400 transition-colors">
                                        {{ island.owner?.tag }}
                                    </div>
                                    <div class="text-xs text-slate-500 truncate">{{ island.name }}</div>
                                </div>
                            </div>

                            <div class="w-32 text-right px-4 font-mono font-bold text-emerald-500">
                                {{ island.monthScore.toLocaleString() }}
                            </div>
                        </div>

                        <div v-if="list.length === 0" class="p-8 text-center text-slate-500">
                            No other players found yet.
                        </div>
                    </div>

                    <div class="p-4 border-t border-slate-800 bg-slate-950/30 flex justify-between items-center">
                        <button @click="changePage(-1)" :disabled="currentPage === 1 || isListLoading"
                            class="btn btn-sm btn-ghost text-slate-400 disabled:opacity-30">
                            ← Previous
                        </button>

                        <span class="text-xs font-mono text-slate-500">
                            Page <span class="text-white">{{ currentPage }}</span> / {{ totalPages }}
                        </span>

                        <button @click="changePage(1)" :disabled="currentPage >= totalPages || isListLoading"
                            class="btn btn-sm btn-ghost text-slate-400 disabled:opacity-30">
                            Next →
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>