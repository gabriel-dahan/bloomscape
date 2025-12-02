<script setup lang="ts">
import { computed, onMounted } from 'vue';
import LandScene from '@/components/game/LandScene.vue';
import SideBar from '@/components/game/SideBar.vue';
import TopBar from '@/components/game/TopBar.vue';
import { useGameStore } from '@/stores/game';
import { useAuthStore } from '@/stores/auth';
import { useRoute } from 'vue-router';

const gameStore = useGameStore();

const auth = useAuthStore();
const route = useRoute();

onMounted(async () => {
    await auth.fetchSessionUser();
});

const currentUserId = computed(() => auth.user?.id || '');

const formatCoord = (n: number) => n.toString().padStart(2, '0');
</script>

<template>
    <div class="relative w-screen h-screen overflow-hidden bg-slate-900 text-slate-200 z-0">

        <LandScene v-if="currentUserId" quality="high" :user-id="auth.user.id" />

        <div v-else class="absolute inset-0 flex items-center justify-center text-slate-500 z-0">
            Chargement du profil...
        </div>

        <div class="absolute inset-0 z-10">
            <SideBar />
            <TopBar :user-tag="route.params.tag || auth.user.tag" />

            <transition name="slide-up">
                <div v-if="gameStore.hoveredTile" class="absolute bottom-8 right-8 pointer-events-auto">
                    <div class="card w-72 glass-card shadow-2xl border-t border-white/10">
                        <div class="card-body p-5">

                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <h2 class="card-title text-base font-bold" :class="{
                                        'text-emerald-300': gameStore.hoveredTile.id,
                                        'text-slate-400': !gameStore.hoveredTile.id
                                    }">
                                        {{ gameStore.hoveredTile.id ? 'Occupied Slot' : 'Barren Soil' }}
                                    </h2>
                                    <span class="text-xs font-mono text-slate-400">
                                        X:{{ formatCoord(gameStore.hoveredTile.x) }} | Z:{{
                                            formatCoord(gameStore.hoveredTile.z) }}
                                    </span>
                                </div>
                                <div class="badge badge-xs"
                                    :class="gameStore.hoveredTile.isOwned ? 'badge-success' : 'badge-ghost'">
                                    {{ gameStore.hoveredTile.isOwned ? 'OCCUPIED' : 'WILD' }}
                                </div>
                            </div>

                            <div class="text-xs text-slate-300 flex flex-col gap-2 my-2">
                                <p v-if="gameStore.hoveredTile.isOwned">
                                    Occupied Plot. Generates passive resources.
                                </p>
                                <p v-else>
                                    Arid soil. Ready for cultivation.
                                </p>
                            </div>

                            <div class="card-actions justify-end mt-2 pt-2 border-t border-white/5">
                                <button v-if="gameStore.hoveredTile.isOwned"
                                    class="btn btn-sm btn-primary w-full text-white shadow-lg shadow-emerald-500/20">
                                    Manage
                                </button>
                                <button v-else class="btn btn-sm btn-outline btn-accent w-full group">
                                    Buy <span class="group-hover:translate-x-1 transition-transform">→</span>
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
    /* Plus transparent pour l'effet moderne */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    /* Easing plus naturel */
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(40px) scale(0.95);
    opacity: 0;
}
</style>