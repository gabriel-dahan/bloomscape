<script setup lang="ts">
import LandScene from '@/components/game/LandScene.vue';
import SideBar from '@/components/game/SideBar.vue';
import TopBar from '@/components/game/TopBar.vue';
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();
</script>

<template>
    <!-- Main Layout Container -->
    <div class="relative w-screen h-screen overflow-hidden bg-slate-900 text-slate-200">

        <!-- 1. Layer: 3D Scene (Background) -->
        <!-- z-0 ensures it stays behind interactions -->
        <LandScene quality="high" />

        <!-- 2. Layer: UI Overlay -->
        <!-- pointer-events-none allows clicking through empty spaces to the 3D canvas -->
        <div class="absolute inset-0 z-10 pointer-events-none">

            <!-- Layout Components -->
            <SideBar />
            <TopBar />

            <!-- Example: Contextual Floating Panel based on Game Store -->
            <!-- Only shows up if hovering a tile -->
            <transition name="slide-up">
                <div v-if="gameStore.hoveredTile" class="absolute bottom-8 right-8 pointer-events-auto">
                    <div class="card w-64 glass-card shadow-xl border border-emerald-500/30">
                        <div class="card-body p-4">
                            <h2 class="card-title text-sm text-emerald-400">
                                Plot #{{ gameStore.hoveredTile.id }}
                            </h2>
                            <div class="text-xs text-gray-400 flex flex-col gap-1">
                                <p>Coordinates: [{{ gameStore.hoveredTile.x }}, {{ gameStore.hoveredTile.z }}]</p>
                                <p>Status: <span
                                        :class="gameStore.hoveredTile.owner ? 'text-red-400' : 'text-emerald-400'">{{
                                            gameStore.hoveredTile.owner ? 'Occupied' : 'Available' }}</span></p>
                            </div>
                            <div class="card-actions justify-end mt-2">
                                <button class="btn btn-xs btn-primary btn-outline">Inspect</button>
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
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(10px);
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>