<script setup lang="ts">
// ---- IMPORTS ---- //
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import { useGameStore } from '@/stores/game';
import { storeToRefs } from 'pinia';
import { remult } from 'remult';
import { LandSceneManager } from './logic/LandSceneManager';
import { useAuthStore } from '@/stores/auth';

// ---- PROPS ---- //
const props = withDefaults(defineProps<{
    userId: string,
    quality?: 'low' | 'high',
    tileSize?: number
}>(), {
    quality: 'high',
    tileSize: 2
});

// ---- STATE ---- //
const gameStore = useGameStore();
const { tiles, currentIsland, isLoading } = storeToRefs(gameStore);

// Référence isolée pour le canvas
const canvasContainerRef = ref<HTMLDivElement | null>(null);
let sceneManager: LandSceneManager | null = null;

// ---- COMPUTED ---- //
const isCurrentUser = computed(() => auth.user?.id === props.userId);
const hasIsland = computed(() => !!currentIsland.value);

// ---- LOGIC ---- //
const initData = async () => {
    if (!props.userId) return;

    // On fetch l'île et les tuiles
    await gameStore.fetchIslandData(props.userId);

    // Une fois chargé, on update la 3D
    if (sceneManager) {
        sceneManager.updateTiles(tiles.value);
    }
};

// Callback appelée par le manager 3D
const handleHover = (x: number, z: number) => {
    // Pas d'interaction si pas d'île
    if (!hasIsland.value) {
        gameStore.setHoveredTile(null);
        return;
    }

    if (isNaN(x) || isNaN(z)) {
        gameStore.setHoveredTile(null);
        return;
    }

    // Vérifie si la tuile existe dans le store
    const existingTile = gameStore.getTileAt(x, z);

    // Update seulement si changement (perf)
    if (gameStore.hoveredTile?.x !== x || gameStore.hoveredTile?.z !== z) {
        gameStore.setHoveredTile({
            x,
            z,
            id: existingTile?.id,
            isOwned: !!existingTile
        });
    }
};

const handleStartAdventure = async () => {
    await gameStore.startAdventure();
};

const auth = useAuthStore();

// ---- LIFECYCLE ---- //
onMounted(async () => {
    await auth.fetchSessionUser();

    if (!canvasContainerRef.value) return;

    // Initialisation du Manager 3D
    sceneManager = new LandSceneManager({
        quality: props.quality,
        tileSize: props.tileSize,
        onHover: handleHover
    });

    // Montage dans la div dédiée
    sceneManager.init(canvasContainerRef.value);

    // Chargement des données
    initData();
});

onUnmounted(() => {
    if (sceneManager) sceneManager.dispose();
});

// ---- WATCHERS ---- //
// Si on change de profil utilisateur
watch(() => props.userId, async (newId) => {
    if (newId) await initData();
});

// Si les tuiles changent (ex: achat d'une tuile)
watch(tiles, (newTiles) => {
    if (sceneManager) {
        sceneManager.updateTiles(newTiles);
    }
}, { deep: true });

</script>

<template>
    <div class="relative w-full h-full bg-slate-900 overflow-hidden">

        <div ref="canvasContainerRef" class="absolute inset-0 z-0 block"></div>

        <transition name="fade">
            <div v-if="!isLoading && !hasIsland"
                class="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur-sm z-998">

                <div class="card w-96 glass shadow-2xl border border-slate-700">
                    <div class="card-body text-center">
                        <div v-if="isCurrentUser">
                            <h2 class="card-title justify-center text-emerald-400">Get Started!</h2>
                            <p class="text-slate-300">Your BloomScape adventure starts here. Claim your island to start
                                building.</p>
                            <div class="card-actions justify-center mt-4">
                                <button @click="handleStartAdventure"
                                    class="btn btn-primary btn-soft rounded-2xl text-white">
                                    Start
                                </button>
                            </div>
                        </div>
                        <div v-else>
                            <h2 class="card-title justify-center text-slate-400">Uncharted Island</h2>
                            <p class="text-slate-500">This player has not started their adventure yet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div v-if="isLoading"
            class="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/60 backdrop-blur">
            <span class="loading loading-ring loading-lg text-emerald-500"></span>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>