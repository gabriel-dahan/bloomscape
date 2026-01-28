<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import { useGameStore } from '@/stores/game';
import { useTimeStore } from '@/stores/time';
import { storeToRefs } from 'pinia';
import { LandSceneManager } from './logic/LandSceneManager';
import { useAuthStore } from '@/stores/auth';
import GameClock from './GameClock.vue';

const props = withDefaults(defineProps<{
    userId: string,
    quality?: 'low' | 'high',
    tileSize?: number
}>(), {
    quality: 'high',
    tileSize: 2
});

const gameStore = useGameStore();
const timeStore = useTimeStore();
const { tiles, currentIsland, selectedTile } = storeToRefs(gameStore);

const canvasContainerRef = ref<HTMLDivElement | null>(null);
let sceneManager: LandSceneManager | null = null;
const auth = useAuthStore();

const isFetchingData = ref(true);
const isSceneReady = ref(false);

const isCurrentUser = computed(() => auth.user?.id === props.userId);
const hasIsland = computed(() => !!currentIsland.value);

const showLoadingScreen = computed(() => {
    if (isFetchingData.value) return true;
    if (hasIsland.value && !isSceneReady.value) return true;
    return false;
});

const initData = async () => {
    if (!props.userId) return;

    isFetchingData.value = true;
    try {
        await gameStore.fetchIslandData(props.userId);
    } finally {
        isFetchingData.value = false;

        if (!currentIsland.value && sceneManager) {
            isSceneReady.value = true;
        }

        if (sceneManager && tiles.value) {
            sceneManager.updateTiles(tiles.value);
        }
    }
};

const handleHover = (x: number, z: number) => {
    if (!hasIsland.value) {
        gameStore.setHoveredTile(null);
        return;
    }

    if (isNaN(x) || isNaN(z)) {
        gameStore.setHoveredTile(null);
        return;
    }

    const existingTile = gameStore.getTileAt(x, z);

    if (gameStore.hoveredTile?.x !== x || gameStore.hoveredTile?.z !== z) {
        gameStore.setHoveredTile({
            x,
            z,
            id: existingTile?.id,
            isOwned: !!existingTile,
            isAdjacentToLand: sceneManager?.isAdjacentToLand(x, z, gameStore.tiles) || false
        });
    }
};

const handleClick = (x: number, z: number) => {
    if (!hasIsland.value) return;

    const isAlreadySelected =
        gameStore.selectedTile &&
        gameStore.selectedTile.x === x &&
        gameStore.selectedTile.z === z;

    if (isAlreadySelected) {
        gameStore.selectTile(null);
        sceneManager?.setSelection(null, null);
    } else {
        const existingTile = gameStore.getTileAt(x, z);

        gameStore.selectTile({
            x,
            z,
            id: existingTile?.id,
            isOwned: !!existingTile,
            isAdjacentToLand: sceneManager?.isAdjacentToLand(x, z, gameStore.tiles) || false
        });
        sceneManager?.setSelection(x, z);
    }
}

const handleStartAdventure = async () => {
    await gameStore.startAdventure();
    isSceneReady.value = false;
    await initData();
};

onMounted(async () => {
    await auth.fetchSessionUser();
    timeStore.start();

    if (!canvasContainerRef.value) return;

    sceneManager = new LandSceneManager({
        quality: props.quality,
        tileSize: props.tileSize,
        onHover: handleHover,
        onClick: handleClick,
        onAssetsLoaded: () => {
            setTimeout(() => {
                isSceneReady.value = true;
            }, 100);
        }
    });

    sceneManager.init(canvasContainerRef.value);

    initData();
});

onUnmounted(() => {
    if (sceneManager) sceneManager.dispose();
    timeStore.stop();
});

watch(() => props.userId, async (newId) => {
    if (newId) await initData();
});

watch(tiles, (newTiles) => {
    if (sceneManager) {
        sceneManager.updateTiles(newTiles);
    }
}, { deep: true });

watch(selectedTile, (newVal) => {
    if (!newVal) {
        sceneManager?.setSelection(null, null);
    }
});

</script>

<template>
    <div class="relative w-full h-full bg-slate-900 overflow-hidden">

        <div ref="canvasContainerRef" class="absolute inset-0 z-0 block"></div>

        <GameClock v-ui-block></GameClock>

        <transition name="fade">
            <div v-if="!showLoadingScreen && !hasIsland"
                class="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-sm z-40">

                <div class="card w-96 glass shadow-2xl border border-slate-700">
                    <div class="card-body text-center">
                        <div v-if="isCurrentUser">
                            <h2 class="card-title justify-center text-emerald-400">Get Started!</h2>
                            <p class="text-slate-300">Your BloomScape adventure starts here. Claim your island to start
                                building.</p>
                            <div class="card-actions justify-center mt-4">
                                <button @click="handleStartAdventure"
                                    class="btn btn-primary btn-soft rounded-2xl text-white relative z-50">
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

        <div v-if="showLoadingScreen"
            class="absolute inset-0 z-50 flex items-center justify-center bg-slate-900 z-[100]">
            <span class="loading loading-ring loading-lg text-emerald-500"></span>
            <span class="ml-4 text-emerald-500/80 font-mono text-sm animate-pulse">
                {{ isFetchingData ? 'Fetching Data...' : 'Rendering Island...' }}
            </span>
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