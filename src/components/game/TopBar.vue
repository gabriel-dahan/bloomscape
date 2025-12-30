<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { remult } from 'remult';
import { useUIStore } from '@/stores/ui';
import { User } from '@/shared';
import { UserController } from '@/server/controllers/UserController';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';
import { useChatStore } from '@/stores/chat';

// --- PROPS ---
const props = defineProps<{
    userTag: string
}>();

const chat = useChatStore()

// --- STATE ---
const displayedUser = ref<User | null>(null);
const isLoading = ref(true);

// --- COMPUTED ---
// Génère un avatar cohérent basé sur le Tag de l'utilisateur
const avatarUrl = computed(() => {
    const seed = displayedUser.value?.tag || 'default';
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4`;
});

// Simule un nom de secteur basé sur l'ID (Juste pour le lore, ou à remplacer par une vraie data plus tard)
const sectorName = computed(() => {
    if (!displayedUser.value) return 'Unknown';
    const idSlice = displayedUser.value.id.slice(0, 4).toUpperCase();
    return `SEC-${idSlice}`;
});

// --- METHODS ---
const fetchUserData = async () => {
    if (!props.userTag) return;

    isLoading.value = true;
    try {
        const { user } = await UserController.getUserByTag(props.userTag);
        displayedUser.value = user || null;
    } finally {
        isLoading.value = false;
    }
};

// --- LIFECYCLE ---
onMounted(() => {
    fetchUserData();
});

// Recharge si l'ID change (navigation entre profils)
watch(() => props.userTag, () => {
    fetchUserData();
});
</script>

<template>
    <div v-ui-block
        class="fixed top-0 left-0 w-full phone:h-fit p-4 pointer-events-none flex justify-start sm:justify-center md:justify-end md:pr-8">

        <div
            class="pointer-events-auto glass-panel rounded-full px-6 py-2 flex items-center gap-6 shadow-2xl shadow-black/40 transition-all duration-300">

            <div class="flex items-center gap-2">
                <div class="tooltip tooltip-bottom" data-tip="Messages">
                    <button class="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-white hover:bg-white/10"
                        @click="chat.toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="h-8 w-px bg-white/10"></div>

            <div class="flex items-center gap-3 cursor-pointer group">
                <div class="text-right hidden md:block min-w-[80px]">
                    <div v-if="!isLoading"
                        class="text-xs font-bold text-gray-200 group-hover:text-emerald-400 transition-colors">
                        <RouterLink :to="ROUTES.USER_PROFILE.pathDyn(displayedUser?.tag)">
                            {{ displayedUser?.tag || 'Unknown' }}
                        </RouterLink>
                    </div>
                    <div v-else class="h-3 w-20 bg-white/10 rounded animate-pulse mb-1 ml-auto"></div>

                    <div v-if="!isLoading" class="text-[10px] text-gray-500">
                        Level {{ displayedUser?.level || 1 }}
                    </div>
                    <div v-else class="h-2 w-10 bg-white/10 rounded animate-pulse ml-auto"></div>
                </div>

                <div class="avatar" :class="{ 'online': !isLoading }">
                    <div
                        class="w-5 rounded-full ring ring-emerald-500 ring-offset-slate-900 ring-offset-2 bg-slate-800">
                        <img v-if="!isLoading" :src="avatarUrl" alt="Avatar" class="transition-opacity duration-500" />
                        <div v-else class="w-full h-full bg-slate-700 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.glass-panel {
    background: rgba(30, 41, 59, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-pulse-once {
    animation: fadeIn 0.5s ease-out forwards;
}
</style>