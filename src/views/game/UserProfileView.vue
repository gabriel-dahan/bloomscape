<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { UserController } from '@/server/controllers/UserController';
import { GameController } from '@/server/controllers/GameController';
import { User } from '@/shared/user/User';
import { Role, FlowerRarity } from '@/shared/types';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';
import { useGameStore } from '@/stores/game';
import { FlowerDiscovery } from '@/shared/analytics/FlowerDiscovery';
import FlowerImage from '@/components/FlowerImage.vue';
import PixelImageViewer from '@/components/icons/PixelImageViewer.vue';

const route = useRoute();
const router = useRouter();

const auth = useAuthStore();
const game = useGameStore();

// --- STATE ---
const isLoading = ref(true);
const user = ref<User | null>(null);
const hasIsland = ref(false);
const latestDiscoveries = ref<FlowerDiscovery[]>([]);
const achievements = ref<any[]>([]);
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

    if (!targetTag && !auth.user) {
        router.push(ROUTES.LOGIN.path);
        return;
    }

    try {
        const res = await UserController.getUserByTag(targetTag)

        if (res && res.user) {
            user.value = res.user
            stats.value.joinedAt = new Date(res.user.createdAt!).toLocaleDateString()

            game.setXPContext(res.user.xp);

            const [islandDetails, achievementList, discoveries] = await Promise.all([
                GameController.getIslandDetails(res.user.id),
                GameController.getUserAchievements(res.user.id),
                UserController.getLatestDiscoveries(res.user.id)
            ]);

            hasIsland.value = !!islandDetails
            achievements.value = achievementList
            latestDiscoveries.value = discoveries;

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

// ... Navigation functions remain the same ...

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

            <div class="relative h-70 md:h-60 w-full overflow-hidden">
                <div class="absolute inset-0 bg-linear-to-b from-emerald-900/40 via-slate-900/80 to-slate-950 z-0">
                </div>
                <div class="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px]"></div>
                <div class="absolute top-10 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

                <div
                    class="absolute top-2 left-0 w-full p-4 md:p-10 flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 z-10">

                    <div class="relative group shrink-0">
                        <div
                            class="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-slate-800 border-4 border-slate-950 shadow-2xl flex items-center justify-center text-4xl overflow-hidden relative">
                            <span class="z-10">{{ user.tag.substring(0, 2).toUpperCase() }}</span>
                            <div class="absolute inset-0 bg-linear-to-tr from-slate-800 to-slate-700"></div>
                        </div>
                        <div class="absolute -bottom-2 -right-2 badge badge-lg border-slate-950 font-bold shadow-lg"
                            :class="user.roles.includes(Role.ADMIN) ? 'badge-error text-white' : 'badge-primary text-slate-900'">
                            Lv. {{ user.level }}
                        </div>
                    </div>

                    <div class="flex-1 mb-2 text-center md:text-left">
                        <h1
                            class="text-3xl md:text-5xl font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-3">
                            {{ user.tag }}
                            <span v-if="user.roles.includes(Role.ADMIN)" class="tooltip tooltip-right"
                                data-tip="Administrator">
                                <div class="inline-block mt-1">
                                    <PixelImageViewer src="/src/private/icons/badges/admin.png" alt="Admin"
                                        height="24px" width="24px" />
                                </div>
                            </span>
                        </h1>
                        <p class="text-slate-400 mt-1 max-w-xl text-sm md:text-base line-clamp-2">
                            {{ user.description || "No bio provided yet." }}
                        </p>
                    </div>

                    <div class="flex gap-3 w-full md:w-auto mt-2 md:mt-0">
                        <button v-if="hasIsland" @click="navigateToLand"
                            class="btn btn-primary flex-1 md:flex-none shadow-lg shadow-emerald-900/20">
                            Visit Island
                        </button>
                        <button v-if="isOwnProfile" @click="navigateToSettings"
                            class="btn btn-outline border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 flex-1 md:flex-none">
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
                                <span class="text-xs font-mono text-emerald-400">{{ game.xpProgress.current }} / {{
                                    game.xpProgress.max }} XP</span>
                            </div>
                            <progress class="progress progress-success w-full bg-slate-800 h-3" :value="levelProgress"
                                max="100"></progress>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="text-lg font-bold text-white font-mono">{{ user.sap.toLocaleString() }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Net Worth</div>
                        </div>
                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="text-lg font-bold text-white font-mono">{{ user.maxPlots }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Plots Owned</div>
                        </div>
                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="text-lg font-bold text-white font-mono">{{ user.score }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Score</div>
                        </div>
                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
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
                                    class="flex items-center gap-4 p-3 rounded-lg border transition-all"
                                    :class="ach.unlocked ? 'bg-slate-800/50 border-slate-700/50' : 'bg-slate-950/50 border-transparent opacity-50 grayscale'">
                                    <div>
                                        <div class="font-bold text-sm"
                                            :class="ach.unlocked ? 'text-white' : 'text-slate-500'">{{ ach.name }}</div>
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

                    <div>
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span class="w-1 h-6 bg-amber-500 rounded-full"></span>
                            Latest Discoveries
                        </h3>
                        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 min-h-[200px]">

                            <div v-if="latestDiscoveries.length > 0"
                                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div v-for="discovery in latestDiscoveries" :key="discovery.id"
                                    class="relative group cursor-pointer perspective-1000">

                                    <div
                                        class="absolute inset-0 bg-amber-500/0 rounded-full blur-xl group-hover:bg-amber-500/10 transition-all">
                                    </div>

                                    <div class="relative bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-lg flex flex-col items-center gap-3 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                                        :class="discovery.species ? getRarityColor(discovery.species.rarity).split(' ')[2] : ''">

                                        <div class="text-4xl filter drop-shadow-md text-pink-400 mt-2">
                                            <FlowerImage :slug="discovery.species.slugName" :size="80" />
                                        </div>

                                        <div class="text-center w-full">
                                            <div class="font-bold text-white text-sm truncate w-full px-2">
                                                {{ discovery.species?.name || 'Unknown Species' }}
                                            </div>
                                            <div v-if="discovery.species"
                                                class="badge badge-xs mt-2 border-none font-bold tracking-widest py-2 px-2"
                                                :class="getRarityColor(discovery.species.rarity)">
                                                {{ discovery.species.rarity }}
                                            </div>
                                        </div>

                                        <div class="w-full h-px bg-slate-800 my-1"></div>
                                        <div class="text-[10px] text-slate-500">
                                            {{ discovery.discoveredAt ? new
                                                Date(discovery.discoveredAt).toLocaleDateString() : 'Unknown Date' }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-else class="flex flex-col items-center justify-center py-8">
                                <p class="text-slate-500 italic">No flowers discovered yet.</p>
                            </div>

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