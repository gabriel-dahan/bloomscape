<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { LeaderboardController } from '@/server/controllers/LeaderboardController';
import { Island } from '@/shared';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';

const podium = ref<any[]>([]);
const list = ref<any[]>([]);
const myStatus = ref<any>(null);
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

const loadMyStatus = async () => {
    try {
        myStatus.value = await LeaderboardController.getMyStatus();
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
    return ((currentPage.value - 1) * 10) + index + 1;
};

onMounted(async () => {
    isLoading.value = true;
    await Promise.all([loadPodium(), loadPage(1), loadMyStatus()]);
    isLoading.value = false;
});
</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 py-10 px-4 relative overflow-hidden">

        <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none">
        </div>

        <div class="max-w-4xl mx-auto relative z-10">

            <div class="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12">
                <div class="w-full lg:w-auto ml-5 text-center">
                    <h1
                        class="page-title text-4xl font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-3">
                        Leaderboard
                    </h1>
                    <p class="text-slate-400 flex justify-center lg:justify-start">Top Islands by Month Score.</p>
                </div>
            </div>

            <div v-if="isLoading" class="flex justify-center py-20">
                <span class="loading loading-bars loading-lg text-emerald-500"></span>
            </div>

            <div v-else>
                <div class="flex justify-center items-end gap-10 mb-24 h-80 pt-10">
                    <div v-for="player in orderedPodium" :key="player.id"
                        class="relative flex flex-col items-center transition-all duration-500 hover:-translate-y-2"
                        :class="{
                            'order-2 z-20 scale-110': player.rank === 1,
                            'order-1 z-10': player.rank === 2,
                            'order-3 z-0': player.rank === 3
                        }">



                        <div class="relative mb-3">
                            <div class="w-20 h-20 rounded-full border-4 overflow-hidden bg-slate-800 shadow-xl" :class="{
                                'border-yellow-400 shadow-yellow-500/30 w-24 h-24': player.rank === 1,
                                'border-slate-300 shadow-slate-400/30': player.rank === 2,
                                'border-amber-700 shadow-amber-800/30': player.rank === 3,
                                'ring-4 ring-emerald-400 ring-offset-2 ring-offset-slate-950': myStatus && player.owner?.tag === myStatus?.owner?.tag
                            }">
                                <img :src="getAvatar(player.owner?.tag || '')" class="w-full h-full object-cover" />
                            </div>
                            <div v-if="myStatus && player.owner?.tag === myStatus?.owner?.tag"
                                class="absolute -top-2 -right-2 badge badge-xs bg-emerald-500 border-none text-slate-950">
                                YOU
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
                            <RouterLink :to="ROUTES.USER_PROFILE.pathDyn(player.owner?.tag || '')"
                                class="font-bold text-white hover:text-emerald-400 transition-colors truncate max-w-[120px] block">
                                {{ player.owner?.tag }}
                            </RouterLink>
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
                            class="group flex items-center p-3 hover:bg-white/5 transition-colors"
                            :class="{ 'bg-emerald-500/10 border-l-4 border-emerald-500': myStatus && island.owner?.tag === myStatus?.owner?.tag }">

                            <div class="w-16 text-center font-mono font-bold text-slate-600 group-hover:text-white">
                                {{ calculateRank(index) }}
                            </div>

                            <div class="flex-1 px-4 flex items-center gap-3 overflow-hidden">
                                <img :src="getAvatar(island.owner?.tag || '')"
                                    class="w-10 h-10 rounded-full bg-slate-800" />
                                <div class="min-w-0">
                                    <RouterLink :to="ROUTES.USER_PROFILE.pathDyn(island.owner?.tag || '')"
                                        class="font-bold text-slate-200 truncate hover:text-emerald-400 transition-colors flex items-center gap-2">
                                        {{ island.owner?.tag }}
                                        <span v-if="myStatus && island.owner?.tag === myStatus?.owner?.tag"
                                            class="badge badge-xs bg-emerald-500 text-slate-950 border-none">YOU</span>
                                    </RouterLink>
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

                    <!-- Personal Rank Footer -->
                    <div v-if="myStatus"
                        class="p-4 bg-emerald-950/40 border-t border-emerald-500/30 flex items-center gap-4 transition-all hover:bg-emerald-950/60">
                        <div
                            class="w-16 text-center font-black text-xl text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                            #{{ myStatus.rank }}
                        </div>
                        <div class="flex-1 px-4 flex items-center gap-3 overflow-hidden">
                            <img :src="getAvatar(myStatus.owner?.tag || '')"
                                class="w-10 h-10 rounded-full bg-slate-800 border-2 border-emerald-500/50" />
                            <div class="min-w-0">
                                <RouterLink :to="ROUTES.USER_PROFILE.pathDyn(myStatus.owner?.tag || '')"
                                    class="font-bold text-white truncate hover:text-emerald-400 transition-colors flex items-center gap-2">
                                    {{ myStatus.owner?.tag }}
                                    <span class="badge badge-xs bg-emerald-500 text-slate-950 border-none">YOUR
                                        RANK</span>
                                </RouterLink>
                                <div class="text-xs text-emerald-400/60 truncate">{{ myStatus.name }}</div>
                            </div>
                        </div>
                        <div class="w-32 text-right px-4 font-mono font-bold text-emerald-400">
                            {{ myStatus.monthScore.toLocaleString() }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>