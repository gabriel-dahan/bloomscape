<script setup lang="ts">
import { computed, defineComponent, h, markRaw, onMounted, ref } from 'vue';
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

const gameStore = useGameStore();
const auth = useAuthStore();
const route = useRoute();
const userId = ref<string | null>(null);

onMounted(async () => {
    await auth.fetchSessionUser();
    userId.value = route.params.tag
        ? (await UserController.getUserByTag(route.params.tag as string)).user.id
        : auth.user?.id;
});

const formatCoord = (n: number) => n.toString().padStart(2, '0');
const activeTile = computed(() => gameStore.selectedTile || gameStore.hoveredTile);

</script>

<template>
    <div class="relative w-screen h-screen overflow-hidden bg-slate-900 text-slate-200 z-0 overflow-hidden">

        <LandScene v-if="userId" quality="high" :user-id="userId" />

        <div v-else class="absolute inset-0 flex items-center justify-center text-slate-500 z-0">
            <p>Rendering engine is out of fertilizer. If you just logged in, <b><button
                        onclick="window.location.reload()">reload</button></b> the page :)</p>
        </div>

        <div class="absolute inset-0 z-10 pointer-events-none">
            <SideBar />
            <TopBar :user-tag="route.params.tag || auth.user?.tag || ''" />

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
                                    class="btn btn-sm btn-primary w-full text-white shadow-lg shadow-emerald-500/20"
                                    @click="() => {
                                        const componentWithProps = defineComponent({
                                            render() {
                                                return h(TileManagerInModal, {
                                                    x: activeTile.x,
                                                    z: activeTile.z,
                                                    islandId: gameStore.currentIsland.id
                                                })
                                            }
                                        })

                                        const modal = useModalStore();
                                        modal.open({
                                            title: 'Tile Manager',
                                            component: markRaw(componentWithProps),
                                            size: 'large',
                                            path: ROUTES.TILE_MANAGER.pathDyn(activeTile.x, activeTile.z),
                                            sideBarMargin: true,
                                        });
                                    }">
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