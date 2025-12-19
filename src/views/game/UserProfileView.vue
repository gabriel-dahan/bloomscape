<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { UserController } from '@/server/controllers/UserController';
import { GameController } from '@/server/controllers/GameController';
import { User } from '@/shared/user/User';
import { Role, FlowerRarity } from '@/shared/types';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';

const route = useRoute();
const router = useRouter();
const auth = useAuthStore();

// --- STATE ---
const isLoading = ref(true);
const user = ref<User | null>(null);
const hasIsland = ref(false);
const userInventory = ref<any>(null);
const achievements = ref<any[]>([]); // Real data
const stats = ref({
    joinedAt: '',
    completionRate: 0,
});

// --- COMPUTED ---
const isOwnProfile = computed(() => (auth.user?.tag === route.params.tag) || (!route.params.tag && auth.user));

const levelProgress = computed(() => {
    if (!user.value) return 0;
    return Math.min(100, (user.value.xp / (user.value.level * 1000)) * 100);
});

// --- ACTIONS ---
async function fetchUserProfile() {
    isLoading.value = true
    let targetTag = route.params.tag as string

    if (!targetTag) {
        targetTag = auth.user?.tag || ''
    }

    // Safety check if direct access without auth
    if (!targetTag && !auth.user) {
        router.push(ROUTES.LOGIN.path);
        return;
    }

    try {
        const res = await UserController.getUserByTag(targetTag)

        if (res && res.user) {
            user.value = res.user
            stats.value.joinedAt = new Date(res.user.createdAt!).toLocaleDateString()

            // Parallel fetching for performance
            const [islandDetails, achievementList] = await Promise.all([
                GameController.getIslandDetails(res.user.id),
                GameController.getUserAchievements(res.user.id)
            ]);

            hasIsland.value = !!islandDetails
            achievements.value = achievementList

            // Mock Inventory (replace with real Controller call when ready)
            userInventory.value = {
                bestFlower: { name: 'Void Tulip', rarity: FlowerRarity.RARE }
            }
        } else {
            router.push({ name: ROUTES.NOT_FOUND.name })
        }
    } catch (e) {
        console.error(e)
        router.push(ROUTES.HOME.path)
    } finally {
        isLoading.value = false
    }
}

function getRarityColor(rarity: FlowerRarity | string) {
    const colors: Record<string, string> = {
        [FlowerRarity.COMMON]: 'text-slate-400 bg-slate-800',
        [FlowerRarity.UNCOMMON]: 'text-emerald-400 bg-emerald-900/30 border-emerald-500/30',
        [FlowerRarity.RARE]: 'text-blue-400 bg-blue-900/30 border-blue-500/30',
        [FlowerRarity.EPIC]: 'text-purple-400 bg-purple-900/30 border-purple-500/30',
        [FlowerRarity.LEGENDARY]: 'text-amber-400 bg-amber-900/30 border-amber-500/30'
    };
    return colors[rarity] || colors[FlowerRarity.COMMON];
}

function navigateToLand() {
    if (!user.value) return;
    router.push(ROUTES.USER_LAND.pathDyn!(user.value.tag));
}

function navigateToSettings() {
    if (!user.value) return;
    router.push(ROUTES.SETTINGS.pathDyn!(user.value.tag));
}

watch(() => route.params.tag, () => {
    user.value = null;
    fetchUserProfile();
});

onMounted(async () => {
    if (!auth.user) await auth.fetchSessionUser()
    fetchUserProfile();
});
</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 pb-20">

        <div v-if="isLoading" class="flex items-center justify-center h-screen">
            <span class="loading loading-spinner text-emerald-500 loading-lg"></span>
        </div>

        <div v-else-if="user" class="animate-fade-in relative">

            <div class="relative h-64 w-full overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-slate-900/80 to-slate-950 z-0">
                </div>
                <div class="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px]"></div>
                <div class="absolute top-10 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

                <div
                    class="absolute bottom-0 left-0 w-full p-6 phone:p-10 flex flex-col md:flex-row items-end md:items-center gap-6 z-10">

                    <div class="relative group">
                        <div
                            class="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-slate-800 border-4 border-slate-950 shadow-2xl flex items-center justify-center text-4xl overflow-hidden relative">
                            <span class="z-10">{{ user.tag.substring(0, 2).toUpperCase() }}</span>
                            <div class="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-700"></div>
                        </div>
                        <div class="absolute -bottom-2 -right-2 badge badge-lg border-slate-950 font-bold shadow-lg"
                            :class="user.roles.includes(Role.ADMIN) ? 'badge-error text-white' : 'badge-primary text-slate-900'">
                            Lv. {{ user.level }}
                        </div>
                    </div>

                    <div class="flex-1 mb-2">
                        <h1 class="text-3xl md:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
                            {{ user.tag }}
                            <span v-if="user.roles.includes(Role.ADMIN)" class="tooltip tooltip-right"
                                data-tip="Administrator">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 text-red-500">
                                    <path fill-rule="evenodd"
                                        d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.352-.272-2.65-.759-3.84a.75.75 0 00-.713-.507 11.215 11.215 0 01-7.76-3.234zM9.53 9.53a.75.75 0 000 1.06l1.97 1.97l3.97-3.97a.75.75 0 10-1.06-1.06L11.5 10.44l-1.47-1.47a.75.75 0 00-1.06 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </h1>
                        <p class="text-slate-400 mt-1 max-w-xl text-sm md:text-base line-clamp-2">
                            {{ user.description || "No bio provided yet." }}
                        </p>
                    </div>

                    <div class="flex gap-3 w-full md:w-auto">
                        <button v-if="hasIsland" @click="navigateToLand"
                            class="btn btn-primary flex-1 md:flex-none shadow-lg shadow-emerald-900/20">
                            Visit Island
                        </button>

                        <button v-if="isOwnProfile" @click="navigateToSettings"
                            class="btn btn-outline border-slate-700 text-slate-300 hover:text-white hover:border-slate-500">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 phone:px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div class="space-y-6">
                    <div class="card bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
                        <div class="card-body p-6">
                            <div class="flex justify-between items-center mb-2">
                                <span
                                    class="text-xs font-bold text-slate-500 uppercase tracking-wider">Experience</span>
                                <span class="text-xs font-mono text-emerald-400">{{ user.xp }} / {{ user.level * 1000 }}
                                    XP</span>
                            </div>
                            <progress class="progress progress-success w-full bg-slate-800 h-3" :value="levelProgress"
                                max="100"></progress>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="mb-2 text-emerald-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                </svg>
                            </div>
                            <div class="text-lg font-bold text-white font-mono">{{ user.sap.toLocaleString() }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Net Worth</div>
                        </div>

                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="mb-2 text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                </svg>
                            </div>
                            <div class="text-lg font-bold text-white font-mono">{{ user.maxPlots }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Plots Owned</div>
                        </div>

                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="mb-2 text-amber-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a3.375 3.375 0 10-6.75 0v9.75m6.75 0h2.094a1.875 1.875 0 001.875-1.875v-9m-9 0H3.562a1.875 1.875 0 00-1.875 1.875v9" />
                                </svg>
                            </div>
                            <div class="text-lg font-bold text-white font-mono">{{ user.score }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Score</div>
                        </div>

                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="mb-2 text-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                            </div>
                            <div class="text-lg font-bold text-white font-mono text-sm leading-6 mt-1">{{ stats.joinedAt
                                }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Joined</div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-2 space-y-8">

                    <div>
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span class="w-1 h-6 bg-purple-500 rounded-full"></span>
                            Achievements
                        </h3>
                        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">

                            <div v-if="achievements.length === 0" class="text-center text-slate-500 italic py-4">
                                No achievements defined.
                            </div>

                            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div v-for="ach in achievements" :key="ach.id"
                                    class="flex items-center gap-4 p-3 rounded-lg border transition-all" :class="ach.unlocked
                                        ? 'bg-slate-800/50 border-slate-700/50'
                                        : 'bg-slate-950/50 border-transparent opacity-50 grayscale'">
                                    <div>
                                        <div class="font-bold text-sm"
                                            :class="ach.unlocked ? 'text-white' : 'text-slate-500'">
                                            {{ ach.name }}
                                        </div>
                                        <div class="text-xs text-slate-500">{{ ach.description }}</div>
                                        <div v-if="ach.unlocked && ach.unlockedAt"
                                            class="text-[10px] text-emerald-500 mt-1">
                                            Unlocked {{ new Date(ach.unlockedAt).toLocaleDateString() }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="userInventory">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span class="w-1 h-6 bg-amber-500 rounded-full"></span>
                            Showcase
                        </h3>
                        <div
                            class="bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col items-center justify-center text-center min-h-[200px]">

                            <div v-if="userInventory.bestFlower" class="relative group cursor-pointer perspective-1000">
                                <div
                                    class="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/30 transition-all">
                                </div>
                                <div class="relative bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-2xl flex flex-col items-center gap-4 w-64 transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105"
                                    :class="getRarityColor(userInventory.bestFlower.rarity).split(' ')[2]">

                                    <div class="text-6xl filter drop-shadow-lg animate-float text-pink-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div class="font-bold text-white text-lg">{{ userInventory.bestFlower.name }}
                                        </div>
                                        <div class="badge badge-sm mt-2 border-none font-bold tracking-widest"
                                            :class="getRarityColor(userInventory.bestFlower.rarity)">
                                            {{ userInventory.bestFlower.rarity }}
                                        </div>
                                    </div>

                                    <div class="w-full h-px bg-slate-800 my-1"></div>
                                    <div class="text-xs text-slate-500">Discovered on {{ stats.joinedAt }}</div>
                                </div>
                            </div>
                            <p v-else class="text-slate-500 italic">No rare flowers discovered yet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.perspective-1000 {
    perspective: 1000px;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-fade-in {
    animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>