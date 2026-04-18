<script setup lang="ts">
import { computed, defineComponent, h, markRaw, onMounted, ref, watch } from 'vue';
import LandScene from '@/components/game/LandScene.vue';
import SideBar from '@/components/game/SideBar.vue';
import TopBar from '@/components/game/TopBar.vue';
import { useGameStore } from '@/stores/game';
import { useAuthStore } from '@/stores/auth';
import { useRoute } from 'vue-router';
import { UserController } from '@/server/controllers/UserController';
import { useModalStore } from '@/stores/modal';
import TileManagerInModal from '@/components/game/modal_features/TileManagerInModal.vue';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';
import GameSoundtrack from '@/components/game/sound/GameSoundtrack.vue';
import TutorialWizard from '@/components/game/TutorialWizard.vue';
import { GameController } from '@/server/controllers/GameController';

const gameStore = useGameStore();
const auth = useAuthStore();
const route = useRoute();
const userId = ref<string | null>(null);
const landSceneRef = ref<any>(null);

const tutorialStep = computed({
    get: () => auth.user?.tutorialStep || 1,
    set: (val) => { if (auth.user) auth.user.tutorialStep = val }
});

const tutorialHighlightCoords = ref<{ x: number, y: number } | null>(null);
const tutorialHighlightId = ref<string>('');
const targetingTrigger = ref(0);

const currentTargetElement = computed(() => {
    targetingTrigger.value; // Explicit dependency
    if (!tutorialHighlightId.value) return null;
    return document.getElementById(tutorialHighlightId.value);
});

const handleTutorialExpansion = () => {
    if (auth.user) {
        auth.user.isFirstTimeUser = false;
        auth.user.tutorialStep = 7;
    }
    window.location.reload();
};

let tutorialLoopId: any = null;
const updateHighlighter = () => {
    if (!auth.user?.isFirstTimeUser) {
        tutorialHighlightCoords.value = null;
        tutorialHighlightId.value = '';
        if (tutorialLoopId) cancelAnimationFrame(tutorialLoopId);
        return;
    }

    if (tutorialStep.value === 1) {
        const loop = () => {
            if (tutorialStep.value !== 1) return;
            const coords = landSceneRef.value?.getProjectedCoords(0, 0);
            if (coords) tutorialHighlightCoords.value = coords;
            tutorialLoopId = requestAnimationFrame(loop);
        };
        if (tutorialLoopId) cancelAnimationFrame(tutorialLoopId);
        loop();
    } else if (tutorialStep.value === 2) {
        const loop = () => {
            if (tutorialStep.value !== 2) return;
            tutorialHighlightId.value = 'manage-btn';
            targetingTrigger.value++;
            tutorialLoopId = requestAnimationFrame(loop);
        };
        if (tutorialLoopId) cancelAnimationFrame(tutorialLoopId);
        loop();
    } else if (tutorialStep.value === 3) {
        const loop = () => {
            if (tutorialStep.value !== 3) return;
            
            const seedBtn = document.getElementById('seed-common_dandelion');
            const nameInput = document.getElementById('tutorial-flower-name-input') as HTMLInputElement | null;
            const plantBtn = document.getElementById('tutorial-plant-btn') as HTMLButtonElement | null;
            
            const isSeedSelected = seedBtn && seedBtn.classList.contains('ring-emerald-500/20');
            const isNameEmpty = nameInput && nameInput.value.trim() === '';
            const isPlantReady = plantBtn && !plantBtn.disabled;

            if (seedBtn && !isSeedSelected) {
                tutorialHighlightId.value = 'seed-common_dandelion';
            } else if (nameInput && isNameEmpty) {
                tutorialHighlightId.value = 'tutorial-flower-name-input';
            } else if (plantBtn && isPlantReady) {
                tutorialHighlightId.value = 'tutorial-plant-btn';
            } else if (nameInput) {
                tutorialHighlightId.value = 'tutorial-flower-name-input';
            } else if (seedBtn) {
		              tutorialHighlightId.value = 'seed-common_dandelion';
		          }
            
            targetingTrigger.value++;
            tutorialLoopId = requestAnimationFrame(loop);
        };
        if (tutorialLoopId) cancelAnimationFrame(tutorialLoopId);
        loop();
    } else if (tutorialStep.value === 4) {
        const loop = () => {
            if (tutorialStep.value !== 4) return;
            
            const waterBtn = document.getElementById('tutorial-water-btn') as HTMLButtonElement | null;
            const boostBtn = document.getElementById('tutorial-boost-btn') as HTMLButtonElement | null;
            const harvestBtn = document.getElementById('tutorial-harvest-btn') as HTMLButtonElement | null;

            if (harvestBtn) {
                // Harvest is paramount if it's ready
                tutorialHighlightId.value = 'tutorial-harvest-btn';
            } else if (waterBtn && !waterBtn.disabled) {
                // If not ready and needs water
                tutorialHighlightId.value = 'tutorial-water-btn';
            } else if (boostBtn) {
                // If watered but not ready, boost it
                tutorialHighlightId.value = 'tutorial-boost-btn';
            }

            targetingTrigger.value++;
            tutorialLoopId = requestAnimationFrame(loop);
        };
        if (tutorialLoopId) cancelAnimationFrame(tutorialLoopId);
        loop();
    } else if (tutorialStep.value === 5) {
        const loop = () => {
            if (tutorialStep.value !== 5) return;
            const modal = useModalStore();
            if (modal.isOpen) {
                // If inventory is open, highlight the modal container
                tutorialHighlightId.value = 'global-modal-container';
            } else {
                // Otherwise highlight the sidebar icon
                tutorialHighlightId.value = 'sidebar-inventory';
            }
            targetingTrigger.value++;
            tutorialLoopId = requestAnimationFrame(loop);
        };
        if (tutorialLoopId) cancelAnimationFrame(tutorialLoopId);
        loop();
    } else if (tutorialStep.value === 6) {
        const loop = () => {
            if (tutorialStep.value !== 6) return;
            tutorialHighlightId.value = 'tutorial-expand-btn';
            targetingTrigger.value++;
            tutorialLoopId = requestAnimationFrame(loop);
        };
        if (tutorialLoopId) cancelAnimationFrame(tutorialLoopId);
        loop();
    } else {
        if (tutorialLoopId) cancelAnimationFrame(tutorialLoopId);
        tutorialHighlightId.value = '';
        tutorialHighlightCoords.value = null;
    }
};

watch(() => gameStore.selectedTile, (newVal) => {
    if (newVal && auth.user?.isFirstTimeUser && tutorialStep.value === 1) {
        GameController.updateTutorialStep(2);
        tutorialStep.value = 2;
    }
    // Refresh targeting whenever selectedTile changes
    targetingTrigger.value++;
});

watch([tutorialStep, () => auth.user?.isFirstTimeUser], updateHighlighter, { immediate: true });

// Auto-advance Step 5 when inventory is closed
watch(() => useModalStore().isOpen, (isOpen, wasOpen) => {
    if (wasOpen && !isOpen && auth.user?.tutorialStep === 5) {
        GameController.updateTutorialStep(6);
        tutorialStep.value = 6;
    }
});

const activeTile = computed(() => gameStore.selectedTile || gameStore.hoveredTile);

const openTileManager = (x: number, z: number) => {
    if (!gameStore.currentIsland) return;

    const currentIslandId = gameStore.currentIsland.id;

    const componentWithProps = defineComponent({
        render() {
            return h(TileManagerInModal, {
                x: x,
                z: z,
                islandId: currentIslandId
            })
        }
    })

    const modal = useModalStore();
    
    if (auth.user?.isFirstTimeUser && tutorialStep.value === 2) {
        GameController.updateTutorialStep(3);
        tutorialStep.value = 3;
    }

    modal.open({
        title: 'Tile Manager',
        component: markRaw(componentWithProps),
        size: 'fullscreen',
        path: ROUTES.TILE_MANAGER.pathDyn(x, z),
        sideBarMargin: true,
    });
};

onMounted(async () => {
    await auth.fetchSessionUser();
    userId.value = route.params.tag
        ? (await UserController.getUserByTag(route.params.tag as string))?.user?.id || null
        : auth.user?.id || null;

    // Auto-resume Step 3 (Planting)
    if (auth.user?.isFirstTimeUser && tutorialStep.value === 3) {
        // Wait for island data to be ready
        watch(() => gameStore.currentIsland, (island) => {
            if (island) openTileManager(0, 0);
        }, { immediate: true });
    }
});

const formatCoord = (n: number) => n.toString().padStart(2, '0');

const playlist = [
    '/soundtrack1.mp3',
    '/soundtrack2.mp3'
]

</script>

<template>
    <GameSoundtrack :playlist="playlist" :min-silence="30000" :max-silence="120000" />

    <div class="relative w-screen h-screen overflow-hidden bg-slate-900 text-slate-200 z-0 overflow-hidden">

        <LandScene v-if="userId" ref="landSceneRef" quality="high" :user-id="userId" />

        <Teleport to="body" v-if="auth.user && auth.user.isFirstTimeUser && gameStore.currentIsland">
            <TutorialWizard v-model="tutorialStep"
                            :target-coords="tutorialHighlightCoords"
                            :target-element="currentTargetElement"
                            @expansion="handleTutorialExpansion" />
        </Teleport>

        <div v-if="userId && !gameStore.currentIsland" class="absolute inset-0 flex items-center justify-center text-slate-500 z-0 p-10">
            <p class="text-center">Rendering engine is out of fertilizer. If you just logged in, <b><button
                        onclick="window.location.reload()">reload</button></b> the page :)</p>
        </div>

        <div class="absolute inset-0 z-10 pointer-events-none">
            <SideBar />
            <TopBar :user-tag="(route.params.tag as string) || auth.user?.tag || ''" />

            <transition name="slide-up">
                <div v-if="activeTile"
                    class="fixed bottom-0 w-screen phone:w-fit phone:bottom-8 phone:right-8 pointer-events-auto">
                    <div class="phone:card w-full phone:w-72 glass-card shadow-2xl border-white/10">
                        <div class="card-body p-5">

                            <div class="flex justify-between items-start phone:mb-2">
                                <div class="flex gap-4 items-center phone:block">
                                    <h2 class="card-title text-base font-bold" :class="{
                                        'text-emerald-300': activeTile.isOwned,
                                        'text-slate-400': !activeTile.isOwned
                                    }">
                                        {{ activeTile.isOwned ? 'Occupied Slot' : 'International Waters' }}
                                    </h2>
                                    <span class="text-xs font-mono text-slate-400">
                                        X:{{ formatCoord(activeTile.x) }} | Z:{{ formatCoord(activeTile.z) }}
                                    </span>
                                </div>
                                <div class="badge badge-xs"
                                    :class="activeTile.isOwned ? 'badge-success' : 'badge-ghost'">
                                    {{ activeTile.isOwned ? 'OWNED' : 'WILD' }}
                                </div>
                            </div>

                            <div class="text-xs text-slate-300 flex flex-col gap-2 my-2 hidden phone:block">
                                <p v-if="activeTile.isOwned">
                                    Occupied Land.
                                    <span v-if="gameStore.selectedEntity?.createdAt">
                                        Founded on {{ new Date(gameStore.selectedEntity.createdAt).toLocaleDateString()
                                        }}.
                                    </span>
                                </p>
                                <p v-else>
                                    Wild waters. Expand your territory here.
                                </p>
                            </div>

                            <div class="card-actions justify-end mt-2 pt-4 border-white/5"
                                v-if="gameStore.selectedTile">

                                <button v-if="activeTile.isOwned"
                                    id="manage-btn"
                                    class="btn btn-sm btn-primary w-full text-white shadow-lg shadow-emerald-500/20"
                                    @click="openTileManager(activeTile.x, activeTile.z)">
                                    Manage
                                </button>

                                <button v-else-if="!activeTile.isOwned && activeTile.isAdjacentToLand"
                                    @click="gameStore.buyTile(activeTile.x, activeTile.z)"
                                    :disabled="gameStore.isLoading"
                                    class="btn btn-sm btn-outline btn-accent w-full group">

                                    <span v-if="gameStore.isLoading">Processing...</span>
                                    <span v-else>
                                        Buy Plot <span class="group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </button>

                                <button v-else-if="!activeTile.isOwned" disabled
                                    class="btn btn-sm btn-disabled w-full opacity-50 cursor-not-allowed">
                                    Too far from land
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </transition>

        </div>
    </div>
</template>

<style scoped>
.glass-card {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(40px) scale(0.95);
    opacity: 0;
}
</style>